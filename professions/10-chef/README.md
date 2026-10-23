# Chef Antoine Laurent — Executive Chef & Fine Dining Portfolio Template

An exquisite, warm truffle-and-amber culinary portfolio website template tailored for Michelin-starred chefs, private dining artists, restaurateurs, sommeliers, and culinary directors.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🍽️ Key Features

- **Dynamic Content Injection:** Update seasonal tasting menus, ingredients, culinary philosophy, and accolades via `data.json`.
- **Degustation Course Progression:** Multi-course presentation with course labels, ingredient provenance, and dietary badges (Vegetarian, Gluten-Free, Sustainable Seafood).
- **Culinary Philosophy & Terroir:** Highlight your commitment to zero-waste, ancestral koji fermentation, and biodynamic farm alliances.
- **Michelin & Press Accolades:** High-prestige review quotes from The Michelin Guide, The New York Times, and World's 50 Best.
- **Private Dining Concierge Intake:** Form for private estate dining, brand galas, and culinary residencies.
- **Zero Build Dependencies:** Blazing fast pure HTML5, CSS3, and modern JavaScript.

---

## 📁 File Structure

```
10-chef/
├── index.html        # Main semantic culinary markup
├── style.css         # Warm gourmet truffle & amber styling
├── app.js            # Dynamic hydration engine
├── data.json         # All chef tasting menus, dishes, and bio
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Chef Profile:** Update `name`, `title`, `restaurant`, and `tagline`.
2. **Tasting Menu:** Add or modify courses and ingredients in `"tastingMenu"`.
3. **Philosophy:** Add your culinary pillars in `"philosophy"`.
4. **Press:** Add your restaurant reviews and quotes in `"press"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `chef-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your culinary portfolio is live at `https://<your-username>.github.io/chef-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.chefantoine.com` and save.
2. At your domain DNS settings, add `A Records`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — delivering fine dining and luxury web architectures. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
