import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Supabase integration later)
    setTimeout(() => {
      toast({
        title: 'Messaggio Inviato!',
        description: 'Ti risponderò il prima possibile.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email',
      value: 'lorenzo.dastoli@example.com',
      link: 'mailto:lorenzo.dastoli@example.com',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Telefono',
      value: '+39 123 456 7890',
      link: 'tel:+39123456789',
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: 'Sede',
      value: 'Italia',
      link: '#',
    },
  ];

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contattami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hai un progetto in mente? Parliamone! Sono sempre disponibile per 
            una consulenza gratuita e senza impegno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario.rossi@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 123 456 7890"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Messaggio *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrivi il tuo progetto o le tue esigenze..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-6 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Invia Messaggio
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <img
              src="/assets/contact-illustration.jpg"
              alt="Contact"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  ⚡ Risposta Rapida
                </h4>
                <p className="text-slate-600">
                  Di solito rispondo entro 24 ore. Per urgenze, chiamami direttamente!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}