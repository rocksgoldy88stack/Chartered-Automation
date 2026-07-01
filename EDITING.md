# ✏️ How to edit your website (no coding needed)

All the text on your site lives in **one file**: `public/content.js`.
Change the words there, save, and your live site updates automatically in about a minute.

---

## The golden rules

1. Only change the text **between the "quotation marks"**.
2. **Keep** the quotes `" "`, colons `:` and commas `,` exactly where they are.
3. Never delete the curly braces `{ }` or square brackets `[ ]`.
4. Emojis, accents and symbols (like `×`, `·`, `₹`) are all fine.

✅ Correct:
```
buttonPrimary: "Get a free demo",
```
❌ Wrong (missing quotes / comma):
```
buttonPrimary: Get a free demo
```

---

## Editing directly on GitHub (easiest — from any browser)

1. Open the file:
   `https://github.com/rocksgoldy88stack/chartered-automation/blob/main/public/content.js`
2. Click the **pencil icon** (✏️ "Edit this file") near the top right.
3. Make your text changes.
4. Scroll down, click **Commit changes**.
5. Wait ~1 minute — refresh your live site to see the update.

> The **Actions** tab shows a green check when the new version is published.

---

## Common things you'll want to change

| What you want to change | Where in `content.js` |
|-------------------------|-----------------------|
| Business name / logo text | `brand:` → `wordOne`, `wordTwo` |
| Big headline at the top | `hero:` → `headingMain`, `headingAccent` |
| Intro paragraph | `hero:` → `subtext` |
| The 4 big numbers | `stats:` list |
| Services offered | `services:` → `items` list |
| Pricing & plans | `pricing:` → `plans` list |
| Customer quotes | `testimonials:` → `items` list |
| Contact email | `footer:` → `email` |

---

## Adding or removing a list item

Lists (services, pricing plans, testimonials, etc.) use blocks wrapped in `{ ... }`.

**To add one:** copy a whole block, paste it after another, and put a comma between them:
```
{ icon: "📈", title: "Forecasting", text: "Automated cash-flow forecasts." },
{ icon: "📥", title: "Bookkeeping & data capture", text: "..." },
```

**To remove one:** delete its entire `{ ... }` block (and the trailing comma).

---

## If something looks broken

If the page ever appears blank after an edit, it usually means a quote or comma
was accidentally removed. Open `content.js` on GitHub, click the **History**,
and restore the previous version — or just ask Kiro to fix it.
