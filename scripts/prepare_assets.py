#!/usr/bin/env python3
"""
Firefly (ya da başka bir araçla) üretilmiş görselleri oyuna hazırlar:
  - kenarlardan başlayarak düz beyaz/açık arka planı şeffaf yapar,
  - boş kenarları kırpar (eşya alt kenara oturur),
  - en uzun kenarı 512 piksele indirir,
  - src/assets/items/<ad>.png olarak kaydeder.

Kullanım:
  python3 -I scripts/prepare_assets.py yatak=/yol/gorsel1.jpg disko2=/yol/gorsel2.png
  python3 -I scripts/prepare_assets.py /yol/klasor_ya_da_dosyalar...   (kod dosya adından bulunur)

Kod dosya adının başında aranır (Firefly isteğin ilk kelimelerini dosya adına yazar):
  "Firefly yatak — a single bed … 1234.jpg"  ->  yatak
Arka planlar (arka_*) ve uygulama ikonu silinmeden, geniş boyutta kaydedilir.
"""
import json
import re
import sys
from collections import deque
from pathlib import Path

from PIL import Image

OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "items"
TOL = 28  # arka plana ne kadar yakın renkler silinsin


def remove_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    # Arka plan rengi: dört köşenin ortalaması.
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bg = tuple(sum(c[i] for c in corners) // 4 for i in range(3))

    def close(c):
        return c[3] < 10 or all(abs(c[i] - bg[i]) <= TOL for i in range(3))

    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))
    while q:
        x, y = q.popleft()
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        if not close(px[x, y]):
            continue
        px[x, y] = (0, 0, 0, 0)
        if x > 0:
            q.append((x - 1, y))
        if x < w - 1:
            q.append((x + 1, y))
        if y > 0:
            q.append((x, y - 1))
        if y < h - 1:
            q.append((x, y + 1))
    return img


CODES = json.loads((OUT.parent / "codes.json").read_text())


def detect(filename: str):
    """Dosya adının başındaki kodu bulur (en uzun eşleşme)."""
    norm = re.sub(r"[^a-z0-9]+", "_", Path(filename).stem.lower()).strip("_")
    norm = re.sub(r"^(adobe_)?firefly_", "", norm)
    best = None
    for code in CODES:
        if norm == code or norm.startswith(code + "_"):
            if best is None or len(code) > len(best):
                best = code
    return best


def prepare(name: str, src: Path) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob(f"{name}.*"):
        old.unlink()
    img = Image.open(src)
    if name.startswith("arka_"):
        img = img.convert("RGB")
        img.thumbnail((1600, 1600), Image.LANCZOS)
        dest = OUT / f"{name}.jpg"
        img.save(dest, quality=84, optimize=True)
        return dest
    if name == "uygulama_ikonu":
        img = img.convert("RGB").resize((512, 512), Image.LANCZOS)
        dest = OUT / f"{name}.png"
        img.save(dest, optimize=True)
        return dest
    img = remove_background(img)
    box = img.getbbox()
    if box:
        img = img.crop(box)
    img.thumbnail((512, 512), Image.LANCZOS)
    dest = OUT / f"{name}.png"
    img.save(dest, optimize=True)
    return dest


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    files = []
    for arg in sys.argv[1:]:
        name, sep, path = arg.partition("=")
        if sep:
            files.append((name, Path(path)))
            continue
        p = Path(arg)
        for f in sorted(p.iterdir()) if p.is_dir() else [p]:
            if f.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp"):
                files.append((detect(f.name), f))
    unknown = [f.name for n, f in files if not n]
    for name, f in files:
        if name:
            if name not in CODES:
                print(f"UYARI: {name} listede yok")
            print(f"{f.name} -> {prepare(name, f).name}")
    if unknown:
        print("Kodu bulunamayanlar:", ", ".join(unknown))
