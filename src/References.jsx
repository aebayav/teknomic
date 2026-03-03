import { FaStar, FaBuilding } from 'react-icons/fa';

function References() {
  const references = [
    {
      name: "Mehmet Yılmaz",
      company: "İş İnsanı - Çankaya",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "Laptopumun hard diski çöktü, tüm iş dosyalarım kaybolmuştu. Teknomic ekibi %100 veri kurtardı. Hayat kurtardılar gerçekten!"
    },
    {
      name: "Ayşe Demir",
      company: "Muhasebeci - Kızılay",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "Bilgisayarımın anakartı yanmıştı. Garantili parça ile tamir ettiler, aynı gün teslim aldım. Fiyatlar çok uygun."
    },
    {
      name: "Can Özkan",
      company: "Öğrenci - Keçiören",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      comment: "Tez dosyalarım olan USB bellekten veri kurtarma yaptılar. Ümitsizken tüm dosyalarımı geri aldım. Teşekkürler!"
    },
    {
      name: "Elif Kaya",
      company: "Grafik Tasarımcı - Ulus",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "Bilgisayarım çok yavaşlamıştı. SSD upgrade ve RAM takviyesi yaptılar. Şimdi roket gibi çalışıyor!"
    },
    {
      name: "Burak Şahin",
      company: "Ofis Yöneticisi - Bahçelievler",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      comment: "Ofisimize network altyapısı ve IP kamera sistemi kurdular. Profesyonel iş, kesinlikle tavsiye ederim."
    },
    {
      name: "Zeynep Arslan",
      company: "Ev Hanımı - Etimesgut",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      comment: "Bilgisayarım virüs kapmıştı ve açılmıyordu. Aynı gün içinde temizleyip format attılar. Çok memnunum."
    }
  ];

  const corporateClients = [
    {
      name: "Türkiye Büyük Millet Meclisi",
      sector: "Kamu Kurumu",
      service: "Bilgisayar Teknik Servis ve Bakım",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=TBMM"
    },
    {
      name: "Ankara Üniversitesi",
      sector: "Eğitim",
      service: "IPTV Altyapı Sistemi",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=AU"
    },
    {
      name: "Başkent Doğalgaz",
      sector: "Enerji",
      service: "Veri Kurtarma ve IT Destek",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=BASKENT"
    },
    {
      name: "Nata Vega AVM",
      sector: "Alışveriş Merkezi",
      service: "Dijital Signage ve Yayın Sistemleri",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=NATA"
    },
    {
      name: "Sheraton Hotel Ankara",
      sector: "Otelcilik",
      service: "Tüm Odalar IPTV ve Uydu Kurulumu",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=SHERATON"
    },
    {
      name: "Ankara İl Milli Eğitim Müdürlüğü",
      sector: "Kamu - Eğitim",
      service: "Bilgisayar Bakım ve Onarım Hizmetleri",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=MEB"
    },
    {
      name: "ASELSAN",
      sector: "Savunma Sanayi",
      service: "Elektronik Ekipman Onarım",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=ASELSAN"
    },
    {
      name: "Tunalı Hilmi İş Merkezi",
      sector: "Ticari Bina",
      service: "Merkezi Uydu ve Network Altyapısı",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=TUNALI"
    },
    {
      name: "Kızılay Dernekleri Federasyonu",
      sector: "STK",
      service: "IT Destek ve Veri Güvenliği",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=KIZILAY"
    },
    {
      name: "Hacettepe Teknokent",
      sector: "Teknoloji Parkı",
      service: "Tesis Geneli Teknik Hizmetler",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=HT"
    },
    {
      name: "ANKAmall AVM",
      sector: "Alışveriş Merkezi",
      service: "Merkezi Yayın ve Ses Sistemleri",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=ANKAMALL"
    },
    {
      name: "Çankaya Belediyesi",
      sector: "Kamu Kurumu",
      service: "Bilgisayar Donanım ve Yazılım Hizmetleri",
      logo: "https://via.placeholder.com/150x80/0f2b46/ffffff?text=CANKAYA"
    }
  ];

  return (
    <section id="referanslar" className="py-20 bg-[#f8fafc] reveal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0f2b46] mb-4">
            MÜŞTERİ YORUMLARI
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f2b46] to-[#d97706] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin deneyimleri ve değerlendirmeleri
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {references.map((reference, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(reference.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#d97706] text-lg" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{reference.comment}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={reference.image}
                  alt={`${reference.name} - ${reference.company} müşteri yorumu`}
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {reference.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {reference.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0f2b46] mb-2">%98</h3>
            <p className="text-gray-600">Müşteri Memnuniyeti</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0f2b46] mb-2">10+</h3>
            <p className="text-gray-600">Yıl Sektör Deneyimi</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0f2b46] mb-2">2,412+</h3>
            <p className="text-gray-600">Başarılı Veri Kurtarma</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0f2b46] mb-2">12+</h3>
            <p className="text-gray-600">Kurumsal Çözüm Ortağı</p>
          </div>
        </div>

        {/* Corporate Clients Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0f2b46] mb-4">
              KURUMSAL REFERANSLARIMIZ
            </h3>
            <p className="text-lg text-gray-600">
              Önde gelen kurumların güvendiği çözüm ortağı
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {corporateClients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                {/* Logo Area */}
                <div className="mb-4 flex items-center justify-center h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 group-hover:from-[#0f2b46]/5 group-hover:to-[#1e40af]/5 transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={`${client.name} kurumsal referans logosu`}
                    loading="lazy"
                    width="150"
                    height="80"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Company Name */}
                <h4 className="font-bold text-gray-800 text-center mb-2 text-sm leading-tight min-h-[40px] flex items-center justify-center">
                  {client.name}
                </h4>

                {/* Sector Badge */}
                <div className="text-center mb-3">
                  <p className="inline-block bg-[#1e40af]/10 text-[#1e40af] text-xs font-semibold px-3 py-1 rounded-full">
                    {client.sector}
                  </p>
                </div>

                {/* Service Info */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    {client.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default References;
