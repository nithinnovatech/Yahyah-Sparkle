import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSprayCan, FaCheckCircle, FaMapMarkerAlt, FaHeart, FaLeaf, FaClock } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';

const About = () => {
    const values = [
        {
            icon: <FaHeart className="text-3xl" />,
            title: 'Customer First',
            description: 'Your satisfaction is our top priority. We go above and beyond to exceed expectations.',
            color: 'from-pink-400 to-rose-500',
        },
        {
            icon: <FaLeaf className="text-3xl" />,
            title: 'Eco-Friendly',
            description: 'We use environmentally safe cleaning products that are tough on dirt but gentle on nature.',
            color: 'from-green-400 to-emerald-500',
        },
        {
            icon: <FaClock className="text-3xl" />,
            title: 'Reliable & Punctual',
            description: 'We respect your time. Our team arrives on schedule and completes work efficiently.',
            color: 'from-blue-400 to-indigo-500',
        },
        {
            icon: <MdCleaningServices className="text-3xl" />,
            title: 'Professional Team',
            description: 'Our trained professionals bring expertise and attention to detail to every job.',
            color: 'from-purple-400 to-violet-500',
        },
    ];

    const milestones = [
        { year: '2019', event: 'YahyahSparkle was founded in Hyderabad' },
        { year: '2020', event: 'Expanded services across the city' },
        { year: '2021', event: 'Launched our signature cleaning product' },
        { year: '2022', event: 'Reached 500+ happy customers milestone' },
        { year: '2023', event: 'Introduced eco-friendly cleaning solutions' },
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
                            <span className="text-white/90 text-sm font-medium">About Us</span>
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-accent-400">Story</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Discover the passion and dedication behind YahyahSparkle Cleaning Services
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Bringing <span className="gradient-text">Sparkle</span> to Hyderabad Homes
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                YahyahSparkle was founded with a simple mission: to provide professional, reliable,
                                and affordable cleaning services to homes and businesses across Hyderabad. What started
                                as a small local service has grown into a trusted name in the cleaning industry.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our team of dedicated professionals uses the latest cleaning techniques and eco-friendly
                                products to deliver exceptional results. We take pride in transforming spaces and exceeding
                                our customers' expectations every single time.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCheckCircle className="text-primary-600" />
                                    <span className="font-medium">5+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCheckCircle className="text-primary-600" />
                                    <span className="font-medium">500+ Happy Clients</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCheckCircle className="text-primary-600" />
                                    <span className="font-medium">100% Satisfaction</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
                                        <FaSprayCan className="text-4xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        To provide exceptional cleaning services that transform spaces and improve lives,
                                        while maintaining the highest standards of professionalism and environmental responsibility.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-accent-400 to-accent-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    <span className="font-semibold">All Over Hyderabad</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-8 text-center hover:shadow-2xl"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Milestones
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold">
                                        {milestone.year}
                                    </div>
                                    {index !== milestones.length - 1 && (
                                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary-300 to-transparent mt-2" />
                                    )}
                                </div>
                                <div className="flex-1 pt-4">
                                    <p className="text-lg text-gray-700">{milestone.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 gradient-bg" />
                <div className="relative container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience Our Service?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied customers who trust YahyahSparkle for their cleaning needs.
                    </p>
                    <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                        Get Started Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
