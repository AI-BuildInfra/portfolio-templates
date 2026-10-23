// Dynamic Hydration Engine for Seraphina Vance
const FALLBACK_DATA = {
  "id": "13-fashion-model",
  "name": "Seraphina Vance",
  "category": "creative",
  "title": "International Fashion Model & Editorial Stylist",
  "headline": "Elegance in Motion Across Paris, Milan, and New York Runways",
  "tagline": "High Fashion • Runway • Commercial Editorial",
  "bio": "Represented by premier agencies across Paris, Milan, and New York. Seraphina has walked for top European couture houses and starred in luxury beauty and magazine cover campaigns.",
  "location": "Paris & New York",
  "email": "booking@seraphinavance.com",
  "phone": "+1 (212) 555-0149",
  "heroImage": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "24",
      "label": "Fashion Weeks Walked"
    },
    {
      "val": "14",
      "label": "Magazine Covers"
    },
    {
      "val": "5'11\"",
      "label": "Height (180 cm)"
    },
    {
      "val": "8+",
      "label": "Years High Fashion"
    }
  ],
  "itemsTitle": "Editorial Campaigns & Runway Shows",
  "items": [
    {
      "title": "Milan Fashion Week Spring/Summer",
      "tag": "Runway",
      "desc": "Lead walking model for Italian couture opening presentation.",
      "meta": "Milan • 2025",
      "img": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Vogue Paris Autumn Editorial",
      "tag": "Cover Story",
      "desc": "10-page editorial feature photographed in Montmartre with antique couture.",
      "meta": "Cover Editorial",
      "img": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "L'Oréal Luxury Beauty Campaign",
      "tag": "Commercial",
      "desc": "Global cosmetic campaign across digital billboards and print magazines.",
      "meta": "Worldwide Distribution",
      "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Tokyo Streetwear Capsule Lookbook",
      "tag": "Lookbook",
      "desc": "Avant-garde architectural streetwear aesthetic shoot in Ginza.",
      "meta": "Lookbook Series",
      "img": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Full-Day Editorial Shoot",
      "price": "$2,200",
      "features": [
        "8 hours studio or outdoor on-location",
        "Pre-shoot moodboard alignment",
        "Runway and still posing versatility",
        "Agency release coordination"
      ]
    },
    {
      "name": "Commercial Campaign & Usage",
      "price": "$4,500+",
      "features": [
        "Broadcast and digital billboard rights",
        "Multi-look product modeling",
        "Social media behind-the-scenes tag",
        "Exclusive industry usage available"
      ]
    },
    {
      "name": "Fashion Week Runway Booking",
      "price": "$3,000/show",
      "features": [
        "Fittings and rehearsal attendance",
        "Runway walking presentation",
        "Backstage media interviews",
        "Designer social promotion"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Seraphina commands the lens with an innate sculptural grace.",
      "author": "Jean-Luc Moreau",
      "role": "Vogue Paris Photographer"
    },
    {
      "quote": "A consummate professional on both the runway and commercial sets.",
      "author": "Alessandra Rossi",
      "role": "Casting Director, Milan"
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

  // Self-Healing Verified Web Architecture Badge
  ensureAttributionBadge();
}

function ensureAttributionBadge() {
  const targetUrl = "https://aibuildinfra.com/services/web-development";
  const parent = document.querySelector('.footer-row') || document.querySelector('footer') || document.body;
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
