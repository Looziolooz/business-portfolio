// src/config/site.ts

import { LucideIcon, Zap, Star, Crown, Globe, ShoppingCart, DollarSign, Calendar, Package, Users, BarChart3, FileText, Settings, TrendingUp, Shield, MessageSquare, Code, Rocket, CheckCircle, Smartphone } from "lucide-react";

// Navigazione (tradotta in Svedese come richiesto) [2025-12-10]
export const navItems: { label: string; href: string }[] = [
  { label: "Hem", href: "#home" }, // Home
  { label: "Tjänster", href: "#services" }, // Servizi
  { label: "Abonnemang", href: "#pricing" }, // Abbonamenti
  { label: "Portfolio", href: "#portfolio" }, // Portfolio
  { label: "Om Mig", href: "#about" }, // Chi Sono
  { label: "Kontakt", href: "#contact" }, // Contatti
];

// Dati Sezione Hero
export const heroFeatures: { icon: LucideIcon; text: string; description: string }[] = [
  {
    icon: Zap,
    text: "Setup Rapido",
    description: "Operativo in 48 ore"
  },
  {
    icon: Shield,
    text: "Sicuro & Affidabile",
    description: "Dati protetti"
  },
  {
    icon: Star,
    text: "Supporto Incluso",
    description: "Assistenza dedicata"
  }
];

// Dati Sezione Servizi
export const servicesList: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    color: string;
}[] = [
    {
        icon: Globe,
        title: "Sito Web Personalizzato",
        description: "Design moderno e responsive ottimizzato per tutti i dispositivi",
        features: ["Design su misura", "SEO ottimizzato", "Mobile-first"],
        color: "from-blue-400 to-blue-600",
    },
    {
        icon: ShoppingCart,
        title: "Gestione Ordini",
        description: "Sistema completo per tracciare e gestire gli ordini dei clienti",
        features: ["Tracciamento real-time", "Notifiche automatiche", "Storico completo"],
        color: "from-purple-400 to-purple-600",
    },
    {
        icon: DollarSign,
        title: "Controllo Incassi",
        description: "Monitora entrate e uscite con report dettagliati",
        features: ["Dashboard finanziaria", "Report automatici", "Grafici interattivi"],
        color: "from-green-400 to-green-600",
    },
    {
        icon: Calendar,
        title: "Sistema Prenotazioni",
        description: "Gestisci appuntamenti e prenotazioni in modo semplice",
        features: ["Calendario integrato", "Conferme automatiche", "Promemoria SMS/Email"],
        color: "from-orange-400 to-orange-600",
    },
    {
        icon: Package,
        title: "Gestione Magazzino",
        description: "Tiene traccia delle scorte e dei prodotti disponibili",
        features: ["Inventario real-time", "Alert scorte basse", "Movimentazioni"],
        color: "from-teal-400 to-teal-600",
    },
    {
        icon: Users,
        title: "CRM Clienti",
        description: "Database clienti con storico acquisti e preferenze",
        features: ["Anagrafica completa", "Storico interazioni", "Segmentazione"],
        color: "from-pink-400 to-pink-600",
    },
    {
        icon: BarChart3,
        title: "Analytics Avanzati",
        description: "Statistiche dettagliate per prendere decisioni informate",
        features: ["Dashboard KPI", "Trend analysis", "Export dati"],
        color: "from-indigo-400 to-indigo-600",
    },
    {
        icon: FileText,
        title: "Fatturazione",
        description: "Crea e gestisci fatture, preventivi e documenti fiscali",
        features: ["Fatture automatiche", "Invio via email", "Conformità fiscale"],
        color: "from-yellow-400 to-yellow-600",
    },
    {
        icon: Smartphone,
        title: "App Mobile Ready",
        description: "Accesso completo da smartphone e tablet",
        features: ["Design responsive", "Touch optimized", "Offline mode"],
        color: "from-red-400 to-red-600",
    },
];

export const additionalFeaturesList: { icon: LucideIcon; title: string; description: string }[] = [
    {
        icon: Shield,
        title: "Sicurezza Garantita",
        description: "Crittografia SSL, backup automatici e protezione dati GDPR compliant",
    },
    {
        icon: Settings,
        title: "Personalizzazione Totale",
        description: "Ogni funzione può essere adattata alle tue esigenze specifiche",
    },
    {
        icon: TrendingUp,
        title: "Scalabilità",
        description: "Il sistema cresce con la tua azienda, aggiungendo funzioni quando servono",
    },
];

// Dati Sezione Processo
export const processSteps: {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
    duration: string;
    color: string;
}[] = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Consulenza Iniziale",
        description: "Parliamo delle tue esigenze e dell'obiettivo del progetto. La prima consulenza è sempre gratuita e senza impegno.",
        duration: "1 giorno",
        color: "from-blue-400 to-blue-600",
    },
    {
        number: "02",
        icon: FileText,
        title: "Preventivo & Pianificazione",
        description: "Ti invio un preventivo dettagliato con tempi e costi. Definiamo insieme le funzionalità e le priorità del progetto.",
        duration: "1-2 giorni",
        color: "from-purple-400 to-purple-600",
    },
    {
        number: "03",
        icon: Code,
        title: "Sviluppo",
        description: "Inizio lo sviluppo del tuo gestionale o sito web. Ricevi aggiornamenti regolari e puoi vedere l'avanzamento in tempo reale.",
        duration: "2-6 settimane",
        color: "from-green-400 to-green-600",
    },
    {
        number: "04",
        icon: Users,
        title: "Test & Formazione",
        description: "Testiamo insieme il sistema e ti formo sull'utilizzo. Puoi richiedere modifiche e miglioramenti.",
        duration: "3-5 giorni",
        color: "from-orange-400 to-orange-600",
    },
    {
        number: "05",
        icon: Rocket,
        title: "Lancio",
        description: "Pubblichiamo il sito o gestionale. Il sistema è operativo e pronto per i tuoi clienti.",
        duration: "1 giorno",
        color: "from-pink-400 to-pink-600",
    },
    {
        number: "06",
        icon: CheckCircle,
        title: "Supporto Continuo",
        description: "Assistenza tecnica inclusa nell'abbonamento. Aggiorni e migliori il sistema quando vuoi.",
        duration: "Sempre",
        color: "from-teal-400 to-teal-600",
    },
];

// Dati Sezione Abbonamenti
export const pricingPlans: {
    name: "Starter" | "Professional" | "Enterprise";
    icon: LucideIcon;
    price: string;
    period: string;
    description: string;
    setupFee: string;
    monthlyFirst: string;
    monthlyAfter: string;
    yearInfo: string;
    features: string[];
    popular: boolean;
    color: string;
}[] = [
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

export const pricingAddons: {
    title: string;
    price: string;
    description: string;
}[] = [
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