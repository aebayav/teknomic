import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/905494340441"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-[999] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="WhatsApp ile iletişime geçin"
        >
            <FaWhatsapp className="text-3xl" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm py-1 px-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Bizimle Sohbet Edin
            </span>
        </a>
    );
};

export default WhatsAppButton;
