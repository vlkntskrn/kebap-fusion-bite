#!/usr/bin/env node
/**
 * Defne'nin Evi verilerini Godot projesine aktarır: godot/data/house.json ve godot/art/ altındaki görseller.
 * Veriler web oyununun kendi kodundan (src/house.ts godotExport) alınır; iki sürüm aynı kuralları kullanır.
 *
 *   npx vite --port 5199 &        (geliştirme sunucusu)
 *   node scripts/godot_export.cjs [http://localhost:5199/]
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const ITEMS = path.join(ROOT, 'src', 'assets', 'items');
const OUT = path.join(ROOT, 'godot');
const URL = process.argv[2] || 'http://localhost:5199/';

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto(URL);
  await p.waitForTimeout(1500);
  const data = await p.evaluate(async () => {
    localStorage.clear();
    const H = await import('/src/house.ts');
    return H.godotExport();
  });
  await b.close();

  // Görseller: eşyalar ve görünümleri (_yan, _arka, _otur, _yat), duvar/zemin dokuları, oda simgeleri, manzara.
  const files = fs.readdirSync(ITEMS);
  const byCode = new Map(files.map((f) => [f.replace(/\.(webp|png|jpg)$/, ''), f]));
  const want = new Set();
  for (const id of Object.keys(data.items)) for (const s of ['', '_yan', '_arka', '_otur', '_yat']) if (byCode.has(id + s)) want.add(id + s);
  for (const c of byCode.keys()) if (/^(duvar_\d+|zemin_\d+|ui_\w+|harita_\w+|bahce_manzara|havuz_su|uygulama_ikonu)$/.test(c)) want.add(c);
  const artDir = path.join(OUT, 'art', 'items');
  fs.mkdirSync(artDir, { recursive: true });
  const keep = new Set();
  for (const c of want) {
    const f = byCode.get(c);
    keep.add(f);
    const src = path.join(ITEMS, f);
    const dst = path.join(artDir, f);
    if (!fs.existsSync(dst) || fs.statSync(dst).size !== fs.statSync(src).size) fs.copyFileSync(src, dst);
  }
  // Artık kullanılmayan görseller (ve Godot'un .import dosyaları) silinir.
  for (const f of fs.readdirSync(artDir)) {
    const base = f.replace(/\.import$/, '');
    if (!keep.has(base)) fs.unlinkSync(path.join(artDir, f));
  }
  data.files = Object.fromEntries([...keep].map((f) => [f.replace(/\.(webp|png|jpg)$/, ''), f]));
  fs.mkdirSync(path.join(OUT, 'data'), { recursive: true });
  fs.writeFileSync(path.join(OUT, 'data', 'house.json'), JSON.stringify(data));
  console.log(`${Object.keys(data.items).length} eşya, ${data.rooms.length} oda, ${keep.size} görsel -> godot/`);
})();
