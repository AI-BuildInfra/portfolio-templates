# Aria Thorne — Content Creator & Digital Media Kit Portfolio Template

A vibrant, sunset-gradient digital creator portfolio and interactive media kit website template designed for YouTubers, travel filmmakers, podcast hosts, tech creators, and digital influencers.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🎬 Key Features

- **Dynamic Content Injection:** Manage audience demographics, subscriber statistics, video reels, and brand partnerships via `data.json`.
- **Integrated Digital Media Kit:** Showcase verified audience reach, annual video impressions, and high engagement rates.
- **Multi-Platform Analytics Cards:** Clean stats for YouTube, Instagram, TikTok, and Substack.
- **Featured Episodic Films:** Presentation cards for viral episodes and sponsored campaign deliverables.
- **Commercial Partnership Brief Intake:** Dedicated sponsorship form with deliverables selector and budget tier.
- **Zero Build Dependencies:** Blazing fast pure HTML5, CSS3, and modern JavaScript.

---

## 📁 File Structure

```
09-content-creator/
├── index.html        # Main semantic creator markup
├── style.css         # Modern glassmorphic gradient styling
├── app.js            # Dynamic hydration & media kit engine
├── data.json         # All creator metrics, episodes, and bio
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Creator Profile:** Update `name`, `handle`, `niche`, and `tagline`.
2. **Social Stats:** Enter your audience numbers in `"audienceStats"` and `"platforms"`.
3. **Featured Films:** Add your top videos and view counts in `"episodes"`.
4. **Brand Partners:** List your previous collaborations in `"partnerships"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `creator-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your creator portfolio is live at `https://<your-username>.github.io/creator-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.ariathorne.com` and save.
2. At your domain DNS settings, add `A Records`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — building high-performance digital experiences for modern creators and media brands. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
