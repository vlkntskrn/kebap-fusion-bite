import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import './style.css';
import { ALPHABET, isVowel, wordsFor, syllablesFor, key, PRAISES, INSTRUCTIONS, STICKERS, Word } from './content';
import {
  initVoices,
  hasVoice,
  voiceCount,
  saveVoice,
  deleteVoice,
  play,
  stopVoice,
  wait,
  startRecording,
  releaseMic,
  exportVoices,
  importVoices,
  Recording,
} from './voice';
import { loadProgress, saveProgress, record, weightedPick, shuffle } from './state';
import { sfx } from './sfx';

const APP = 'Hece Hece';
const app = document.getElementById('app')!;
const progress = loadProgress();
const commit = () => saveProgress(progress);
const knownSet = () => new Set(progress.known);

type GameKind = 'bul' | 'birlestir' | 'kur' | 'oku';
const ROUND = 6;

/* ------------------------------------------------------------- helpers */

function h(html: string): HTMLElement {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
}

function show(html: string): HTMLElement {
  stopVoice();
  const el = h(html);
  app.replaceChildren(el);
  window.scrollTo(0, 0);
  return el;
}

/** Sesli harfler kırmızı, sessiz harfler mavi (sınıflarda kullanılan renklendirme). */
function colored(text: string): string {
  return [...text].map((ch) => `<span class="${isVowel(ch) ? 'v' : 'c'}">${ch}</span>`).join('');
}

function on(root: HTMLElement, act: string, fn: (el: HTMLElement) => void) {
  root.querySelectorAll<HTMLElement>(`[data-act="${act}"]`).forEach((el) => el.addEventListener('click', () => fn(el)));
}

function wiggle(el: Element) {
  el.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(0)' }],
    { duration: 380 },
  );
}

function bounce(el: Element) {
  el.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 400, easing: 'ease-out' });
}

async function praise() {
  sfx.right();
  const have = PRAISES.map((_, i) => key.praise(i)).filter(hasVoice);
  await wait(250);
  if (have.length) await play(have[Math.floor(Math.random() * have.length)]);
}

function confetti() {
  const box = h('<div class="confetti"></div>');
  const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#c77dff'];
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

/* ---------------------------------------------------------- availability */

const items = {
  bul: () => ALPHABET.filter((l) => progress.known.includes(l) && hasVoice(key.letter(l))),
  birlestir: () =>
    syllablesFor(knownSet()).filter((s) => hasVoice(key.syllable(s)) && [...s].every((ch) => hasVoice(key.letter(ch)))),
  kur: () => wordsFor(knownSet()).filter((w) => w.syllables.length >= 2 && hasVoice(key.word(w.text))),
  oku: () => wordsFor(knownSet()).filter((w) => hasVoice(key.word(w.text))),
};
const MIN: Record<GameKind, number> = { bul: 2, birlestir: 1, kur: 1, oku: 1 };

const GAMES: { kind: GameKind; icon: string; title: string; sub: string; color: string }[] = [
  { kind: 'bul', icon: '👂', title: 'Sesi Bul', sub: 'Duy, harfi bul', color: 'coral' },
  { kind: 'birlestir', icon: '🔗', title: 'Sesleri Birleştir', sub: 'n + a = na', color: 'sky' },
  { kind: 'kur', icon: '🧩', title: 'Kelime Kur', sub: 'Heceleri diz', color: 'mint' },
  { kind: 'oku', icon: '📖', title: 'Oku', sub: 'Oku, dinle, kontrol et', color: 'lemon' },
];

/* ---------------------------------------------------------------- home */

function showHome() {
  const anyVoice = voiceCount(progress.known.map(key.letter)) > 0;
  const root = show(`
    <div class="screen home">
      <header class="bar">
        <div class="pill">⭐ ${progress.stars}</div>
        <button class="pill btn-album" data-act="album">🎁 ${progress.stickers.length}/${STICKERS.length}</button>
      </header>
      <div class="title">
        <div class="blocks">${['he', 'ce'].map((s) => `<span class="block">${colored(s)}</span>`).join('')}</div>
        <h1>${APP}</h1>
        <div class="known">${progress.known.map((l) => `<span class="${isVowel(l) ? 'v' : 'c'}">${l}</span>`).join('')}</div>
      </div>
      ${
        anyVoice
          ? ''
          : `<div class="notice"><b>Anne / baba için:</b> Oyunlar sizin sesinizle çalışır. Önce aşağıdaki <b>Ebeveyn</b> bölümünden harf seslerini kaydedin.</div>`
      }
      <div class="games">
        ${GAMES.map((g) => {
          const ready = items[g.kind]().length >= MIN[g.kind];
          return `<button class="game-card ${g.color} ${ready ? '' : 'locked'}" data-act="game" data-kind="${g.kind}">
            <span class="g-icon">${ready ? g.icon : '🔒'}</span>
            <span class="g-title">${g.title}</span>
            <span class="g-sub">${ready ? g.sub : 'Ses kaydı gerekli'}</span>
          </button>`;
        }).join('')}
      </div>
      <button class="parent-btn" data-act="parent">👨‍👩‍👧 Ebeveyn</button>
    </div>`);
  on(root, 'game', (el) => {
    sfx.unlock();
    const kind = el.dataset.kind as GameKind;
    if (items[kind]().length >= MIN[kind]) startGame(kind);
    else {
      wiggle(el);
      sfx.soft();
    }
  });
  on(root, 'parent', showGate);
  on(root, 'album', showAlbum);
}

/* --------------------------------------------------------------- album */

function showAlbum() {
  sfx.tap();
  const root = show(`
    <div class="screen">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><h2>Çıkartmalarım</h2><span></span></header>
      <p class="center muted">Her oyunu bitirince yeni bir çıkartma kazanırsın!</p>
      <div class="album">
        ${STICKERS.map((s) => (progress.stickers.includes(s) ? `<span class="sticker">${s}</span>` : `<span class="sticker empty">?</span>`)).join('')}
      </div>
    </div>`);
  on(root, 'home', showHome);
  root.querySelectorAll('.sticker:not(.empty)').forEach((el) => el.addEventListener('click', () => bounce(el)));
}

/* --------------------------------------------------------------- games */

interface Run {
  kind: GameKind;
  index: number;
  stars: number;
  last?: unknown;
}
let run: Run | null = null;

function gameShell(title: string, body: string): HTMLElement {
  const r = run!;
  const dots = Array.from({ length: ROUND }, (_, i) => `<i class="${i < r.index ? 'done' : i === r.index ? 'now' : ''}"></i>`).join('');
  const root = show(`
    <div class="screen game">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><div class="dots">${dots}</div><div class="pill">⭐ ${progress.stars}</div></header>
      <h2 class="prompt">${title}</h2>
      ${body}
    </div>`);
  on(root, 'home', () => {
    run = null;
    showHome();
  });
  return root;
}

async function startGame(kind: GameKind) {
  run = { kind, index: 0, stars: 0 };
  nextQuestion();
  if (hasVoice(key.intro(kind))) {
    await wait(300);
    await play(key.intro(kind));
  }
}

function nextQuestion() {
  if (!run) return;
  if (run.index >= ROUND) return showFinish();
  ({ bul: qBul, birlestir: qBirlestir, kur: qKur, oku: qOku })[run.kind]();
}

function advance(firstTry: boolean) {
  if (!run) return;
  if (firstTry) {
    run.stars++;
    progress.stars++;
  }
  commit();
  run.index++;
  setTimeout(nextQuestion, 500);
}

/* ---- 1. Sesi bul: sesi duy, harfi seç */
function qBul() {
  const r = run!;
  const pool = items.bul();
  const target = weightedPick(pool, key.letter, progress, r.last as string);
  r.last = target;
  const others = shuffle(pool.filter((l) => l !== target)).slice(0, 2);
  const choices = shuffle([target, ...others]);
  let first = true;
  let busy = false;
  const root = gameShell(
    'Hangi sesi duydun?',
    `<button class="speaker" data-act="listen">🔊</button>
     <div class="choices n${choices.length}">
       ${choices.map((l) => `<button class="card letter" data-act="pick" data-v="${l}">${colored(l)}</button>`).join('')}
     </div>`,
  );
  const say = () => play(key.letter(target));
  on(root, 'listen', (el) => {
    bounce(el);
    void say();
  });
  on(root, 'pick', async (el) => {
    if (busy) return;
    busy = true;
    const v = el.dataset.v!;
    if (v === target) {
      el.classList.add('right');
      bounce(el);
      record(progress, key.letter(target), first);
      await praise();
      advance(first);
    } else {
      first = false;
      el.classList.add('wrong');
      wiggle(el);
      sfx.soft();
      // Seçtiği harfin sesini, ardından istenen sesi tekrar dinletir: ikisini karşılaştırsın.
      await wait(200);
      await play(key.letter(v));
      await wait(500);
      await say();
      busy = false;
    }
  });
  setTimeout(say, 350);
}

/* ---- 2. Sesleri birleştir: n + a → na, sonra "hangisini duydun?" */
function qBirlestir() {
  const r = run!;
  const pool = items.birlestir();
  const syl = weightedPick(pool, key.syllable, progress, r.last as string);
  r.last = syl;
  const [a, b] = [...syl];
  const heard = new Set<number>();
  let merging = false;
  const root = gameShell(
    'Harflere dokun, seslerini dinle.',
    `<div class="pair">
       <button class="card letter" data-act="letter" data-i="0">${colored(a)}</button>
       <span class="plus">+</span>
       <button class="card letter" data-act="letter" data-i="1">${colored(b)}</button>
     </div>
     <button class="big-btn sky hidden" data-act="merge">🔗 Birleştir!</button>`,
  );
  const mergeBtn = root.querySelector<HTMLElement>('[data-act=merge]')!;
  on(root, 'letter', async (el) => {
    if (merging) return;
    const i = Number(el.dataset.i);
    bounce(el);
    el.classList.add('heard');
    heard.add(i);
    await play(key.letter(i === 0 ? a : b));
    if (heard.size === 2 && !merging) mergeBtn.classList.remove('hidden');
  });
  on(root, 'merge', async () => {
    if (merging) return;
    merging = true;
    mergeBtn.remove();
    const pair = root.querySelector('.pair')!;
    // Önce yavaş yavaş: "n… a…", sonra kartlar birleşir: "na".
    const cards = pair.querySelectorAll('.card');
    cards[0].classList.add('lit');
    await play(key.letter(a), 0.85);
    cards[0].classList.remove('lit');
    cards[1].classList.add('lit');
    await play(key.letter(b), 0.85);
    cards[1].classList.remove('lit');
    pair.classList.add('merged');
    sfx.merge();
    await wait(450);
    pair.replaceWith(h(`<div class="merged-card card">${colored(syl)}</div>`));
    root.querySelector('.prompt')!.textContent = 'Birlikte okuyalım!';
    await play(key.syllable(syl));
    await wait(700);
    quiz();
  });

  // Kontrol: duyduğu heceyi, harfleri aynı ama sırası farklı olan heceden ayırt etsin (na / an).
  function quiz() {
    const rev = b + a;
    const alt = rev !== syl ? rev : shuffle(syllablesFor(knownSet()).filter((s) => s !== syl))[0];
    const choices = shuffle([syl, alt]);
    let first = true;
    let busy = false;
    const area = h(`<div class="quiz">
      <p class="sub-prompt">Hangisini duydun?</p>
      <button class="speaker small" data-act="again">🔊</button>
      <div class="choices n2">${choices.map((s) => `<button class="card syl" data-act="choose" data-v="${s}">${colored(s)}</button>`).join('')}</div>
    </div>`);
    root.querySelector('.merged-card')!.replaceWith(area);
    root.querySelector('.prompt')!.textContent = '';
    on(area, 'again', () => play(key.syllable(syl)));
    on(area, 'choose', async (el) => {
      if (busy) return;
      busy = true;
      if (el.dataset.v === syl) {
        el.classList.add('right');
        bounce(el);
        record(progress, key.syllable(syl), first);
        await praise();
        advance(first);
      } else {
        first = false;
        el.classList.add('wrong');
        wiggle(el);
        sfx.soft();
        await wait(300);
        await play(key.syllable(syl));
        busy = false;
      }
    });
    setTimeout(() => play(key.syllable(syl)), 300);
  }
}

/* ---- 3. Kelime kur: heceleri sırayla diz */
function qKur() {
  const r = run!;
  const pool = items.kur();
  const w = weightedPick(pool, (x: Word) => key.word(x.text), progress, r.last as Word);
  r.last = w;
  const extraPool = [...new Set(wordsFor(knownSet()).flatMap((x) => x.syllables))].filter((s) => !w.syllables.includes(s));
  const tiles = shuffle([...w.syllables, ...shuffle(extraPool).slice(0, 1)]);
  let placed = 0;
  let first = true;
  let busy = false;
  const root = gameShell(
    'Heceleri sırayla diz!',
    `<button class="picture" data-act="listen">${w.emoji}<span>🔊</span></button>
     <div class="slots">${w.syllables.map(() => `<span class="slot"></span>`).join('')}</div>
     <div class="tiles">${tiles.map((s, i) => `<button class="card tile" data-act="tile" data-i="${i}" data-v="${s}">${colored(s)}</button>`).join('')}</div>`,
  );
  const say = () => play(key.word(w.text));
  on(root, 'listen', (el) => {
    bounce(el);
    void say();
  });
  on(root, 'tile', async (el) => {
    if (busy || el.classList.contains('used')) return;
    busy = true;
    const v = el.dataset.v!;
    if (v === w.syllables[placed]) {
      const slot = root.querySelectorAll('.slot')[placed];
      slot.innerHTML = colored(v);
      slot.classList.add('filled');
      bounce(slot);
      el.classList.add('used');
      sfx.tap();
      if (hasVoice(key.syllable(v))) await play(key.syllable(v));
      placed++;
      if (placed === w.syllables.length) {
        root.querySelector('.slots')!.classList.add('complete');
        await wait(300);
        await say();
        record(progress, key.word(w.text), first);
        await praise();
        advance(first);
        return;
      }
    } else {
      first = false;
      wiggle(el);
      sfx.soft();
    }
    busy = false;
  });
  setTimeout(say, 350);
}

/* ---- 4. Oku: önce kendi okusun, sonra dinleyip kontrol etsin */
function qOku() {
  const r = run!;
  const pool = items.oku();
  const w = weightedPick(pool, (x: Word) => key.word(x.text), progress, r.last as Word);
  r.last = w;
  const sylHtml = w.syllables.map((s, i) => `<button class="syl-chip ${i % 2 ? 'alt' : ''}" data-act="syl" data-v="${s}">${colored(s)}</button>`).join('');
  const root = gameShell(
    'Sesli oku!',
    `<div class="read-word">${sylHtml}</div>
     <div class="reveal hidden"><span class="emoji">${w.emoji}</span></div>
     <button class="big-btn sky" data-act="check">🔊 Dinle ve kontrol et</button>
     <div class="self hidden">
       <button class="big-btn mint" data-act="ok">😊 Doğru okudum</button>
       <button class="big-btn ghost" data-act="again">🔁 Bir daha deneyeyim</button>
     </div>`,
  );
  on(root, 'syl', (el) => {
    bounce(el);
    if (hasVoice(key.syllable(el.dataset.v!))) void play(key.syllable(el.dataset.v!));
  });
  on(root, 'check', async (el) => {
    el.classList.add('hidden');
    const rev = root.querySelector('.reveal')!;
    rev.classList.remove('hidden');
    bounce(rev);
    await play(key.word(w.text));
    root.querySelector('.self')!.classList.remove('hidden');
  });
  on(root, 'ok', async () => {
    record(progress, key.word(w.text), true);
    await praise();
    advance(true);
  });
  on(root, 'again', () => {
    record(progress, key.word(w.text), false);
    root.querySelector('.self')!.classList.add('hidden');
    root.querySelector('.reveal')!.classList.add('hidden');
    root.querySelector('[data-act=check]')!.classList.remove('hidden');
  });
}

/* --------------------------------------------------------------- finish */

function showFinish() {
  const r = run!;
  const remaining = STICKERS.filter((s) => !progress.stickers.includes(s));
  const sticker = remaining.length ? remaining[Math.floor(Math.random() * remaining.length)] : STICKERS[Math.floor(Math.random() * STICKERS.length)];
  if (remaining.length) progress.stickers.push(sticker);
  commit();
  sfx.win();
  confetti();
  const root = show(`
    <div class="screen finish">
      <h1>Aferin! 🎉</h1>
      <div class="stars">${'⭐'.repeat(Math.max(1, r.stars))}</div>
      <p>Yeni çıkartman:</p>
      <div class="new-sticker">${sticker}</div>
      <button class="big-btn mint" data-act="again">🔁 Tekrar oyna</button>
      <button class="big-btn ghost" data-act="home">🏠 Ana sayfa</button>
    </div>`);
  void praise();
  on(root, 'again', () => startGame(r.kind));
  on(root, 'home', () => {
    run = null;
    showHome();
  });
}

/* --------------------------------------------------------------- parent */

function showGate() {
  sfx.tap();
  const a = 6 + Math.floor(Math.random() * 4);
  const b = 5 + Math.floor(Math.random() * 5);
  const root = show(`
    <div class="screen gate">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><h2>Ebeveyn girişi</h2><span></span></header>
      <p>Bu bölüm anne-babalar için.</p>
      <p class="q">${a} + ${b} = ?</p>
      <input class="gate-input" inputmode="numeric" pattern="[0-9]*" maxlength="2" autocomplete="off" />
      <button class="big-btn sky" data-act="go">Gir</button>
    </div>`);
  const input = root.querySelector<HTMLInputElement>('input')!;
  on(root, 'home', showHome);
  const go = () => {
    if (Number(input.value) === a + b) showParent();
    else {
      wiggle(input);
      input.value = '';
    }
  };
  on(root, 'go', go);
  input.addEventListener('keydown', (e) => e.key === 'Enter' && go());
}

interface RecItem {
  k: string;
  label: string;
  hint?: string;
}

function recSections(): { id: string; title: string; help: string; items: RecItem[] }[] {
  const known = knownSet();
  return [
    {
      id: 'harf',
      title: 'Harf sesleri',
      help: 'Harfin adını değil, sesini söyleyin. Örneğin "ne" değil "nnn", "te" değil kısa bir "t". Öğretmenin söylediği gibi.',
      items: ALPHABET.filter((l) => known.has(l)).map((l) => ({ k: key.letter(l), label: l })),
    },
    {
      id: 'hece',
      title: 'Heceler',
      help: 'Heceyi tek seferde, doğal okuyun: "na", "an".',
      items: syllablesFor(known).map((s) => ({ k: key.syllable(s), label: s })),
    },
    {
      id: 'kelime',
      title: 'Kelimeler',
      help: 'Kelimeyi normal hızda, net okuyun.',
      items: wordsFor(known).map((w) => ({ k: key.word(w.text), label: w.text, hint: w.emoji })),
    },
    {
      id: 'ovgu',
      title: 'Övgü sözleri (isteğe bağlı)',
      help: 'Doğru cevapta çocuğunuz sizin sesinizle tebrik edilir. Adını da ekleyebilirsiniz.',
      items: PRAISES.map((p, i) => ({ k: key.praise(i), label: p })),
    },
    {
      id: 'yonerge',
      title: 'Oyun yönergeleri (isteğe bağlı)',
      help: 'Oyun başında çalınır, çocuğunuz ne yapacağını duyar.',
      items: Object.entries(INSTRUCTIONS).map(([k, t]) => ({ k: key.intro(k), label: t })),
    },
  ];
}

let activeRec: { k: string; rec: Recording; timer: number } | null = null;

function recRow(it: RecItem): string {
  const has = hasVoice(it.k);
  const recording = activeRec?.k === it.k;
  return `<div class="rec-row ${has ? 'has' : ''} ${recording ? 'recording' : ''}" data-k="${it.k}">
    <span class="rec-label">${it.hint ? `<i>${it.hint}</i>` : ''}${it.label.length <= 12 ? colored(it.label) : it.label}</span>
    <span class="rec-actions">
      ${has ? `<button class="mini play" data-rec="play" aria-label="Dinle">▶</button>` : ''}
      <button class="mini rec" data-rec="rec">${recording ? '■ Bitir' : has ? '↻' : '● Kaydet'}</button>
      ${has ? `<button class="mini del" data-rec="del" aria-label="Sil">✕</button>` : ''}
    </span>
  </div>`;
}

function showParent() {
  const sections = recSections();
  const counts = (s: (typeof sections)[number]) => `${voiceCount(s.items.map((i) => i.k))}/${s.items.length}`;
  const root = show(`
    <div class="screen parent">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><h2>Ebeveyn</h2><span></span></header>

      <section class="panel">
        <h3>1. Öğrendiği harfler</h3>
        <p class="muted">Kızınız okulda yeni bir harf öğrendikçe buradan ekleyin. Oyunlar sadece bu harflerle hece ve kelime üretir.</p>
        <div class="letters">
          ${ALPHABET.map((l) => `<button class="lt ${progress.known.includes(l) ? 'on' : ''} ${isVowel(l) ? 'v' : 'c'}" data-act="toggle" data-l="${l}">${l}</button>`).join('')}
        </div>
      </section>

      <section class="panel">
        <h3>2. Sesinizi kaydedin</h3>
        <p class="muted">Sessiz bir ortamda telefonu ağzınıza 20-30 cm yakın tutun. <b>● Kaydet</b>'e basın, söyleyin, <b>■ Bitir</b>'e basın. Kayıt hemen geri çalınır, beğenmezseniz <b>↻</b> ile yeniden kaydedin.</p>
        ${sections
          .map(
            (s) => `<details class="rec-sec" ${s.id === 'harf' || s.id === 'hece' ? 'open' : ''}>
              <summary><span>${s.title}</span><span class="count" data-count="${s.id}">${counts(s)}</span></summary>
              <p class="muted small">${s.help}</p>
              <div class="rec-list">${s.items.map(recRow).join('') || '<p class="muted small">Bu harflerle henüz kelime yok. Yeni harf ekledikçe gelecek.</p>'}</div>
            </details>`,
          )
          .join('')}
      </section>

      <section class="panel">
        <h3>3. Yedek</h3>
        <p class="muted">Kayıtlar sadece bu cihazda saklanır, internete gönderilmez. Oyunu <b>Ana Ekran</b>'a eklediyseniz kayıtları da oradan açarak yapın (Safari ile ana ekran uygulaması kayıtları paylaşmaz). Telefon değiştirirken yedek alın.</p>
        <div class="row">
          <button class="big-btn ghost" data-act="export">⬇ Yedek al</button>
          <label class="big-btn ghost file">⬆ Yedekten yükle<input type="file" accept="application/json,.json" hidden /></label>
        </div>
        <button class="link" data-act="resetStats">İlerlemeyi sıfırla (yıldız, çıkartma)</button>
      </section>
    </div>`);

  on(root, 'home', async () => {
    if (activeRec) await finishRecording();
    releaseMic();
    showHome();
  });

  on(root, 'toggle', (el) => {
    const l = el.dataset.l!;
    const i = progress.known.indexOf(l);
    if (i >= 0) progress.known.splice(i, 1);
    else progress.known.push(l);
    commit();
    const y = window.scrollY;
    showParent();
    window.scrollTo(0, y);
  });

  const refreshRow = (k: string) => {
    const row = root.querySelector(`.rec-row[data-k="${CSS.escape(k)}"]`);
    const it = sections.flatMap((s) => s.items).find((i) => i.k === k);
    if (row && it) row.replaceWith(h(recRow(it)));
    for (const s of sections) {
      const c = root.querySelector(`[data-count="${s.id}"]`);
      if (c) c.textContent = counts(s);
    }
  };

  async function finishRecording() {
    if (!activeRec) return;
    const { k, rec, timer } = activeRec;
    clearTimeout(timer);
    activeRec = null;
    const blob = await rec.stop();
    if (blob.size > 0) await saveVoice(k, blob);
    refreshRow(k);
    await play(k);
  }

  root.addEventListener('click', async (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-rec]');
    if (!btn) return;
    const k = btn.closest<HTMLElement>('.rec-row')!.dataset.k!;
    const act = btn.dataset.rec;
    if (act === 'play') return void play(k);
    if (act === 'del') {
      if (confirm('Bu kayıt silinsin mi?')) {
        await deleteVoice(k);
        refreshRow(k);
      }
      return;
    }
    // rec
    if (activeRec?.k === k) return finishRecording();
    if (activeRec) await finishRecording();
    stopVoice();
    try {
      const rec = await startRecording();
      activeRec = { k, rec, timer: window.setTimeout(finishRecording, 5000) };
      refreshRow(k);
    } catch {
      alert('Mikrofona erişilemedi. iPhone Ayarlar → Safari → Mikrofon kısmından izin verin.');
    }
  });

  on(root, 'export', async () => {
    const blob = await exportVoices();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `hece-hece-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  });
  root.querySelector<HTMLInputElement>('input[type=file]')!.addEventListener('change', async (e) => {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    try {
      const n = await importVoices(f);
      alert(`${n} kayıt yüklendi.`);
      showParent();
    } catch (err) {
      alert(`Yüklenemedi: ${(err as Error).message}`);
    }
  });
  on(root, 'resetStats', () => {
    if (confirm('Yıldızlar, çıkartmalar ve istatistikler silinsin mi? (Ses kayıtları kalır.)')) {
      progress.stars = 0;
      progress.stickers = [];
      progress.stats = {};
      commit();
      showParent();
    }
  });
}

/* ---------------------------------------------------------------- boot */

// Ana ekran uygulaması kalıcı depolama istesin (iOS'un verileri silmemesi için).
void navigator.storage?.persist?.().catch(() => {});
initVoices().then(showHome);
