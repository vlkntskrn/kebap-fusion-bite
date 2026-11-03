#!/usr/bin/env python3
"""
Karakter resimlerinde giydirme noktalarını bulur ve src/assets/anchors.json'a yazar:
  eye  : [sol göz x, y, sağ göz x, y]   (resmin genişlik/yüksekliğine göre 0..1)
  top  : başın tepesi (y)
  foot : [sol ayak x, sağ ayak x, taban y]
  hand : [sol el x, y, sağ el x, y]
Gözler: başın içindeki iki büyük, dolgun, koyu leke. Bulunamazsa o resim atlanır (giydirme o resimde görünmez).
Kullanım: python3 -I scripts/anchors.py
"""
import json
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ITEMS = ROOT / "src" / "assets" / "items"
OUT = ROOT / "src" / "assets" / "anchors.json"
PEOPLE = ["kiz1", "kiz2", "kiz3", "kiz4", "kiz5", "kiz6", "kiz7", "oglan1", "oglan2", "oglan3", "bebek1", "bebek2",
          "anne", "baba", "nine", "dede", "ogretmen"]


def blobs(mask: np.ndarray):
    """4-bağlantılı bileşenler: [(alan, x0, y0, x1, y1, cx, cy)]."""
    h, w = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    out = []
    ys, xs = np.nonzero(mask)
    for y0, x0 in zip(ys, xs):
        if seen[y0, x0]:
            continue
        q = deque([(y0, x0)])
        seen[y0, x0] = True
        pts = []
        while q:
            y, x = q.popleft()
            pts.append((y, x))
            for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not seen[ny, nx]:
                    seen[ny, nx] = True
                    q.append((ny, nx))
        p = np.array(pts)
        out.append((len(pts), p[:, 1].min(), p[:, 0].min(), p[:, 1].max(), p[:, 0].max(), p[:, 1].mean(), p[:, 0].mean()))
    return out


def anchors(path: Path, dark_lum: int = 75):
    im = np.array(Image.open(path).convert("RGBA")).astype(int)
    h, w = im.shape[:2]
    alpha = im[:, :, 3] > 40
    rows = np.where(alpha.any(axis=1))[0]
    top = rows.min()
    bottom = rows.max()
    lum = 0.3 * im[:, :, 0] + 0.59 * im[:, :, 1] + 0.11 * im[:, :, 2]
    dark = alpha & (lum < dark_lum)
    # Göz arama bölgesi: başın üst yarısı (boyun %45'inden yukarısı), ortadaki %80.
    region = np.zeros_like(dark)
    y1 = top + int((bottom - top) * 0.45)
    region[top:y1, int(w * 0.1):int(w * 0.9)] = True
    cands = []
    for a, x0, y0, x1, y1b, cx, cy in blobs(dark & region):
        bw, bh = x1 - x0 + 1, y1b - y0 + 1
        fill = a / (bw * bh)
        if a < 12 or fill < 0.5 or bw > w * 0.15 or bh > h * 0.12 or bh < 3:
            continue
        cands.append((a, cx, cy, bw, bh))
    best = None
    for i in range(len(cands)):
        for j in range(i + 1, len(cands)):
            a1, x1_, y1_, *_ = cands[i]
            a2, x2_, y2_, *_ = cands[j]
            dx = abs(x1_ - x2_)
            if not (w * 0.08 < dx < w * 0.5) or abs(y1_ - y2_) > h * 0.025 or max(a1, a2) > 2.2 * min(a1, a2):
                continue
            # İki göz resmin ortasına yakın ve simetrik olmalı.
            mid = (x1_ + x2_) / 2
            score = abs(mid - w / 2) / w + abs(y1_ - y2_) / h - min(a1, a2) / (w * h) * 50
            if best is None or score < best[0]:
                best = (score, (x1_, y1_), (x2_, y2_))
    if not best:
        return None
    (lx, ly), (rx, ry) = sorted([best[1], best[2]])
    # Ayaklar: alttaki %6'lık şeritte sol ve sağ küme.
    band = alpha[bottom - max(3, int((bottom - top) * 0.06)):bottom + 1]
    cols = np.where(band.any(axis=0))[0]
    mid = (lx + rx) / 2
    left = cols[cols < mid]
    right = cols[cols >= mid]
    foot = [float(left.mean() / w) if len(left) else 0.4, float(right.mean() / w) if len(right) else 0.6, float(bottom / h)]
    # Eller: gövdenin orta bandında en sol ve en sağ noktalar.
    # Eller: göz hizasının altında gövdenin her iki yanındaki en dış nokta; el, o dış çizgide en aşağıdaki nokta.
    hy0, hy1 = int((ly + ry) / 2 + (bottom - top) * 0.12), top + int((bottom - top) * 0.82)
    L, Rr = [], []
    for y in range(hy0, hy1):
        xs = np.where(alpha[y])[0]
        if len(xs):
            L.append((y, xs.min()))
            Rr.append((y, xs.max()))
    minL = min(x for _y, x in L)
    maxR = max(x for _y, x in Rr)
    tol = w * 0.035
    lyh = max(y for y, x in L if x <= minL + tol)
    ryh = max(y for y, x in Rr if x >= maxR - tol)
    lxh = min(x for y, x in L if y == lyh)
    rxh = max(x for y, x in Rr if y == ryh)
    # Baş: tepe ile göz arasında en geniş satır (saç dahil) -> şapka/taç ölçüsü.
    ey_ = int((ly + ry) / 2)
    hw_best = (0, 0, 0)
    for y in range(top, ey_ + 1):
        xs = np.where(alpha[y])[0]
        if len(xs) and xs.max() - xs.min() > hw_best[0]:
            hw_best = (xs.max() - xs.min(), xs.min(), xs.max())
    # Ayak genişliği: alt şeritteki her kümenin genişliği.
    fw = max((left.max() - left.min()) if len(left) else 0, (right.max() - right.min()) if len(right) else 0)
    # Omuz: göz ile el arası; boyun altında gövdenin en dar-sonra-genişleyen yeri yerine basitçe göz-el ortası.
    r = lambda v, d: round(float(v) / d, 4)  # noqa: E731
    return {"head": [r(hw_best[1], w), r(hw_best[2], w)], "footw": r(fw, w),
            "ar": round(h / w, 4), "eye": [r(lx, w), r(ly, h), r(rx, w), r(ry, h)], "top": r(top, h), "foot": [round(x, 4) for x in foot],
            "hand": [r(lxh, w), r(lyh, h), r(rxh, w), r(ryh, h)]}


def main():
    out = {}
    for code in PEOPLE:
        for suffix in ("", "_otur"):
            p = next(iter(ITEMS.glob(f"{code}{suffix}.*")), None)
            if not p:
                continue
            # Gözlüklü karakterlerde (nine) gözler daha açık tonda çıkabiliyor: eşik yükseltilerek yeniden denenir.
            a = anchors(p) or anchors(p, 110)
            if a:
                out[code + suffix] = a
            else:
                print("göz bulunamadı:", code + suffix)
    OUT.write_text(json.dumps(out, indent=1) + "\n")
    print(len(out), "resim ->", OUT)


if __name__ == "__main__":
    main()
