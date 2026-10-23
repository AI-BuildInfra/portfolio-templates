# Victoria Sterling, Esq. — Legal Counsel & Law Practice Portfolio Template

An executive, navy-and-gold legal counsel portfolio website template designed for attorneys, corporate legal advisors, litigators, law firm partners, and legal consultancies.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## ⚖️ Key Features

- **Dynamic Content Injection:** Manage practice areas, representative matters, bar admissions, and disclaimer text via `data.json`.
- **Representative Matters Showcase:** Highlight multi-million dollar transaction values, arbitration victories, and antitrust clearances.
- **Bar Admissions & Jurisdictions List:** Highlighting federal admissions, appellate courts, and JD academic honors.
- **Privileged Consultation Intake:** Intake form designed for corporate and private client consultations.
- **Attorney Advertising Compliance:** Built-in legal disclaimer banner and mandatory ethics disclosures.
- **Zero Build Dependencies:** Pure HTML5, CSS3, and modern JavaScript.

---

## 📁 File Structure

```
07-lawyer/
├── index.html        # Main semantic legal markup
├── style.css         # Executive navy & gold styling
├── app.js            # Dynamic JSON hydration engine
├── data.json         # All attorney credentials, matters, and bio
└── README.md         # Deployment & customization guide
```

---

## 🛠️ How to Customize (For Non-Coders)

Open `data.json` in any text editor:
1. **Attorney Profile:** Update `name`, `title`, `firm`, and phone number.
2. **Practice Areas:** Modify legal focus areas in `"practices"`.
3. **Representative Matters:** Add your landmark transactions and trial outcomes in `"matters"`.
4. **Admissions:** List your state bar and federal district court admissions.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. `law-portfolio`).
2. Upload `index.html`, `style.css`, `app.js`, and `data.json` to the repo root.
3. In GitHub, go to **Settings** > **Pages**.
4. Set source to `main` branch, root `/` folder, and click **Save**.
5. Your legal portfolio is published at `https://<your-username>.github.io/law-portfolio/`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type `www.sterlinglegal.com` and save.
2. At your domain registrar, add `A Records`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add a `CNAME` record with host `www` pointing to `<your-username>.github.io`.
4. Enable "Enforce HTTPS".

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — building high-performance web systems for modern professional services. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
