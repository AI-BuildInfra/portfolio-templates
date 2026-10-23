# Kai 'ViperX' Thorne — Esports Athlete & Streamer Portfolio Template

A high-octane cyberpunk esports and gaming portfolio website template tailored for competitive FPS players, Twitch streamers, gaming YouTubers, and esports teams.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🎮 Key Features

- **Dynamic JSON Hydration:** Easily update tournament winnings, live broadcast status, hardware battle station specs, and schedule in `data.json`.
- **Live Stream Radar:** Top status bar with pulsating live indicator and direct link to Twitch/YouTube broadcasts.
- **Trophy & Tournament Cabinet:** Show off championship placements, MVP titles, and prize pools.
- **Battle Station & Hardware Specs:** Detailed showcase of GPU, CPU, 360Hz displays, mouse DPI, and audio gear.
- **Weekly Streaming Schedule:** Clear schedule grid for your community.
- **Sponsorship & Commercial Inquiries Form:** Streamlined proposal intake for brands and peripheral manufacturers.
- **Zero Build Dependencies:** Works out of the box with zero npm packages or build scripts.

---

## 📁 File Structure

```
05-gamer/
├── index.html        # Main semantic markup
├── style.css         # Cyberpunk neon responsive CSS
├── app.js            # Dynamic hydration & live stream status logic
├── data.json         # All gamer bio, hardware, trophies, and schedule
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Gamer Profile:** Update `gamertag`, `realName`, `team`, and `streamUrl`.
2. **Toggle Live Stream:** Set `"isLive": true` or `false` to toggle the top banner live indicator.
3. **Trophies:** Add your tournament victories in the `"trophies"` list.
4. **Hardware Rig:** Update your PC specs and peripherals in `"setup"`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `gamer-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your gaming website is online at `https://<your-username>.github.io/gamer-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.yourgamertag.gg` and save.
2. At your domain registrar, add `A Records`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — building high-performance web systems for modern creators and gaming communities. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
