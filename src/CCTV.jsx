import { FaVideo, FaShieldAlt, FaMobileAlt, FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa';

function CCTV() {
  const features = [
    {
      icon: <FaVideo className="text-3xl text-[#1e40af]" />,
      title: "IP & Analog Kamera",
      description: "HD, Full HD ve 4K çözünürlükte IP ve analog kamera sistemleri kurulumu."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#0f2b46]" />,
      title: "7/24 Gözetim",
      description: "Gece görüşlü, hareket algılamalı ve akıllı analiz destekli sürekli gözetim."
    },
    {
      icon: <FaMobileAlt className="text-3xl text-[#0ea5e9]" />,
      title: "Uzaktan İzleme",
      description: "Mobil uygulama ile dünyanın her yerinden canlı izleme ve anlık bildirimler."
    },
    {
      icon: <FaCloudUploadAlt className="text-3xl text-[#17ba60]" />,
      title: "Bulut Kayıt",
      description: "NVR/DVR ve bulut tabanlı kayıt çözümleri ile güvenli veri depolama."
    }
  ];

  const benefits = [
    "Ücretsiz keşif ve profesyonel proje tasarımı",
    "Tüm marka ve model kamera sistemleri",
    "Kurumsal ve bireysel çözümler",
    "Kurulum sonrası teknik destek ve bakım",
    "Mevcut sistemlerin güncellenmesi ve genişletilmesi",
    "Garantili ürün ve işçilik"
  ];

  return (
    <section id="cctv" className="py-20 bg-[#f8fafc] reveal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f2b46] mb-4">
            CCTV & GÜVENLİK KAMERA SİSTEMLERİ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f2b46] to-[#0ea5e9] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            İş yeriniz ve eviniz için profesyonel güvenlik kamera sistemi kurulumu. 
            Modern teknoloji ile güvenliğinizi en üst seviyeye taşıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-[#1e40af]"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f2b46] mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA with Benefits */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-r from-[#0f2b46] to-[#1a3a5c] rounded-2xl p-10 text-white">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Neden Teknomic CCTV?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              10 yılı aşkın tecrübemizle yüzlerce ev ve iş yerine güvenlik kamera sistemi kurduk. 
              Profesyonel ekibimiz, ihtiyacınıza en uygun çözümü belirleyerek kusursuz kurulum gerçekleştirir.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#17ba60] flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop"
              alt="Teknomic CCTV güvenlik kamera sistemi kurulumu örneği Ankara"
              loading="lazy"
              width="800"
              height="500"
              className="rounded-xl shadow-2xl w-full object-cover h-[350px]"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-[#17ba60] text-white px-10 py-3.5 text-sm font-semibold rounded-lg hover:bg-[#15a555] transition-all duration-300 shadow-lg inline-block"
          >
            Keşif Talebi Oluştur
          </a>
        </div>
      </div>
    </section>
  );
}

export default CCTV;
