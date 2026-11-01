import { TALK, TalkId, PRAISES, key, fill } from './content';
import { hasVoice, play, speak, wait } from './voice';
import { progress } from './state';
import { sfx } from './sfx';

export const talkText = (id: TalkId) => fill(TALK[id], progress.name);

/** Talimatı söyler: önce ebeveynin kaydı, yoksa (açıksa) telefonun Türkçe sesi. */
export async function talk(id: TalkId): Promise<void> {
  if (hasVoice(key.talk(id))) return play(key.talk(id));
  if (progress.tts) return speak(talkText(id));
}

export async function praise() {
  sfx.right();
  await wait(250);
  const recorded = PRAISES.map((_, i) => key.praise(i)).filter(hasVoice);
  if (recorded.length) return play(recorded[Math.floor(Math.random() * recorded.length)]);
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
