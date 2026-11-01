/**
 * Ad layer. Version 1 ships a placeholder so the reward flow can be tested in the browser.
 * Version 2 will swap the implementation for AdMob (via a Capacitor plugin) on Android,
 * keeping this same interface so game code does not change.
 */
export interface Ads {
  /** Resolves true when the player watched to the end and should be rewarded. */
  rewarded(placement: string): Promise<boolean>;
  /** Full-screen ad between levels. Never shown when the player bought "No Ads". */
  interstitial(placement: string): Promise<void>;
}

function overlay(text: string, ms: number): Promise<void> {
  return new Promise((resolve) => {
    const el = document.createElement('div');
    el.className = 'ad-mock';
    el.innerHTML = `<div class="ad-mock-box"><div class="ad-mock-tag">REKLAM (test)</div><div>${text}</div><div class="ad-mock-bar"><i></i></div></div>`;
    document.body.appendChild(el);
    const bar = el.querySelector<HTMLElement>('.ad-mock-bar i')!;
    bar.animate([{ width: '0%' }, { width: '100%' }], { duration: ms, fill: 'forwards' });
    setTimeout(() => {
      el.remove();
      resolve();
    }, ms);
  });
}

export const ads: Ads = {
  async rewarded() {
    await overlay('Ödüllü reklam burada gösterilecek', 1500);
    return true;
  },
  async interstitial() {
    await overlay('Ara reklam burada gösterilecek', 1000);
  },
};
