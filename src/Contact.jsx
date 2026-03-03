import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 bg-white reveal">
            <div className="container mx-auto px-4 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#0f2b46] mb-4 relative inline-block">
                        İletişim
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f2b46] to-[#17ba60] rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        Sorularınız veya hizmet talepleriniz için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info & Map */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#0f2b46]/10 text-[#0f2b46] rounded-full flex items-center justify-center mb-4 text-xl">
                                    <FaPhone />
                                </div>
                                <h4 className="font-bold text-[#0f2b46] mb-2">Telefon</h4>
                                <p className="text-gray-600 text-sm">+90 (312) 434 04 41</p>
                                <p className="text-gray-600 text-sm">+90 (549) 434 04 41</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#1e40af]/10 text-[#1e40af] rounded-full flex items-center justify-center mb-4 text-xl">
                                    <FaEnvelope />
                                </div>
                                <h4 className="font-bold text-[#0f2b46] mb-2">E-posta</h4>
                                <p className="text-gray-600 text-sm">bilgi@teknomic.com.tr</p>
                                <p className="text-gray-600 text-sm">destek@teknomic.com.tr</p>
                            </div>
                        </div>

                        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8885662706857!2d32.85361037651877!3d39.92147397152345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e2b02e5b7b9%3A0x6b8b0e5b0b0b0b0b!2sZiya%20G%C3%B6kalp%20Cd.%20No%3A28%2C%2006420%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1715421234567!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Teknomic Bilişim ofis konumu - Ziya Gökalp Caddesi Kızılay Ankara haritası"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#0f2b46] mb-6">Bize Mesaj Gönderin</h3>
                            {submitted ? (
                                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center justify-center">
                                    <p>Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağız.</p>
                                </div>
                            ) : null}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e40af] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Size nasıl yardımcı olabiliriz?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="w-full bg-[#0f2b46] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#1a3a5c] transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <FaPaperPlane />
                                    {submitted ? 'Gönderildi' : 'Gönder'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
