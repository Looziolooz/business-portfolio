"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco Bianchi",
    role: "Proprietario",
    company: "Trattoria Da Marco",
    image: null,
    rating: 5,
    text: "Il gestionale ha rivoluzionato il nostro modo di lavorare. Ora gestiamo ordini, tavoli e magazzino in modo semplice e veloce. Lorenzo è stato disponibile e paziente nella formazione del personale.",
    highlight: "Rivoluzionato il lavoro"
  },
  {
    name: "Giulia Rossi",
    role: "CEO",
    company: "Wellness SPA",
    image: null,
    rating: 5,
    text: "Sistema di prenotazioni perfetto! I clienti possono prenotare online 24/7 e noi abbiamo tutto sotto controllo. L'investimento si è ripagato in 3 mesi grazie all'aumento delle prenotazioni.",
    highlight: "ROI in 3 mesi"
  },
  {
    name: "Andrea Ferrari",
    role: "Owner",
    company: "Fashion Boutique",
    image: null,
    rating: 5,
    text: "Sito e-commerce bellissimo e funzionale. Le vendite online sono cresciute del 150% nel primo trimestre. Il supporto è sempre disponibile e i tempi di consegna sono stati rispettati.",
    highlight: "+150% vendite online"
  },
  {
    name: "Laura Conti",
    role: "Manager",
    company: "Fitness Club Pro",
    image: null,
    rating: 5,
    text: "Il software per la gestione soci e abbonamenti è intuitivo e completo. Non potremmo più farne a meno. La possibilità di personalizzare tutto è stata fondamentale per le nostre esigenze specifiche.",
    highlight: "Intuitivo e completo"
  },
  {
    name: "Paolo Moretti",
    role: "Direttore",
    company: "Agenzia Viaggi Explorer",
    image: null,
    rating: 5,
    text: "Sito web professionale con CMS facile da usare. Aggiorniamo offerte e destinazioni in autonomia. Lorenzo ha capito subito cosa ci serviva e ha consegnato oltre le aspettative.",
    highlight: "Oltre le aspettative"
  },
  {
    name: "Sofia Martini",
    role: "Fondatrice",
    company: "Studio Fotografico",
    image: null,
    rating: 5,
    text: "Portfolio online elegante che valorizza il mio lavoro. Ho ricevuto molti complimenti dai clienti e le richieste sono aumentate. Il sito è veloce e si vede benissimo su tutti i dispositivi.",
    highlight: "Più richieste clienti"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
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
            TESTIMONIANZE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cosa Dicono i Miei Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei clienti è la mia priorità. Ecco cosa dicono
            le aziende che hanno scelto i miei servizi.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Highlight Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4"
              >
                {testimonial.highlight}
              </motion.div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                100%
              </div>
              <div className="text-gray-600">Soddisfazione Clienti</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                25+
              </div>
              <div className="text-gray-600">Progetti Consegnati</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                48h
              </div>
              <div className="text-gray-600">Tempo Risposta Medio</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                5⭐
              </div>
              <div className="text-gray-600">Rating Medio</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Vuoi essere il prossimo caso di successo?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Parliamo del Tuo Progetto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
