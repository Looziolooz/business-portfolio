import { Code2, Database, Palette, Rocket, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: 'Sviluppo Web',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Backend & Database',
      description: 'Node.js, PostgreSQL, Supabase, API REST',
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: 'UI/UX Design',
      description: 'Figma, Design System, Responsive Design',
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: 'Deployment',
      description: 'Vercel, Netlify, Cloud Hosting',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Sicurezza',
      description: 'Autenticazione, Crittografia, GDPR',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Performance',
      description: 'Ottimizzazione, SEO, Core Web Vitals',
    },
  ];

  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/assets/profile-lorenzo-professional.jpg"
              alt="Lorenzo Dastoli"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Chi Sono
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Sono <span className="font-semibold text-slate-900">Lorenzo Dastoli</span>, 
                sviluppatore web e consulente IT specializzato nella creazione di soluzioni 
                digitali per piccole e medie imprese.
              </p>
              <p>
                Con anni di esperienza nel settore, aiuto le aziende a digitalizzare i loro 
                processi attraverso siti web moderni, gestionali personalizzati e sistemi di 
                e-commerce performanti.
              </p>
              <p>
                La mia missione è rendere la tecnologia accessibile e vantaggiosa per ogni 
                business, offrendo soluzioni su misura che crescono insieme alla tua azienda.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contatti"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Parliamo del tuo progetto
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Competenze Tecniche
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-slate-200"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-slate-600">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}