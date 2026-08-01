# Evonuera — AI Masterclass Landing Page

A premium, dark-themed (with alternating light sections) landing page for the
**Evonuera** live masterclass — *"Build AI Products, Not Just Prompts"*.

- **Live Masterclass · In Tamil · ₹49**
- **Sunday, 16 August · 10:00 – 11:00 AM IST**

## Tech stack

- **React 18** + **Vite**
- **Tailwind CSS** (Evonuera brand palette: purple `#8c52ff` → coral `#ff5757` on `#09070b`)
- **Framer Motion** animations
- **Geist** typeface + **lucide-react** icons

## Features

- Mobile-first, responsive, SEO-friendly (meta + Open Graph + JSON-LD Event schema)
- Floating AI-inspired background, glassmorphism, smooth scrolling
- Persistent "Reserve My Seat" CTA across the whole page
- 3-step reservation flow (modal + inline): **Details → Razorpay payment → Join WhatsApp community**

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Configuration

Set your links in [`src/config.js`](src/config.js):

```js
export const RAZORPAY_LINK = 'https://rzp.io/l/your-payment-link'
export const WHATSAPP_COMMUNITY_LINK = 'https://chat.whatsapp.com/your-invite'
```

> Note: the registration form is front-end only. Wire the submit handler in
> `src/components/ReserveFlow.jsx` to your CRM / webhook to capture leads.
