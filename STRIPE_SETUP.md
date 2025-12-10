# 🔵 Guida Completa: Configurazione Stripe

Questa guida ti aiuterà a configurare Stripe per accettare pagamenti e gestire abbonamenti sul tuo sito.

## 📋 Prerequisiti

- Account Stripe (gratuito)
- Il progetto installato e funzionante
- 30 minuti di tempo

---

## 🚀 Parte 1: Crea Account Stripe

### 1. Registrazione

1. Vai su [stripe.com](https://stripe.com)
2. Clicca su "Start now" o "Inizia ora"
3. Compila il form di registrazione
4. Verifica la tua email

### 2. Completa il Profilo Business

1. Accedi a [dashboard.stripe.com](https://dashboard.stripe.com)
2. Vai su "Settings" → "Business settings"
3. Compila le informazioni:
   - Nome azienda/attività
   - Indirizzo
   - Tipo di business
   - Descrizione servizi

⚠️ **Importante**: Per ricevere pagamenti reali dovrai completare la verifica dell'identità (richiede documenti).

---

## 🔑 Parte 2: Ottieni le API Keys

### 1. Modalità Test (per sviluppo)

1. Nel Dashboard Stripe, assicurati che sia attiva la "Test mode" (toggle in alto a destra)
2. Vai su "Developers" → "API keys"
3. Troverai due chiavi:
   - **Publishable key** (inizia con `pk_test_...`)
   - **Secret key** (inizia con `sk_test_...` - clicca su "Reveal")

### 2. Configura il Progetto

1. Nella cartella del progetto, copia il file esempio:
   ```bash
   cp .env.local.example .env.local
   ```

2. Apri `.env.local` e inserisci le tue chiavi:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_TUA_CHIAVE_QUI
   STRIPE_SECRET_KEY=sk_test_TUA_CHIAVE_SEGRETA_QUI
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

3. **Non condividere mai** il file `.env.local` o la secret key!

### 3. Riavvia il Server

```bash
# Ferma il server (Ctrl+C)
# Riavvia
npm run dev
```

---

## 🎯 Parte 3: Test dei Pagamenti

### 1. Carte di Test Stripe

Stripe fornisce carte di test per simulare pagamenti:

**Successo:**
- Numero: `4242 4242 4242 4242`
- Data: qualsiasi futura (es. 12/25)
- CVC: qualsiasi 3 cifre (es. 123)
- ZIP: qualsiasi (es. 12345)

**Pagamento Rifiutato:**
- Numero: `4000 0000 0000 0002`

**Richiede 3D Secure:**
- Numero: `4000 0027 6000 3184`

### 2. Testa il Checkout

1. Vai su `http://localhost:3000`
2. Scorri fino alla sezione "Abbonamenti"
3. Clicca su "Sottoscrivi Starter" o "Sottoscrivi Professional"
4. Verrai reindirizzato a Stripe Checkout
5. Usa una carta di test
6. Completa il pagamento
7. Verrai reindirizzato alla pagina di successo

### 3. Verifica nel Dashboard

1. Torna su [dashboard.stripe.com](https://dashboard.stripe.com)
2. Vai su "Payments" → dovresti vedere il pagamento test
3. Vai su "Customers" → dovresti vedere il cliente creato
4. Vai su "Subscriptions" → dovresti vedere l'abbonamento

---

## 🔔 Parte 4: Configura i Webhook (Importante!)

I webhook permettono a Stripe di notificare il tuo sito quando succede qualcosa (pagamento, cancellazione, ecc.).

### Opzione A: Test Locale con Stripe CLI (Sviluppo)

1. **Installa Stripe CLI:**
   - Mac: `brew install stripe/stripe-cli/stripe`
   - Windows: Scarica da [stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
   - Linux: 
     ```bash
     wget https://github.com/stripe/stripe-cli/releases/download/v1.19.0/stripe_1.19.0_linux_x86_64.tar.gz
     tar -xvf stripe_1.19.0_linux_x86_64.tar.gz
     sudo mv stripe /usr/local/bin
     ```

2. **Login:**
   ```bash
   stripe login
   ```

3. **Avvia webhook forwarding:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```

4. **Copia il webhook secret** che appare (inizia con `whsec_...`)

5. **Aggiungi in `.env.local`:**
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_TUO_SECRET_QUI
   ```

6. **Riavvia il server**

### Opzione B: Webhook in Produzione (Vercel/Online)

1. Deploy il sito su Vercel (vedi DEPLOY_CHECKLIST.md)

2. Nel Dashboard Stripe:
   - Vai su "Developers" → "Webhooks"
   - Clicca "Add endpoint"
   - URL: `https://tuo-dominio.com/api/webhook`
   - Eventi da ascoltare (seleziona questi):
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.paid`
     - `invoice.payment_failed`

3. Clicca su "Add endpoint"

4. Copia il "Signing secret" (inizia con `whsec_...`)

5. In Vercel:
   - Vai su Settings → Environment Variables
   - Aggiungi `STRIPE_WEBHOOK_SECRET` con il valore copiato

6. Rideploy l'app

---

## 💰 Parte 5: Passa a Produzione (Pagamenti Reali)

### 1. Attiva l'Account

1. Nel Dashboard Stripe, completa la verifica dell'account
2. Fornisci i documenti richiesti:
   - Documento d'identità
   - Informazioni bancarie per ricevere pagamenti
   - Informazioni fiscali (P.IVA se hai)

### 2. Ottieni le Chiavi Live

1. Disattiva "Test mode" (toggle in alto a destra)
2. Vai su "Developers" → "API keys"
3. Copia le nuove chiavi:
   - **Publishable key** (inizia con `pk_live_...`)
   - **Secret key** (inizia con `sk_live_...`)

### 3. Aggiorna Variabili d'Ambiente in Produzione

In Vercel (o dove hai deployato):
1. Vai su Settings → Environment Variables
2. Aggiorna:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_TUA_CHIAVE
   STRIPE_SECRET_KEY=sk_live_TUA_CHIAVE_SEGRETA
   NEXT_PUBLIC_URL=https://tuo-dominio.com
   ```
3. Rideploy

### 4. Configura Webhook Live

Ripeti i passaggi dell'Opzione B con le chiavi live.

---

## 🎨 Parte 6: Personalizzazione Prezzi

Se vuoi modificare i prezzi, apri `src/lib/stripe.ts`:

```typescript
export const PRICING = {
  starter: {
    setupFee: 10000, // 100€ in centesimi
    monthlyPriceFirst: 1000, // 10€/mese
    monthlyPriceAfter: 2500, // 25€/mese
    // ...
  },
  // ...
};
```

**Importante**: I prezzi sono in centesimi!
- 100€ = 10000
- 10€ = 1000
- 25€ = 2500

---

## 📧 Parte 7: Fatturazione Elettronica (Italia)

Per essere in regola con il fisco italiano:

### Opzione 1: Integrazione con Fatture in Cloud

1. Crea account su [fattureincloud.it](https://fattureincloud.it)
2. Ottieni API key
3. Nel webhook `/api/webhook/route.ts`, quando ricevi `invoice.paid`:

```typescript
case 'invoice.paid': {
  const invoice = event.data.object as Stripe.Invoice;
  
  // Chiama API Fatture in Cloud
  await fetch('https://api-v2.fattureincloud.it/...', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.FIC_API_KEY}`,
    },
    body: JSON.stringify({
      // Dati fattura da invoice di Stripe
    })
  });
  
  break;
}
```

### Opzione 2: Manuale

1. Quando ricevi pagamento in Stripe
2. Accedi a Fatture in Cloud manualmente
3. Crea fattura elettronica
4. Invia tramite SDI

---

## ⚡ Parte 8: Gestione Automatica Cambio Prezzo

Per cambiare automaticamente il prezzo da 10€ a 25€ dopo 12 mesi:

### Opzione A: Stripe Billing (Automatico)

1. Nel Dashboard Stripe, vai su "Products"
2. Crea due prezzi per lo stesso prodotto:
   - Prezzo 1: 10€/mese
   - Prezzo 2: 25€/mese

3. Usa Subscription Schedules nella creazione:
   ```typescript
   const schedule = await stripe.subscriptionSchedules.create({
     customer: 'cus_xxx',
     start_date: 'now',
     end_behavior: 'release',
     phases: [
       {
         items: [{ price: 'price_10_euro' }],
         iterations: 12,
       },
       {
         items: [{ price: 'price_25_euro' }],
       },
     ],
   });
   ```

### Opzione B: Cron Job (Manuale)

1. Crea un cron job che gira ogni giorno
2. Cerca abbonamenti con 12 mesi di vita
3. Aggiorna il prezzo:
   ```typescript
   await stripe.subscriptions.update(subscriptionId, {
     items: [{
       id: subscriptionItemId,
       price: 'price_25_euro',
     }],
   });
   ```

---

## 🔒 Sicurezza Best Practices

✅ **DO:**
- Tieni sempre segreto `STRIPE_SECRET_KEY`
- Usa `.env.local` per le chiavi (mai committare su Git)
- Valida sempre i webhook con la signature
- Usa HTTPS in produzione
- Testa tutto in test mode prima

❌ **DON'T:**
- Mai esporre la secret key nel frontend
- Mai committare `.env.local` su Git
- Mai saltare la verifica webhook signature
- Mai fare operazioni critiche senza webhook

---

## 🐛 Troubleshooting

### Problema: "STRIPE_SECRET_KEY is not set"

**Soluzione:**
1. Assicurati che `.env.local` esista
2. Controlla che le variabili siano scritte correttamente
3. Riavvia il server

### Problema: "Webhook signature verification failed"

**Soluzione:**
1. Verifica che `STRIPE_WEBHOOK_SECRET` sia corretto
2. Se usi Stripe CLI, assicurati che sia in esecuzione
3. In produzione, verifica l'URL del webhook

### Problema: Il pagamento funziona ma il webhook no

**Soluzione:**
1. Controlla i logs in Stripe Dashboard → Developers → Webhooks
2. Verifica che l'endpoint sia raggiungibile
3. Testa con Stripe CLI localmente

### Problema: "No such customer"

**Soluzione:**
1. Verifica di essere in test mode o live mode correttamente
2. Le chiavi test e live hanno database separati

---

## 📚 Risorse Utili

- [Stripe Docs](https://stripe.com/docs)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Stripe Webhook Guide](https://stripe.com/docs/webhooks)
- [Stripe Dashboard](https://dashboard.stripe.com)

---

## ✅ Checklist Finale

Prima di andare live:

- [ ] Account Stripe verificato
- [ ] Chiavi live configurate
- [ ] Webhook live configurato e testato
- [ ] Test pagamento completato
- [ ] Fatturazione elettronica configurata
- [ ] Email di conferma funzionanti
- [ ] Dashboard clienti accessibile
- [ ] Prezzi verificati
- [ ] Sistema di cambio prezzo configurato
- [ ] Backup e sicurezza implementati

---

**Sei pronto! 🎉**

Se hai problemi o domande, consulta la documentazione Stripe o contattami.
