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
SETS = json.loads((OUT.parent / "sets.json").read_text())
PARTS = OUT.parent.parent.parent / "parcalar"  # sayısı tutmayan sayfaların parçaları (elle adlandırmak için)


def save_item(name: str, img: Image.Image) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob(f"{name}.*"):
        old.unlink()
    box = img.getbbox()
    if box:
        img = img.crop(box)
    img.thumbnail((448, 448), Image.LANCZOS)
    dest = OUT / f"{name}.webp"
    img.save(dest, "WEBP", quality=84, method=6)
    return dest


def split_sheet(set_code: str, src: Path):
    """Çıkartma sayfasını ayrı eşyalara böler; sayı tutarsa sırayla adlandırır."""
    codes = SETS[set_code]
    img = Image.open(src)
    img.thumbnail((1400, 1400), Image.LANCZOS)
    img = remove_background(img)
    w, h = img.size
    step = 4
    gw, gh = w // step + 1, h // step + 1
    alpha = img.getchannel("A").load()
    grid = [[False] * gw for _ in range(gh)]
    for y in range(0, h, step):
        for x in range(0, w, step):
            if alpha[x, y] > 20:
                grid[y // step][x // step] = True
    # İnce parçaları (balon ipi, sap) birleştirmek için 2 hücre genişlet.
    R = 2
    dil = [[False] * gw for _ in range(gh)]
    for gy in range(gh):
        for gx in range(gw):
            if grid[gy][gx]:
                for dy in range(-R, R + 1):
                    for dx in range(-R, R + 1):
                        yy, xx = gy + dy, gx + dx
                        if 0 <= yy < gh and 0 <= xx < gw:
                            dil[yy][xx] = True
    seen = [[False] * gw for _ in range(gh)]
    boxes = []
    for gy in range(gh):
        for gx in range(gw):
            if dil[gy][gx] and not seen[gy][gx]:
                q = deque([(gx, gy)])
                seen[gy][gx] = True
                x0 = x1 = gx
                y0 = y1 = gy
                n = 0
                while q:
                    cx, cy = q.popleft()
                    n += 1
                    x0, x1, y0, y1 = min(x0, cx), max(x1, cx), min(y0, cy), max(y1, cy)
                    for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                        if 0 <= nx < gw and 0 <= ny < gh and dil[ny][nx] and not seen[ny][nx]:
                            seen[ny][nx] = True
                            q.append((nx, ny))
                if n > gw * gh * 0.0008:
                    boxes.append(((x0 - R) * step, (y0 - R) * step, min(w, (x1 + R + 1) * step), min(h, (y1 + R + 1) * step), n))
    # Fazla parça varsa: küçük parçaları (yıldız, parıltı, nota) en yakın büyük eşyaya kat.
    k = len(codes)
    if len(boxes) > k:
        big = sorted(boxes, key=lambda b: -b[4])[:k]
        small_ok = all(b[4] < 0.45 * min(x[4] for x in big) for b in boxes if b not in big)
        if small_ok:
            merged = [list(b[:4]) for b in big]
            for b in boxes:
                if b in big:
                    continue
                cx, cy = (b[0] + b[2]) / 2, (b[1] + b[3]) / 2
                j = min(range(k), key=lambda i: ((merged[i][0] + merged[i][2]) / 2 - cx) ** 2 + ((merged[i][1] + merged[i][3]) / 2 - cy) ** 2)
                m = merged[j]
                merged[j] = [min(m[0], b[0]), min(m[1], b[1]), max(m[2], b[2]), max(m[3], b[3])]
            boxes = [tuple(m) for m in merged]
    boxes = [b[:4] for b in boxes]
    # Satır satır, soldan sağa sırala.
    boxes.sort(key=lambda b: (b[1] + b[3]) / 2)
    rows, row = [], []
    for b in boxes:
        if row and (b[1] + b[3]) / 2 - (row[-1][1] + row[-1][3]) / 2 > h * 0.12:
            rows.append(row)
            row = []
        row.append(b)
    if row:
        rows.append(row)
    ordered = [b for r in rows for b in sorted(r, key=lambda b: b[0])]
    crops = [img.crop((max(0, b[0]), max(0, b[1]), b[2], b[3])) for b in ordered]
    if len(crops) == len(codes):
        for code, c in zip(codes, crops):
            print(f"  {set_code} -> {save_item(code, c).name}")
    else:
        PARTS.mkdir(exist_ok=True)
        for i, c in enumerate(crops):
            c.save(PARTS / f"{set_code}_parca{i + 1:02d}.png")
        print(f"  {set_code}: {len(codes)} bekleniyordu, {len(crops)} parça bulundu -> parcalar/ (elle adlandırılacak)")


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


def prepare(name: str, src: Path):
    if name in SETS:
        return split_sheet(name, src)
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob(f"{name}.*"):
        old.unlink()
    img = Image.open(src)
    if name.startswith(("duvar_", "zemin_")) or name == "havuz_su":
        # Döşeme: arka plan silinmez, kırpılmaz, kare kalır.
        img = img.convert("RGB").resize((512, 512), Image.LANCZOS)
        dest = OUT / f"{name}.webp"
        img.save(dest, "WEBP", quality=86, method=6)
        return dest
    if name.startswith("arka_") or name == "bahce_manzara":
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
    # Harita parçaları ekranı boydan boya kaplar: daha büyük kalsın.
    m = 1200 if name.startswith("harita_") else 448
    img.thumbnail((m, m), Image.LANCZOS)
    dest = OUT / f"{name}.webp"
    img.save(dest, "WEBP", quality=84, method=6)
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
            r = prepare(name, f)
            if r:
                print(f"{f.name} -> {r.name}")
    if unknown:
        print("Kodu bulunamayanlar:", ", ".join(unknown))
