# Marcus Drake, CSCS — Fitness Coach & Physique Architect Portfolio Template

A high-energy, kinetic dark-orange fitness and coaching website template designed for strength coaches, personal trainers, online fitness creators, and sports nutritionists.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## ⚡ Key Features

- **Dynamic Content Injection:** Manage coaching programs, pricing tiers, transformation photos, and coach bio via `data.json`.
- **Interactive Calorie & Macro Target Estimator:** Built-in interactive calculator for client fat loss, maintenance, or muscle gain targets.
- **Client Transformation Showcase:** Highlight before-and-after metrics (e.g. -32 lbs fat loss / +9 lbs lean mass).
- **Tiered Coaching Plans:** Highlighting VIP 1-on-1 coaching, hybrid plans, and corporate fitness.
- **Client Application Intake:** Structured onboarding questionnaire for serious applicants.
- **Zero Dependencies:** Pure HTML5, CSS3, and modern JavaScript with 100/100 performance.

---

## 📁 File Structure

```
08-fitness-trainer/
├── index.html        # Main semantic fitness markup
├── style.css         # Kinetic dark-orange styling & responsive layout
├── app.js            # Dynamic hydration & interactive macro calculator
├── data.json         # All coaching programs, transformations, and copy
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Coach Information:** Update `name`, `credentials`, `tagline`, and `whatsapp`.
2. **Programs & Pricing:** Customize pricing and features in `"programs"`.
3. **Transformations:** Add client success stories and before/after stats in `"transformations"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `fitness-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your fitness coaching website is published at `https://<your-username>.github.io/fitness-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.marcusfitness.com` and save.
2. At your domain DNS settings, add `A Records`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — empowering fitness creators and coaches with high-conversion web platforms. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
