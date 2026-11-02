#!/usr/bin/env python3
"""
ASSETS.md'deki görselleri Gemini ile üretir ve ham hâllerini bir klasöre kaydeder.
Ardından:  python3 -I scripts/prepare_assets.py <klasör>  ile oyuna eklenir.

  python3 -I scripts/gen_assets.py <çıktı-klasörü> kod1 kod2 ...
  python3 -I scripts/gen_assets.py <çıktı-klasörü> --missing [--limit N] [--only gorunum,poz,ic,yuzey,yapi]

Yan/arka görünümler ve pozlar oyundaki mevcut resim referans verilerek düzenletilir (aynı eşya/karakter kalır).
Diğerlerinde benzer bir oyun resmi yalnızca stil referansı olarak eklenir.
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import asset_catalog as C  # noqa: E402
from gemini_image import generate  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
ITEMS = ROOT / "src" / "assets" / "items"


def have(code: str) -> bool:
    return any(ITEMS.glob(f"{code}.*"))


def src(code: str) -> Path | None:
    for p in ITEMS.glob(f"{code}.*"):
        return p
    return None


STYLE_NOTE = (" Use the attached picture only as a style reference: match its drawing style, outline thickness, colors and "
              "level of detail, but draw the new subject described above, not the subject of the reference.")


def job(code: str):
    """(istek, referanslar, en-boy) ya da None."""
    for c, base, _tr, _en, ch in C.VIEWS:
        if c == code:
            if not have(base):
                return None
            return C.ref_prompt(code, code.rsplit("_", 1)[1], "character" if ch else "piece of furniture"), [src(base)], "1:1"
    for c, _tr, _en in C.POSES:
        if c == code:
            base = code.rsplit("_", 1)[0]
            if not have(base):
                return None
            return C.ref_prompt(code, code.rsplit("_", 1)[1], "character"), [src(base)], "4:3" if code.endswith("_yat") else "1:1"
    for c, _tr, en in C.INTERIORS:
        if c == code:
            return C.prompt(code, en, C.STYLE_BG), [], "4:3"
    for c, _tr, en in C.WALLPAPERS + C.FLOORTILES:
        if c == code:
            ref = next((src(x) for x in ("duvar_01", "zemin_01") if have(x)), None)
            p = f"{code} — 2D flat vector cartoon seamless pattern, NOT a photo: {en}. {C.STYLE_TILE}"
            return (p + STYLE_NOTE if ref else p), [ref] if ref else [], "1:1"
    for c, _tr, en in C.WINDOWS + C.DOORS:
        if c == code:
            ref = next((src(x) for x in ("pencere_02", "kapi_01") if have(x)), None)
            p = C.prompt(code, en, C.STYLE_ITEM)
            return (p + STYLE_NOTE if ref else p), [ref] if ref else [], "1:1"
    return None


GROUPS = {
    "gorunum": lambda: [c for c, *_ in C.VIEWS],
    "poz": lambda: [c for c, *_ in C.POSES],
    "ic": lambda: [c for c, *_ in C.INTERIORS],
    "yuzey": lambda: [c for c, *_ in C.WALLPAPERS + C.FLOORTILES],
    "yapi": lambda: [c for c, *_ in C.WINDOWS + C.DOORS],
}


def main():
    out = Path(sys.argv[1])
    out.mkdir(parents=True, exist_ok=True)
    args = sys.argv[2:]
    limit = None
    only = list(GROUPS)
    if "--limit" in args:
        limit = int(args[args.index("--limit") + 1])
    if "--only" in args:
        only = args[args.index("--only") + 1].split(",")
    if "--missing" in args:
        codes = [c for g in only for c in GROUPS[g]() if not have(c)]
    else:
        codes = [a for a in args if not a.startswith("--") and not a.isdigit() and "," not in a]
    if limit:
        codes = codes[:limit]
    log = out / "uretim.jsonl"
    total = 0
    for code in codes:
        if (out / f"{code}.png").exists():
            continue
        j = job(code)
        if not j:
            print(f"{code}: atlandı (tanım ya da referans yok)")
            continue
        prompt, refs, aspect = j
        try:
            imgs, usage = generate(prompt, refs, aspect=aspect)
        except Exception as e:
            print(f"{code}: HATA {e}")
            continue
        (out / f"{code}.png").write_bytes(imgs[0])
        tok = usage.get("candidatesTokenCount", 0)
        total += tok
        with log.open("a") as f:
            f.write(json.dumps({"code": code, "usage": usage}) + "\n")
        print(f"{code}: tamam ({tok} çıktı jetonu)", flush=True)
    print(f"toplam çıktı jetonu: {total}")


if __name__ == "__main__":
    main()
