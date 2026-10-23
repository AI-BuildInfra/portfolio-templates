
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "10-chef",
  "name": "Antoine Laurent",
  "category": "business",
  "title": "Two-Michelin-Starred Executive Chef",
  "headline": "Reimagining Classical French Gastronomy Through Biodynamic Terroir and Ancestral Craft",
  "tagline": "Modern French • Wild Terroir • Two Michelin Stars",
  "bio": "Trained in Lyon and Tokyo before establishing Maison Laurent. Honored with Two Michelin Stars and a Green Star for sustainable gastronomy, Antoine champions zero-waste cooking and heirloom seeds.",
  "location": "Paris, France & San Francisco",
  "email": "concierge@maisonlaurent.fr",
  "phone": "+33 1 42 68 55 00",
  "heroImage": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "2",
      "label": "Michelin Stars"
    },
    {
      "val": "18+",
      "label": "Years Culinary Mastery"
    },
    {
      "val": "100%",
      "label": "Biodynamic Sourcing"
    },
    {
      "val": "#28",
      "label": "World's 50 Best Discovery"
    }
  ],
  "itemsTitle": "Autumn Degustation Tasting Courses",
  "items": [
    {
      "title": "Heirloom Golden Beet Tartare",
      "tag": "First Service",
      "desc": "Salt-baked beets with smoked crème fraîche, pickled mustard, and oxalis.",
      "meta": "Vegetarian • Farm Grown",
      "img": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Line-Caught Brittany Turbot",
      "tag": "Second Service",
      "desc": "Braised sea lettuce, vin jaune emulsion, and wild autumn chanterelles.",
      "meta": "Sustainable Coastal Catch",
      "img": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Aged Périgord Duck Breast",
      "tag": "Third Service",
      "desc": "Black garlic puree, glazed sunchokes, sour cherries, and rich duck jus.",
      "meta": "Heritage Poultry",
      "img": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Smoked Guanaja Dark Chocolate",
      "tag": "Grand Finale",
      "desc": "Sourdough tuile, bay leaf olive oil gelato, and crunchy cocoa nibs.",
      "meta": "Organic Valrhona",
      "img": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Private Residence 7-Course Dinner",
      "price": "$3,800 + ingredients",
      "features": [
        "Dedicated service for up to 10 guests",
        "Full chef and sommelier team on-site",
        "Custom printed menus with wine pairings",
        "Complete kitchen clean-up"
      ]
    },
    {
      "name": "Winery Brand Pairing Gala",
      "price": "$6,500+",
      "features": [
        "Multi-course menu matched to wine portfolio",
        "Interactive chef culinary introduction",
        "Sourcing from premier local biodynamic farms",
        "Staff coordination & prep management"
      ]
    },
    {
      "name": "Restaurant Concept Advisory",
      "price": "$10,000",
      "features": [
        "Full seasonal menu architecture design",
        "Kitchen station workflow & plating guides",
        "Kitchen brigade training residency",
        "Cost of goods (COGS) margin optimization"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Chef Laurent achieves pure culinary harmony on every plate.",
      "author": "The Michelin Guide",
      "role": "Inspector Report"
    },
    {
      "quote": "His turbot alone justifies a transatlantic pilgrimage to Paris.",
      "author": "The New York Times",
      "role": "Restaurant Critic"
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
    <div class="k-stat">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="kinetic-reel-card">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="k-reel-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="k-pkg">
      <h3>${p.name}</h3>
      <div class="k-price">${p.price}</div>
      <p style="font-size:0.85rem; color:#a099b2;">${p.features.join(' &bull; ')}</p>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="k-rev">
      <p style="font-style:italic; margin-bottom:0.5rem;">"${r.quote}"</p>
      <span style="font-weight:700; color:#ff007f;">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Carousel controls
  const prevBtn = document.getElementById('c-prev');
  const nextBtn = document.getElementById('c-next');
  const wrapper = document.getElementById('carousel-wrapper');
  if (prevBtn && nextBtn && wrapper) {
    prevBtn.addEventListener('click', () => wrapper.scrollBy({ left: -360, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => wrapper.scrollBy({ left: 360, behavior: 'smooth' }));
  }

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
