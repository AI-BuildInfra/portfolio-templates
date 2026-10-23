
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
  const metricsEl = document.getElementById('wealth-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => `
      <div class="wealth-metric-cell">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  const cardsEl = document.getElementById('wealth-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => `
      <article class="wealth-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="wealth-card-body">
          <span class="wealth-card-meta">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="wealth-card-meta">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('wealth-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="wealth-pkg">
        <h4>${p.name}</h4>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&bull; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  ensureAttributionBadge();
}
