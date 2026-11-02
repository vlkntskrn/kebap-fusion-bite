#!/usr/bin/env python3
"""
Eksik görselleri Gemini toplu istek (Batch) ile üretir — tek tek istemekten yaklaşık yarı fiyatına.

  python3 -I scripts/gen_batch.py submit <klasör> [--only gorunum,poz,...] [--codes a,b,c]
      -> istekleri parçalara bölüp gönderir, iş adlarını <klasör>/batches.json'a yazar
  python3 -I scripts/gen_batch.py status <klasör>
  python3 -I scripts/gen_batch.py fetch <klasör>
      -> biten işlerin görsellerini <klasör>/<kod>.png olarak kaydeder

Referans resimler 512 px JPEG gönderilir (oyundaki resimler zaten en çok 448 px).
Anahtar ortamın network secrets ayarında; istekler x-goog-api-key başlığını kendiliğinden alır.
"""
import base64
import io
import json
import sys
import urllib.request
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
import gen_assets as G  # noqa: E402
from gemini_image import DEFAULT_MODEL  # noqa: E402

BASE = "https://generativelanguage.googleapis.com/v1beta"
MAX_BYTES = 15_000_000  # satır içi toplu istek sınırı 20 MB; pay bırakılır


def call(method: str, url: str, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method, headers={"Content-Type": "application/json"})
    try:
        return json.load(urllib.request.urlopen(req, timeout=300))
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code}: {e.read()[:500]!r}")


def small_ref(path: Path) -> str:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    side = int(max(w, h) * 1.2)
    bg = Image.new("RGB", (side, side), "white")
    bg.paste(im, ((side - w) // 2, (side - h) // 2), im)
    bg = bg.resize((512, 512), Image.LANCZOS)
    buf = io.BytesIO()
    bg.save(buf, "JPEG", quality=92)
    return base64.b64encode(buf.getvalue()).decode()


def build(code: str):
    j = G.job(code)
    if not j:
        return None
    prompt, refs, aspect = j
    parts = [{"text": prompt}] + [{"inline_data": {"mime_type": "image/jpeg", "data": small_ref(Path(r))}} for r in refs if r]
    cfg = {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": aspect}}
    return {"request": {"contents": [{"parts": parts}], "generationConfig": cfg}, "metadata": {"key": code}}


def submit(out: Path, codes, model=DEFAULT_MODEL):
    reqs, skipped = [], []
    for c in codes:
        r = build(c)
        (reqs.append(r) if r else skipped.append(c))
    chunks, cur, size = [], [], 0
    for r in reqs:
        n = len(json.dumps(r))
        if cur and size + n > MAX_BYTES:
            chunks.append(cur)
            cur, size = [], 0
        cur.append(r)
        size += n
    if cur:
        chunks.append(cur)
    state = json.loads((out / "batches.json").read_text()) if (out / "batches.json").exists() else []
    for i, ch in enumerate(chunks):
        body = {"batch": {"display_name": f"hece-hece-{len(state) + 1}", "input_config": {"requests": {"requests": ch}}}}
        r = call("POST", f"{BASE}/models/{model}:batchGenerateContent", body)
        name = r.get("name") or r.get("metadata", {}).get("name")
        state.append({"name": name, "codes": [x["metadata"]["key"] for x in ch], "model": model})
        print(f"gönderildi: {name} ({len(ch)} görsel)")
        (out / "batches.json").write_text(json.dumps(state, indent=1))
    if skipped:
        print("atlandı (referans/tanım yok):", skipped)


def find(obj, key):
    """İç içe yanıtta bir alanı arar."""
    if isinstance(obj, dict):
        if key in obj:
            return obj[key]
        for v in obj.values():
            f = find(v, key)
            if f is not None:
                return f
    elif isinstance(obj, list):
        for v in obj:
            f = find(v, key)
            if f is not None:
                return f
    return None


def status(out: Path, quiet=False):
    state = json.loads((out / "batches.json").read_text())
    res = []
    for b in state:
        r = call("GET", f"{BASE}/{b['name']}")
        st = find(r, "state") or ("DONE" if r.get("done") else "?")
        res.append((b, r, st))
        if not quiet:
            print(b["name"], st, len(b["codes"]), "görsel")
    return res


def fetch(out: Path):
    got, failed = 0, []
    for b, r, st in status(out, quiet=True):
        if "SUCCEEDED" not in str(st) and not r.get("done"):
            print(b["name"], "henüz bitmedi:", st)
            continue
        inl = find(r, "inlinedResponses")
        if isinstance(inl, dict):
            inl = inl.get("inlinedResponses", [])
        if not inl:
            print(b["name"], "yanıt bulunamadı; ham yanıt kaydedildi")
            (out / f"{b['name'].replace('/', '_')}.json").write_text(json.dumps(r)[:200000])
            continue
        for k, item in enumerate(inl):
            code = (item.get("metadata") or {}).get("key") or (b["codes"][k] if k < len(b["codes"]) else None)
            resp = item.get("response") or {}
            img = None
            for c in resp.get("candidates", []):
                for p in c.get("content", {}).get("parts", []):
                    d = p.get("inline_data") or p.get("inlineData")
                    if d:
                        img = base64.b64decode(d["data"])
                        break
            if code and img:
                (out / f"{code}.png").write_bytes(img)
                got += 1
            else:
                failed.append(code or f"#{k}")
    print(f"kaydedilen: {got}; görselsiz dönen: {failed}")


def main():
    cmd, out = sys.argv[1], Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    args = sys.argv[3:]
    if cmd == "submit":
        if "--codes" in args:
            codes = args[args.index("--codes") + 1].split(",")
        else:
            only = args[args.index("--only") + 1].split(",") if "--only" in args else list(G.GROUPS)
            codes = [c for g in only for c in G.GROUPS[g]() if not G.have(c)]
        print(len(codes), "görsel gönderilecek")
        submit(out, codes)
    elif cmd == "status":
        status(out)
    elif cmd == "fetch":
        fetch(out)


if __name__ == "__main__":
    main()
