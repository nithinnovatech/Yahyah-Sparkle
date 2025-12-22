import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '917671842007';
    const message = 'Hello! I am interested in your cleaning services. Please provide more details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contact us on WhatsApp"
        >
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
                    Chat with us!
                    <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900" />
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 whatsapp-pulse" />
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110">
                    <FaWhatsapp size={32} />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
