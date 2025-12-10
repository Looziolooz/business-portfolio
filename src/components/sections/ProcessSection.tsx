"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code, Rocket, CheckCircle, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulenza Iniziale",
    description: "Parliamo delle tue esigenze e dell'obiettivo del progetto. La prima consulenza è sempre gratuita e senza impegno.",
    duration: "1 giorno",
    color: "from-blue-400 to-blue-600",
  },
  {
    number: "02",
    icon: FileText,
    title: "Preventivo & Pianificazione",
    description: "Ti invio un preventivo dettagliato con tempi e costi. Definiamo insieme le funzionalità e le priorità del progetto.",
    duration: "1-2 giorni",
    color: "from-purple-400 to-purple-600",
  },
  {
    number: "03",
    icon: Code,
    title: "Sviluppo",
    description: "Inizio lo sviluppo del tuo gestionale o sito web. Ricevi aggiornamenti regolari e puoi vedere l'avanzamento in tempo reale.",
    duration: "2-6 settimane",
    color: "from-green-400 to-green-600",
  },
  {
    number: "04",
    icon: Users,
    title: "Test & Formazione",
    description: "Testiamo insieme il sistema e ti formo sull'utilizzo. Puoi richiedere modifiche e miglioramenti.",
    duration: "3-5 giorni",
    color: "from-orange-400 to-orange-600",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Lancio",
    description: "Pubblichiamo il sito o gestionale. Il sistema è operativo e pronto per i tuoi clienti.",
    duration: "1 giorno",
    color: "from-pink-400 to-pink-600",
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Supporto Continuo",
    description: "Assistenza tecnica inclusa nell'abbonamento. Aggiorni e migliori il sistema quando vuoi.",
    duration: "Sempre",
    color: "from-teal-400 to-teal-600",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
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
            COME LAVORO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un Processo Semplice e Trasparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dal primo contatto al lancio del tuo progetto, ogni fase è chiara e
            ben definita. Sai sempre cosa aspettarti.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="md:w-5/12 bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold text-gray-100">
                      {step.number}
                    </span>
                    <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Center Icon */}
                <div className="md:w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto a Iniziare?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Il primo passo è semplice: parliamo del tuo progetto. Nessun
              impegno, solo idee e possibilità.
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
              Prenota una Consulenza Gratuita
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
