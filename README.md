# 🚀 Sito Portfolio Business - Lorenzo Dastoli

Sito web moderno e professionale per la vendita di servizi di creazione gestionali e siti web personalizzati per piccole aziende.

## ✨ Caratteristiche

- 🎨 **Design Moderno**: Interfaccia pulita con animazioni fluide usando Framer Motion
- 📱 **Completamente Responsive**: Ottimizzato per tutti i dispositivi
- ⚡ **Performance Elevate**: Built con Next.js 15 per velocità ottimale
- 🎯 **SEO Ottimizzato**: Metadata e struttura ottimizzata per i motori di ricerca
- 🔧 **TypeScript**: Codice type-safe per maggiore affidabilità
- 💅 **Tailwind CSS**: Styling moderno e personalizzabile

## 📁 Struttura del Progetto

```
business-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Stili globali
│   │   ├── layout.tsx            # Layout principale
│   │   └── page.tsx              # Homepage
│   └── components/
│       ├── Navbar.tsx            # Barra di navigazione
│       ├── Footer.tsx            # Footer
│       └── sections/
│           ├── HeroSection.tsx        # Sezione Hero
│           ├── ServicesSection.tsx    # Servizi offerti
│           ├── PricingSection.tsx     # Piani di abbonamento
│           ├── PortfolioSection.tsx   # Portfolio lavori
│           ├── AboutSection.tsx       # Chi sono
│           └── ContactSection.tsx     # Form contatti
├── public/                       # Risorse statiche
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Installazione

### Prerequisiti
- Node.js 18+ installato
- npm o pnpm

### Passaggi

1. **Clona o scarica il progetto**
```bash
cd business-portfolio
```

2. **Installa le dipendenze**
```bash
npm install
# oppure
pnpm install
```

3. **Avvia il server di sviluppo**
```bash
npm run dev
# oppure
pnpm dev
```

4. **Apri il browser**
Visita [http://localhost:3000](http://localhost:3000)

## 🎨 Personalizzazione

### 1. Colori del Brand

Modifica i colori in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#ea5e3f',  // Il tuo colore primario
    // ... altri shade
  },
  // ... altri colori
}
```

### 2. Informazioni Personali

Aggiorna le tue informazioni in:
- `src/components/sections/HeroSection.tsx` - Testo introduttivo
- `src/components/sections/AboutSection.tsx` - Biografia e skills
- `src/components/Footer.tsx` - Informazioni di contatto

### 3. Prezzi e Abbonamenti

Modifica i piani in `src/components/sections/PricingSection.tsx`:

```typescript
const plans = [
  {
    name: "Starter",
    price: "100",
    // ... altre proprietà
  },
  // ... altri piani
];
```

### 4. Portfolio

Aggiungi i tuoi progetti in `src/components/sections/PortfolioSection.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Nome Progetto",
    category: "gestionale", // o "sito"
    description: "Descrizione...",
    // ... altre proprietà
  },
];
```

### 5. Immagini

Aggiungi le tue immagini nella cartella `public/images/`:
- Immagini profilo
- Screenshot progetti
- Loghi clienti

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🚀 Deploy su Vercel

### Deploy Automatico (Consigliato)

1. Crea un account su [Vercel](https://vercel.com)
2. Clicca su "New Project"
3. Importa il repository da GitHub
4. Vercel rileverà automaticamente Next.js
5. Clicca su "Deploy"

### Deploy da CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🛠️ Tecnologie Utilizzate

- **Framework**: Next.js 15
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Inter)

## 📝 Form di Contatto

Il form di contatto attualmente simula l'invio. Per implementare l'invio reale:

### Opzione 1: Email diretto con Resend

```bash
npm install resend
```

Crea `src/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'tua-email@example.com',
    subject: 'Nuovo contatto dal sito',
    html: `<p>Nome: ${data.name}</p>...`
  });
  
  return Response.json({ success: true });
}
```

### Opzione 2: Formspree (No backend necessario)

1. Registrati su [Formspree](https://formspree.io)
2. Crea un nuovo form
3. Aggiungi l'endpoint al form in `ContactSection.tsx`

## 💳 Integrazione Stripe (INCLUSA!)

Il sito include un'integrazione completa con Stripe per pagamenti e abbonamenti!

### ⚡ Setup Rapido Stripe (5 minuti)

1. **Crea account su [stripe.com](https://stripe.com)**

2. **Ottieni le chiavi API:**
   - Dashboard → Developers → API keys
   - Copia Publishable key e Secret key

3. **Configura il progetto:**
   ```bash
   cp .env.local.example .env.local
   # Modifica .env.local con le tue chiavi
   npm run dev
   ```

4. **Testa con carta:** `4242 4242 4242 4242`

### 📚 Guide Stripe

- 🚀 **[STRIPE_QUICK_REF.md](STRIPE_QUICK_REF.md)** - Setup rapido
- 📖 **[STRIPE_SETUP.md](STRIPE_SETUP.md)** - Guida completa
- 💡 Include:
  - Checkout pagamenti
  - Gestione abbonamenti
  - Webhook automatici
  - Customer portal
  - Cambio automatico 10€→25€ dopo 12 mesi

### 🎯 Funzionalità Stripe Incluse

✅ Setup fee (100€) + abbonamento mensile
✅ Cambio automatico prezzo dopo 12 mesi
✅ Gestione completa abbonamenti
✅ Pagina di successo post-pagamento
✅ Webhook per eventi importanti
✅ Customer portal per gestire abbonamento
✅ Test mode per sviluppo



## 📝 Checklist Personalizzazione

- [ ] Aggiornare informazioni personali (nome, email, telefono)
- [ ] Modificare colori brand in `tailwind.config.ts`
- [ ] Aggiungere i tuoi progetti nel portfolio
- [ ] Aggiornare biografia e skills
- [ ] Personalizzare i piani di abbonamento
- [ ] Aggiungere immagini reali dei progetti
- [ ] Configurare form di contatto
- [ ] Aggiornare metadata SEO in `layout.tsx`
- [ ] Testare su mobile
- [ ] Deploy su Vercel

## 📊 Performance

Il sito è ottimizzato per:
- ✅ Core Web Vitals
- ✅ SEO
- ✅ Accessibilità
- ✅ Best Practices
- ✅ Mobile-first

Testa le performance con:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🐛 Troubleshooting

### Build fallisce
```bash
# Pulisci cache
rm -rf .next node_modules
npm install
npm run build
```

### Errori TypeScript
```bash
# Verifica errori
npm run build
```

### Stili non applicati
```bash
# Riavvia dev server
npm run dev
```

## 📄 Licenza

Questo progetto è libero per uso personale e commerciale.

## 🤝 Supporto

Per domande o supporto:
- Email: info@lorenzodastoli.com
- GitHub: [Looziolooz](https://github.com/Looziolooz)

---

**Sviluppato con ❤️ da Lorenzo Dastoli**

*Buon lavoro con il tuo nuovo sito! 🚀*
