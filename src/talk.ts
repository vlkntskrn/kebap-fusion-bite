import { TALK, TalkId, PRAISES, key, fill } from './content';
import { hasVoice, play, playUrl, speak, wait } from './voice';
import { progress } from './state';
import { sfx } from './sfx';

export const talkText = (id: TalkId) => fill(TALK[id], progress.name);

/** Derlemede doğal kadın sesiyle hazırlanan talimat dosyaları (public/ses). */
let bundled: { name: string; files: Record<string, string> } | null = null;
const base = import.meta.env.BASE_URL;
fetch(`${base}ses/index.json`)
  .then((r) => (r.ok ? r.json() : null))
  .then((j) => (bundled = j))
  .catch(() => {});
const bundledUrl = (k: string) => (bundled && bundled.name === progress.name && bundled.files[k] ? `${base}ses/${bundled.files[k]}` : null);

/** Talimatı söyler: ebeveynin kaydı > hazır doğal ses > (açıksa) cihazın Türkçe sesi. */
export async function talk(id: TalkId): Promise<void> {
  if (hasVoice(key.talk(id))) return play(key.talk(id));
  const u = bundledUrl(key.talk(id));
  if (u && progress.tts) return playUrl(u);
  if (progress.tts) return speak(talkText(id));
}

export async function praise() {
  sfx.right();
  await wait(250);
  const recorded = PRAISES.map((_, i) => key.praise(i)).filter(hasVoice);
  if (recorded.length) return play(recorded[Math.floor(Math.random() * recorded.length)]);
  const pre = PRAISES.map((_, i) => bundledUrl(key.praise(i))).filter((x): x is string => !!x);
  if (pre.length && progress.tts) return playUrl(pre[Math.floor(Math.random() * pre.length)]);
  if (progress.tts) return speak(fill(PRAISES[Math.floor(Math.random() * PRAISES.length)], progress.name));
}

/** Kök eleman içindeki tüm 🔊 düğmelerini bağlar. */
export function bindTalkButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('[data-talk]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 300 });
      void talk(b.dataset.talk as TalkId);
    }),
  );
}
