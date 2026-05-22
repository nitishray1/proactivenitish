# nitishray.com

Proactive Nitish — Wellness Coaching Website  
Built as a static site. Works with GitHub Pages, Netlify, or Vercel.

---

## Files

```
nitishray.com/
├── index.html        ← main site (single file, everything inline)
├── nitish-ray.jpg    ← add your photo here (any size, 4:5 ratio works best)
├── og-image.jpg      ← add a 1200x630px cover image for social sharing
└── README.md
```

---

## How to deploy

### Option A — Netlify (easiest, recommended)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop this entire folder onto the Netlify dashboard
3. Add your custom domain under **Domain settings → Add domain**
4. Done. HTTPS is automatic.

### Option B — Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up free
2. Import this repo from GitHub
3. Add your custom domain under **Project Settings → Domains**
4. Done. Deploys automatically on every git push.

### Option C — GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch / root**
3. Add your custom domain under **Custom domain**
4. GitHub generates a free HTTPS cert automatically

---

## What to update before going live

1. **Your photo** — replace the placeholder in the About section:
   Find this comment in index.html and replace the placeholder div with:
   `<img src="nitish-ray.jpg" alt="Nitish Ray – Wellness Coach Sydney" />`

2. **Your email** — search for `hello@nitishray.com` and replace with your real email

3. **Your Instagram handle** — search for `proactivenitish` and update if needed

4. **Your OG image** — add an `og-image.jpg` (1200x630px) for social sharing previews

5. **Testimonials** — once you have real ones, replace the quote card in the hero section

---

## What's already built in

- Full SEO meta tags
- Open Graph tags (for social sharing)
- JSON-LD structured data (Person, Service, FAQ) for AI discoverability
- Mobile responsive
- Scroll animations
- FAQ accordion
- Sticky nav
- Compliance disclaimer (general wellness coaching, not medical advice)
- Google Fonts (Cormorant Garamond + Plus Jakarta Sans)

---

## Color palette

| Token       | Hex       | Use               |
|-------------|-----------|-------------------|
| Background  | #F7F3EE   | Warm oat          |
| Primary     | #1E3A2F   | Deep forest green |
| Accent      | #B86B4A   | Terracotta clay   |
| Sage        | #6B8F71   | Secondary green   |
| Text        | #1C1917   | Warm charcoal     |

---

General wellness coaching and education only. Not medical advice.
