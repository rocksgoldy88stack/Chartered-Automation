# Chartered Automation — website

A fast, responsive, single-page marketing website for **Chartered Automation** —
a brand that helps **chartered accountants integrate automation** into audits,
compliance, bookkeeping and reporting.

It is a **static site** (HTML + CSS + vanilla JS): cheap, fast, and hostable for
**free** on a public URL.

```
chartered-automation/
├── public/                     ← everything that gets deployed (the web root)
│   ├── index.html
│   ├── favicon.svg
│   ├── css/styles.css
│   └── js/script.js
├── .github/workflows/deploy.yml ← auto-publishes to GitHub Pages on every push
├── firebase.json               ← optional: Google Firebase Hosting config
├── .firebaserc
└── README.md
```

---

## Option A — Free public URL with GitHub Pages (recommended, no cost)

This gives you a live link like
`https://<your-username>.github.io/chartered-automation/` that **anyone can open** —
no credit card, no domain purchase.

1. **Create an empty GitHub repo** named `chartered-automation`
   (github.com → New repository → do **not** add a README).
2. Push this project to it (Kiro can do this for you — just share your GitHub username).
3. The included workflow (`.github/workflows/deploy.yml`) runs automatically,
   turns Pages on, and publishes the `public/` folder.
4. Your site appears under the repo's **Actions** tab → the deploy job prints the
   live URL. It's also shown in **Settings → Pages**.

> First run note: if the workflow needs Pages enabled manually, go to
> **Settings → Pages → Build and deployment → Source: GitHub Actions**, then
> re-run the workflow.

### Preview locally first
```bash
cd chartered-automation/public
python3 -m http.server 8080     # open http://localhost:8080
# or:  npx serve .
```

---

## Option B — Google Firebase Hosting (also has a free tier)

Google's static hosting: free HTTPS, global CDN, custom domains.

```bash
npm install -g firebase-tools
firebase login
# edit .firebaserc → replace YOUR_FIREBASE_PROJECT_ID with your project id
cd chartered-automation
firebase deploy --only hosting
```
You'll get a URL like `https://your-project.web.app`.

---

## Costs at a glance

| Item | Cost |
|------|------|
| GitHub Pages hosting | **Free** (public repos) |
| Firebase Hosting (free tier) | **Free** for small sites (10 GB storage, 360 MB/day) |
| Free public URL (`*.github.io` or `*.web.app`) | **Free** |
| Custom domain like `charteredautomation.com` | ~$10–15/year (optional, paid to a domain registrar) |

You only pay if you want a custom `.com` domain. The site itself hosts for free.

---

## Pointing a custom `charteredautomation.com` (optional, later)

Once you buy the domain from any registrar:
- **GitHub Pages:** Settings → Pages → Custom domain → add it, then set the DNS
  records GitHub shows (an `ALIAS`/`A` records + a `CNAME`). HTTPS is free.
- **Firebase:** Hosting → Add custom domain → follow the DNS steps.

---

## Making the contact form actually send

The form shows a confirmation but doesn't send anywhere (a static host has no
backend). Easiest fix: create a free endpoint at **Formspree** or **Getform**
and set the `<form action="...">` to their URL with `method="post"`.
