"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Gestionale Ristorante",
    category: "gestionale",
    image: "/images/project-restaurant.jpg",
    description: "Sistema completo per gestione ordini, tavoli, menu e cucina con app per camerieri",
    tags: ["React", "Node.js", "MongoDB", "Real-time"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      orders: "500+",
      time: "3 mesi",
      client: "Trattoria Milano"
    }
  },
  {
    id: 2,
    title: "E-commerce Moda",
    category: "sito",
    image: "/images/project-fashion.jpg",
    description: "Negozio online completo con gestione prodotti, ordini e pagamenti integrati",
    tags: ["Next.js", "Stripe", "Tailwind", "Shopify"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      products: "200+",
      time: "2 mesi",
      client: "Fashion Brand"
    }
  },
  {
    id: 3,
    title: "Sistema Prenotazioni SPA",
    category: "gestionale",
    image: "/images/project-spa.jpg",
    description: "Piattaforma per prenotazioni online con calendario, pagamenti e gestione clienti",
    tags: ["TypeScript", "PostgreSQL", "Stripe", "Calendar API"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      bookings: "1000+",
      time: "2.5 mesi",
      client: "Wellness Center"
    }
  },
  {
    id: 4,
    title: "Portfolio Fotografo",
    category: "sito",
    image: "/images/project-photo.jpg",
    description: "Sito vetrina elegante con galleria fotografica e sistema di contatti",
    tags: ["Next.js", "Framer Motion", "Cloudinary"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      photos: "500+",
      time: "1 mese",
      client: "Studio Fotografico"
    }
  },
  {
    id: 5,
    title: "Gestionale Palestra",
    category: "gestionale",
    image: "/images/project-gym.jpg",
    description: "Sistema per gestione soci, abbonamenti, corsi e pagamenti con app mobile",
    tags: ["React Native", "Firebase", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      members: "300+",
      time: "3 mesi",
      client: "Fitness Club"
    }
  },
  {
    id: 6,
    title: "Sito Agenzia Viaggi",
    category: "sito",
    image: "/images/project-travel.jpg",
    description: "Piattaforma per ricerca e prenotazione pacchetti turistici con CMS integrato",
    tags: ["Next.js", "Sanity CMS", "Maps API"],
    demoUrl: "#",
    githubUrl: "#",
    stats: {
      destinations: "50+",
      time: "2 mesi",
      client: "Travel Agency"
    }
  },
];

const categories = [
  { id: "all", label: "Tutti i Progetti" },
  { id: "gestionale", label: "Gestionali" },
  { id: "sito", label: "Siti Web" },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary-600 font-semibold mb-2"
          >
            PORTFOLIO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I Miei Ultimi Lavori
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progetti realizzati per aziende e professionisti che hanno scelto
            di digitalizzare la loro attività
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder image - replace with actual images */}
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                </motion.div>
                
                {/* Overlay with links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-6 space-x-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === "gestionale"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {project.category === "gestionale" ? "Gestionale" : "Sito Web"}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-primary-600 font-bold text-sm">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Vuoi vedere il tuo progetto qui? Parliamone!
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
            Inizia il Tuo Progetto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
