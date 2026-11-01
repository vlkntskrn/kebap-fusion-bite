#!/usr/bin/env python3
"""
Firefly (ya da başka bir araçla) üretilmiş görselleri oyuna hazırlar:
  - kenarlardan başlayarak düz beyaz/açık arka planı şeffaf yapar,
  - boş kenarları kırpar (eşya alt kenara oturur),
  - en uzun kenarı 512 piksele indirir,
  - src/assets/items/<ad>.png olarak kaydeder.

Kullanım:
  python3 -I scripts/prepare_assets.py yatak=/yol/gorsel1.jpg disko2=/yol/gorsel2.png
"""
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


def prepare(name: str, src: Path) -> Path:
    img = remove_background(Image.open(src))
    box = img.getbbox()
    if box:
        img = img.crop(box)
    img.thumbnail((512, 512), Image.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{name}.png"
    img.save(dest, optimize=True)
    return dest


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    for arg in sys.argv[1:]:
        name, _, path = arg.partition("=")
        print(prepare(name, Path(path)))
