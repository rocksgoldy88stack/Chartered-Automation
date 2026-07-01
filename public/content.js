/* =======================================================================
   CHARTERED AUTOMATION — WEBSITE CONTENT
   -----------------------------------------------------------------------
   HOW TO EDIT (no coding needed):
   1. Every word shown on the website lives in this file.
   2. Change ONLY the text between the "quotation marks".
   3. Keep the quotes, colons ( : ) and commas ( , ) exactly where they are.
   4. To ADD a list item, copy one whole { ... } block, paste it below,
      and make sure there is a comma between blocks.
   5. To REMOVE an item, delete its whole { ... } block (and a comma).
   6. Save / commit the file — your live website updates in about a minute.
   ======================================================================= */

window.SITE_CONTENT = {

  /* ---- Browser tab title & search-engine description ---- */
  site: {
    title: "Chartered Automation — Where Chartered Accountancy Meets Technology",
    description: "Chartered Automation helps chartered accountants and finance teams integrate automation into audits, compliance, bookkeeping and reporting."
  },

  /* ---- Brand name (top-left logo text and footer) ---- */
  brand: {
    wordOne: "Chartered",    // shown in dark colour
    wordTwo: "Automation"    // shown in the teal/blue accent colour
  },

  /* ---- Top hero section ---- */
  hero: {
    eyebrow: "Chartered Accountancy × Technology",
    headingMain: "Automate the repetitive.",
    headingAccent: "Elevate the strategic.",
    subtext: "Chartered Automation helps chartered accountants and finance teams weave automation into audits, compliance, bookkeeping and reporting — so your people spend time on judgement, not data entry.",
    buttonPrimary: "Book a free walkthrough",
    buttonSecondary: "See how it works",
    trustLabel: "Trusted approach for",
    trustLine: "Audit · Tax · Advisory · Bookkeeping"
  },

  /* ---- Blue stats band (numbers count up automatically) ---- */
  stats: [
    { number: "70", label: "% less time on manual entry" },
    { number: "8",  label: "× faster month-end close" },
    { number: "99", label: "% reconciliation accuracy" },
    { number: "24", label: "/7 compliance monitoring" }
  ],

  /* ---- Services section ---- */
  services: {
    eyebrow: "What we automate",
    title: "Automation built for the way accountants actually work",
    subtitle: "Practical, auditable workflows that plug into the tools you already use — not a rip-and-replace.",
    items: [
      { icon: "📥", title: "Bookkeeping & data capture", text: "Auto-extract data from invoices, receipts and bank feeds with OCR, then post entries with rule-based coding." },
      { icon: "🔁", title: "Reconciliations", text: "Match ledgers, bank statements and sub-ledgers automatically and surface only the exceptions that need a human." },
      { icon: "📊", title: "Financial reporting", text: "One-click management packs, MIS dashboards and board reports refreshed straight from live data." },
      { icon: "🛡️", title: "Compliance & filings", text: "Track GST/VAT, TDS, and statutory deadlines with automated reminders and pre-filled return workpapers." },
      { icon: "🔍", title: "Audit support", text: "Sampling, tie-outs and evidence collection automated, with a clean, exportable audit trail for every step." },
      { icon: "🤖", title: "AI advisory copilots", text: "Ask questions of your financials in plain language and get instant, source-linked answers for clients." }
    ]
  },

  /* ---- How it works section (steps numbered automatically) ---- */
  how: {
    eyebrow: "How it works",
    title: "From spreadsheets to automated workflows in four steps",
    steps: [
      { title: "Map the workflow", text: "We review a repetitive process — say, monthly reconciliations — and document every rule and exception." },
      { title: "Connect your data", text: "Secure, read-only connections to your accounting software, bank feeds and document stores." },
      { title: "Automate & review", text: "Bots handle the volume; your team reviews flagged exceptions and approves with a single click." },
      { title: "Scale with confidence", text: "Every action is logged and auditable, so you keep full control and compliance as you grow." }
    ]
  },

  /* ---- Benefits section ---- */
  benefits: {
    eyebrow: "Why it matters",
    title: "Reclaim time for the work only a CA can do",
    text: "Automation isn't about replacing accountants — it's about freeing them from the manual grind so they can focus on advice, risk and relationships.",
    checklist: [
      "Cut month-end close from weeks to days",
      "Reduce human error and rework",
      "Handle more clients without adding headcount",
      "Deliver real-time insights, not stale reports",
      "Keep a defensible, timestamped audit trail"
    ],
    button: "Talk to us",
    beforeTitle: "Before",
    beforeList: [
      "Manual data entry",
      "Late-night reconciliations",
      "Version-chaos spreadsheets",
      "Deadline scrambles"
    ],
    afterTitle: "With Chartered Automation",
    afterList: [
      "Auto-captured data",
      "Exceptions-only review",
      "Single source of truth",
      "Deadlines on autopilot"
    ]
  },

  /* ---- Testimonials section ---- */
  testimonials: {
    eyebrow: "In their words",
    title: "What finance teams say",
    items: [
      { quote: "Our reconciliation time dropped by 80%. My team finally gets to do advisory work instead of chasing entries.", author: "— Partner, mid-size audit firm" },
      { quote: "Month-end used to swallow the first week. Now the numbers are ready on day two, with a clean audit trail.", author: "— Financial Controller, SaaS company" },
      { quote: "The compliance reminders alone paid for themselves. We haven't missed a filing deadline since.", author: "— Practising Chartered Accountant" }
    ]
  },

  /* ---- Pricing section ----
     For each plan:
       currency : the symbol before the price (leave "" for none)
       price    : the number, or a word like "Custom"
       period   : e.g. "/mo" (leave "" for none)
       featured : true makes the card highlighted (use on ONE plan)
       badge    : small label on a featured card (leave "" for none)
  */
  pricing: {
    eyebrow: "Simple pricing",
    title: "Plans that scale with your practice",
    subtitle: "Start small, automate one workflow, and expand as you see the results.",
    plans: [
      {
        name: "Starter",
        currency: "$", price: "0", period: "/mo",
        note: "For solo practitioners exploring automation.",
        features: ["1 automated workflow", "Up to 500 transactions/mo", "Email support"],
        button: "Start free",
        featured: false,
        badge: ""
      },
      {
        name: "Practice",
        currency: "$", price: "149", period: "/mo",
        note: "For growing firms and finance teams.",
        features: ["Up to 10 workflows", "Unlimited transactions", "Compliance calendar & reminders", "Priority support"],
        button: "Choose Practice",
        featured: true,
        badge: "Most popular"
      },
      {
        name: "Enterprise",
        currency: "", price: "Custom", period: "",
        note: "For multi-office firms with bespoke needs.",
        features: ["Unlimited workflows", "Dedicated success manager", "SSO & advanced security", "Custom integrations"],
        button: "Contact sales",
        featured: false,
        badge: ""
      }
    ]
  },

  /* ---- Contact section ---- */
  contact: {
    heading: "Ready to let automation do the heavy lifting?",
    text: "Tell us about one workflow you'd love to automate. We'll show you what's possible in a free 20-minute walkthrough.",
    labelName: "Name",
    labelEmail: "Work email",
    labelMessage: "What would you like to automate?",
    button: "Request my walkthrough"
  },

  /* ---- Footer ---- */
  footer: {
    tagline: "Where chartered accountancy meets automation.",
    email: "hello@charteredautomation.com",
    subtitle: "Built for chartered accountants embracing automation."
  }
};
