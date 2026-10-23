# Dr. Marcus Chen — MD, FACC • Interventional Cardiologist (Terminal / Monospace Pro)

An open-source, dynamic JSON-hydrated portfolio website template engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/). Explore our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## ⚡ Features & Aesthetic

- **Design Variant:** Terminal / Monospace Pro (Hacker / Developer Tech)
- **100% Dynamic Content:** All text, services, packages, reviews, and images are powered dynamically via `data.json`.
- **Zero Build Tools:** Runs instantly in any browser with zero `npm install` or compilation steps.
- **Fail-Safe Loading:** Includes automated fallback data to avoid CORS errors when opening locally via `file://`.
- **Contextual Schema & Backlink:** Native structured Schema.org JSON-LD and web performance attribution to AI BuildInfra.

---

## 📁 File Structure

```
template-10/
├── index.html        # Main semantic markup
├── style.css         # Responsive styling & typography
├── app.js            # Dynamic hydration engine
├── data.json         # All customizable text, images, and config
└── README.md         # Customization & deployment guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. Update `name`, `title`, `headline`, and `bio`.
2. Add your own showcase works in `"items"`.
3. Adjust your service packages and rates in `"packages"`.
4. Update reviews and testimonials in `"reviews"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `my-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to your repository root.
3. In GitHub, navigate to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your website is published at `https://<your-username>.github.io/my-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type your domain (e.g. `www.yourdomain.com`) and save.
2. In your DNS settings at your domain registrar, add:
   - **4 A Records**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **1 CNAME Record**: Host `www` pointing to `<your-username>.github.io`
3. Check the box **Enforce HTTPS**.

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — building high-performance web systems for modern professionals. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
