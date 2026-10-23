# Dr. Marcus Chen, MD — Healthcare & Medical Specialist Portfolio Template

A clean, trust-inspiring medical practice and physician portfolio website template designed for doctors, cardiologists, surgeons, dentists, therapists, and medical clinics.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## 🩺 Key Features

- **Dynamic Content Injection:** Manage doctor credentials, office hours, clinical specialties, and patient FAQs by simply editing `data.json`.
- **Urgent Emergency Hotline & Live Status Banner:** Prominent patient triage notification and "Open Today" clinic status.
- **Clinical Specialties Grid:** Highlight medical focus areas, diagnostic tests, and surgical procedures.
- **Office Hours & Hospital Affiliations Table:** Clear visibility into clinic schedule and admitting privileges.
- **Interactive Patient FAQ Accordion:** Clean animated answers to common insurance and preparation questions.
- **Online Consultation Request Form:** Streamlined intake with specialty selector and symptom notes.
- **Contextual Schema & Backlink:** Native Physician schema.org structured data and web performance attribution to AI BuildInfra.

---

## 📁 File Structure

```
02-doctor/
├── index.html        # Main semantic HTML5 template
├── style.css         # Clinical trust design system & responsive layout
├── app.js            # Dynamic JSON loader & accordion logic
├── data.json         # All medical copy, credentials, and clinic info
└── README.md         # Documentation & deployment guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor and adjust:

1. **Doctor Information:** Change name, degrees, specialty, clinic address, and telephone numbers.
2. **Clinical Focus:** Edit `"specialties"` to list your hospital's or practice's treatments.
3. **Office Hours:** Adjust hours for each day of the week.
4. **Patient FAQs:** Add frequently asked insurance or pre-op questions.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g., `doctor-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` directly to the repository root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, `/ (root)` folder, and click **Save**.
5. Your medical site is published instantly at `https://<your-username>.github.io/doctor-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.yourclinic.com` and save.
2. At your domain registrar (GoDaddy, Namecheap, Cloudflare), set `A Records` to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — empowering healthcare providers and professionals with robust digital platforms. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
