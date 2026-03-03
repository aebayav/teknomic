import { useState } from 'react';
import { FaHdd, FaLaptop, FaMicrochip, FaSatelliteDish, FaNetworkWired, FaTools, FaTimes, FaVideo } from 'react-icons/fa';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaHdd className="text-4xl text-[#0f2b46] mb-4" />,
      title: "Veri Kurtarma",
      description: "Kaybolan verilerinizi profesyonel ekipman ve yazılımlarla kurtarıyoruz.",
      detailedDescription: "Hard disk, SSD, USB bellek, hafıza kartı ve tüm veri depolama cihazlarından veri kurtarma hizmeti sunuyoruz. Fiziksel hasar, format, virüs saldırısı veya sistem arızası nedeniyle kaybolan verilerinizi en gelişmiş teknolojik ekipmanlar ve yazılımlarla geri kazanıyoruz. Clean room ortamında profesyonel veri kurtarma işlemleri gerçekleştiriyoruz.",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&h=600&fit=crop"
    },
    {
      icon: <FaLaptop className="text-4xl text-[#1e40af] mb-4" />,
      title: "Bilgisayar Tamiri",
      description: "Masaüstü ve dizüstü bilgisayarlarınız için hızlı ve güvenilir tamir hizmeti.",
      detailedDescription: "Tüm marka ve model bilgisayarlar için profesyonel tamir hizmeti sunuyoruz. Donanım arızaları, yazılım sorunları, virüs temizliği, format ve işletim sistemi kurulumu, performans artırma işlemleri gerçekleştiriyoruz. Orijinal yedek parça kullanımı ve garantili hizmet sunuyoruz. Yerinde ve atölyemizde tamir seçeneklerimiz mevcuttur.",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop"
    },
    {
      icon: <FaMicrochip className="text-4xl text-[#0ea5e9] mb-4" />,
      title: "Elektronik Kart Tamiri",
      description: "Bilgisayar anakart ve tüm elektronik kart tamiri hizmetleri.",
      detailedDescription: "Bilgisayar anakartları, ekran kartları, güç kaynakları ve diğer elektronik kartların profesyonel tamiri. BGA reballing, mikroişlemci değişimi, kondansatör değişimi ve devre onarımı gibi ileri seviye elektronik tamir işlemleri yapıyoruz. Uzman ekibimiz ve modern ekipmanlarımızla yüksek başarı oranına sahibiz.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      icon: <FaSatelliteDish className="text-4xl text-[#0f2b46] mb-4" />,
      title: "Uydu Sistemleri",
      description: "Uydu kurulumu, ayar ve bakım hizmetleri sunuyoruz.",
      detailedDescription: "Ev ve işyerleri için profesyonel uydu kurulum hizmeti. Merkezi uydu sistemleri, çanak anten kurulumu, LNB ayarları, receiver kurulumu ve tüm uydu ekipmanlarının satışı. Sinyal optimizasyonu, kanal tarama ve sistem bakım hizmetleri ile kesintisiz yayın deneyimi sağlıyoruz. Tüm marka ve model uydu alıcılarının tamiri.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
    },
    {
      icon: <FaVideo className="text-4xl text-[#1e40af] mb-4" />,
      title: "CCTV & Güvenlik Kameraları",
      description: "Profesyonel CCTV ve güvenlik kamera sistemi kurulumu ve bakımı.",
      detailedDescription: "Ev, işyeri ve kurumsal alanlar için profesyonel CCTV ve güvenlik kamera sistemi kurulumu gerçekleştiriyoruz. IP kamera, analog kamera, NVR/DVR kayıt cihazları, gece görüşlü kameralar, hareket algılamalı sistemler ve uzaktan izleme çözümleri sunuyoruz. Mevcut kamera sistemlerinin bakımı, güncellemesi ve genişletilmesi konusunda uzmanız. Tüm sistemlerde mobil erişim ve bulut kayıt seçenekleri mevcuttur.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop"
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#0ea5e9] mb-4" />,
      title: "Ağ Sistemleri",
      description: "Kurumsal ve bireysel ağ altyapısı kurulumu ve yönetimi.",
      detailedDescription: "Ofis ve işyerleri için kablolu ve kablosuz ağ altyapısı kurulumu. Yapılandırılmış kablolama, switch ve router kurulumu, WiFi sistemleri, network güvenliği ve izleme sistemleri kuruyoruz. Ağ sorunlarının teşhisi ve çözümü konusunda uzmanız.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      icon: <FaTools className="text-4xl text-[#17ba60] mb-4" />,
      title: "Teknik Servis ve Destek",
      description: "7/24 teknik destek ve profesyonel servis hizmetleri.",
      detailedDescription: "Tüm hizmetlerimiz için 7/24 teknik destek sunuyoruz. Acil müdahale, uzaktan destek, yerinde servis ve atölye tamir seçenekleri mevcuttur. Kurumsal firmalara özel bakım sözleşmeleri ve öncelikli servis hizmeti. Preventif bakım programları ile sistemlerinizin ömrünü uzatıyor, arızaları önceden önlüyoruz.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="hizmetlerimiz" className="py-20 bg-white reveal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0f2b46] mb-4">
            HİZMETLERİMİZ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f2b46] to-[#17ba60] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teknoloji ve güvenlik alanında ihtiyacınız olan tüm hizmetleri profesyonel ekibimizle sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => openModal(service)}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group cursor-pointer border-l-4 border-l-transparent hover:border-l-[#0f2b46]"
            >
              <div className="flex justify-center transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f2b46] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="#cctv" className="bg-[#0f2b46] text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-[#1a3a5c] transition-all duration-300 shadow-lg inline-block">
            CCTV & Güvenlik Sistemleri
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[300] flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 backdrop-blur-xl rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedService.image}
                alt={`${selectedService.title} - Teknomic hizmet detayı`}
                loading="lazy"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button
                onClick={closeModal}
                aria-label="Modalı kapat"
                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#0f2b46]">
                  {selectedService.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#0f2b46]">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedService.detailedDescription}
              </p>

              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-[#0f2b46] text-white px-6 py-3 rounded-lg hover:bg-[#1a3a5c] transition-all inline-block"
                  onClick={closeModal}
                >
                  Hemen İletişime Geç
                </a>
                <button
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all"
                  onClick={closeModal}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
