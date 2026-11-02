#!/usr/bin/env python3
"""
Gemini görsel modeliyle görsel üretir ya da verilen referans resmi düzenler.
Anahtar ortamın network secrets ayarında: generativelanguage.googleapis.com isteklerine
x-goog-api-key başlığını ortam kendisi ekler (burada anahtar okunmaz).

Kullanım (modül olarak):  from gemini_image import generate
  png_bytes_list, usage = generate(prompt, refs=[Path(...)], model="gemini-3.1-flash-image", aspect="1:1")
"""
import base64
import io
import json
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image

API = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
DEFAULT_MODEL = "gemini-3.1-flash-image"


def ref_png(path: Path, size: int = 1024) -> bytes:
    """Şeffaf resmi beyaz kare zemine ortalar (referans için)."""
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    side = int(max(w, h) * 1.2)
    bg = Image.new("RGB", (side, side), "white")
    bg.paste(im, ((side - w) // 2, (side - h) // 2), im)
    bg = bg.resize((size, size), Image.LANCZOS)
    buf = io.BytesIO()
    bg.save(buf, "PNG")
    return buf.getvalue()


def generate(prompt: str, refs=(), model: str = DEFAULT_MODEL, aspect: str | None = None, tries: int = 3):
    parts = [{"text": prompt}]
    for r in refs:
        data = ref_png(Path(r)) if not isinstance(r, bytes) else r
        parts.append({"inline_data": {"mime_type": "image/png", "data": base64.b64encode(data).decode()}})
    cfg = {"responseModalities": ["IMAGE"]}
    if aspect:
        cfg["imageConfig"] = {"aspectRatio": aspect}
    body = json.dumps({"contents": [{"parts": parts}], "generationConfig": cfg}).encode()
    last = None
    for k in range(tries):
        req = urllib.request.Request(API.format(model=model), data=body, headers={"Content-Type": "application/json"})
        try:
            r = json.load(urllib.request.urlopen(req, timeout=240))
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}: {e.read()[:300]!r}"
            if e.code in (429, 500, 503):
                time.sleep(8 * (k + 1))
                continue
            raise RuntimeError(last)
        except Exception as e:  # ağ hatası
            last = str(e)
            time.sleep(5)
            continue
        imgs = []
        for c in r.get("candidates", []):
            for p in c.get("content", {}).get("parts", []):
                d = p.get("inline_data") or p.get("inlineData")
                if d:
                    imgs.append(base64.b64decode(d["data"]))
        if imgs:
            return imgs, r.get("usageMetadata", {})
        last = "görsel dönmedi: " + json.dumps(r)[:300]
    raise RuntimeError(last)
