/**
 * Yüklenen görseller (Firefly vb.). src/assets/items/<kod>.png|webp|jpg varsa oyun onu kullanır,
 * yoksa mevcut emoji/çizim görünür. Kodların listesi: ASSETS.md.
 */
const IMAGES = import.meta.glob('./assets/items/*.{png,webp,jpg}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

export function img(id: string): string | undefined {
  return IMAGES[`./assets/items/${id}.png`] ?? IMAGES[`./assets/items/${id}.webp`] ?? IMAGES[`./assets/items/${id}.jpg`];
}

/** Görsel varsa <img>, yoksa verilen yedek HTML. */
export function imgTag(id: string, fallback: string, cls = 'ui-img'): string {
  const u = img(id);
  return u ? `<img class="${cls}" src="${u}" alt="" loading="lazy" decoding="async" draggable="false"/>` : fallback;
}

const TR: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' };
export const wordCode = (w: string) => 'kelime_' + [...w.toLocaleLowerCase('tr')].map((c) => TR[c] ?? c).join('');

/** Ekrandaki emoji butonlar: görseli yüklendiyse otomatik değişir. */
const EMOJI: [string, string][] = [
  ['⬅', 'ui_geri'],
  ['🔊', 'ui_hoparlor'],
  ['▶', 'ui_basla'],
  ['🏠', 'ui_anasayfa'],
  ['🔁', 'ui_tekrar'],
  ['🎁', 'ui_hediye'],
  ['⭐', 'ui_yildiz'],
  ['🔗', 'ui_birlestir'],
  ['👍', 'ui_dogru'],
  ['🗑️', 'ui_cop'],
  ['🧱', 'ui_duvar'],
  ['🟫', 'ui_zemin'],
  ['🪟', 'ui_pencere'],
];
const ACTIVE = EMOJI.filter(([, id]) => img(id));

export function swapEmoji(html: string): string {
  if (!ACTIVE.length) return html;
  for (const [e, id] of ACTIVE) html = html.split(e + '️').join(e).split(e).join(imgTag(id, e));
  return html;
}

/** Arka plan ve uygulama ikonu görselleri varsa uygula. */
export function applyGlobalAssets() {
  const bg = img('arka_ana');
  if (bg) document.documentElement.style.setProperty('--app-bg', `url("${bg}")`);
  const stage = img('arka_sahne');
  if (stage) document.documentElement.style.setProperty('--stage-bg', `url("${stage}")`);
  const icon = img('uygulama_ikonu');
  if (icon) document.querySelector('link[rel="apple-touch-icon"]')?.setAttribute('href', icon);
}
