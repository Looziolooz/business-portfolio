import { Check, Globe, Package, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Services() {
  const plans = [
    {
      name: 'Base',
      price: '10',
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      description: 'Perfetto per iniziare la tua presenza online',
      image: '/assets/service-website-mockup.jpg',
      features: [
        'Sito web responsive moderno',
        'Design personalizzato',
        'Ottimizzazione SEO base',
        'Form di contatto',
        'Hosting incluso',
        'Certificato SSL',
        'Supporto via email',
      ],
      popular: false,
    },
    {
      name: 'Magazzino',
      price: '25',
      icon: <Package className="w-10 h-10 text-blue-600" />,
      description: 'Sito web + gestione completa del magazzino',
      image: '/assets/service-inventory-dashboard.jpg',
      features: [
        'Tutto del piano Base',
        'Gestionale magazzino completo',
        'Tracciamento inventario real-time',
        'Gestione ordini e fornitori',
        'Report e statistiche',
        'Backup automatici',
        'Supporto prioritario',
      ],
      popular: true,
    },
    {
      name: 'Completo',
      price: '30',
      icon: <Calculator className="w-10 h-10 text-blue-600" />,
      description: 'Soluzione all-in-one per la tua azienda',
      image: '/assets/service-accounting-system.jpg',
      features: [
        'Tutto del piano Magazzino',
        'Sistema di contabilità integrato',
        'Fatturazione elettronica',
        'Gestione clienti e fornitori',
        'Dashboard analytics avanzata',
        'Integrazione con software esterni',
        'Supporto dedicato 24/7',
      ],
      popular: false,
    },
  ];

  const handleSubscribe = (planName: string) => {
    // Placeholder for Stripe integration
    alert(`Funzionalità in arrivo! Piano selezionato: ${planName}`);
  };

  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Servizi e Prezzi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Scegli il piano perfetto per le esigenze della tua azienda. 
            Tutti i piani includono aggiornamenti e manutenzione continua.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-xl scale-105'
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1">
                  Più Popolare
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">{plan.icon}</div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-600 mt-2">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-slate-900">
                      €{plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">/mese</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
                      : 'bg-slate-900 hover:bg-slate-800'
                  } text-white py-6 text-lg font-semibold`}
                >
                  Inizia Ora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-slate-700 text-lg">
            💳 <span className="font-semibold">Pagamenti sicuri con Stripe</span> • 
            🔄 Cancellazione in qualsiasi momento • 
            ✨ Primo mese con sconto del 20%
          </p>
        </div>
      </div>
    </section>
  );
}