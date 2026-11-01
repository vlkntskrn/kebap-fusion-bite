# Kebap Fusion Bite 🍢

Mutfak temalı, sipariş yetiştirmeli bir bulmaca oyunu (Android + web).

Müşteriler üst tarafta şiş siparişi verir. Her şiş için aynı malzemeden 3 tane gerekir.
Alttaki kasalardan malzemeye dokunursun. Malzeme bir siparişe uyuyorsa şişe takılır,
uymuyorsa **tezgâha** gider. Yeni gelen müşteri, tezgâhta istediği malzeme varsa onu alır.
Tezgâh dolarsa level kaybedilir.

Özel öğeler:
- **Gizli malzeme (?)**: Üstündekiler alınınca ne olduğu ortaya çıkar (Level 6+).
- **Donmuş kasa (❄️)**: Üstündeki sayı kadar sipariş teslim edilince çözülür (Level 11+).

Güçlendiriciler: Geri al, Karıştır, +1 Tezgâh.

## Nasıl oynanır / test edilir

| Ne | Nerede |
|---|---|
| Web sürümü (iPhone'da Safari ile) | `https://vlkntskrn.github.io/kebap-fusion-bite/` (main dalında yayınlanır) |
| Android APK | Releases → **latest** → `kebap-fusion-bite.apk` |
| Herhangi bir daldaki APK | Actions → "Android APK" → çalıştırma → Artifacts |

Belirli bir leveli test etmek için: `...?level=25`

## Teknik

- TypeScript + Vite, framework yok (hızlı açılış, küçük boyut: ~8 KB gzip JS).
- Android paketi: [Capacitor](https://capacitorjs.com) (`android/` klasörü).
- Leveller kodla üretilir (`src/game/levels.ts`). Her level aynı cihazda da farklı cihazda da aynıdır.
  Her level bir çözücüyle **çözülebilir** olduğu doğrulanır, zorluk da bot simülasyonuyla hedefe ayarlanır.
  Level sayısı sınırsız.
- Reklam katmanı `src/ads.ts`. Şimdilik test ekranı gösterir, sürüm 2'de AdMob'a bağlanacak.

```bash
npm install
npm run dev        # yerel geliştirme
npm test           # motor + ilk 150 levelin çözülebilirlik testi
npm run build      # dist/
npx cap sync android && cd android && ./gradlew assembleDebug
```

## Yol haritası

- [x] v1: Çekirdek oyun, sınırsız level, güçlendiriciler, günlük ödül, APK + web yayını
- [ ] v2: AdMob (ödüllü + ara reklam), Google Play Billing (reklamsız, coin paketleri), can sistemi
- [ ] v3: Level haritası, başarımlar, Play Store sayfası ve görseller, gizlilik politikası
