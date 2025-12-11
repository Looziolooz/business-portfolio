"use client";

import { motion } from "framer-motion";
import { Shield, Settings, TrendingUp } from "lucide-react";
import { servicesList, additionalFeaturesList } from "@/config/site"; // Importa dati
import { useScrollToSection } from "@/hooks/use-scroll-to-section"; // Importa Custom Hook

export function ServicesSection() {
    const handleScrollToSection = useScrollToSection();

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-primary-600 font-semibold mb-2"
                    >
                        SERVIZI COMPLETI
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Tutto Ciò di Cui Hai Bisogno
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un sistema completo per gestire ogni aspetto della tua attività,
                        dal sito web alla contabilità, dalle prenotazioni ai report
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                            >
                                <service.icon className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
                >
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Perché Scegliere le Nostre Soluzioni?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalFeaturesList.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-4"
                                >
                                    <feature.icon className="w-10 h-10 text-primary-600" />
                                </motion.div>
                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Non trovi quello che cerchi? Contattami per soluzioni personalizzate!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScrollToSection("#contact")}
                        className="btn-primary"
                    >
                        Richiedi una Consulenza Gratuita
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}