import './style.css';
import { INGREDIENTS, GameState, LevelDef, MoveResult, SKEWER_SIZE } from './game/types';
import { createState, pick, canPick, shuffleBoard, addTraySlots } from './game/engine';
import { getLevel, FEATURE_LEVELS } from './game/levels';
import { load, save as persist, reset, Save } from './storage';
import { sfx, setSound, setVibration } from './audio';
import { ads } from './ads';

const APP_NAME = 'Kebap Fusion Bite';
const CUSTOMERS = ['🧔', '👩', '👴', '👵', '🧑', '👱‍♀️', '👨‍🦰', '🧕', '👲', '🤠'];
const PRICES = { undo: 60, shuffle: 80, slot: 120, continue: 150 } as const;
type Booster = keyof Save['boosters'];

const app = document.getElementById('app')!;
let data: Save = load();
setSound(data.sound);
setVibration(data.vibration);

interface Run {
  def: LevelDef;
  state: GameState;
  history: GameState[];
  /** State before the losing move, so "continue" can replay it with extra space. */
  beforeLoss: { state: GameState; col: number } | null;
  continues: number;
  slotBoostUsed: boolean;
  busy: boolean;
  seenOrders: Set<number>;
}
let run: Run | null = null;

const commit = () => persist(data);
const today = () => new Date().toISOString().slice(0, 10);
const ingEmoji = (i: number) => INGREDIENTS[i].emoji;
const winReward = (level: number) => 20 + Math.floor(level / 5) * 5;

function h(html: string): HTMLElement {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild as HTMLElement;
}

/* ----------------------------------------------------------------- HOME */

function showHome() {
  run = null;
  const dailyReady = data.lastDaily !== today();
  app.replaceChildren(
    h(`
    <div class="screen home">
      <header class="topbar">
        <div class="pill coins">🪙 <b>${data.coins}</b></div>
        <button class="icon-btn" data-act="settings" aria-label="Ayarlar">⚙️</button>
      </header>
      <div class="logo">
        <div class="logo-art"><span>🔥</span><span class="skewer-art">🍢</span><span>🔥</span></div>
        <h1>Kebap<br/><em>Fusion Bite</em></h1>
        <p>Usta, siparişler bekliyor!</p>
      </div>
      <div class="home-actions">
        ${dailyReady ? `<button class="btn btn-gift" data-act="daily">🎁 Günlük ödül hazır!</button>` : ''}
        <div class="level-chip">Level ${data.level}</div>
        <button class="btn btn-play" data-act="play">Oyna</button>
      </div>
    </div>`),
  );
  app.querySelector('[data-act=play]')!.addEventListener('click', () => {
    sfx.click();
    startLevel(data.level);
  });
  app.querySelector('[data-act=settings]')!.addEventListener('click', showSettings);
  app.querySelector('[data-act=daily]')?.addEventListener('click', showDaily);
}

function showDaily() {
  sfx.click();
  const amount = [50, 75, 100, 150][Math.floor(Math.random() * 4)];
  const m = modal(`
    <h2>Günlük ödül</h2>
    <div class="big-reward">🪙 ${amount}</div>
    <p>Her gün gel, ödülünü al!</p>
    <button class="btn btn-ad" data-act="x2">🎬 İzle, ${amount * 2} al</button>
    <button class="btn btn-ghost" data-act="take">${amount} al</button>`);
  const claim = (n: number) => {
    data.coins += n;
    data.lastDaily = today();
    commit();
    sfx.coin();
    m.close();
    showHome();
  };
  m.on('take', () => claim(amount));
  m.on('x2', async () => {
    if (await ads.rewarded('daily_x2')) claim(amount * 2);
  });
}

/* ----------------------------------------------------------------- GAME */

function startLevel(level: number) {
  const def = getLevel(level);
  const state = createState(def);
  run = {
    def,
    state,
    history: [],
    beforeLoss: null,
    continues: 0,
    slotBoostUsed: false,
    busy: false,
    seenOrders: new Set(),
  };
  renderGame();
  if (level === FEATURE_LEVELS.hidden) featureIntro('hidden');
  else if (level === FEATURE_LEVELS.frozen) featureIntro('frozen');
}

function featureIntro(key: 'hidden' | 'frozen') {
  if (data.seenFeatures.includes(key)) return;
  const info =
    key === 'hidden'
      ? { icon: '<span class="tile hidden demo">?</span>', title: 'Gizli Malzeme', text: 'Üstündekiler alınınca ne olduğu ortaya çıkar.' }
      : { icon: '<span class="tile demo frozen-demo">❄️</span>', title: 'Donmuş Kasa', text: 'Üstündeki sayı kadar sipariş teslim edince çözülür.' };
  const m = modal(`
    <div class="feature-tag">Yeni!</div>
    <div class="feature-icon">${info.icon}</div>
    <h2>${info.title}</h2>
    <p>${info.text}</p>
    <button class="btn btn-play" data-act="ok">Anladım</button>`);
  m.on('ok', () => {
    data.seenFeatures.push(key);
    commit();
    m.close();
  });
}

function renderGame() {
  if (!run) return;
  const s = run.state;
  const level = run.def.level;
  const boosterBtn = (key: Booster, icon: string, label: string, disabled = false) => {
    const n = data.boosters[key];
    const badge = n > 0 ? `<span class="badge">${n}</span>` : `<span class="badge price">🪙${PRICES[key]}</span>`;
    return `<button class="booster" data-booster="${key}" ${disabled ? 'disabled' : ''}><span class="b-icon">${icon}</span><span class="b-label">${label}</span>${badge}</button>`;
  };

  const orders = s.active
    .map((o, slot) => {
      if (!o) return `<div class="order empty" data-slot="${slot}"><span>✓</span></div>`;
      const fresh = !run!.seenOrders.has(o.n);
      run!.seenOrders.add(o.n);
      const pips = Array.from({ length: SKEWER_SIZE }, (_, i) =>
        i < o.have ? `<span class="pip full" data-i="${i}">${ingEmoji(o.ing)}</span>` : `<span class="pip" data-i="${i}"></span>`,
      ).join('');
      return `
        <div class="order ${fresh ? 'enter' : ''}" data-slot="${slot}" style="--c:${INGREDIENTS[o.ing].color}">
          <div class="cust">${CUSTOMERS[(o.n * 7 + level) % CUSTOMERS.length]}</div>
          <div class="ticket"><span class="want">${ingEmoji(o.ing)}</span><span class="x">×${SKEWER_SIZE}</span></div>
          <div class="skewer"><i class="stick"></i>${pips}</div>
        </div>`;
    })
    .join('');

  const traySlots = Array.from({ length: s.trayCap }, (_, i) => {
    const ing = s.tray[i];
    const danger = s.tray.length >= s.trayCap - 1 ? 'danger' : '';
    return ing === undefined
      ? `<div class="slot ${danger}" data-i="${i}"></div>`
      : `<div class="slot filled ${danger}" data-i="${i}" style="--c:${INGREDIENTS[ing].color}">${ingEmoji(ing)}</div>`;
  }).join('');

  const crates = s.columns
    .map((c, ci) => {
      const visible = c.tiles.slice(-5);
      const extra = c.tiles.length - visible.length;
      const tiles = visible
        .map((t, k) => {
          const isTop = k === visible.length - 1;
          const showQ = t.hidden || (c.frozen > 0 && isTop);
          const style = showQ ? '' : `style="--c:${INGREDIENTS[t.ing].color}"`;
          return `<span class="tile ${isTop ? 'top' : ''} ${showQ ? 'hidden' : ''}" ${style}>${showQ ? '?' : ingEmoji(t.ing)}</span>`;
        })
        .join('');
      const pickable = canPick(s, ci);
      return `
        <button class="crate ${c.tiles.length === 0 ? 'empty' : ''} ${c.frozen > 0 ? 'frozen' : ''} ${pickable ? '' : 'locked'}" data-col="${ci}">
          ${extra > 0 ? `<span class="more">+${extra}</span>` : ''}
          <span class="stack">${tiles}</span>
          ${c.frozen > 0 ? `<span class="ice"><b>❄️</b><em>${c.frozen}</em></span>` : ''}
        </button>`;
    })
    .join('');

  const hint =
    level <= 2
      ? `<div class="hint">${
          level === 1
            ? 'Müşterinin istediği malzemeye dokun. 3 tane olunca şiş hazır!'
            : 'Uymayan malzemeler tezgâha gider. Tezgâh dolarsa kaybedersin!'
        }</div>`
      : '';

  app.replaceChildren(
    h(`
    <div class="screen game">
      <header class="topbar">
        <button class="icon-btn" data-act="pause" aria-label="Menü">⏸</button>
        <div class="pill lvl">Level ${level}</div>
        <div class="pill coins">🪙 <b>${data.coins}</b></div>
      </header>
      <section class="orders cols-${s.active.length}">${orders}</section>
      <div class="progress"><div class="bar"><i style="width:${(s.served / s.totalOrders) * 100}%"></i></div><span>${s.served}/${s.totalOrders} sipariş</span></div>
      <section class="tray-wrap"><div class="tray-label">Tezgâh</div><div class="tray">${traySlots}</div></section>
      ${hint}
      <section class="board cols-${s.columns.length}">${crates}</section>
      <footer class="boosters">
        ${boosterBtn('undo', '↩️', 'Geri al', run.history.length === 0)}
        ${boosterBtn('shuffle', '🔀', 'Karıştır')}
        ${boosterBtn('slot', '➕', '+1 Tezgâh', run.slotBoostUsed)}
      </footer>
    </div>`),
  );

  app.querySelectorAll<HTMLButtonElement>('.crate').forEach((b) =>
    b.addEventListener('click', () => onPick(Number(b.dataset.col), b)),
  );
  app.querySelectorAll<HTMLButtonElement>('.booster').forEach((b) =>
    b.addEventListener('click', () => onBooster(b.dataset.booster as Booster)),
  );
  app.querySelector('[data-act=pause]')!.addEventListener('click', showPause);
}

function flyTo(fromEl: Element | null, toEl: Element | null, emoji: string, ms = 200): Promise<void> {
  if (!fromEl || !toEl) return Promise.resolve();
  const a = fromEl.getBoundingClientRect();
  const b = toEl.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'flyer';
  el.textContent = emoji;
  el.style.left = `${a.left + a.width / 2}px`;
  el.style.top = `${a.top + a.height / 2}px`;
  document.body.appendChild(el);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const anim = el.animate(
    [
      { transform: 'translate(-50%,-50%) scale(1.1)' },
      { transform: `translate(calc(-50% + ${dx * 0.5}px), calc(-50% + ${dy * 0.5 - 40}px)) scale(1.25)`, offset: 0.5 },
      { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.9)` },
    ],
    { duration: ms, easing: 'ease-in-out' },
  );
  return anim.finished.then(() => el.remove()).catch(() => el.remove());
}

async function onPick(col: number, btn: HTMLElement) {
  if (!run || run.busy || run.state.status !== 'playing') return;
  if (!canPick(run.state, col)) {
    btn.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 200 });
    return;
  }
  const res = pick(run.state, col) as MoveResult;
  run.busy = true;
  sfx.pick();
  const from = btn.querySelector('.tile.top');
  let to: Element | null = null;
  if (res.placement.kind === 'order') to = app.querySelector(`.order[data-slot="${res.placement.slot}"] .pip[data-i="${res.placement.index}"]`);
  else if (res.placement.kind === 'tray') to = app.querySelector(`.tray .slot[data-i="${res.placement.index}"]`);
  else to = app.querySelector('.tray');
  from?.classList.add('lifting');
  await flyTo(from, to, ingEmoji(res.ing));

  if (res.state.status === 'lost') {
    run.beforeLoss = res.placement.kind === 'overflow' ? { state: run.state, col } : null;
    run.state = res.state;
    run.busy = false;
    renderGame();
    sfx.lose();
    showLose();
    return;
  }
  run.history.push(run.state);
  if (run.history.length > 30) run.history.shift();
  run.state = res.state;
  run.busy = false;
  if (res.placement.kind === 'tray') sfx.tray();
  if (res.completed > 0) {
    sfx.serve();
    toast(res.completed > 1 ? `Kombo ×${res.completed}! 🔥` : ['Afiyet olsun!', 'Süper!', 'Harika şiş!', 'Usta işi!'][run.state.served % 4]);
  }
  renderGame();
  if (run.state.status === 'won') setTimeout(showWin, 350);
}

async function onBooster(key: Booster) {
  if (!run || run.busy || run.state.status !== 'playing') return;
  if (key === 'undo' && run.history.length === 0) return;
  if (key === 'slot' && run.slotBoostUsed) return;
  if (data.boosters[key] > 0) data.boosters[key]--;
  else if (data.coins >= PRICES[key]) data.coins -= PRICES[key];
  else {
    const m = modal(`
      <h2>Yetersiz coin</h2>
      <p>Kısa bir reklam izle, 1 adet ücretsiz kazan.</p>
      <button class="btn btn-ad" data-act="ad">🎬 İzle ve kazan</button>
      <button class="btn btn-ghost" data-act="no">Vazgeç</button>`);
    m.on('no', () => m.close());
    m.on('ad', async () => {
      if (await ads.rewarded(`booster_${key}`)) {
        data.boosters[key]++;
        commit();
        m.close();
        renderGame();
      }
    });
    return;
  }
  commit();
  sfx.click();
  if (key === 'undo') run.state = run.history.pop()!;
  else if (key === 'shuffle') {
    run.history.push(run.state);
    run.state = shuffleBoard(run.state, Math.random);
  } else {
    run.history.push(run.state);
    run.state = addTraySlots(run.state, 1);
    run.slotBoostUsed = true;
  }
  renderGame();
}

function showWin() {
  if (!run) return;
  sfx.win();
  const level = run.def.level;
  const reward = winReward(level);
  data.level = Math.max(data.level, level + 1);
  commit();
  const m = modal(`
    <div class="confetti">🎉</div>
    <h2>Level ${level} tamam!</h2>
    <p>Bütün siparişler teslim edildi.</p>
    <div class="big-reward">🪙 +${reward}</div>
    <button class="btn btn-ad" data-act="x2">🎬 İzle, ${reward * 3} al</button>
    <button class="btn btn-play" data-act="next">Devam</button>`, false);
  const finish = async (amount: number) => {
    data.coins += amount;
    commit();
    sfx.coin();
    m.close();
    if (!data.noAds && level >= 8 && level % 4 === 0) await ads.interstitial('level_end');
    startLevel(data.level);
  };
  m.on('next', () => finish(reward));
  m.on('x2', async () => {
    if (await ads.rewarded('win_x3')) finish(reward * 3);
  });
}

function showLose() {
  if (!run) return;
  const canContinue = run.beforeLoss !== null && run.continues < 3;
  const m = modal(`
    <div class="confetti">😵</div>
    <h2>${canContinue ? 'Tezgâh doldu!' : 'Sıkıştın!'}</h2>
    <p>${canContinue ? '+2 tezgâh yeriyle kaldığın yerden devam et.' : 'Kasalar donmuş kaldı. Bir daha dene!'}</p>
    ${canContinue ? `<button class="btn btn-ad" data-act="ad">🎬 İzle ve devam et</button>` : ''}
    ${canContinue ? `<button class="btn btn-coin" data-act="coin" ${data.coins < PRICES.continue ? 'disabled' : ''}>🪙 ${PRICES.continue} ile devam</button>` : ''}
    <button class="btn btn-ghost" data-act="retry">Tekrar dene</button>`, false);
  const doContinue = () => {
    if (!run || !run.beforeLoss) return;
    const { state, col } = run.beforeLoss;
    run.continues++;
    run.beforeLoss = null;
    const res = pick(addTraySlots(state, 2), col)!;
    run.history = [];
    run.state = res.state;
    m.close();
    renderGame();
  };
  m.on('ad', async () => {
    if (await ads.rewarded('continue')) doContinue();
  });
  m.on('coin', () => {
    if (data.coins < PRICES.continue) return;
    data.coins -= PRICES.continue;
    commit();
    doContinue();
  });
  m.on('retry', () => {
    m.close();
    startLevel(run!.def.level);
  });
}

function showPause() {
  if (!run) return;
  sfx.click();
  const m = modal(`
    <h2>Mola</h2>
    ${settingsToggles()}
    <button class="btn btn-play" data-act="resume">Devam et</button>
    <button class="btn btn-gold" data-act="retry">Baştan başla</button>
    <button class="btn btn-ghost" data-act="home">Ana menü</button>`);
  bindToggles(m.el);
  m.on('resume', () => m.close());
  m.on('retry', () => {
    m.close();
    startLevel(run!.def.level);
  });
  m.on('home', () => {
    m.close();
    showHome();
  });
}

/* ------------------------------------------------------------- SETTINGS */

function settingsToggles() {
  const t = (key: 'sound' | 'vibration', label: string) =>
    `<label class="toggle"><span>${label}</span><input type="checkbox" data-toggle="${key}" ${data[key] ? 'checked' : ''}/><i></i></label>`;
  return `<div class="toggles">${t('sound', '🔊 Ses')}${t('vibration', '📳 Titreşim')}</div>`;
}

function bindToggles(root: HTMLElement) {
  root.querySelectorAll<HTMLInputElement>('[data-toggle]').forEach((inp) =>
    inp.addEventListener('change', () => {
      const key = inp.dataset.toggle as 'sound' | 'vibration';
      data[key] = inp.checked;
      setSound(data.sound);
      setVibration(data.vibration);
      commit();
      sfx.click();
    }),
  );
}

function showSettings() {
  sfx.click();
  const m = modal(`
    <h2>Ayarlar</h2>
    ${settingsToggles()}
    <button class="btn btn-ghost" data-act="reset">İlerlemeyi sıfırla</button>
    <p class="small">${APP_NAME} · v${__APP_VERSION__}</p>`);
  bindToggles(m.el);
  m.on('reset', () => {
    if (confirm('Tüm ilerleme silinsin mi?')) {
      data = reset();
      commit();
      m.close();
      showHome();
    }
  });
}

/* ---------------------------------------------------------------- UTILS */

function modal(inner: string, closable = true) {
  const el = h(`<div class="modal-bg"><div class="modal">${closable ? '<button class="close" data-act="x">✕</button>' : ''}${inner}</div></div>`);
  document.body.appendChild(el);
  const api = {
    el,
    close: () => el.remove(),
    on: (act: string, fn: () => void) => el.querySelector(`[data-act="${act}"]`)?.addEventListener('click', fn),
  };
  api.on('x', api.close);
  return api;
}

function toast(text: string) {
  const el = h(`<div class="toast">${text}</div>`);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

declare const __APP_VERSION__: string;

// Debug helper for testing: ?level=25 jumps straight to a level.
const qs = new URLSearchParams(location.search);
if (qs.get('level')) startLevel(Math.max(1, Number(qs.get('level')) || 1));
else showHome();

