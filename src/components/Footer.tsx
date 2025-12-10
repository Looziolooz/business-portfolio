"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Lorenzo Dastoli</h3>
            <p className="text-gray-300 mb-4">
              Sviluppo soluzioni gestionali personalizzate e siti web moderni
              per aiutare le piccole aziende a crescere nel digitale.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Looziolooz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:info@lorenzodastoli.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {["Home", "Servizi", "Abbonamenti", "Portfolio", "Chi Sono"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        handleNavClick(`#${item.toLowerCase().replace(" ", "")}`)
                      }
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-primary-400" />
                <a
                  href="mailto:info@lorenzodastoli.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@lorenzodastoli.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-400" />
                <a
                  href="tel:+39123456789"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +39 123 456 789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-400" />
                <span className="text-gray-300">Stockholm, Sweden</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {currentYear} Lorenzo Dastoli. Tutti i diritti riservati.
          </p>
          <p className="mt-2 text-sm">
            Sviluppato con{" "}
            <span className="text-primary-400">Next.js</span>,{" "}
            <span className="text-primary-400">TypeScript</span> e{" "}
            <span className="text-primary-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
