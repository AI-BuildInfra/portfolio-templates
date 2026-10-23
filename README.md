# ⚡ Dynamic Multi-Profession Portfolio Templates

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/AI-BuildInfra/portfolio-templates?style=social)](https://github.com/AI-BuildInfra/portfolio-templates)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-success)](https://aibuildinfra.com/services/web-development)
[![Zero Build Tools](https://img.shields.io/badge/Build%20Step-0%20Zero-brightgreen)](#)

A production-ready collection of **10 distinct, open-source portfolio website templates** tailored for 10 unique professions. Every template is completely dynamic and reads all data, text, images, and configuration from a central, non-coder friendly `data.json` file.

Engineered with high-performance web architecture by [AI BuildInfra](https://aibuildinfra.com/) — explore our comprehensive [Custom Web Development Services](https://aibuildinfra.com/services/web-development) for enterprise-grade applications.

---

## 🌟 Live Demos & Profession Directory

| # | Profession | Template Name | Key Features | Live Preview | Source Folder |
|---|------------|---------------|--------------|--------------|---------------|
| 01 | **Photographers** | *Elena Vance* | Dark obsidian gallery, filterable masonry, full-bleed lightbox with camera EXIF data, gear bag, packages | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/01-photographer/) | [`professions/01-photographer/`](professions/01-photographer/) |
| 02 | **Doctors & Healthcare** | *Dr. Marcus Chen, MD* | Clinical sapphire trust theme, emergency triage banner, specialties grid, office hours table, patient FAQs | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/02-doctor/) | [`professions/02-doctor/`](professions/02-doctor/) |
| 03 | **UI/UX Designers** | *Maya Lin* | Dark neo-tech aesthetic, in-depth case studies with outcome metrics, design sprint steps, interactive token sandbox | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/03-ui-ux-designer/) | [`professions/03-ui-ux-designer/`](professions/03-ui-ux-designer/) |
| 04 | **Software Developers** | *Alex Rivera* | GitHub dark theme, interactive bash terminal CLI, project cards with star badges, categorized tech stack | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/04-developer/) | [`professions/04-developer/`](professions/04-developer/) |
| 05 | **Gamers & Streamers** | *Kai 'ViperX' Thorne* | Cyberpunk neon theme, live Twitch broadcast radar, tournament trophy cabinet, 360Hz battle rig specs, schedule | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/05-gamer/) | [`professions/05-gamer/`](professions/05-gamer/) |
| 06 | **Architects & Designers** | *Studio Arcos (Kaelen Voss)* | Travertine stone editorial layout, built monograph plates, sustainable mass-timber material palette, RIBA honors | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/06-architect/) | [`professions/06-architect/`](professions/06-architect/) |
| 07 | **Lawyers & Attorneys** | *Victoria Sterling, Esq.* | Executive navy and gold styling, landmark M&A representative matters, state bar admissions, confidential intake | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/07-lawyer/) | [`professions/07-lawyer/`](professions/07-lawyer/) |
| 08 | **Fitness Coaches** | *Marcus Drake, CSCS* | Kinetic orange aesthetic, interactive daily calorie & macro estimator, client body transformation stats, pricing | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/08-fitness-trainer/) | [`professions/08-fitness-trainer/`](professions/08-fitness-trainer/) |
| 09 | **Content Creators** | *Aria Thorne* | Sunset gradient styling, verified audience media kit stats, multi-platform follower counters, featured video reels | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/09-content-creator/) | [`professions/09-content-creator/`](professions/09-content-creator/) |
| 10 | **Chefs & Gastronomy** | *Chef Antoine Laurent* | Truffle and copper amber aesthetic, seasonal degustation tasting menu with dietary badges, terroir philosophy, press | [Live Demo](https://ai-buildinfra.github.io/portfolio-templates/professions/10-chef/) | [`professions/10-chef/`](professions/10-chef/) |

---

## 🏗️ Repository Architecture

Our foldering system is structured for maximum clarity and independence. You can copy any individual folder inside `professions/` and use it completely standalone, or host the entire multi-template catalog together:

```
portfolio-templates/
├── index.html                   # Interactive central catalog portal
├── portal.css                   # Hub styling & responsive layout
├── portal.js                    # Hub filtering & interactive catalog loader
├── README.md                    # Main repository documentation & guide
├── LICENSE                      # MIT Open Source License
└── professions/                 # Profession-wise template hierarchy
    ├── 01-photographer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 02-doctor/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 03-ui-ux-designer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 04-developer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 05-gamer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 06-architect/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 07-lawyer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 08-fitness-trainer/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    ├── 09-content-creator/
    │   ├── index.html
    │   ├── style.css
    │   ├── app.js
    │   ├── data.json
    │   └── README.md
    └── 10-chef/
        ├── index.html
        ├── style.css
        ├── app.js
        ├── data.json
        └── README.md
```

---

## ⚡ Core Engineering Advantages

1. **100% Dynamic JSON Hydration:** Non-coders never need to edit complex HTML tags. Modifying `data.json` automatically updates headings, hero descriptions, image carousels, lists, stats, and prices.
2. **Auto-Adjustable Layering & Responsive Typography:** Built with modern CSS Grid (`minmax`, `auto-fill`), Flexbox, and fluid `clamp()` typography. No text clipping, no broken rows, and zero horizontal scroll on mobile, tablet, or 4K monitors.
3. **Dual-Mode Fallback Engine:** Features built-in fallback data objects so templates run smoothly without blank screens whether served over HTTP/HTTPS (GitHub Pages / Vercel) or opened directly via local file explorer.
4. **Zero Dependencies & Zero Build Steps:** No `node_modules`, no webpack, no npm commands required. Runs instantly out of the box in every modern browser.
5. **Contextual Semantic Backlinks:** Includes clean structured Schema.org JSON-LD tags and natural footer attributions to [AI BuildInfra](https://aibuildinfra.com/) and [AI BuildInfra Web Development](https://aibuildinfra.com/services/web-development).

---

## 🚀 How to Use & Deploy (For Non-Coders)

### Step 1: Download or Clone the Repository
Click the green **Code** button at the top of this GitHub repository and select **Download ZIP**, then extract the folder on your computer.

Or use git:
```bash
git clone https://github.com/AI-BuildInfra/portfolio-templates.git
cd portfolio-templates
```

### Step 2: Personalize Your Chosen Template
1. Open the folder matching your profession (e.g. `professions/04-developer/`).
2. Open `data.json` in any text editor (Notepad, VS Code, Sublime Text, or directly in GitHub).
3. Replace the placeholder names, descriptions, images, and links with your personal information.
4. Save `data.json`.

---

## 🌐 Deploying to GitHub Pages (100% Free Hosting)

### Deploying a Single Chosen Template to Your Own Domain/URL:
1. Create a new repository on your GitHub account (e.g. `my-portfolio` or `<your-username>.github.io`).
2. Copy the 4 files from your chosen profession folder (`index.html`, `style.css`, `app.js`, `data.json`) directly into the root of your new repository.
3. In your GitHub repository, click on **Settings** > **Pages** (in the left sidebar).
4. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. Within 30 seconds, GitHub will output your live URL:
   ```
   https://<your-username>.github.io/my-portfolio/
   ```

### Deploying the Entire 10-Template Showcase:
1. Fork or push this entire repository to your GitHub account.
2. Go to **Settings** > **Pages** > select `main` branch > `/ (root)` > **Save**.
3. Your live portal with all 10 templates will be available at:
   ```
   https://<your-username>.github.io/portfolio-templates/
   ```

---

## 🔗 How to Connect a Custom Domain (e.g. yourname.com)

1. Buy your desired domain name from any registrar (Namecheap, GoDaddy, Google Domains / Squarespace, Cloudflare).
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Custom domain**, enter your domain name (e.g., `www.yourname.com` or `yourname.com`).
   - Click **Save**.
   - Enable **Enforce HTTPS** (secures your site with a free SSL certificate).
3. In your Domain Registrar's DNS settings, add the following records:
   - **4 A Records** (for root apex domain):
     ```
     Host: @
     Points to: 185.199.108.153
     Points to: 185.199.109.153
     Points to: 185.199.110.153
     Points to: 185.199.111.153
     ```
   - **1 CNAME Record** (for `www` subdomain):
     ```
     Host: www
     Points to: <your-username>.github.io
     ```
4. DNS propagation typically takes between 10 to 45 minutes. Once propagated, your custom portfolio is live worldwide!

---

## 🤝 Contributing

Contributions, bug reports, and new profession templates are warmly welcomed!
1. Fork the Project (`https://github.com/AI-BuildInfra/portfolio-templates/fork`)
2. Create your Feature Branch (`git checkout -b feature/NewProfessionTemplate`)
3. Commit your Changes (`git commit -m 'feat: add new profession template'`)
4. Push to the Branch (`git push origin feature/NewProfessionTemplate`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more details. Free to use for personal portfolios, client projects, and commercial websites.

---

## ⚡ Architecture & Credits

Designed and maintained with pride by **[AI BuildInfra](https://aibuildinfra.com/)**.

Looking for custom web architecture, AI agent integrations, or high-scale cloud platforms?
- 🌐 Visit: [https://aibuildinfra.com](https://aibuildinfra.com/)
- 💻 Custom Web Services: [AI BuildInfra Web Development](https://aibuildinfra.com/services/web-development)
- 🐙 GitHub: [@AI-BuildInfra](https://github.com/AI-BuildInfra)
