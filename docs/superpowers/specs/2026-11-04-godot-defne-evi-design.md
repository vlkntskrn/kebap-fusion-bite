# Defne'nin Evi — Godot (Android) sürümü: tasarım

Tarih: 2026-11-04 · Durum: onay bekliyor

## Amaç

Hece Hece'deki "Defne'nin Evi" bölümünü Godot 4.7.2 ile yeniden yazmak; Defne'nin telefonunda (Android) oynanabilen bir oyun yapmak.
Başarı ölçütü: Volkan projeyi kendi Godot 4.7.2'sinde açıp çalıştırabilir, GitHub'ın ürettiği APK'yı telefona kurup oynayabilir;
bugün web'de yapılabilen ev oyunu işlerinin hepsi Godot sürümünde de yapılabilir.

Kapsam dışı (şimdilik): hece okuma oyunu, seslendirmeler, Play Store imzası ve yayını. Web oyunu olduğu gibi kalır ve yayında kalmaya devam eder.

## Kararlar (Volkan'ın söyledikleri)

- Motor: Godot 4.7.2 (Volkan'ın bilgisayarındaki sürüm). Dil: GDScript.
- İlk taşınan bölüm: Defne'nin evi.
- Kıyafetler: 2D "manken + baş" düzeni (aşağıda), kıyafetli karakter önden/yandan/arkadan döner.

## Proje düzeni

- Aynı depoda `godot/` klasörü: `godot/project.godot`, sahneler (`scenes/`), betikler (`scripts/`), veriler (`data/`), görseller (`art/`).
- Görseller ve veriler elle kopyalanmaz: `scripts/godot_export.py` web projesindeki kaynaklardan üretir
  (`src/assets/items/*.webp`, `anchors.json`, `items.json`, oda tanımları, eşya boyları ve oturma yerleri, kategoriler, kutular, giyilenler).
  Yeni görsel geldiğinde aynı betik Godot tarafını da günceller. Yalnızca SVG ile çizilmiş eski eşyalar PNG'ye çevrilir.
- Ekran yatay; tek dokunuşla oynanır (sürükleme, dokunma, iki parmakla yakınlaştırma).

## Bölümler

1. **Ev haritası** — katlar ve odalar; odaya dokununca oda tam ekran açılır; bahçe odaları dışarıda.
2. **Oda** — duvar ve zemin (desen ve renk), pencere manzarası, gece-gündüz ve lambalar, yakınlaştırma ve kaydırma.
3. **Eşya menüsü** — kategoriler, odaya özel liste, sürükleyip odaya bırakma.
4. **Eşya etkileşimi** — taşıma, öne/arkaya dizilme (y'ye göre), oturma/yatma/banyo (eşyanın oturma çizgisi), elde tutma, yemek yeme,
   kutuları açma ve içine eşya koyma, kapılardan başka odaya geçiş.
5. **Araçlar** — geri al, çöp, büyüt/küçült, aynala (⇋), döndür (önden → yandan → arkadan), sıfırla.
6. **Giydirme** — takılar (baş, göz, kulak, boyun, el, çanta, yüz süsü; aynı oturma noktaları) ve manken kıyafetleri.
7. **Kayıt** — ev durumu cihazda saklanır (`user://`), uygulama kapanıp açılınca ev yerinde durur.

## Manken kıyafetleri (karakter katmanları)

- Üç manken: çocuk, yetişkin, bebek. Her mankenin dört duruşu: önden, yandan, arkadan, oturan. Teni tek, belirgin bir renk.
- Kıyafet = mankenin o kıyafeti giymiş dört duruşu (tek Gemini isteği, 2×2 sayfa). Kızlara kız, erkeklere erkek, bebeklere bebek kıyafetleri.
- Baş = karakterin bugünkü önden/yandan/arkadan/oturan resimlerinden kesilen baş ve saç. Yeni baş üretilmez.
- Kıyafetli karakter = kıyafetli manken + karakterin başı; mankenin teni karakterin ten rengine boyanır.
- Kıyafet seçilmemişse karakter bugünkü resmiyle görünür.
- Önce deneme: çocuk mankeni + 2 kıyafet, kiz1 ve oglan1 ile; beğenilirse kalan istekler ASSETS.md'ye yazılır.

## Teslim adımları

Her adımın sonunda: Godot burada çalıştırılıp ekran görüntüleriyle kontrol edilir, GitHub'da APK üretilir, Volkan'a nasıl deneyeceği yazılır.

1. Proje iskeleti, görsel ve veri aktarımı, ev haritası, odalar, eşyaları görme ve taşıma, kayıt, APK üretimi.
2. Eşya menüsü, araçlar, geri alma ve çöp.
3. Oturma/yatma, yemek, kutular, kapılar, gece-gündüz ve lambalar.
4. Giydirme ve manken kıyafetleri (deneme sonucu iyiyse), döndürme.

## APK

- `.github/workflows/android.yml`: Godot 4.7.2 ve dışa aktarma şablonları indirilir, hata ayıklama anahtarıyla imzalı APK üretilir,
  "Actions" sayfasında indirilebilir dosya olarak durur. Telefonda "bilinmeyen kaynaklardan yükleme" izni gerekir.

## Test

- Godot burada başsız (headless) çalıştırılarak betik hataları yakalanır; Xvfb ile ekran görüntüsü alınır.
- Veri aktarımı için denetim: her eşyanın resmi ve boyu var, her odanın başlangıç eşyaları var.
- Temel akışlar için Godot içinde küçük otomatik denemeler (eşya bırakma, oturtma, kayıt-yükleme).
