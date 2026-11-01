/**
 * Kilit açma sınavı: Defne kilitli bir eşyaya ya da kıyafete dokununca 2 okuma sorusu gelir.
 * İkisini de doğru yaparsa kilit açılır. Sorular sadece öğrendiği harflerle kurulan kelimelerden seçilir.
 *  - "Oku": yazılı kelimeyi okur, doğru resme dokunur.
 *  - "Heceleri bul": resme bakar, doğru yazılmış kelimeye dokunur.
 */
import { wordsFor, key, Word } from './content';
import { progress, commit, record, shuffle } from './state';
import { h, colored, wiggle, bounce, confetti } from './ui';
import { hasVoice, play, wait, stopVoice } from './voice';
import { talk, bindTalkButtons } from './talk';
import { sfx } from './sfx';
import { imgTag, wordCode } from './assets';

const QUESTIONS = 2;
const pic = (w: Word) => imgTag(wordCode(w.text), w.emoji, 'word-img');

/** Aynı resmi paylaşan kelimeler (nine/nene) aynı soruda yan yana gelmesin. */
function pool(): Word[] {
  const seen = new Set<string>();
  return shuffle(wordsFor(new Set(progress.known))).filter((w) => !seen.has(w.emoji) && seen.add(w.emoji));
}

export function readingChallenge(onPass: () => void) {
  const words = pool();
  if (words.length < 3) {
    // Henüz yeterli kelime yok (ilk harfler): kilidi doğrudan aç.
    onPass();
    return;
  }
  stopVoice();
  const box = h(`<div class="challenge"><div class="ch-card">
    <button class="ch-close" aria-label="Kapat">✕</button>
    <div class="ch-top"><span class="ch-lock">🔒</span><div class="ch-dots">${Array.from({ length: QUESTIONS }, () => '<i></i>').join('')}</div><button class="talk-btn" data-talk="kilitSoru">🔊</button></div>
    <div class="ch-body"></div></div></div>`);
  document.body.appendChild(box);
  bindTalkButtons(box);
  const body = box.querySelector<HTMLElement>('.ch-body')!;
  const dots = box.querySelectorAll('.ch-dots i');
  let qi = 0;
  let closed = false;
  const close = () => {
    closed = true;
    stopVoice();
    box.remove();
  };
  box.querySelector('.ch-close')!.addEventListener('click', close);

  const fail = async (target: Word) => {
    await wait(900);
    if (closed) return;
    body.innerHTML = `<div class="ch-fail">${pic(target)}<div class="ch-word">${colored(target.text)}</div>
      <button class="big-btn mint ch-retry">🔁</button></div>`;
    body.querySelector('.ch-retry')!.addEventListener('click', () => {
      qi = 0;
      dots.forEach((d) => d.classList.remove('done'));
      ask();
    });
    if (hasVoice(key.word(target.text))) await play(key.word(target.text));
    await talk('kilitTekrar');
  };

  const pass = async () => {
    sfx.win();
    confetti();
    body.innerHTML = `<div class="ch-pass">🔓</div>`;
    await talk('kilitAcildi');
    if (closed) return;
    close();
    onPass();
  };

  function ask() {
    const list = pool();
    const target = list[qi % list.length];
    const others = list.filter((w) => w !== target).slice(0, 2);
    const choices = shuffle([target, ...others]);
    const readType = qi % 2 === 0;
    body.innerHTML = readType
      ? `<div class="ch-q" data-t="${target.text}"><div class="ch-word big">${colored(target.text)}</div>
         <div class="ch-choices">${choices.map((w) => `<button class="card ch-opt" data-w="${w.text}">${pic(w)}</button>`).join('')}</div></div>`
      : `<div class="ch-q" data-t="${target.text}"><button class="ch-picture">${pic(target)}</button>
         <div class="ch-choices">${choices.map((w) => `<button class="card ch-opt word" data-w="${w.text}">${colored(w.text)}</button>`).join('')}</div></div>`;
    void talk(readType ? 'kilitSoru' : 'kilitResim');
    box.querySelector<HTMLElement>('[data-talk]')!.dataset.talk = readType ? 'kilitSoru' : 'kilitResim';
    body.querySelector('.ch-picture')?.addEventListener('click', () => {
      if (hasVoice(key.word(target.text))) void play(key.word(target.text));
    });
    let answered = false;
    body.querySelectorAll<HTMLElement>('.ch-opt').forEach((b) =>
      b.addEventListener('click', async () => {
        if (answered) return;
        answered = true;
        stopVoice();
        const ok = b.dataset.w === target.text;
        record(progress, key.word(target.text), ok);
        commit();
        if (ok) {
          b.classList.add('right');
          bounce(b);
          sfx.right();
          dots[qi].classList.add('done');
          if (hasVoice(key.word(target.text))) await play(key.word(target.text));
          await wait(350);
          if (closed) return;
          qi++;
          if (qi >= QUESTIONS) void pass();
          else ask();
        } else {
          b.classList.add('wrong');
          wiggle(b);
          sfx.soft();
          body.querySelector(`.ch-opt[data-w="${target.text}"]`)?.classList.add('right');
          void fail(target);
        }
      }),
    );
  }
  ask();
}
