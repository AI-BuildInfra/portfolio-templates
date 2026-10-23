# Maya Lin — Staff Product & UI/UX Designer Portfolio Template

An interactive, design-systems-forward portfolio website template tailored for UI/UX designers, product designers, design architects, and creative technologists.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🎨 Key Features

- **Dynamic JSON Architecture:** Update projects, design sprint steps, outcomes, and availability via `data.json`.
- **In-Depth Case Studies Stack:** Problem-Solution-Outcome cards with key metric highlights and technology chips.
- **Design Process Sprint Steps:** Interactive 4-phase methodology showcase (Discover, Architecture, Tokenization, Validation).
- **Interactive Design Token Sandbox:** Live preview widget showing instant theme and state switching.
- **Zero Dependencies:** Pure semantic HTML5, modern CSS Grid, and vanilla JavaScript for blazing speed.
- **Contextual Schema & Backlink:** Native Person schema and contextual web architecture attribution to AI BuildInfra.

---

## 📁 File Structure

```
03-ui-ux-designer/
├── index.html        # Main semantic markup
├── style.css         # Dark neo-tech design system & responsive styling
├── app.js            # Dynamic hydration engine & interactive sandbox
├── data.json         # All design case studies and designer bio
└── README.md         # Deployment & customization instructions
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Designer Profile:** Update `name`, `role`, `tagline`, and `availability`.
2. **Case Studies:** Add your own project titles, problem statements, solutions, metrics, and screenshots in the `"caseStudies"` array.
3. **Design Process:** Adjust your 4-phase design workflow in the `"process"` array.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `ux-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your live portfolio is deployed at `https://<your-username>.github.io/ux-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.yourdesigndomain.com` and save.
2. At your domain DNS provider, set `A Records` to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — delivering enterprise web solutions and developer platforms. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
