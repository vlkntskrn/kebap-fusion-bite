import { describe, it, expect } from 'vitest';
import { syllabify, buildSong } from './music';

describe('şarkı', () => {
  it('heceler', () => {
    expect(syllabify('Defne')).toEqual(['Def', 'ne']);
    expect(syllabify('Işıklar')).toEqual(['I', 'şık', 'lar']);
    expect(syllabify('yıldızsın!')).toEqual(['yıl', 'dız', 'sın!']);
    expect(syllabify('birlikte!')).toEqual(['bir', 'lik', 'te!']);
    expect(syllabify('la')).toEqual(['la']);
  });
  it('şarkı adı ve harfleri içerir', () => {
    const song = buildSong('Defne', ['e', 'n', 'a', 't', 'i']);
    expect(song).toHaveLength(8);
    expect(song[1].syl.slice(0, 2)).toEqual(['Def', 'ne']);
    expect(song[4].syl).toEqual(['e,', 'n,', 'a,', 't,', 'i!']);
    for (const l of song) expect(l.syl.length).toBeLessThanOrEqual(12);
  });
});
