import { ExternalLink, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Fashion',
      description: 'Piattaforma e-commerce completa per brand di moda con gestione prodotti, carrello e pagamenti integrati.',
      image: '/assets/portfolio-ecommerce-project.jpg',
      tags: ['React', 'Stripe', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Ristorante La Bella Vita',
      description: 'Sito web elegante per ristorante con menu digitale, sistema di prenotazioni e galleria fotografica.',
      image: '/assets/portfolio-restaurant-website.jpg',
      tags: ['Next.js', 'Tailwind', 'Supabase'],
      link: '#',
    },
    {
      title: 'Studio Legale Associato',
      description: 'Portale professionale per studio legale con area clienti riservata e gestione documentale.',
      image: '/assets/portfolio-corporate-site.jpg',
      tags: ['TypeScript', 'Auth', 'Cloud'],
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alcuni dei progetti che ho realizzato per i miei clienti. 
            Ogni soluzione è personalizzata per soddisfare esigenze specifiche.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-slate-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Visita
                    </a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Code size={16} />
                      Dettagli
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg mb-4">
            Vuoi vedere altri progetti o discutere del tuo?
          </p>
          <a
            href="#contatti"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
          >
            Contattami per una consulenza gratuita
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
    </section>
  );
}