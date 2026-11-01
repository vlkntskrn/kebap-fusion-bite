import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import './style.css';
import { ALPHABET, isVowel, wordsFor, syllablesFor, key, PRAISES, TALK, TalkId, STICKERS, Word, fill, genitive } from './content';
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
  speak,
  ttsAvailable,
} from './voice';
import { progress, commit, record, weightedPick, shuffle } from './state';
import { sfx } from './sfx';
import { h, show, colored, on, wiggle, bounce, confetti, talkBtn } from './ui';
import { talk, praise, bindTalkButtons } from './talk';
import { showStage, dollSvg, showGiftPicker, pendingGifts } from './stage';
import { showHouse, houseTitle } from './house';
import { imgTag, wordCode, applyGlobalAssets } from './assets';

const knownSet = () => new Set(progress.known);

type GameKind = 'bul' | 'birlestir' | 'kur' | 'oku';
const ROUND = 6;

/** Kelime resmi: yüklenen görsel varsa o, yoksa emoji. */
const wordPic = (w: Word) => imgTag(wordCode(w.text), w.emoji, 'word-img');
const stickerHtml = (s: string) => imgTag(`cikartma_${String(STICKERS.indexOf(s) + 1).padStart(2, '0')}`, s);

/* ---------------------------------------------------------- availability */

const items = {
  bul: () => ALPHABET.filter((l) => progress.known.includes(l) && hasVoice(key.letter(l))),
  birlestir: () =>
    syllablesFor(knownSet()).filter((s) => hasVoice(key.syllable(s)) && [...s].every((ch) => hasVoice(key.letter(ch)))),
  kur: () => wordsFor(knownSet()).filter((w) => w.syllables.length >= 2 && hasVoice(key.word(w.text))),
  oku: () => wordsFor(knownSet()).filter((w) => hasVoice(key.word(w.text))),
};
const MIN: Record<GameKind, number> = { bul: 2, birlestir: 1, kur: 1, oku: 1 };

const GAMES: { kind: GameKind; icon: string; art: string; title: string; color: string }[] = [
  { kind: 'bul', icon: '👂', art: 'sesibul', title: 'Sesi Bul', color: 'coral' },
  { kind: 'birlestir', icon: '🔗', art: 'birlestir', title: 'Sesleri Birleştir', color: 'sky' },
  { kind: 'kur', icon: '🧩', art: 'kelimekur', title: 'Kelime Kur', color: 'mint' },
  { kind: 'oku', icon: '📖', art: 'oku', title: 'Oku', color: 'lemon' },
];

/* --------------------------------------------------------------- start */

/** Açılış ekranı: iPhone sesi ancak bir dokunuştan sonra çalar, bu yüzden "Başla" ile açılır. */
function showSplash() {
  const root = show(`
    <div class="screen splash" data-act="start">
      <div class="splash-doll">${dollSvg(progress.doll ?? defaultLookForSplash())}</div>
      <h1>Merhaba<br/>${progress.name}!</h1>
      <button class="play-btn" data-act="start" aria-label="Başla">▶</button>
    </div>`);
  let started = false;
  on(root, 'start', () => {
    if (started) return;
    started = true;
    sfx.unlock();
    showHome(true);
  });
}

function defaultLookForSplash() {
  return {
    kiyafet: { item: 'prenses', color: '#c77dff' },
    sac: { item: 'orgu', color: '#8e5cff' },
    taki: { item: 'tac', color: '#ffd93d' },
    elde: { item: 'mikrofon', color: '#ff5d8f' },
    ayakkabi: { item: 'babet', color: '#ff8fd8' },
    fon: { item: 'sahne', color: '#7b5cff' },
    ten: { item: 'ten', color: '#f6c9a4' },
  };
}

/* ---------------------------------------------------------------- home */

function showHome(greet = false) {
  const anyVoice = voiceCount(progress.known.map(key.letter)) > 0;
  const root = show(`
    <div class="screen home">
      <header class="bar">
        <div class="pill">⭐ ${progress.stars}</div>
        ${talkBtn('merhaba')}
        <button class="pill btn-album" data-act="album">🎁 ${progress.stickers.length}/${STICKERS.length}</button>
      </header>
      <div class="home-left">
      <div class="title">
        <h1>${genitive(progress.name)}<br/><span>Okuma Oyunu</span></h1>
        <div class="known">${progress.known.map((l) => `<span class="${isVowel(l) ? 'v' : 'c'}">${l}</span>`).join('')}</div>
      </div>
      ${
        anyVoice
          ? ''
          : `<div class="notice"><b>Anne / baba için:</b> Okuma oyunları sizin sesinizle çalışır. Önce en alttaki <b>Ebeveyn</b> bölümünden harf seslerini kaydedin.</div>`
      }
      <button class="stage-banner" data-act="stage">
        <span class="sb-doll">${dollSvg(progress.doll ?? defaultLookForSplash(), 'doll mini')}</span>
        <span class="sb-text">👑 ${genitive(progress.name)} Sahnesi<small>👗 🎨 ${pendingGifts() > 0 ? `<b class="gift-badge">🎁 ${pendingGifts()}</b>` : ''}</small></span>
      </button>
      <button class="house-banner" data-act="house"><span class="hb-icon">${imgTag('ui_ev', '🏡')}</span><span class="sb-text">${houseTitle()}<small>🛏️ 🍳 🛁 🛋️</small></span></button>
      </div>
      <div class="games">
        ${GAMES.map((g) => {
          const ready = items[g.kind]().length >= MIN[g.kind];
          return `<button class="game-card ${g.color} ${ready ? '' : 'locked'}" data-act="game" data-kind="${g.kind}">
            <span class="g-icon">${ready ? imgTag(`ui_oyun_${g.art}`, g.icon) : '🔒'}</span>
            <span class="g-title">${g.title}</span>
          </button>`;
        }).join('')}
      </div>
      <button class="parent-btn" data-act="parent">👨‍👩‍👧 Ebeveyn</button>
    </div>`);
  bindTalkButtons(root);
  on(root, 'game', (el) => {
    const kind = el.dataset.kind as GameKind;
    if (items[kind]().length >= MIN[kind]) startGame(kind);
    else {
      wiggle(el);
      sfx.soft();
      void talk('kayitYok');
    }
  });
  on(root, 'stage', () => showStage(() => showHome()));
  on(root, 'house', () => showHouse(() => showHome()));
  on(root, 'parent', showGate);
  on(root, 'album', showAlbum);
  if (greet) void talk('merhaba');
}

/* --------------------------------------------------------------- album */

function showAlbum() {
  sfx.tap();
  const root = show(`
    <div class="screen">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><h2>🎁</h2>${talkBtn('album')}</header>
      <div class="album">
        ${STICKERS.map((s) => (progress.stickers.includes(s) ? `<span class="sticker">${stickerHtml(s)}</span>` : `<span class="sticker empty">?</span>`)).join('')}
      </div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'home', () => showHome());
  root.querySelectorAll('.sticker:not(.empty)').forEach((el) => el.addEventListener('click', () => bounce(el)));
  void talk('album');
}

/* --------------------------------------------------------------- games */

interface Run {
  kind: GameKind;
  index: number;
  stars: number;
  intro: boolean;
  last?: unknown;
}
let run: Run | null = null;

function gameShell(talkId: TalkId, body: string): HTMLElement {
  const r = run!;
  const dots = Array.from({ length: ROUND }, (_, i) => `<i class="${i < r.index ? 'done' : i === r.index ? 'now' : ''}"></i>`).join('');
  const root = show(`
    <div class="screen game game-${r.kind}">
      <header class="bar"><button class="round-btn" data-act="home">⬅</button><div class="dots">${dots}</div><div class="prompt-row">${talkBtn(talkId)}</div><div class="pill">⭐ ${progress.stars}</div></header>
      <div class="game-body">${body}</div>
    </div>`);
  bindTalkButtons(root);
  on(root, 'home', () => {
    run = null;
    showHome();
  });
  return root;
}

/** İlk soruda oyunun adını ve ne yapılacağını söyler. */
async function lead() {
  if (run?.intro) {
    run.intro = false;
    await talk(run.kind);
    await wait(250);
  }
}

function startGame(kind: GameKind) {
  sfx.tap();
  run = { kind, index: 0, stars: 0, intro: true };
  nextQuestion();
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

/* ---- 1. Sesi bul */
function qBul() {
  const r = run!;
  const pool = items.bul();
  const target = weightedPick(pool, key.letter, progress, r.last as string);
  r.last = target;
  const choices = shuffle([target, ...shuffle(pool.filter((l) => l !== target)).slice(0, 2)]);
  let first = true;
  let busy = false;
  const root = gameShell(
    'bul',
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
      // Seçtiği harfin sesini, ardından istenen sesi dinletir: ikisini karşılaştırsın.
      await wait(200);
      await play(key.letter(v));
      await wait(300);
      await talk('tekrar');
      await say();
      busy = false;
    }
  });
  void (async () => {
    await wait(300);
    await lead();
    await say();
  })();
}

/* ---- 2. Sesleri birleştir */
function qBirlestir() {
  const r = run!;
  const syl = weightedPick(items.birlestir(), key.syllable, progress, r.last as string);
  r.last = syl;
  const [a, b] = [...syl];
  const heard = new Set<number>();
  let merging = false;
  const root = gameShell(
    'birlestir',
    `<div class="pair">
       <button class="card letter" data-act="letter" data-i="0">${colored(a)}<i class="tap-hint">👆</i></button>
       <span class="plus">+</span>
       <button class="card letter" data-act="letter" data-i="1">${colored(b)}<i class="tap-hint">👆</i></button>
     </div>
     <button class="big-btn sky hidden" data-act="merge">🔗</button>`,
  );
  const mergeBtn = root.querySelector<HTMLElement>('[data-act=merge]')!;
  on(root, 'letter', async (el) => {
    if (merging) return;
    const i = Number(el.dataset.i);
    bounce(el);
    el.classList.add('heard');
    const wasNew = !heard.has(i);
    heard.add(i);
    await play(key.letter(i === 0 ? a : b));
    if (heard.size === 2 && !merging && mergeBtn.classList.contains('hidden')) {
      mergeBtn.classList.remove('hidden');
      bounce(mergeBtn);
      if (wasNew) void talk('birlestirBas');
    }
  });
  on(root, 'merge', async () => {
    if (merging) return;
    merging = true;
    mergeBtn.remove();
    const pair = root.querySelector('.pair')!;
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
    await play(key.syllable(syl));
    await wait(700);
    quiz();
  });
  void (async () => {
    await wait(300);
    await lead();
  })();

  // Kontrol: duyduğu heceyi, harfleri aynı ama sırası ters olan heceden ayırt etsin (na / an).
  function quiz() {
    const rev = b + a;
    const alt = rev !== syl ? rev : shuffle(syllablesFor(knownSet()).filter((s) => s !== syl))[0];
    const choices = shuffle([syl, alt]);
    let first = true;
    let busy = false;
    const area = h(`<div class="quiz">
      <button class="speaker small" data-act="again">🔊</button>
      <div class="choices n2">${choices.map((s) => `<button class="card syl" data-act="choose" data-v="${s}">${colored(s)}</button>`).join('')}</div>
    </div>`);
    root.querySelector('.merged-card')!.replaceWith(area);
    root.querySelector('.prompt-row')!.innerHTML = talkBtn('birlestirSor');
    bindTalkButtons(root.querySelector('.prompt-row') as HTMLElement);
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
        await wait(200);
        await talk('tekrar');
        await play(key.syllable(syl));
        busy = false;
      }
    });
    void (async () => {
      await wait(200);
      await talk('birlestirSor');
      await play(key.syllable(syl));
    })();
  }
}

/* ---- 3. Kelime kur */
function qKur() {
  const r = run!;
  const w = weightedPick(items.kur(), (x: Word) => key.word(x.text), progress, r.last as Word);
  r.last = w;
  const extraPool = [...new Set(wordsFor(knownSet()).flatMap((x) => x.syllables))].filter((s) => !w.syllables.includes(s));
  const tiles = shuffle([...w.syllables, ...shuffle(extraPool).slice(0, 1)]);
  let placed = 0;
  let first = true;
  let busy = false;
  const root = gameShell(
    'kur',
    `<button class="picture" data-act="listen">${wordPic(w)}<span>🔊</span></button>
     <div class="kur-side"><div class="slots">${w.syllables.map(() => `<span class="slot"></span>`).join('')}</div>
     <div class="tiles">${tiles.map((s, i) => `<button class="card tile" data-act="tile" data-i="${i}" data-v="${s}">${colored(s)}</button>`).join('')}</div></div>`,
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
      if (hasVoice(key.syllable(v))) await play(key.syllable(v));
      await talk('tekrar');
      await say();
    }
    busy = false;
  });
  void (async () => {
    await wait(300);
    await lead();
    await say();
  })();
}

/* ---- 4. Oku */
function qOku() {
  const r = run!;
  const w = weightedPick(items.oku(), (x: Word) => key.word(x.text), progress, r.last as Word);
  r.last = w;
  const sylHtml = w.syllables.map((s, i) => `<button class="syl-chip ${i % 2 ? 'alt' : ''}" data-act="syl" data-v="${s}">${colored(s)}</button>`).join('');
  const root = gameShell(
    'oku',
    `<div class="oku-word"><div class="read-word">${sylHtml}</div>
     <div class="reveal hidden"><span class="emoji">${wordPic(w)}</span></div></div>
     <div class="oku-side"><button class="big-btn sky" data-act="check">🔊</button>
     <div class="self hidden">
       <button class="big-btn mint" data-act="ok">😊 👍</button>
       <button class="big-btn ghost" data-act="again">🔁</button>
     </div></div>`,
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
    root.querySelector('.prompt-row')!.innerHTML = talkBtn('okuKontrol');
    bindTalkButtons(root.querySelector('.prompt-row') as HTMLElement);
    await wait(300);
    await talk('okuKontrol');
  });
  on(root, 'ok', async () => {
    record(progress, key.word(w.text), true);
    await praise();
    advance(true);
  });
  on(root, 'again', () => {
    record(progress, key.word(w.text), false);
    stopVoice();
    root.querySelector('.self')!.classList.add('hidden');
    root.querySelector('.reveal')!.classList.add('hidden');
    root.querySelector('[data-act=check]')!.classList.remove('hidden');
  });
  void (async () => {
    await wait(300);
    if (run?.intro) await lead();
  })();
}

/* --------------------------------------------------------------- finish */

/** 6 sorudan en az 4'ünü ilk denemede bilirse hediye kazanır, ardından bebeği sahneye çıkar. */
const GIFT_THRESHOLD = 4;

function showFinish() {
  const r = run!;
  const success = r.stars >= GIFT_THRESHOLD;
  const remaining = STICKERS.filter((s) => !progress.stickers.includes(s));
  const sticker = remaining.length ? remaining[Math.floor(Math.random() * remaining.length)] : STICKERS[Math.floor(Math.random() * STICKERS.length)];
  if (remaining.length) progress.stickers.push(sticker);
  if (success) progress.gifts = (progress.gifts ?? 0) + 1;
  commit();
  sfx.win();
  confetti();
  const root = show(`
    <div class="screen finish">
      <h1>${progress.name} 🎉</h1>
      <div class="stars">${'⭐'.repeat(Math.max(1, r.stars))}</div>
      <div class="new-sticker">${stickerHtml(sticker)}</div>
      ${success ? `<button class="gift-btn big" data-act="gift">🎁</button>` : ''}
      <div class="row">
        <button class="big-btn mint" data-act="again">🔁</button>
        <button class="big-btn ghost" data-act="home">🏠</button>
      </div>
    </div>`);
  void talk(success ? 'bittiHediye' : 'azKaldi');
  on(root, 'again', () => startGame(r.kind));
  on(root, 'home', () => {
    run = null;
    showHome();
  });
  on(root, 'gift', () => {
    run = null;
    showGiftPicker(() => showHome());
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
  document.body.classList.add('allow-portrait');
  const input = root.querySelector<HTMLInputElement>('input')!;
  on(root, 'home', () => showHome());
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

function recSections(): { id: string; title: string; help: string; items: RecItem[]; open?: boolean }[] {
  const known = knownSet();
  return [
    {
      id: 'harf',
      title: 'Harf sesleri',
      help: 'Harfin adını değil, sesini söyleyin. Örneğin "ne" değil "nnn", "te" değil kısa bir "t". Öğretmenin söylediği gibi.',
      items: ALPHABET.filter((l) => known.has(l)).map((l) => ({ k: key.letter(l), label: l })),
      open: true,
    },
    {
      id: 'hece',
      title: 'Heceler',
      help: 'Heceyi tek seferde, doğal okuyun: "na", "an".',
      items: syllablesFor(known).map((s) => ({ k: key.syllable(s), label: s })),
      open: true,
    },
    {
      id: 'kelime',
      title: 'Kelimeler',
      help: 'Kelimeyi normal hızda, net okuyun.',
      items: wordsFor(known).map((w) => ({ k: key.word(w.text), label: w.text, hint: w.emoji })),
    },
    {
      id: 'talimat',
      title: 'Sesli talimatlar (isteğe bağlı)',
      help: 'Kaydetmezseniz telefonun Türkçe sesi okur. Kendi sesinizle kaydederseniz çocuğunuz sizin sesinizi duyar.',
      items: (Object.keys(TALK) as TalkId[]).map((id) => ({ k: key.talk(id), label: fill(TALK[id], progress.name) })),
    },
    {
      id: 'ovgu',
      title: 'Övgü sözleri (isteğe bağlı)',
      help: 'Doğru cevapta söylenir. Kaydetmezseniz telefonun sesi okur.',
      items: PRAISES.map((p, i) => ({ k: key.praise(i), label: fill(p, progress.name) })),
    },
  ];
}

let activeRec: { k: string; rec: Recording; timer: number } | null = null;

function recRow(it: RecItem): string {
  const has = hasVoice(it.k);
  const recording = activeRec?.k === it.k;
  const short = it.label.length <= 12;
  return `<div class="rec-row ${has ? 'has' : ''} ${recording ? 'recording' : ''} ${short ? '' : 'long'}" data-k="${it.k}">
    <span class="rec-label">${it.hint ? `<i>${it.hint}</i>` : ''}${short ? colored(it.label) : it.label}</span>
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
        <h3>Çocuğun adı</h3>
        <div class="row"><input class="name-input" value="${progress.name.replace(/"/g, '')}" maxlength="12" autocomplete="off" /><button class="big-btn sky small-btn" data-act="saveName">Kaydet</button></div>
        <label class="check"><input type="checkbox" data-act="tts" ${progress.tts ? 'checked' : ''}/> Kaydı olmayan talimatları telefonun sesi okusun</label>
        ${ttsAvailable() ? `<button class="link" data-act="testTts">🔊 Telefon sesini dene</button>` : '<p class="muted small">Bu cihazda telefon sesi yok.</p>'}
      </section>

      <section class="panel">
        <h3>1. Öğrendiği harfler</h3>
        <p class="muted">Okulda yeni bir harf öğrendikçe buradan ekleyin. Oyunlar sadece bu harflerle hece ve kelime üretir.</p>
        <div class="letters">
          ${ALPHABET.map((l) => `<button class="lt ${progress.known.includes(l) ? 'on' : ''} ${isVowel(l) ? 'v' : 'c'}" data-act="toggle" data-l="${l}">${l}</button>`).join('')}
        </div>
      </section>

      <section class="panel">
        <h3>2. Sesinizi kaydedin</h3>
        <p class="muted">Sessiz bir ortamda telefonu ağzınıza 20-30 cm yakın tutun. <b>● Kaydet</b>'e basın, söyleyin, <b>■ Bitir</b>'e basın. Kayıt hemen geri çalınır, beğenmezseniz <b>↻</b> ile yeniden kaydedin.</p>
        ${sections
          .map(
            (s) => `<details class="rec-sec" ${s.open ? 'open' : ''}>
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

  document.body.classList.add('allow-portrait');
  on(root, 'home', async () => {
    if (activeRec) await finishRecording();
    releaseMic();
    showHome();
  });

  on(root, 'saveName', () => {
    const v = root.querySelector<HTMLInputElement>('.name-input')!.value.trim();
    if (v) {
      progress.name = v.slice(0, 12);
      commit();
      const y = window.scrollY;
      showParent();
      window.scrollTo(0, y);
    }
  });
  root.querySelector<HTMLInputElement>('[data-act=tts]')!.addEventListener('change', (e) => {
    progress.tts = (e.target as HTMLInputElement).checked;
    commit();
  });
  on(root, 'testTts', () => speak(fill(TALK.merhaba, progress.name)));

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
    if (activeRec?.k === k) return finishRecording();
    if (activeRec) await finishRecording();
    stopVoice();
    try {
      const rec = await startRecording();
      // Talimatlar uzun olabilir: onlara daha fazla süre.
      const limit = k.startsWith('tal:') ? 9000 : 5000;
      activeRec = { k, rec, timer: window.setTimeout(finishRecording, limit) };
      refreshRow(k);
    } catch {
      alert('Mikrofona erişilemedi. iPhone Ayarlar → Safari → Mikrofon kısmından izin verin.');
    }
  });

  on(root, 'export', async () => {
    const blob = await exportVoices();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `okuma-oyunu-yedek-${new Date().toISOString().slice(0, 10)}.json`;
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

void navigator.storage?.persist?.().catch(() => {});

// iPhone'da iki parmakla yakınlaştırma ve çift dokunma zoom'u kapalı: çocuk yanlışlıkla
// ekranı büyütüp geri küçültemiyordu.
for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(ev, (e) => e.preventDefault(), { passive: false });
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });
applyGlobalAssets();
initVoices().then(showSplash);
