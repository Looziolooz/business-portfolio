"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Star, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { getStripe } from "@/lib/stripe-client";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "100",
    period: "setup unico",
    description: "Perfetto per chi inizia e vuole testare il sistema",
    setupFee: "100€ una tantum",
    monthlyFirst: "10€/mese",
    monthlyAfter: "25€/mese",
    yearInfo: "per i primi 12 mesi, poi 25€/mese",
    features: [
      "Sito web personalizzato responsive",
      "Gestione ordini base",
      "Sistema incassi e spese",
      "Calendario integrato",
      "Dashboard analytics",
      "Supporto via email",
      "Backup settimanali",
      "SSL certificato incluso",
    ],
    popular: false,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Professional",
    icon: Star,
    price: "100",
    period: "setup unico",
    description: "La scelta ideale per piccole aziende in crescita",
    setupFee: "100€ una tantum",
    monthlyFirst: "10€/mese",
    monthlyAfter: "25€/mese",
    yearInfo: "per i primi 12 mesi, poi 25€/mese",
    features: [
      "Tutto di Starter, più:",
      "Sistema prenotazioni avanzato",
      "Gestione magazzino completa",
      "CRM clienti integrato",
      "Fatturazione elettronica",
      "Report personalizzati",
      "Supporto prioritario",
      "Backup giornalieri",
      "Integrazioni API",
      "App mobile ottimizzata",
    ],
    popular: true,
    color: "from-primary-400 to-primary-600",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "su misura",
    description: "Soluzione completa per aziende con esigenze specifiche",
    setupFee: "Prezzo personalizzato",
    monthlyFirst: "A partire da 10€/mese",
    monthlyAfter: "25€/mese",
    yearInfo: "prezzi su misura in base alle funzionalità",
    features: [
      "Tutto di Professional, più:",
      "Funzionalità su misura",
      "Integrazioni avanzate",
      "Multi-sede/Multi-user",
      "White label disponibile",
      "Formazione del team",
      "Supporto dedicato 24/7",
      "SLA garantito",
      "Consulenza strategica",
      "Migrazione dati assistita",
    ],
    popular: false,
    color: "from-purple-400 to-purple-600",
  },
];

const addons = [
  {
    title: "E-commerce Completo",
    price: "+15€/mese",
    description: "Sistema vendita online con carrello, pagamenti e spedizioni",
  },
  {
    title: "Marketing Automation",
    price: "+10€/mese",
    description: "Email marketing, SMS e automazioni per fidelizzare i clienti",
  },
  {
    title: "Multi-lingua",
    price: "+8€/mese",
    description: "Sito e gestionale in più lingue per clienti internazionali",
  },
];

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planName: string) => {
    // Enterprise plans should contact directly
    if (planName === "Enterprise") {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    setLoadingPlan(planName);

    try {
      const plan = planName.toLowerCase();
      
      // Call our API to create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          email: '', // Optional: pre-fill if you have user email
          name: '',  // Optional: pre-fill if you have user name
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert(error.message || 'Si è verificato un errore. Riprova più tardi.');
      setLoadingPlan(null);
    }
  };

  const handleContactClick = (planName: string) => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Optional: You could store the selected plan in localStorage or state
      localStorage.setItem("selectedPlan", planName);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
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
            PREZZI TRASPARENTI
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Scegli il Piano Perfetto per Te
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento iniziale di soli 100€, poi 10€/mese per il primo anno.
            <br />
            Dopo 12 mesi, il costo passa a 25€/mese.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white rounded-full p-1 shadow-lg"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensile
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annuale
              <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl ${
                plan.popular ? "ring-4 ring-primary-500 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    PIÙ POPOLARE
                  </span>
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <plan.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-gradient">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-2xl text-gray-600 ml-2">€</span>}
                </div>
                <p className="text-sm text-gray-500 mb-4">{plan.setupFee}</p>
                
                <div className="bg-primary-50 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold text-primary-700 mb-1">
                    Primo anno: <span className="text-lg">{plan.monthlyFirst}</span>
                  </p>
                  <p className="text-xs text-gray-600">{plan.yearInfo}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: loadingPlan === plan.name ? 1 : 1.02 }}
                whileTap={{ scale: loadingPlan === plan.name ? 1 : 0.98 }}
                onClick={() => handleCheckout(plan.name)}
                disabled={loadingPlan !== null}
                className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {loadingPlan === plan.name ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Caricamento...</span>
                  </>
                ) : (
                  <>
                    <span>
                      {plan.name === "Enterprise" ? "Contattami" : `Sottoscrivi ${plan.name}`}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Funzionalità Aggiuntive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-primary-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold">{addon.title}</h4>
                  <span className="text-primary-600 font-bold text-lg">
                    {addon.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Hai domande sui piani o vuoi una soluzione personalizzata?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleContactClick("Custom")}
            className="btn-secondary"
          >
            Contattami per un Preventivo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
