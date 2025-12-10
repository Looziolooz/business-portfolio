"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Mail, Calendar, Loader2 } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // Simulate fetching session details
      // In production, you'd call an API endpoint to verify the session
      setTimeout(() => {
        setSession({
          customer_email: "example@email.com",
          plan: "Professional",
        });
        setLoading(false);
      }, 1500);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Verifica pagamento in corso...</p>
        </div>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold mb-4">Sessione Non Trovata</h1>
          <p className="text-gray-600 mb-6">
            Non riusciamo a trovare i dettagli del tuo ordine.
          </p>
          <Link href="/pricing">
            <button className="btn-primary">
              Torna agli Abbonamenti
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-8 text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="w-20 h-20 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-2">Pagamento Completato!</h1>
            <p className="text-accent-100 text-lg">
              Benvenuto nel piano {session?.plan || "Professional"}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Grazie per la tua fiducia! 🎉
              </h2>
              <p className="text-gray-600 text-lg">
                Il tuo abbonamento è stato attivato con successo. A breve
                riceverai una email di conferma con tutti i dettagli.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-primary-600 mr-2" />
                Prossimi Passi
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Controlla la tua email
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ti abbiamo inviato una conferma con i dettagli del tuo
                      ordine e le credenziali di accesso
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Prenota la consulenza iniziale
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ti contatterò entro 24 ore per fissare la prima
                      consulenza e iniziare a lavorare sul tuo progetto
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Setup e sviluppo</h4>
                    <p className="text-gray-600 text-sm">
                      Inizierò subito a lavorare sul tuo progetto. Sarai
                      operativo in 48-72 ore!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Email di Conferma Inviata
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Abbiamo inviato una email di conferma a{" "}
                    <strong>{session?.customer_email || "tua@email.com"}</strong>
                    . Se non la vedi, controlla nella cartella spam.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Details */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-lg font-bold mb-4">Dettagli Abbonamento</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Piano:</span>
                  <span className="font-semibold">
                    {session?.plan || "Professional"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Setup Fee:</span>
                  <span className="font-semibold">100€ (pagato)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Abbonamento Mensile:</span>
                  <span className="font-semibold">10€/mese (primi 12 mesi)</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Dopo 12 mesi:</span>
                  <span>25€/mese</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Torna alla Home</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="#contact" className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contattami</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-600"
        >
          <p className="mb-2">Hai domande o problemi?</p>
          <a
            href="mailto:info@lorenzodastoli.com"
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            info@lorenzodastoli.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}
