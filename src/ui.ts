import { isVowel } from './content';
import { stopVoice } from './voice';

const app = document.getElementById('app')!;

export function h(html: string): HTMLElement {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
}

export function show(html: string): HTMLElement {
  stopVoice();
  document.body.classList.remove('allow-portrait');
  const el = h(html);
  app.replaceChildren(el);
  window.scrollTo(0, 0);
  return el;
}

/** Sesli harfler kırmızı, sessiz harfler mavi (sınıflarda kullanılan renklendirme). */
export function colored(text: string): string {
  return [...text].map((ch) => `<span class="${isVowel(ch) ? 'v' : 'c'}">${ch}</span>`).join('');
}

export function on(root: HTMLElement, act: string, fn: (el: HTMLElement) => void) {
  root.querySelectorAll<HTMLElement>(`[data-act="${act}"]`).forEach((el) => el.addEventListener('click', () => fn(el)));
}

export function wiggle(el: Element) {
  el.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(0)' }],
    { duration: 380 },
  );
}

export function bounce(el: Element) {
  el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 400, easing: 'ease-out' });
}

export function confetti() {
  const box = h('<div class="confetti"></div>');
  const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#c77dff', '#ff8fd8'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('i');
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = `${Math.random() * 0.4}s`;
    p.style.animationDuration = `${1.4 + Math.random()}s`;
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2800);
}

/** Ekrandaki talimatı tekrar dinletmek için başlığın yanındaki hoparlör. */
export const talkBtn = (id: string) => `<button class="talk-btn" data-talk="${id}" aria-label="Dinle">🔊</button>`;
