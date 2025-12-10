"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        plan: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@lorenzodastoli.com",
      link: "mailto:info@lorenzodastoli.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      title: "Telefono",
      value: "+39 123 456 789",
      link: "tel:+39123456789",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      title: "Posizione",
      value: "Stockholm, Sweden",
      link: "#",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "Orari",
      value: "Lun-Ven: 9:00 - 18:00",
      link: "#",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
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
            CONTATTAMI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Iniziamo a Lavorare Insieme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai un progetto in mente? Raccontami le tue esigenze e troviamo
            insieme la soluzione perfetta per la tua azienda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white"
            >
              <MessageSquare className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Consulenza Gratuita</h3>
              <p className="text-primary-100 text-sm mb-4">
                La prima consulenza è sempre gratuita. Parliamo del tuo progetto
                senza impegno!
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Rispondo entro 24 ore</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="mario@esempio.it"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="+39 123 456 789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Azienda
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Nome Azienda"
                    />
                  </div>
                </div>

                {/* Plan Selection */}
                <div>
                  <label
                    htmlFor="plan"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Piano di Interesse
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Seleziona un piano</option>
                    <option value="starter">Starter</option>
                    <option value="professional">Professional</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="custom">Soluzione Personalizzata</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Raccontami del tuo progetto e delle tue esigenze..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading w-5 h-5 border-2"></div>
                      <span>Invio in corso...</span>
                    </>
                  ) : (
                    <>
                      <span>Invia Messaggio</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Success/Error Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl"
                  >
                    ✅ Messaggio inviato con successo! Ti risponderò al più presto.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl"
                  >
                    ❌ Si è verificato un errore. Riprova più tardi.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
