# Alex Rivera — Distributed Systems & Developer Portfolio Template

A dark, terminal-inspired developer portfolio website template designed for software engineers, backend architects, full-stack developers, and DevOps practitioners.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 💻 Key Features

- **Dynamic Content Injection:** Edit your GitHub projects, tech stack badges, work history, and terminal commands via `data.json`.
- **Interactive Bash Terminal:** Visitors can execute real terminal commands (`help`, `bio`, `skills`, `projects`, `experience`, `clear`).
- **Production Project Cards:** Clean presentation of project highlights, GitHub stars, tech stack tags, and live demo links.
- **Categorized Tech Stack:** Clear breakdown of languages, backend engines, DevOps tooling, and databases.
- **Git Commit-Style Timeline:** Linear career milestones and impact summaries.
- **Zero Build Tools:** Runs instantly in any browser. No webpack, vite, or node_modules needed.
- **Contextual Schema & Backlink:** Native structured metadata with attribution to AI BuildInfra.

---

## 📁 File Structure

```
04-developer/
├── index.html        # Main semantic developer markup
├── style.css         # GitHub/terminal dark theme CSS
├── app.js            # Dynamic hydration & bash terminal simulator
├── data.json         # All developer copy, projects, and commands
└── README.md         # Deployment & customization instructions
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Developer Profile:** Edit `name`, `handle`, `title`, and social links.
2. **Projects:** Add your open-source projects or apps in `"projects"`.
3. **Skills:** Modify your languages and frameworks in `"skills"`.
4. **Terminal Commands:** Add or customize responses in `"terminalCommands"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `dev-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your terminal portfolio is live at `https://<your-username>.github.io/dev-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.yourdomain.dev` and save.
2. Point your DNS `A Records` to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — empowering developers and tech enterprises with cutting-edge web infrastructure. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
