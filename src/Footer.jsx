import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  const [newsEmail, setNewsEmail] = useState('')
  return (
    <footer className="bg-[#091e33] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-6 mb-6">
          {/* İletişim */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#17ba60]">
              İletişim Adresimiz
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[#17ba60] text-xs" />
                <span>Ziya Gökalp Caddesi No:28/4 <br /> Kızılay / ANKARA</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#17ba60] text-xs" />
                <span>+90 (312) 434 04 41</span>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-[#17ba60] text-xs" />
                <span>+90 (549) 434 04 41</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#17ba60] text-xs" />
                <span>bilgi@teknomic.com.tr</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-[#17ba60] text-xs" />
                <span>Pzt - Cum / Cmt (09:00 - 19:00)</span>
              </li>
            </ul>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#17ba60]">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Anasayfa", href: "#" },
                { name: "Hakkımızda", href: "#hakkimizda" },
                { name: "Hizmetlerimiz", href: "#hizmetlerimiz" },
                { name: "CCTV Sistemleri", href: "#cctv" },
                { name: "Referanslar", href: "#referanslar" },
                { name: "İletişim", href: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#17ba60] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* E-Bülten */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-semibold mb-3 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#17ba60]">
              E-Bülten Üyeliği
            </h3>
            <p className="mb-3 text-sm">
              Teknoloji ve güvenlik çözümlerimizden haberdar olmak için e-bültenimize kaydolun.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mb-3 border-1 rounded-xl" style={{borderColor: "#17ba60"}}>
              <input onChange={(event) => {setNewsEmail(event.target.value)}}
                type="email"
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-3 py-2 text-sm rounded-lg text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="bg-[#17ba60] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#02dd65] transition"
              >
                Gönder
              </button>
            </form>
            <div className="flex gap-3 text-base" role="list" aria-label="Sosyal medya bağlantıları">
              <a href="#" aria-label="Instagram" className="hover:text-[#17ba60] transition"><FaInstagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-[#17ba60] transition"><FaFacebookF /></a>
              <a href="https://x.com/teknomic" aria-label="X (Twitter)" className="hover:text-[#17ba60] transition"><FaXTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#17ba60] transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Teknomic Bilişim Teknolojileri, Tüm Hakları Saklıdır</p>
          <p className="mt-2 md:mt-0">Ankara, Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
