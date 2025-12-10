"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Calendar,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  BarChart3,
  Package,
  Settings,
  Smartphone,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sito Web Personalizzato",
    description: "Design moderno e responsive ottimizzato per tutti i dispositivi",
    features: ["Design su misura", "SEO ottimizzato", "Mobile-first"],
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "Gestione Ordini",
    description: "Sistema completo per tracciare e gestire gli ordini dei clienti",
    features: ["Tracciamento real-time", "Notifiche automatiche", "Storico completo"],
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: DollarSign,
    title: "Controllo Incassi",
    description: "Monitora entrate e uscite con report dettagliati",
    features: ["Dashboard finanziaria", "Report automatici", "Grafici interattivi"],
    color: "from-green-400 to-green-600",
  },
  {
    icon: Calendar,
    title: "Sistema Prenotazioni",
    description: "Gestisci appuntamenti e prenotazioni in modo semplice",
    features: ["Calendario integrato", "Conferme automatiche", "Promemoria SMS/Email"],
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Package,
    title: "Gestione Magazzino",
    description: "Tiene traccia delle scorte e dei prodotti disponibili",
    features: ["Inventario real-time", "Alert scorte basse", "Movimentazioni"],
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: Users,
    title: "CRM Clienti",
    description: "Database clienti con storico acquisti e preferenze",
    features: ["Anagrafica completa", "Storico interazioni", "Segmentazione"],
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzati",
    description: "Statistiche dettagliate per prendere decisioni informate",
    features: ["Dashboard KPI", "Trend analysis", "Export dati"],
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: FileText,
    title: "Fatturazione",
    description: "Crea e gestisci fatture, preventivi e documenti fiscali",
    features: ["Fatture automatiche", "Invio via email", "Conformità fiscale"],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Smartphone,
    title: "App Mobile Ready",
    description: "Accesso completo da smartphone e tablet",
    features: ["Design responsive", "Touch optimized", "Offline mode"],
    color: "from-red-400 to-red-600",
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Sicurezza Garantita",
    description: "Crittografia SSL, backup automatici e protezione dati GDPR compliant",
  },
  {
    icon: Settings,
    title: "Personalizzazione Totale",
    description: "Ogni funzione può essere adattata alle tue esigenze specifiche",
  },
  {
    icon: TrendingUp,
    title: "Scalabilità",
    description: "Il sistema cresce con la tua azienda, aggiungendo funzioni quando servono",
  },
];

export function ServicesSection() {
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
          {services.map((service, index) => (
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
            {additionalFeatures.map((feature, index) => (
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
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Richiedi una Consulenza Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
