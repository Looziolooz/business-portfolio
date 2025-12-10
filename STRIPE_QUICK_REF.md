# 🔵 Stripe Integration - Quick Reference

## 🎯 Cosa È Stato Aggiunto

Il tuo sito ora include:

✅ **Sistema di Pagamento Completo**
- Checkout sicuro con Stripe
- Gestione abbonamenti automatica
- Setup fee + abbonamento ricorrente
- Cambio prezzo dopo 12 mesi (10€ → 25€)

✅ **Pagine e API**
- `/api/checkout` - Crea sessione di pagamento
- `/api/webhook` - Riceve notifiche da Stripe
- `/api/customer-portal` - Portale gestione abbonamento
- `/success` - Pagina di conferma pagamento

✅ **Sicurezza**
- Validazione webhook signature
- Variabili d'ambiente per chiavi segrete
- HTTPS richiesto in produzione

---

## ⚡ Setup Rapido (5 minuti)

### 1. Crea Account Stripe
- Vai su [stripe.com](https://stripe.com) → Registrati
- Completa il profilo

### 2. Ottieni le Chiavi
1. Dashboard Stripe → Developers → API keys
2. Copia le chiavi test:
   - `Publishable key` (pk_test_...)
   - `Secret key` (sk_test_...)

### 3. Configura il Progetto
```bash
# Copia il file di esempio
cp .env.local.example .env.local

# Modifica .env.local e inserisci le tue chiavi
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_TUA_CHIAVE
STRIPE_SECRET_KEY=sk_test_TUA_SECRET
NEXT_PUBLIC_URL=http://localhost:3000

# Riavvia il server
npm run dev
```

### 4. Testa!
1. Vai su http://localhost:3000
2. Scorri a "Abbonamenti"
3. Clicca "Sottoscrivi Starter"
4. Usa carta test: `4242 4242 4242 4242`
5. Data: qualsiasi futura
6. CVC: 123
7. Completa il pagamento!

---

## 💳 Carte di Test

| Tipo | Numero | Risultato |
|------|--------|-----------|
| Successo | 4242 4242 4242 4242 | ✅ Pagamento accettato |
| Rifiutato | 4000 0000 0000 0002 | ❌ Carta rifiutata |
| 3D Secure | 4000 0027 6000 3184 | 🔐 Richiede autenticazione |

Data, CVC e ZIP possono essere qualsiasi valore valido.

---

## 📊 Come Funziona

### Flusso Pagamento

```
1. Utente clicca "Sottoscrivi"
   ↓
2. Frontend chiama /api/checkout
   ↓
3. API crea sessione Stripe
   ↓
4. Utente reindirizzato a Stripe Checkout
   ↓
5. Utente inserisce dati carta
   ↓
6. Stripe processa pagamento
   ↓
7. Utente reindirizzato a /success
   ↓
8. Webhook notifica il tuo server
   ↓
9. Server attiva accesso utente
```

### Prezzi Configurati

Nel file `src/lib/stripe.ts`:

```typescript
starter: {
  setupFee: 10000,        // 100€
  monthlyPriceFirst: 1000, // 10€/mese
  monthlyPriceAfter: 2500, // 25€/mese
}
```

**Nota**: Prezzi in centesimi!

---

## 🔔 Webhook (Importante!)

I webhook notificano il tuo server di eventi importanti.

### Setup Locale (Sviluppo)

```bash
# Installa Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Avvia forwarding
stripe listen --forward-to localhost:3000/api/webhook

# Copia il webhook secret che appare
# Aggiungilo in .env.local:
STRIPE_WEBHOOK_SECRET=whsec_...

# Riavvia il server
```

### Setup Produzione

1. Dashboard Stripe → Developers → Webhooks
2. Add endpoint: `https://tuo-dominio.com/api/webhook`
3. Eventi da selezionare:
   - checkout.session.completed
   - customer.subscription.created
   - customer.subscription.updated
   - customer.subscription.deleted
   - invoice.paid
   - invoice.payment_failed
4. Copia signing secret
5. Aggiungi in Vercel Environment Variables

---

## 📝 Cosa Fare Nei Webhook

Il file `/api/webhook/route.ts` ha dei TODO per te:

### checkout.session.completed
```typescript
// TODO:
// 1. Crea account utente nel DB
// 2. Attiva accesso al gestionale
// 3. Invia email di benvenuto
```

### invoice.paid
```typescript
// TODO:
// 1. Genera fattura elettronica
// 2. Invia a SDI (Sistema di Interscambio)
// 3. Aggiorna contabilità
```

### customer.subscription.deleted
```typescript
// TODO:
// 1. Revoca accesso al gestionale
// 2. Archivia dati utente
// 3. Invia email di conferma cancellazione
```

---

## 🎨 Personalizzazione

### Cambiare Prezzi

Modifica `src/lib/stripe.ts`:

```typescript
export const PRICING = {
  starter: {
    setupFee: 15000,        // 150€ invece di 100€
    monthlyPriceFirst: 1500, // 15€ invece di 10€
    monthlyPriceAfter: 3000, // 30€ invece di 25€
  }
};
```

### Modificare Pagina Successo

Personalizza `src/app/success/page.tsx`:
- Cambia testi
- Aggiungi link a calendly
- Personalizza colori

### Aggiungere Add-ons

Nel checkout, puoi aggiungere prodotti extra:

```typescript
line_items: [
  // ... setup fee e abbonamento ...
  {
    price_data: {
      currency: 'eur',
      product_data: {
        name: 'E-commerce Module',
      },
      unit_amount: 1500, // 15€
      recurring: { interval: 'month' },
    },
    quantity: 1,
  },
],
```

---

## 🚀 Andare in Produzione

### 1. Verifica Account Stripe
- Completa KYC (Know Your Customer)
- Fornisci documenti identità
- Aggiungi conto bancario

### 2. Ottieni Chiavi Live
- Dashboard → Disattiva Test Mode
- Developers → API keys
- Copia chiavi live (pk_live_... e sk_live_...)

### 3. Aggiorna Environment Variables

In Vercel (o dove hai deployato):
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_live_...
NEXT_PUBLIC_URL=https://tuo-dominio.com
```

### 4. Configura Webhook Live
- Crea nuovo endpoint per dominio produzione
- Aggiungi stesso set di eventi
- Copia signing secret e aggiorna env var

### 5. Test Finale
- Fai un pagamento reale con carta vera
- Verifica che tutto funzioni
- Controlla webhook nel dashboard

---

## 💰 Costi Stripe

- **Transazioni EU**: 1.5% + 0.25€
- **Nessun costo fisso mensile**
- **Esempio**: 
  - Pagamento 110€ (setup + primo mese)
  - Costo Stripe: ~1.90€
  - Tu ricevi: ~108.10€

---

## 🐛 Problemi Comuni

### "No such customer"
→ Stai usando chiavi test con dati live (o viceversa)

### "Webhook verification failed"
→ Controlla STRIPE_WEBHOOK_SECRET in .env.local

### Checkout non funziona
→ Verifica NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

### Prezzi sbagliati
→ Ricorda: prezzi in centesimi (100€ = 10000)

---

## 📚 Guide Dettagliate

- **Setup Completo**: Leggi `STRIPE_SETUP.md`
- **Deployment**: Leggi `DEPLOY_CHECKLIST.md`
- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)

---

## ✅ Checklist Prima di Andare Live

- [ ] Account Stripe verificato
- [ ] Chiavi live configurate
- [ ] Webhook live configurato
- [ ] Test pagamento reale completato
- [ ] Email di conferma funzionanti
- [ ] Gestione abbonamenti testata
- [ ] Sistema cancellazione funzionante
- [ ] Fatturazione configurata (per Italia)
- [ ] Backup dati implementato

---

**Hai tutto pronto! 🎉**

Per la guida completa passo-passo, vedi `STRIPE_SETUP.md`
