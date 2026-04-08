# 🔥 FireDream Shop

> Bold snacks & premium lighters. For those who live with intensity.

A production-ready Next.js e-commerce storefront for [firedream.shop](https://firedream.shop).

---

## Stack

- **Framework**: Next.js 14 (Pages Router)
- **Styling**: CSS Modules
- **Fonts**: Bebas Neue + DM Sans (Google Fonts)
- **Deploy**: Vercel

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Import (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Add your custom domain `firedream.shop` in **Project Settings → Domains**

---

## Project Structure

```
firedream-shop/
├── components/
│   ├── Navbar.js / Navbar.module.css
│   ├── Hero.js / Hero.module.css
│   ├── ProductCard.js / ProductCard.module.css
│   └── Footer.js / Footer.module.css
├── data/
│   └── products.js        ← Edit products here
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js           ← Main page
│   ├── cart.js
│   └── faq.js
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   ├── Cart.module.css
│   └── Faq.module.css
├── public/                ← Add favicon, images here
├── next.config.js
├── vercel.json
└── package.json
```

---

## Customization

### Add / Edit Products
Open `data/products.js` and edit the `products` array.  
Each product supports:
- `name`, `price`, `category` (`snacks` | `lighters`)
- `emoji` — displayed as product visual
- `badge` — label shown on card (e.g. `"🔥 BESTSELLER"` or `null`)
- `heat` — heat level 1–5 (for snacks), or `null`
- `feature` — short feature text (for lighters)
- `description`, `flavor`, `weight`

### Add a Real Favicon
Replace `public/favicon.ico` with your logo file.

### Connect a Payment System
Integrate [Stripe](https://stripe.com) or [Shopify Buy SDK](https://shopify.dev/docs/api/storefront) for real checkout.

---

## License

MIT — free to use and modify.
