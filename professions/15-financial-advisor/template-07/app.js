
// Universal Data Hydration Engine with File:// Fallback
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

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => `
    <div class="app-stat-tile">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="app-proj-card">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="app-proj-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="app-pkg">
      <h3>${p.name}</h3>
      <div class="app-pkg-price">${p.price}</div>
      <ul style="list-style:none; font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">
        ${p.features.map(f => `<li>&bull; ${f}</li>`).join('')}
      </ul>
      <button class="btn-app-action" onclick="switchAppTab('tab-contact')">Inquire</button>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="app-rev">
      <p>"${r.quote}"</p>
      <span style="color:#38bdf8; font-weight:700; margin-top:0.4rem; display:block;">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Setup tab buttons
  document.querySelectorAll('.dock-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAppTab(btn.dataset.tab));
  });

  ensureAttributionBadge();
}

function switchAppTab(tabId) {
  document.querySelectorAll('.app-viewport').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.dock-tab-btn').forEach(b => b.classList.remove('active'));
  
  const targetView = document.getElementById(tabId);
  const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (targetView) targetView.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  const labelMap = {
    'tab-overview': 'Overview',
    'tab-works': 'Projects',
    'tab-services': 'Services & Rates',
    'tab-contact': 'Contact'
  };
  const labelEl = document.getElementById('app-view-label');
  if (labelEl) labelEl.textContent = labelMap[tabId] || 'Workspace';
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
