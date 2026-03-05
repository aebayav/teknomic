import React from 'react';
import { FaShieldAlt, FaUsers, FaCogs, FaAward } from 'react-icons/fa';

const AboutUs = () => {
    const stats = [
        { number: "10+", label: "Yıl Deneyim" },
        { number: "1,675+", label: "Tamamlanan Proje" },
        { number: "500+", label: "Kurumsal Müşteri" },
        { number: "7/24", label: "Teknik Destek" }
    ];

    return (
        <section id="hakkimizda" className="py-20 bg-[#f8fafc] reveal">
            <div className="container mx-auto px-4 md:px-12">
                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0f2b46] mb-1">{stat.number}</h3>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1e40af] rounded-tl-3xl opacity-20"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0f2b46] rounded-br-3xl opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="Teknomic profesyonel bilgi teknolojileri ekibi Ankara ofisinde"
                                loading="lazy"
                                width="735"
                                height="400"
                                className="relative rounded-2xl shadow-xl w-full object-cover h-[400px] hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold text-[#0f2b46] mt-3 relative inline-block">
                                Hakkımızda
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-[#0f2b46] to-[#17ba60] rounded-full"></span>
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong>Teknomic</strong>, Ankara merkezli olarak 10 yılı aşkın süredir bilişim teknolojileri, 
                            güvenlik sistemleri ve teknik servis alanlarında hizmet vermektedir. Veri kurtarma, bilgisayar tamiri, 
                            CCTV güvenlik kamera sistemleri ve ağ altyapısı kurulumu konularında 
                            uzman kadromuzla kurumsal ve bireysel müşterilerimize güvenilir çözümler sunuyoruz.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#0f2b46] border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[#0f2b46]/10 rounded-lg flex items-center justify-center mb-4 text-[#0f2b46]">
                                    <FaShieldAlt className="text-xl" />
                                </div>
                                <h3 className="font-bold text-xl text-[#0f2b46] mb-2">Vizyonumuz</h3>
                                <p className="text-gray-600 text-sm">Ankara'nın lider bilişim ve güvenlik sistemleri çözüm ortağı olmak, teknolojiye yön veren yenilikçi yaklaşımlar geliştirmek.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#1e40af] border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4 text-[#1e40af]">
                                    <FaAward className="text-xl" />
                                </div>
                                <h3 className="font-bold text-xl text-[#0f2b46] mb-2">Misyonumuz</h3>
                                <p className="text-gray-600 text-sm">Müşterilerimize en yüksek kalitede teknik hizmet sunarak, güvenli ve verimli teknoloji çözümleri üretmek.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#0ea5e9] border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center mb-4 text-[#0ea5e9]">
                                    <FaUsers className="text-xl" />
                                </div>
                                <h3 className="font-bold text-xl text-[#0f2b46] mb-2">Uzman Kadro</h3>
                                <p className="text-gray-600 text-sm">Alanında deneyimli mühendis ve teknisyenlerden oluşan profesyonel ekibimizle hizmetinizdeyiz.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#17ba60] border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-[#17ba60]/10 rounded-lg flex items-center justify-center mb-4 text-[#17ba60]">
                                    <FaCogs className="text-xl" />
                                </div>
                                <h3 className="font-bold text-xl text-[#0f2b46] mb-2">Kurumsal Çözümler</h3>
                                <p className="text-gray-600 text-sm">İşletmenize özel bakım sözleşmeleri, SLA garantili destek ve ölçeklenebilir IT çözümleri sunuyoruz.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#0f2b46] hover:bg-[#1a3a5c] md:py-4 md:text-lg md:px-10 transition-colors duration-300 shadow-lg">
                                Bizimle İletişime Geçin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
