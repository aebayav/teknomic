import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Veri kurtarma başarı oranınız nedir?",
      answer: "Veri kurtarma başarı oranımız %95'in üzerindedir. Fiziksel hasarlı diskler için clean room ortamında çalışıyoruz. İlk inceleme ücretsizdir ve veri kurtarma garantisi sunuyoruz."
    },
    {
      question: "Hard diskimden veri kurtarma ne kadar sürer?",
      answer: "Basit yazılımsal problemler için 1-3 gün, fiziksel hasarlı diskler için 5-10 iş günü sürebilir. Acil durumlar için ekspres veri kurtarma hizmetimiz mevcuttur."
    },
    {
      question: "Bilgisayar tamiri ne kadar sürer?",
      answer: "Sorunun türüne göre değişir. Yazılımsal problemler genellikle aynı gün, donanım değişimi gerektiren durumlar 2-3 gün içinde tamamlanır. Yedek parça temini için ek süre gerekebilir."
    },
    {
      question: "Garantili yedek parça kullanıyor musunuz?",
      answer: "Evet, tüm yedek parçalarımız orijinal ve garantilidir. Kullandığımız parçalar için minimum 6 ay garanti veriyoruz. Marka servis standartlarında çalışıyoruz."
    },
    {
      question: "Elektronik kart tamiri yapıyor musunuz?",
      answer: "Evet, bilgisayar anakartları, ekran kartları, laptop kartları ve elektronik devre kartlarının BGA reballing, mikroişlemci değişimi ve komponent seviyesinde tamirini yapıyoruz."
    },
    {
      question: "Yerinde servis hizmeti veriyor musunuz?",
      answer: "Evet, Ankara genelinde yerinde servis hizmeti sunuyoruz. Kurumsal müşterilerimiz için özel anlaşmalarımız ve bakım sözleşmelerimiz mevcuttur."
    },
    {
      question: "Uydu ve network sistemleri kurulumu yapıyor musunuz?",
      answer: "Evet, merkezi uydu sistemleri, çanak anten kurulumu, yapılandırılmış kablolama, WiFi sistemleri ve IP kamera kurulumları yapıyoruz. Kurulum sonrası teknik destek sağlıyoruz."
    },
    {
      question: "CCTV güvenlik kamera sistemi kurulumu yapıyor musunuz?",
      answer: "Evet, ev ve iş yerleri için profesyonel CCTV güvenlik kamera sistemi kurulumu yapıyoruz. IP kamera, analog kamera, NVR/DVR kayıt cihazları, gece görüşlü kameralar ve uzaktan izleme çözümleri sunuyoruz. Ücretsiz keşif ve proje tasarımı hizmetimiz mevcuttur."
    },
    {
      question: "Ödeme ve garanti koşullarınız nelerdir?",
      answer: "Nakit, kredi kartı ve havale/EFT ile ödeme alıyoruz. Taksit seçenekleri mevcuttur. Tüm işçilik ve parça değişimlerimiz garanti kapsamındadır. Garanti süreleri hizmet türüne göre değişir."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0f2b46] mb-4">
            SIKÇA SORULAN SORULAR
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0f2b46] to-[#17ba60] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Merak ettiğiniz sorulara cevaplar
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#0f2b46] pr-4">
                  {faq.question}
                </h3>
                <span className="text-[#1e40af] flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-xl" />
                  ) : (
                    <FaChevronDown className="text-xl" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 animate-slideDown">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Sorunuza cevap bulamadınız mı?
          </p>
          <button className="bg-[#0f2b46] text-white px-8 py-3 rounded-lg hover:bg-[#1a3a5c] transition-all duration-300 shadow-lg">
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
