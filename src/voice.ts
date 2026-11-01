/**
 * Ebeveynin kendi sesiyle yaptığı kayıtlar. Ses dosyaları sadece bu cihazda (IndexedDB) saklanır,
 * hiçbir sunucuya gönderilmez.
 */
const DB = 'okuma-sesler';
const STORE = 'kayitlar';

let dbp: Promise<IDBDatabase> | null = null;
function db(): Promise<IDBDatabase> {
  dbp ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbp;
}

function tx<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return db().then(
    (d) =>
      new Promise<T>((resolve, reject) => {
        const req = fn(d.transaction(STORE, mode).objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      }),
  );
}

/** Hangi anahtarların kaydı var (hızlı kontrol için bellekte tutulur). */
const have = new Set<string>();
const urls = new Map<string, string>();

export async function initVoices(): Promise<void> {
  try {
    const keys = (await tx('readonly', (s) => s.getAllKeys())) as string[];
    keys.forEach((k) => have.add(k));
  } catch {
    /* IndexedDB yoksa kayıtsız devam */
  }
}

export const hasVoice = (k: string) => have.has(k);
export const voiceCount = (keys: string[]) => keys.filter((k) => have.has(k)).length;

export async function saveVoice(k: string, blob: Blob) {
  await tx('readwrite', (s) => s.put(blob, k));
  have.add(k);
  const old = urls.get(k);
  if (old) URL.revokeObjectURL(old);
  urls.delete(k);
}

export async function deleteVoice(k: string) {
  await tx('readwrite', (s) => s.delete(k));
  have.delete(k);
  urls.delete(k);
}

async function urlFor(k: string): Promise<string | null> {
  if (!have.has(k)) return null;
  const cached = urls.get(k);
  if (cached) return cached;
  const blob = (await tx('readonly', (s) => s.get(k))) as Blob | undefined;
  if (!blob) return null;
  const u = URL.createObjectURL(blob);
  urls.set(k, u);
  return u;
}

/* ------------------------------------------------------------ playback */

let current: HTMLAudioElement | null = null;
let finishCurrent: (() => void) | null = null;

/** Çalan sesi durdurur; onu bekleyen kod da devam eder (yarıda kesilen ses takılı kalmasın). */
export function stopVoice() {
  if (current) {
    current.pause();
    current = null;
  }
  finishCurrent?.();
  finishCurrent = null;
}

/** Kaydı çalar, bitince çözülür. Kayıt yoksa hemen çözülür. */
export async function play(k: string, rate = 1): Promise<void> {
  const u = await urlFor(k);
  if (!u) return;
  stopVoice();
  const a = new Audio(u);
  a.playbackRate = rate;
  (a as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
  current = a;
  await new Promise<void>((resolve) => {
    finishCurrent = resolve;
    a.onended = () => resolve();
    a.onerror = () => resolve();
    a.play().catch(() => resolve());
  });
  if (current === a) {
    current = null;
    finishCurrent = null;
  }
}

export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function playSeq(keys: string[], gap = 250) {
  for (const k of keys) {
    await play(k);
    await wait(gap);
  }
}

/* ----------------------------------------------------------- recording */

export interface Recording {
  stop: () => Promise<Blob>;
}

let stream: MediaStream | null = null;

export async function startRecording(): Promise<Recording> {
  stream ??= await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
  });
  const type = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find((t) => MediaRecorder.isTypeSupported(t));
  const rec = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  rec.start();
  return {
    stop: () =>
      new Promise<Blob>((resolve) => {
        rec.onstop = () => resolve(new Blob(chunks, { type: rec.mimeType || type || 'audio/mp4' }));
        rec.stop();
      }),
  };
}

/** Mikrofonu kapatır (iPhone'daki turuncu nokta kaybolsun). */
export function releaseMic() {
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
}

/* ------------------------------------------------------- backup/restore */

export async function exportVoices(): Promise<Blob> {
  const out: Record<string, { type: string; data: string }> = {};
  for (const k of have) {
    const blob = (await tx('readonly', (s) => s.get(k))) as Blob;
    const buf = new Uint8Array(await blob.arrayBuffer());
    let bin = '';
    for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
    out[k] = { type: blob.type, data: btoa(bin) };
  }
  return new Blob([JSON.stringify({ app: 'hece-hece', v: 1, voices: out })], { type: 'application/json' });
}

export async function importVoices(file: File): Promise<number> {
  const json = JSON.parse(await file.text());
  if (json?.app !== 'hece-hece') throw new Error('Bu dosya bir yedek değil');
  let n = 0;
  for (const [k, v] of Object.entries(json.voices as Record<string, { type: string; data: string }>)) {
    const bin = atob(v.data);
    const buf = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    await saveVoice(k, new Blob([buf], { type: v.type }));
    n++;
  }
  return n;
}
