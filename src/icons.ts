/** Okuyamayan çocuk için anlaşılır, büyük simgeler (özgün çizimler). */
import { THINGS } from './house-items';
import { img } from './assets';

const svg = (vb: string, body: string) =>
  `<svg class="icon" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg"><g stroke="#3d3553" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${body}</g></svg>`;

/** Oda düğmeleri: o odanın en tanıdık eşyası. */
export function roomIcon(room: string): string {
  const u = img(`ui_oda_${room}`);
  if (u) return `<img class="ui-img" src="${u}" alt="" draggable="false"/>`;
  const id = ({ yatak: 'yatak', mutfak: 'ocak', banyo: 'kuvet', salon: 'kanepe', havuz: 'flamingo', oyun: 'v_oyuncak_05', bebekodasi: 'bebek1', giyinme: 'kiyafetaski', atolye: 'yazitahtasi', muzik: 'piyano', kutuphane: 'kitaplik' } as Record<string, string>)[room];
  // Odanın simgesi yoksa o odanın tanıdık bir eşyasının resmi.
  const im = id ? img(id) : undefined;
  if (im) return `<img class="ui-img" src="${im}" alt="" draggable="false"/>`;
  const t = THINGS[id];
  // Koyu kontur: beyaz küvet gibi açık renkli eşyalar da beyaz düğmede görünsün.
  const ol = `<defs><filter id="iol" x="-10%" y="-10%" width="120%" height="120%"><feMorphology in="SourceAlpha" operator="dilate" radius="3" result="d"/><feFlood flood-color="#3d3553"/><feComposite in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  return t ? `<svg class="icon" viewBox="${t.vb}" xmlns="http://www.w3.org/2000/svg">${ol}<g filter="url(#iol)">${t.svg}</g></svg>` : '';
}

/** Bebek giydirme kategorileri. */
export const CAT_ICONS: Record<string, string> = {
  kiyafet: svg('0 0 60 60', `<path d="M22 6 L30 12 L38 6 L44 14 L38 20 L50 54 H10 L22 20 L16 14 Z" fill="#ff8fc0"/><path d="M22 20 H38" fill="none"/>`),
  sac: svg('0 0 60 60', `<path d="M10 34 Q8 6 30 6 Q52 6 50 34 L52 54 H40 L40 30 Q30 22 20 30 L20 54 H8 Z" fill="#8e5cff"/><circle cx="30" cy="34" r="12" fill="#f6c9a4"/>`),
  ten: svg('0 0 60 60', `<circle cx="30" cy="30" r="22" fill="#e3a777"/><circle cx="22" cy="28" r="2.5" fill="#3d3553" stroke="none"/><circle cx="38" cy="28" r="2.5" fill="#3d3553" stroke="none"/><path d="M24 38 Q30 43 36 38" fill="none"/>
    <circle cx="48" cy="48" r="7" fill="#ffe0c7"/><circle cx="12" cy="48" r="7" fill="#8d5a3b"/>`),
  taki: svg('0 0 60 60', `<path d="M8 46 L12 16 L22 30 L30 10 L38 30 L48 16 L52 46 Z" fill="#ffd93d"/><circle cx="30" cy="36" r="4" fill="#ff5d8f"/>`),
  elde: svg('0 0 60 60', `<path d="M26 34 L18 54" stroke-width="7"/><circle cx="32" cy="22" r="14" fill="#ff5d8f"/>`),
  ayakkabi: svg('0 0 60 60', `<path d="M6 40 Q6 26 18 26 L30 30 Q44 32 52 38 Q56 46 48 48 H10 Q6 48 6 40 Z" fill="#ff8fd8"/><circle cx="28" cy="34" r="3" fill="#fff"/>`),
  hayvan: svg('0 0 60 60', `<path d="M12 22 L14 6 L26 16 Z M48 22 L46 6 L34 16 Z" fill="#f2c14e"/><circle cx="30" cy="32" r="20" fill="#f2c14e"/><circle cx="23" cy="30" r="2.5" fill="#3d3553" stroke="none"/><circle cx="37" cy="30" r="2.5" fill="#3d3553" stroke="none"/><path d="M27 38 Q30 41 33 38" fill="none"/>`),
  fon: svg('0 0 60 60', `<rect x="4" y="6" width="52" height="48" rx="4" fill="#7b5cff"/><path d="M4 6 H22 Q16 30 22 54 H4 Z M56 6 H38 Q44 30 38 54 H56 Z" fill="#c9a6ff"/><path d="M30 18 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1Z" fill="#ffe680"/>`),
};

/** Ev modları: taşı, boya, tasarla. */
export const MODE_ICONS: Record<string, string> = {
  tasi: svg('0 0 60 60', `<path d="M30 6 L30 54 M6 30 L54 30" stroke-width="5"/><path d="M30 4 L22 14 H38 Z M30 56 L22 46 H38 Z M4 30 L14 22 V38 Z M56 30 L46 22 V38 Z" fill="#5fd39a"/>`),
  boya: svg('0 0 60 60', `<rect x="34" y="4" width="12" height="30" rx="5" fill="#c98a5a" transform="rotate(35 40 19)"/><path d="M14 40 Q20 30 30 34 Q34 44 24 50 Q12 56 6 52 Q14 48 14 40 Z" fill="#ff5d8f"/>`),
  tasarla: svg('0 0 60 60', `<rect x="6" y="6" width="48" height="30" fill="#ffd1e3"/><path d="M14 14 h4 M26 14 h4 M38 14 h4 M20 24 h4 M32 24 h4 M44 24 h4" stroke="#ff8fc0" stroke-width="4"/>
    <rect x="6" y="36" width="48" height="18" fill="#e3b98a"/><path d="M6 45 H54 M22 36 V45 M40 45 V54" fill="none"/>`),
};
