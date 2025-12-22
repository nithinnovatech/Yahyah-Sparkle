import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSprayCan, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct WhatsApp message
        const message = `Hello! I'm interested in your cleaning services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/917671842007?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: 'Phone',
            value: '+91 7671842007',
            link: 'tel:+917671842007',
            color: 'from-blue-400 to-indigo-500',
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            title: 'WhatsApp',
            value: '+91 7671842007',
            link: 'https://wa.me/917671842007',
            color: 'from-green-400 to-emerald-500',
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: 'Email',
            value: 'yahyahsparkle@gmail.com',
            link: 'mailto:yahyahsparkle@gmail.com',
            color: 'from-purple-400 to-violet-500',
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: 'Location',
            value: 'All over Hyderabad, Telangana',
            link: '#',
            color: 'from-orange-400 to-red-500',
        },
    ];

    const services = [
        'Kitchen Tiles Cleaning',
        'Floor Cleaning',
        'Bathroom Cleaning',
        'Deep Cleaning',
        'Other',
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 gradient-bg" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

                <div className="relative container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                            <FaSprayCan className="text-accent-400" />
                            <span className="text-white/90 text-sm font-medium">Contact Us</span>
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get In <span className="text-accent-400">Touch</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Ready to experience the sparkle? Contact us today for a free quote!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-6 text-center hover:shadow-2xl group cursor-pointer"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                                <p className="text-gray-600">{info.value}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                                Send a Message
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Book Your <span className="gradient-text">Cleaning</span> Service
                            </h2>

                            {submitted ? (
                                <div className="card p-8 text-center">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                                        <FaCheckCircle className="text-4xl text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for contacting us. We'll get back to you soon!
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-primary"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                                placeholder="Enter your phone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Required *
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                                            placeholder="Tell us about your cleaning needs..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                                        Send Message via WhatsApp
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="card p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <FaClock className="text-primary-600" />
                                    Business Hours
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Monday - Saturday</span>
                                        <span className="font-semibold text-gray-900">8:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card p-8 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                                <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                                <p className="text-white/80 mb-6">
                                    Need immediate assistance? Call or WhatsApp us directly!
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+917671842007"
                                        className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <FaPhone className="text-xl" />
                                        <span className="font-semibold">+91 7671842007</span>
                                    </a>
                                    <a
                                        href="https://wa.me/917671842007"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 rounded-xl bg-green-500 hover:bg-green-600 transition-colors"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        <span className="font-semibold">Chat on WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            <div className="card p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-primary-600" />
                                    Service Area
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We provide our professional cleaning services all over Hyderabad, Telangana.
                                    No matter where you are in the city, we've got you covered!
                                </p>
                                <p className="text-sm text-gray-500 mt-4">
                                    <em>Note: Delivery charges may apply depending upon your location.</em>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
