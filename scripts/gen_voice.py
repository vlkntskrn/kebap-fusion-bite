#!/usr/bin/env python3
"""
Sesli talimatları doğal bir Türkçe kadın sesiyle (Microsoft Edge "Emel" sesi, edge-tts) seslendirip
public/ses/ içine mp3 olarak koyar. GitHub Actions'ta site derlenmeden önce çalışır (internet gerekir).
Oyun, ebeveynin kendi kaydı yoksa önce bu dosyaları, yoksa cihazın sesini kullanır.

  pip install edge-tts && python3 scripts/gen_voice.py
"""
import asyncio
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "ses"
NAME = "Defne"
VOICE = "tr-TR-EmelNeural"


def genitive(name: str) -> str:
    vowels = [c for c in name.lower() if c in "aeıioöuü"]
    last = vowels[-1] if vowels else "e"
    v = {"a": "ı", "ı": "ı", "e": "i", "i": "i", "o": "u", "u": "u", "ö": "ü", "ü": "ü"}[last]
    return f"{name}'{'n' if name[-1].lower() in 'aeıioöuü' else ''}{v}n"


def lines():
    src = (ROOT / "src" / "content.ts").read_text()
    talk = src.split("export const TALK = {")[1].split("} as const;")[0]
    out = {}
    for m in re.finditer(r"^\s*(\w+): '((?:[^'\\]|\\.)*)',", talk, re.M):
        out[f"tal:{m.group(1)}"] = m.group(2).replace("\\'", "'")
    praises = re.search(r"export const PRAISES = \[(.*?)\];", src, re.S).group(1)
    for i, t in enumerate(re.findall(r"'([^']*)'", praises)):
        out[f"ovgu:{i}"] = t
    return {k: v.replace("{adın}", genitive(NAME)).replace("{ad}", NAME) for k, v in out.items()}


async def main():
    import edge_tts

    OUT.mkdir(parents=True, exist_ok=True)
    items = lines()
    files = {}
    for key, text in items.items():
        fn = key.replace(":", "_") + ".mp3"
        await edge_tts.Communicate(text, VOICE, rate="-6%", pitch="+2Hz").save(str(OUT / fn))
        files[key] = fn
        print(fn, "|", text)
    (OUT / "index.json").write_text(json.dumps({"name": NAME, "voice": VOICE, "files": files}, ensure_ascii=False, indent=1))
    print(f"{len(files)} ses dosyası")


if __name__ == "__main__":
    if "--list" in sys.argv:
        for k, v in lines().items():
            print(k, "|", v)
    else:
        asyncio.run(main())
