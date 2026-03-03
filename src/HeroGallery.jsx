import { useState, useEffect } from 'react';

function HeroGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'VERİ KURTARMA',
      subtitle: 'PROFESYONEL VERİ KURTARMA HİZMETİ',
      description: 'Hard Disk, SSD, USB Bellek ve Tüm Depolama Cihazlarından Veri Kurtarma. Clean Room Teknolojisi ile %95 Başarı Oranı.',
      buttonText: 'Detaylı Bilgi',
      buttonLink: '#hizmetlerimiz',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&h=600&fit=crop'
    },
    {
      title: 'CCTV GÜVENLİK SİSTEMLERİ',
      subtitle: 'PROFESYONEL GÜVENLİK KAMERA KURULUMU',
      description: 'IP Kamera, NVR/DVR Sistemleri, Gece Görüşlü Kameralar, Uzaktan İzleme ve Mobil Erişim. İş Yeriniz ve Eviniz İçin Eksiksiz Güvenlik.',
      buttonText: 'Ücretsiz Keşif',
      buttonLink: '#cctv',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=600&fit=crop'
    },
    {
      title: 'BİLGİSAYAR TAMİRİ',
      subtitle: 'HIZLI VE GÜVENİLİR SERVİS',
      description: 'Donanım Arızaları, Anakart Tamiri, Ekran Kartı Onarımı, Format ve Yazılım Hizmetleri. Garantili Yedek Parça Kullanımı.',
      buttonText: 'Detaylı Bilgi',
      buttonLink: '#hizmetlerimiz',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&h=600&fit=crop'
    },
    {
      title: 'KURUMSAL ÇÖZÜMLER',
      subtitle: 'AĞ ALTYAPISI & TEKNİK DESTEK',
      description: 'Elektronik Kart Tamiri, Network Altyapısı, Uydu Kurulumu ve 7/24 Kurumsal Teknik Destek Hizmetleri.',
      buttonText: 'İletişime Geçin',
      buttonLink: '#contact',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2b46]/80 via-[#0f2b46]/50 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-start text-left px-8 md:px-20">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#17ba60] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Teknomic Bilişim
              </div>
              {index === 0 ? (
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
              ) : (
                <span className="block text-white text-4xl md:text-6xl font-bold mb-4 leading-tight" role="heading" aria-level="2">
                  {slide.title}
                </span>
              )}
              <p className="text-[#0ea5e9] text-xl md:text-2xl font-semibold mb-6 tracking-wide">
                {slide.subtitle}
              </p>
              <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                {slide.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href={slide.buttonLink} className="bg-[#17ba60] text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-[#15a555] transition-all duration-200 inline-block shadow-lg">
                  {slide.buttonText}
                </a>
                <a href="#hakkimizda" className="border-2 border-white/30 text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 inline-block backdrop-blur-sm">
                  Bizi Tanıyın
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      {/* Arrows */}
      <button onClick={prevSlide} aria-label="Önceki slayt" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} aria-label="Sonraki slayt" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots Navigation */}
      <nav aria-label="Slayt navigasyonu" className="absolute bottom-8 left-8 md:left-20 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Slayt ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : undefined}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#17ba60] w-10'
                : 'bg-white/40 w-6 hover:bg-white/60'
            }`}
          />
        ))}
      </nav>
    </div>
  );
}

export default HeroGallery;
