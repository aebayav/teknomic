# Teknomic Bilişim - Kurumsal Web Sitesi

Ankara merkezli **Teknomic Bilişim Teknolojileri**'nin kurumsal web sitesi. Veri kurtarma, bilgisayar tamiri, CCTV güvenlik kamera sistemleri, ağ altyapısı ve teknik servis hizmetlerini tanıtan modern, SEO uyumlu ve responsive tek sayfa uygulama.

## Özellikler

- **Responsive Tasarım** — Mobil, tablet ve masaüstü cihazlarda sorunsuz görüntüleme
- **Kurumsal Renk Paleti** — Navy, blue, sky, green ve amber tonlarında profesyonel tasarım
- **SEO Optimizasyonu** — JSON-LD yapılandırılmış veri, Open Graph, meta etiketler, sitemap, robots.txt
- **Erişilebilirlik** — Semantik HTML, aria etiketleri, klavye navigasyonu
- **Performans** — Lazy loading, optimize edilmiş görseller, minimal bundle boyutu
- **Full-Screen Hero Slider** — Otomatik geçişli 4 slaytlık galeri
- **Hizmetler Bölümü** — 7 hizmet kartı, detaylı modal görünüm
- **CCTV Bölümü** — Güvenlik kamera çözümleri özellik ve avantajları
- **Müşteri Referansları** — Bireysel yorumlar ve 12 kurumsal referans
- **İletişim Formu** — Form validasyonu ve Google Maps entegrasyonu
- **SSS Bölümü** — Genişletilebilir 9 soruluk accordion

## Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 19.1 | UI kütüphanesi |
| Vite | 7.1 | Build aracı ve dev server |
| Tailwind CSS | 4.1 | Utility-first CSS framework |
| React Icons | 5.5 | İkon kütüphanesi |
| ESLint | 9.x | Kod kalite kontrolü |

## Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/aebayav/teknomic.git
cd teknomic

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır (HMR destekli) |
| `npm run build` | Üretim için optimize edilmiş build oluşturur (`dist/`) |
| `npm run preview` | Build çıktısını yerel sunucuda önizler |
| `npm run lint` | ESLint ile kod kalite kontrolü yapar |

## Proje Yapısı

```
src/
├── main.jsx            # Uygulama giriş noktası
├── NavBar.jsx          # Navigasyon barı (üst bilgi çubuğu + menü)
├── HeroGallery.jsx     # Tam ekran hero slider
├── AboutUs.jsx         # Hakkımızda - istatistikler, vizyon, misyon
├── Services.jsx        # Hizmetler grid ve detay modalı
├── CCTV.jsx            # CCTV güvenlik kamera bölümü
├── FAQ.jsx             # Sıkça Sorulan Sorular (accordion)
├── References.jsx      # Müşteri yorumları ve kurumsal referanslar
├── Contact.jsx         # İletişim formu ve harita
├── Footer.jsx          # Alt bilgi
├── WhatsAppButton.jsx  # Sabit WhatsApp butonu
├── assets/
│   └── style.css       # Global stiller ve CSS custom properties
└── hooks/
    └── useScrollReveal.js  # Scroll animasyon hook'u
public/
├── robots.txt          # Arama motoru yönergeleri
└── sitemap.xml         # Site haritası
```

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
