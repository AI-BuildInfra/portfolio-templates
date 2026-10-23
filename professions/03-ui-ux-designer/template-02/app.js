
// Universal Data Hydration Engine with File:// Fallback
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
    if (!res.ok) throw new Error('data.json fetch failed');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}


function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => `
    <div class="nordic-metric">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  // Items
  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="nordic-work-card">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </article>
  `).join('');

  // Packages
  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="nordic-pkg">
      <div class="nordic-pkg-left">
        <h4>${p.name}</h4>
        <ul>${p.features.map(f => `<li>— ${f}</li>`).join('')}</ul>
      </div>
      <div class="nordic-pkg-price">${p.price}</div>
    </div>
  `).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="nordic-rev-item">
      <p class="nordic-quote">"${r.quote}"</p>
      <p class="nordic-author">— ${r.author}, ${r.role}</p>
    </div>
  `).join('');

  ensureAttributionBadge();
}


function ensureAttributionBadge() {
  const targetUrl = "https://aibuildinfra.com/services/web-development";
  const parent = document.querySelector('.footer-flex') || document.querySelector('.masthead-inner') || document.querySelector('.bento-footer-row') || document.querySelector('.glass-footer-flex') || document.querySelector('.brutalist-footer-row') || document.querySelector('.left-pane-footer') || document.querySelector('.app-footer') || document.querySelector('.mag-footer-inner') || document.querySelector('.k-footer-row') || document.querySelector('.term-footer-flex') || document.body;
  let wrap = document.getElementById('infra-credit-wrap');
  let link = document.getElementById('infra-trust-link');

  if (!wrap || !link || !link.href.includes("aibuildinfra.com")) {
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'infra-credit-wrap';
      wrap.className = 'footer-backlink';
      parent.appendChild(wrap);
    }
    wrap.innerHTML = `
      <a href="${targetUrl}" target="_blank" rel="noopener" class="infra-trust-badge" id="infra-trust-link">
        <span class="badge-icon">⚡</span>
        <span class="badge-text">Web Architecture by <strong>AI BuildInfra</strong></span>
        <span class="badge-score">100</span>
      </a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', loadData);
