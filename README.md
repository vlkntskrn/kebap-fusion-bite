# Defne'nin Okuma Oyunu (Hece Hece) 🔤

1. sınıfa başlayan çocuklar için **ses temelli ilk okuma** oyunu. Harf seslerini tanımayı,
sesleri birleştirip hece oluşturmayı (n + a → **na**) ve hecelerden kelime kurmayı çalıştırır.

Oyundaki bütün sesler **anne ya da babanın kendi sesiyle** kaydedilir. Böylece harf sesleri öğretmenin
öğrettiği gibi söylenir ("ne" değil "nnn"). Kayıtlar sadece cihazda saklanır, hiçbir yere gönderilmez.

## Oyunlar

| Oyun | Ne çalıştırır |
|---|---|
| 👂 **Sesi Bul** | Sesi duyar, doğru harfi seçer. Yanlışta seçtiği harfin sesini ve doğru sesi art arda duyar, karşılaştırır. |
| 🔗 **Sesleri Birleştir** | İki harfe dokunup seslerini dinler, "Birleştir"e basar: "n… a… **na**". Sonra **na / an** gibi sırası ters heceleri ayırt eder. |
| 🧩 **Kelime Kur** | Resmi görür, kelimeyi dinler, heceleri sırayla dizer (an + ne → anne). |
| 📖 **Oku** | Kelimeyi önce kendisi sesli okur, sonra dinleyip kontrol eder. Heceler renkli çizgiyle ayrılır. |

| 👑 **Defne'nin Sahnesi** | Kâğıt bebek giydirme (prenses / pop yıldızı kıyafetleri, saç, taç, mikrofon, sahne) ve boyama sayfaları (kale, taç, çiçek, dondurma, kelebek, kendi adı). Bebeğin saçına, tenine ya da kıyafetine dokunup rengini değiştirir. Okuma oyununda 6 sorudan en az 4'ünü ilk denemede bilince **hediye** kazanır, kilitli 22 parçadan birini seçer. Ardından bebeği sahneye çıkıp **özgün bir şarkı** söyler: sözlerde çocuğun adı ve öğrendiği harfler geçer, karaoke gibi hece hece yanar. |

| 🏠 **Defne'nin Evi** | Yatak odası, mutfak, banyo, salon. Eşyaları parmakla sürükleyip yerleştirme, alttaki çekmeceden yeni eşya çekme, çekmeceye geri bırakıp kaldırma. Lamba yanar, TV açılır, küvet köpürür, çamaşır makinesi döner. Bebek ve evcil hayvanı odalarda gezer. |

- **Her şey sesli:** Çocuk henüz okuyamadığı için her ekran ne yapılacağını adıyla söyler ("Defne, sesi dinle…"). Ebeveyn bu talimatları kendi sesiyle kaydedebilir. Kayıt yoksa telefonun Türkçe sesi okur. Her ekrandaki sarı 🔊 düğmesi talimatı tekrarlar.
- Sesli harfler **kırmızı**, sessiz harfler **mavi** gösterilir.
- Yazı tipi: [Andika](https://software.sil.org/andika/). Okumayı yeni öğrenenler için tasarlanmıştır, "a" harfi okulda yazıldığı gibi tek katlıdır.
- Oyun yalnızca çocuğun **öğrendiği harflerle** hece ve kelime üretir. Ebeveyn panelinden yeni harf eklendikçe kelimeler kendiliğinden açılır.
- Zorlandığı harf ve heceler daha sık sorulur.
- Her oyun sonunda bir çıkartma kazanılır (30 çıkartmalık albüm). Reklam ve satın alma yoktur.

## Kullanım

1. iPhone'da Safari ile aç: **https://vlkntskrn.github.io/kebap-fusion-bite/**
2. Paylaş → **Ana Ekrana Ekle**. Uygulamayı bundan sonra ana ekrandaki ikondan aç.
3. **Ebeveyn** → toplama sorusunu cevapla → öğrenilen harfleri işaretle → sesleri kaydet.
   Kayıtları ana ekran uygulamasının içinden yap, çünkü Safari ile ana ekran uygulaması kayıtları paylaşmaz.
4. Telefon değiştirmeden önce **Yedek al** ile kayıtları dosyaya kaydet.

## Geliştirme

```bash
npm install
npm run dev     # yerel sunucu
npm test        # içerik testleri (kelime-hece tutarlılığı vb.)
npm run build   # dist/ → GitHub Pages
```

- `src/content.ts`: alfabe, kelime listesi (hece ayrımı ve resim), hece üretimi
- `src/voice.ts`: kayıt (MediaRecorder), saklama (IndexedDB), çalma, yedekleme
- `src/main.ts`: ekranlar ve oyunlar
