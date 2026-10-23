// Dynamic Hydration Engine for Maya Lin
const FALLBACK_DATA = {
  "id": "03-ui-ux-designer",
  "name": "Maya Lin",
  "category": "creative",
  "title": "Staff Product & Design Systems Designer",
  "headline": "Crafting Resilient Digital Products and Scalable Multi-Brand Design Systems",
  "tagline": "Design Systems • Enterprise SaaS • Fintech",
  "bio": "Over 9 years architecting products for fintech unicorns, developer platforms, and enterprise SaaS. Bridging rigorous qualitative research with production token architecture.",
  "location": "Seattle, WA & Remote",
  "email": "hello@mayalinux.design",
  "phone": "+1 (206) 555-0144",
  "heroImage": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "9+",
      "label": "Years Experience"
    },
    {
      "val": "14+",
      "label": "Design Systems Shipped"
    },
    {
      "val": "2.4M+",
      "label": "Active Platform Users"
    },
    {
      "val": "3",
      "label": "Design Awards (Red Dot)"
    }
  ],
  "itemsTitle": "Selected Product Case Studies",
  "items": [
    {
      "title": "VaultPay Global Treasury App",
      "tag": "Fintech",
      "desc": "Autonomous international cross-border liquidity management platform.",
      "meta": "+164% Daily Transactions",
      "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Prism Multi-Brand Design System",
      "tag": "Design Systems",
      "desc": "Unified 4 enterprise brands under tokenized WCAG 2.1 AAA accessibility.",
      "meta": "62% Faster Sprint Velocity",
      "img": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Orbit AI Codebase Copilot",
      "tag": "Developer Tools",
      "desc": "Human-in-the-loop AST visualization and code refactoring interface.",
      "meta": "4.9/5 CSAT Rating",
      "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Krypton Health Patient Portal",
      "tag": "HealthTech",
      "desc": "Empowering patients with transparent telehealth scheduling and lab results.",
      "meta": "98.7% Retention Rate",
      "img": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Design System Audit & Tokens",
      "price": "$4,500",
      "features": [
        "Figma token architecture review",
        "Accessibility WCAG compliance audit",
        "Component library restructuring",
        "Developer handoff documentation"
      ]
    },
    {
      "name": "End-to-End Product Design",
      "price": "$8,500+",
      "features": [
        "User research & journey blueprints",
        "Wireframes to high-fidelity prototypes",
        "Interactive Protopie testing",
        "Engineering support & QA"
      ]
    },
    {
      "name": "Monthly Staff Design Advisory",
      "price": "$3,800/mo",
      "features": [
        "15 hours design leadership",
        "Design sprint alignment",
        "Design team mentoring",
        "Executive design reviews"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Maya transformed our messy platform into a benchmark of elegant usability.",
      "author": "Samantha Vance",
      "role": "VP of Product"
    },
    {
      "quote": "Her deep understanding of design tokens saved our engineering squads months of work.",
      "author": "Julian Meyer",
      "role": "Head of Engineering"
    }
  ]
};

async function loadData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('hero-avatar').src = data.avatar;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metricsBox = document.getElementById('metrics-grid');
  metricsBox.innerHTML = data.stats.map(s => `
    <div class="metric-card">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  // Items
  const itemsBox = document.getElementById('items-grid');
  itemsBox.innerHTML = data.items.map(item => `
    <article class="item-card">
      <div class="item-thumb">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="item-info">
        <span class="item-tag">${item.tag}</span>
        <h3 class="item-title">${item.title}</h3>
        <p class="item-desc">${item.desc}</p>
        <span class="item-meta">${item.meta}</span>
      </div>
    </article>
  `).join('');

  // Packages
  const pkgBox = document.getElementById('packages-grid');
  pkgBox.innerHTML = data.packages.map(p => `
    <div class="package-card">
      <h3 class="pkg-name">${p.name}</h3>
      <div class="pkg-price">${p.price}</div>
      <ul class="pkg-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn btn-primary btn-block">Inquire &gt;</a>
    </div>
  `).join('');

  // Reviews
  const revBox = document.getElementById('reviews-grid');
  revBox.innerHTML = data.reviews.map(r => `
    <div class="review-card">
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-author">${r.author}</div>
      <div class="review-role">${r.role}</div>
    </div>
  `).join('');

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadData);
