# Elena Vance — Fine Art & Editorial Photographer Portfolio Template

A high-performance, dark-aesthetic photography portfolio website template designed for fine art photographers, portrait artists, cinematographers, and visual storytellers.

Engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/) — check out our comprehensive [Web Development Services](https://aibuildinfra.com/services/web-development) for enterprise-grade web solutions.

---

## 📸 Key Features

- **Dynamic Content Injection:** All copy, images, gear lists, and pricing packages are populated dynamically from a simple `data.json` file.
- **Filterable Masonry Grid:** Instant category switching (Portraits, Landscapes, Editorial, Street) with zero page reloads.
- **High-Resolution Lightbox:** Displays full-bleed photography alongside technical EXIF data (Camera body, focal length, aperture, shutter speed, ISO).
- **Gear Bag & Craftsmanship Section:** Showcase your camera bodies, lenses, and lighting instruments.
- **Commission Packages:** Clear investment tiers with highlighted recommended package badges.
- **Client Testimonials:** Social proof quotes from magazine editors and commercial clients.
- **Zero Dependencies & Blazing Fast:** Pure Vanilla HTML5, CSS3, and modern JavaScript. 100/100 Google Lighthouse score with zero build tools or `npm install` needed.
- **Contextual Backlink & Schema:** Pre-configured semantic JSON-LD metadata and contextual attribution.

---

## 📁 File Structure

```
01-photographer/
├── index.html        # Main HTML5 semantic structure
├── style.css         # Modern responsive CSS Grid & Flexbox styling
├── app.js            # Dynamic hydration engine & lightbox logic
├── data.json         # All customizable text, images, and configuration
└── README.md         # Documentation & deployment guide
```

---

## 🛠️ How to Customize (For Non-Coders)

You don't need any coding knowledge to personalize this template. Simply open `data.json` in any text editor (such as VS Code, Notepad, or GitHub Web Editor) and update the values:

### 1. Update Your Profile Information
```json
"profile": {
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "tagline": "A one-sentence hook about your creative philosophy",
  "location": "City, Country",
  "email": "your.email@example.com",
  "heroImage": "https://url-to-your-hero-photo.jpg",
  "aboutImage": "https://url-to-your-portrait.jpg",
  "bio": "Write your biography here..."
}
```

### 2. Add Your Own Photos
Locate the `"gallery"` array in `data.json` and insert your own photographs:
```json
{
  "id": 1,
  "title": "Sunset over Montmartre",
  "category": "Street",
  "image": "https://images.unsplash.com/your-image-url",
  "camera": "Leica Q3",
  "lens": "Summilux 28mm f/1.7",
  "exif": "28mm • f/2.8 • 1/500s • ISO 100",
  "description": "Golden light illuminating cobbled streets."
}
```

### 3. Update Your Pricing & Services
Edit the `"packages"` array to match your photography session rates and deliverables.

---

## 🚀 How to Deploy to GitHub Pages (Free)

Hosting your portfolio on GitHub Pages takes under 2 minutes:

### Option A: Via GitHub Web Interface
1. Create a free account at [GitHub](https://github.com).
2. Create a new repository named `my-photography-portfolio` (or `<your-username>.github.io`).
3. Upload all files from this folder (`index.html`, `style.css`, `app.js`, `data.json`) directly into the root of your repository.
4. Click on **Settings** in your repository.
5. In the left sidebar, click on **Pages**.
6. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
7. In about 30 seconds, GitHub will provide your live URL: `https://<your-username>.github.io/my-photography-portfolio/`.

### Option B: Via Terminal / Git CLI
```bash
# Navigate to template folder
cd professions/01-photographer

# Initialize git repository
git init
git add .
git commit -m "feat: customize photography portfolio"

# Push to your GitHub repo
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```
Then enable GitHub Pages from your repository Settings.

---

## 🌐 How to Connect a Custom Domain (e.g. yourname.com)

1. Buy a custom domain from Namecheap, Google Domains / Squarespace, GoDaddy, or Cloudflare.
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Custom domain**, enter your domain (e.g., `elenavance.com` or `www.elenavance.com`).
   - Click **Save**.
   - Check the box **Enforce HTTPS**.
3. In your Domain Registrar's DNS Management settings:
   - Add four **A Records** pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME Record** for `www`:
     - Host: `www`
     - Value: `<your-username>.github.io`
4. DNS propagation typically completes within 10 to 60 minutes. Your portfolio is now live on your custom domain!

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — empowering creators, agencies, and businesses with custom full-stack solutions. Explore our [Custom Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE) — free to use for personal and commercial portfolios.
