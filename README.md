# Today Sports — sunum sitesi

Gaziemir'deki Today Sports için hazırlanmış, mobil uyumlu tek sayfalık web sitesi taslağıdır. Proje HTML, CSS ve JavaScript ile kurulmuştur; derleme adımı gerektirmez.

## Taslak durumu

- Sayfa arama motorlarına kapalıdır (`noindex`, `robots.txt` ve Cloudflare başlığı).
- Kullanılan fotoğraflar temsilidir ve sayfada açıkça etiketlenmiştir.
- Fiyat, WhatsApp, ücretsiz deneme, sağlık sonucu ve doğrulanmamış eğitmen bilgisi eklenmemiştir.
- İletişim, adres, Instagram, Google puanı, dersler, MultiSport ve çalışma saatleri kamuya açık işletme kaynaklarından derlenmiştir.
- Resmî yayından önce tüm metinler ve görseller işletme tarafından onaylanmalıdır.

## Arayüz ve erişilebilirlik

- Açık/koyu tema anahtarı sistem tercihini izler, ziyaretçinin seçimini hatırlar ve hareket azaltma tercihlerine saygı gösterir.
- Yakınlaştırma kapatılmamıştır: viewport ayarında `maximum-scale` veya `user-scalable=no` bulunmaz.
- iPhone güvenli alanı için alttaki hızlı iletişim çubuğu `safe-area-inset-bottom` değerini kullanır.
- Menü, iletişim penceresi, bölüm bağlantıları ve SSS klavye/ekran okuyucu etiketlerine sahiptir.

## Doğrulanan ekran ölçüleri

- iPhone SE: 375 × 667
- iPhone 13/14/15: 390 × 844
- iPhone Pro Max: 430 × 932
- Android: 360 × 800 ve 412 × 915
- iPad mini: 768 × 1024
- iPad Air: 820 × 1180
- Dar/zoom eşdeğeri kontrol: 320 × 568

Bu ölçülerde yatay taşma, üst menü çakışması, modal taşması ve sabit iletişim çubuğu kontrol edilmiştir. Fiziksel iPhone Safari pinch hareketi masaüstü test ortamında birebir üretilemediği için son cihaz testi ayrıca yapılmalıdır.

## Yerel önizleme

```powershell
python -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## Cloudflare Pages ayarı

- Framework preset: `None`
- Build command: boş
- Build output directory: `.`
- Production branch: `main`

## İletişim bilgileri

- Telefon: 0554 605 17 65
- Instagram: [@todaypilatesday](https://www.instagram.com/todaypilatesday/)
- Konum: Atıfbey Mahallesi, Akçay Caddesi, 5/3 Sokak No:11, Şahin Plaza Kat:2, Gaziemir/İzmir
