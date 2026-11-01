import { describe, it, expect } from 'vitest';
import { WORDS, wordsFor, syllablesFor, STICKERS, ALPHABET, genitive, fill } from './content';

describe('içerik', () => {
  it('alfabe 29 harf', () => expect(ALPHABET).toHaveLength(29));

  it('heceler kelimeyi oluşturur ve her hecede bir sesli harf vardır', () => {
    for (const w of WORDS) {
      expect(w.syllables.join(''), w.text).toBe(w.text);
      for (const s of w.syllables) expect([...s].filter((c) => 'aeıioöuü'.includes(c)), `${w.text}: ${s}`).toHaveLength(1);
      expect(w.emoji.length, w.text).toBeGreaterThan(0);
    }
  });

  it('kelimeler tekrar etmez', () => {
    expect(new Set(WORDS.map((w) => w.text)).size).toBe(WORDS.length);
  });

  it('e n a t i ile kelime ve heceler', () => {
    const known = new Set(['e', 'n', 'a', 't', 'i']);
    const words = wordsFor(known).map((w) => w.text);
    expect(words).toContain('anne');
    expect(words).toContain('nine');
    expect(words).not.toContain('el');
    expect(syllablesFor(known).sort()).toEqual(['an', 'at', 'en', 'et', 'in', 'it', 'na', 'ne', 'ni', 'ta', 'te', 'ti']);
  });

  it('isim eki', () => {
    expect(genitive('Defne')).toBe("Defne'nin");
    expect(genitive('Elif')).toBe("Elif'in");
    expect(genitive('Ayşegül')).toBe("Ayşegül'ün");
    expect(genitive('Banu')).toBe("Banu'nun");
    expect(fill('{adın} sahnesi, {ad}!', 'Defne')).toBe("Defne'nin sahnesi, Defne!");
  });

  it('çıkartmalar', () => expect(STICKERS.length).toBe(30));
});
