# Studio Arcos — Kaelen Voss, AIA Architecture Portfolio Template

An editorial, stone-and-travertine architectural studio website template crafted for architects, interior designers, urban planners, and spatial design practices.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🏛️ Key Features

- **Dynamic Content Injection:** Manage project monographs, built areas, sustainable material sourcing, and awards via `data.json`.
- **Architectural Project Monographs:** High-resolution architectural plates alongside structural metadata (Gross Built Area, Year, Materials).
- **Tectonic Materiality Showcase:** Detail your sustainable sourcing (Mass Timber, Board-Formed Concrete, Zinc).
- **Honors & Distinctions List:** RIBA and AIA award achievements.
- **Spatial Commission Form:** Client brief intake with site location and budget parameters.
- **Zero Build Dependencies:** Blazing fast vanilla HTML5, CSS3, and modern JavaScript.

---

## 📁 File Structure

```
06-architect/
├── index.html        # Main semantic architectural markup
├── style.css         # Editorial architectural layout & typography
├── app.js            # Dynamic hydration engine
├── data.json         # All studio copy, monographs, and materials
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Studio Information:** Edit `name`, `practice`, `location`, and `tagline`.
2. **Projects:** Add your architectural projects with areas, materials, and photos in `"projects"`.
3. **Materials:** List your material palette in `"materials"`.
4. **Awards:** Add your design honors in `"awards"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `architect-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your architecture portfolio is published at `https://<your-username>.github.io/architect-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.yourstudio.com` and save.
2. At your DNS registrar, add `A Records` pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — delivering spatial and digital architecture for modern practices. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
