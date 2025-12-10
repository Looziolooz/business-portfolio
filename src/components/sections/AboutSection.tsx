"use client";

import { motion } from "framer-motion";
import { Code2, Database, Palette, Zap, Award, Users, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-400 to-blue-600",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-400 to-green-600",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"]
  },
  {
    category: "Design",
    icon: Palette,
    color: "from-purple-400 to-purple-600",
    items: ["UI/UX", "Figma", "Adobe XD", "Responsive Design", "Accessibility"]
  },
  {
    category: "Tools & More",
    icon: Zap,
    color: "from-orange-400 to-orange-600",
    items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"]
  }
];

const stats = [
  { icon: Briefcase, number: "30+", label: "Progetti Completati" },
  { icon: Users, number: "25+", label: "Clienti Soddisfatti" },
  { icon: Award, number: "5+", label: "Anni di Esperienza" },
  { icon: GraduationCap, number: "100%", label: "Successo Rate" },
];

const timeline = [
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Lexicon Frontend Development",
    description: "Specializzazione in sviluppo frontend moderno e soluzioni aziendali"
  },
  {
    year: "2020-2024",
    title: "Full Stack Developer",
    company: "Freelance",
    description: "Sviluppo di siti web e gestionali per piccole e medie imprese"
  },
  {
    year: "2019",
    title: "Web Developer",
    company: "Digital Agency",
    description: "Sviluppo di soluzioni e-commerce e piattaforme web personalizzate"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            CHI SONO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lorenzo Dastoli
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Frontend Developer specializzato nella creazione di soluzioni digitali
            per piccole aziende
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Ciao! Sono Lorenzo, un developer appassionato di tecnologia con una missione:
                aiutare le piccole aziende a digitalizzarsi in modo semplice ed efficace.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ho iniziato come web developer e nel tempo mi sono specializzato nello sviluppo
                di <span className="font-semibold text-primary-600">software gestionali su misura</span>,
                pensati per essere intuitivi, potenti e accessibili anche per chi non è esperto di tecnologia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La mia filosofia è semplice: <span className="font-semibold">tecnologia al servizio delle persone</span>,
                non il contrario. Ogni progetto che realizzo è pensato per semplificare la vita
                quotidiana degli imprenditori, permettendogli di concentrarsi su ciò che sanno fare meglio:
                far crescere il loro business.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Utilizzo tecnologie moderne come React, Next.js e TypeScript per creare soluzioni
                veloci, sicure e scalabili. Ma soprattutto, ascolto le esigenze di chi lavora con me
                per costruire strumenti che risolvono problemi reali.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Perché scegliermi?</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                  Esperienza con oltre 30 progetti completati
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                  Supporto continuo e formazione inclusi
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                  Prezzi trasparenti e accessibili
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                  Soluzioni personalizzate per ogni esigenza
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-3"
                  >
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mr-4`}
                    >
                      <skill.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Il Mio Percorso Professionale
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6 group-hover:border-primary-300 transition-colors">
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-primary-600 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
