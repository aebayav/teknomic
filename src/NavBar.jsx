import { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const hoverTimeouts = useRef({});

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (key) => {
    if (hoverTimeouts.current[key]) {
      clearTimeout(hoverTimeouts.current[key]);
      hoverTimeouts.current[key] = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = (key) => {
    if (hoverTimeouts.current[key]) {
      clearTimeout(hoverTimeouts.current[key]);
    }
    hoverTimeouts.current[key] = setTimeout(() => {
      setOpenDropdown((prev) => (prev === key ? null : prev));
    }, 180);
  };

  const dropdownItems = {
    'hizmetlerimiz': [
      { name: 'Veri Kurtarma', href: '#hizmetlerimiz' },
      { name: 'Bilgisayar Tamiri', href: '#hizmetlerimiz' },
      { name: 'CCTV & Güvenlik Kameraları', href: '#cctv' },
      { name: 'Ağ Sistemleri', href: '#hizmetlerimiz' },
      { name: 'Uydu Sistemleri', href: '#hizmetlerimiz' },
    ],
    'kurumsal': [
      { name: 'Hakkımızda', href: '#hakkimizda' },
      { name: 'Referanslarımız', href: '#referanslar' },
      { name: 'Sıkça Sorulan Sorular', href: '#sss' },
    ],
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0f2b46] text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+903124340441" className="flex items-center gap-2 hover:text-[#17ba60] transition-colors">
              <FaPhone className="text-[#17ba60] text-xs" />
              <span>+90 (312) 434 04 41</span>
            </a>
            <a href="mailto:bilgi@teknomic.com.tr" className="flex items-center gap-2 hover:text-[#17ba60] transition-colors">
              <FaEnvelope className="text-[#17ba60] text-xs" />
              <span>bilgi@teknomic.com.tr</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaClock className="text-[#17ba60] text-xs" />
            <span>Pzt - Cmt: 09:00 - 19:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-3 sticky top-0 z-[200] shadow-lg border-b border-gray-100">
        <nav aria-label="Ana navigasyon" className="flex justify-center items-center w-[92%] mx-auto relative">
          <div className="flex justify-between items-center w-full">
            <a href="#">
              <h3
                className='cursor-pointer'
                style={{
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '36px',
                  lineHeight: '44px',
                  fontFamily: "'tm-b', sans-serif"
                }}
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <span
                  style={{ color: isLogoHovered ? "#0f2b46" : "#17ba60", transition: "color 0.3s ease" }}
                  className='tekno'
                >
                  TEKNO
                </span>
                <span
                  style={{ color: isLogoHovered ? "#17ba60" : "#0f2b46", transition: "color 0.3s ease" }}
                  className='mic'
                >
                  MIC
                </span>
              </h3>
            </a>

            <div
              className={`nav-links duration-500 md:static fixed bg-white md:min-h-fit min-h-[30vh] left-0 right-0 ${isMenuOpen ? 'top-[64px]' : 'top-[-100%]'
                } md:w-auto w-full flex items-center md:justify-center justify-start md:px-0 px-5 z-[150] shadow-md md:shadow-none`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8 text-[15px] font-medium w-full md:w-auto text-[#1e293b]">
                <li>
                  <a className="hover:text-[#1e40af] transition-colors duration-200" href="#">Ana Sayfa</a>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('hizmetlerimiz')}
                  onMouseLeave={() => handleMouseLeave('hizmetlerimiz')}
                >
                  <a
                    className="hover:text-[#1e40af] cursor-pointer flex items-center gap-1 transition-colors duration-200"
                    href="#hizmetlerimiz"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        e.preventDefault();
                        setMobileDropdown(mobileDropdown === 'hizmetlerimiz' ? null : 'hizmetlerimiz');
                      }
                    }}
                  >
                    Hizmetlerimiz
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  {openDropdown === 'hizmetlerimiz' && (
                    <div className="hidden md:block absolute left-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 z-50 animate-fadeIn border border-gray-100">
                      {dropdownItems.hizmetlerimiz.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-5 py-2.5 text-[#334155] hover:bg-[#0f2b46]/5 hover:text-[#1e40af] transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {mobileDropdown === 'hizmetlerimiz' && (
                    <div className="md:hidden mt-2 pl-4 space-y-2 animate-slideDown">
                      {dropdownItems.hizmetlerimiz.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#1e40af] transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('kurumsal')}
                  onMouseLeave={() => handleMouseLeave('kurumsal')}
                >
                  <a
                    className="hover:text-[#1e40af] cursor-pointer flex items-center gap-1 transition-colors duration-200"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        e.preventDefault();
                        setMobileDropdown(mobileDropdown === 'kurumsal' ? null : 'kurumsal');
                      }
                    }}
                  >
                    Kurumsal
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  {openDropdown === 'kurumsal' && (
                    <div className="hidden md:block absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-2 z-50 animate-fadeIn border border-gray-100">
                      {dropdownItems.kurumsal.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-5 py-2.5 text-[#334155] hover:bg-[#0f2b46]/5 hover:text-[#1e40af] transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {mobileDropdown === 'kurumsal' && (
                    <div className="md:hidden mt-2 pl-4 space-y-2 animate-slideDown">
                      {dropdownItems.kurumsal.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#1e40af] transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
                <li>
                  <a className="hover:text-[#1e40af] transition-colors duration-200" href="#contact">İletişim</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 bg-[#0f2b46] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3a5c] transition-colors duration-200 shadow-md"
              >
                <FaPhone className="text-xs" />
                Teklif Alın
              </a>

              <button onClick={onToggleMenu} className="cursor-pointer md:hidden" aria-label="Menüyü aç/kapat" aria-expanded={isMenuOpen}>
                <span className={`block w-7 h-0.5 bg-[#0f2b46] mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-[#0f2b46] mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-[#0f2b46] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar