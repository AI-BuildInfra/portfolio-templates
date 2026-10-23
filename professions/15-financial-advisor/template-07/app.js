// Dynamic Hydration Engine for Arthur Pendelton, CFP®
const FALLBACK_DATA = {
  "id": "15-financial-advisor",
  "name": "Arthur Pendelton, CFP®",
  "category": "business",
  "title": "Senior Wealth Strategist & Fiduciary Advisor",
  "headline": "Preserving Capital, Minimizing Tax Burden, and Building Multi-Generational Wealth",
  "tagline": "Wealth Management • Tax Strategy • Retirement",
  "bio": "Arthur Pendelton is a Certified Financial Planner (CFP®) advising entrepreneurs, medical professionals, and family offices on over $420M in private wealth. As a fee-only fiduciary, his advice is 100% transparent.",
  "location": "Boston, MA & Global",
  "email": "arthur@pendeltonwealth.com",
  "phone": "+1 (617) 555-0138",
  "heroImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "$420M+",
      "label": "Assets Advised (AUM)"
    },
    {
      "val": "22+",
      "label": "Years Experience"
    },
    {
      "val": "100%",
      "label": "Fee-Only Fiduciary"
    },
    {
      "val": "99.1%",
      "label": "Client Retention Rate"
    }
  ],
  "itemsTitle": "Wealth Advisory Capabilities",
  "items": [
    {
      "title": "Tax-Advantaged Portfolio Structuring",
      "tag": "Asset Management",
      "desc": "Global index diversification with automated tax-loss harvesting algorithms.",
      "meta": "Direct Indexing Core",
      "img": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Business Exit & Liquidity Planning",
      "tag": "Exit Strategy",
      "desc": "Maximizing after-tax proceeds prior to startup acquisitions or partner buyouts.",
      "meta": "Pre-Liquidity Trusts",
      "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Multi-Generational Estate Architecture",
      "tag": "Legacy Planning",
      "desc": "Dynasty trusts, charitable donor-advised funds, and estate tax shielding.",
      "meta": "Generational Transfer",
      "img": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Executive Compensation & Equity Options",
      "tag": "RSU / ISO Strategy",
      "desc": "Optimized exercise timing for stock options minimizing alternative minimum tax (AMT).",
      "meta": "Equity Optimization",
      "img": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Comprehensive Financial Plan",
      "price": "$2,500",
      "features": [
        "Net worth, cash flow & budget analysis",
        "Retirement probability Monte Carlo simulation",
        "Asset allocation & risk tolerance audit",
        "Tax reduction strategy document"
      ]
    },
    {
      "name": "Ongoing Wealth Management",
      "price": "0.65% AUM",
      "features": [
        "Discretionary portfolio rebalancing",
        "Continuous tax-loss harvesting",
        "Direct access to Arthur for life decisions",
        "Quarterly formal video performance reviews"
      ]
    },
    {
      "name": "Business Exit Strategy Consultation",
      "price": "$4,500",
      "features": [
        "Pre-sale valuation analysis & structuring",
        "Qualified Small Business Stock (QSBS) optimization",
        "Post-liquidity cash flow modeling",
        "Estate tax shield recommendations"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Arthur helped our family navigate an eight-figure business acquisition with calm wisdom.",
      "author": "Gordon Bennett",
      "role": "Tech Founder"
    },
    {
      "quote": "A true fiduciary who always puts our family's long-term interests first.",
      "author": "Dr. Evelyn Ross",
      "role": "Surgeon"
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
