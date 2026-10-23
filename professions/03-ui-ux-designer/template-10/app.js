
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
  const metricsEl = document.getElementById('canvas-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => `
      <div class="c-stat-box">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  const casesEl = document.getElementById('cases-grid');
  if (casesEl) {
    casesEl.innerHTML = data.items.map(item => `
      <article class="canvas-case-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="case-content-box">
          <span style="font-size: 0.72rem; color: #0d99ff; font-weight: 700; text-transform: uppercase;">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span style="background: #f3f4f6; color: #111827; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.6rem; border-radius: 4px;">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('packages-grid');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="canvas-pkg-card">
        <h3>${p.name}</h3>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&#10003; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }

  ensureAttributionBadge();
}

function setCanvasWidth(mode) {
  const frame = document.getElementById('artboard-frame');
  const dim = document.getElementById('artboard-dim');
  const btns = document.querySelectorAll('.vp-btn');
  btns.forEach(b => b.classList.remove('active'));

  if (mode === 'desktop') {
    frame.style.maxWidth = '1200px';
    dim.textContent = '1440 × 2800';
    btns[0].classList.add('active');
  } else if (mode === 'tablet') {
    frame.style.maxWidth = '768px';
    dim.textContent = '768 × 2800';
    btns[1].classList.add('active');
  } else if (mode === 'mobile') {
    frame.style.maxWidth = '390px';
    dim.textContent = '390 × 2800';
    btns[2].classList.add('active');
  }
}

window.setCanvasWidth = setCanvasWidth;
