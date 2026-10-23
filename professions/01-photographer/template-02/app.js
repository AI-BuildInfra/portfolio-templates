
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "01-photographer",
  "name": "Elena Vance",
  "category": "creative",
  "title": "Fine Art & Editorial Photographer",
  "headline": "Capturing Fleeting Light and Raw Emotion Across 30+ Countries",
  "tagline": "Fine Art • Editorial • Landscapes",
  "bio": "Elena Vance is an internationally published photographer whose work bridges cinematic realism with intimate portraiture. Featured in Vogue Escapes, National Geographic, and Harper's Arts.",
  "location": "San Francisco & Global",
  "email": "elena@auraframes.com",
  "phone": "+1 (415) 890-4321",
  "heroImage": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "12+",
      "label": "Years Experience"
    },
    {
      "val": "450+",
      "label": "Photo Shoots"
    },
    {
      "val": "32",
      "label": "Countries Explored"
    },
    {
      "val": "18",
      "label": "Global Awards"
    }
  ],
  "itemsTitle": "Selected Photography Series",
  "items": [
    {
      "title": "Whispers of Highlands",
      "tag": "Landscape",
      "desc": "Dawn mist rising over Scottish mountain crests.",
      "meta": "Sony A7R V • 24-70mm f/2.8",
      "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Seraphina at Dusk",
      "tag": "Portrait",
      "desc": "Golden hour natural backlight capturing quiet introspection.",
      "meta": "Leica M11 • 50mm f/0.95",
      "img": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Neon Reflections Tokyo",
      "tag": "Street",
      "desc": "Post-rain reflections and moody lights in Shinjuku.",
      "meta": "Fujifilm X-T5 • 33mm f/1.4",
      "img": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Velvet Monolith",
      "tag": "Editorial",
      "desc": "Haute couture high fashion autumn collection plates.",
      "meta": "Hasselblad X2D • 80mm f/1.9",
      "img": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Editorial & Commercial",
      "price": "$2,800",
      "features": [
        "Full-day shoot on location",
        "40 master retouched photos",
        "Full commercial usage rights",
        "Online client proofing gallery"
      ]
    },
    {
      "name": "Portrait Session",
      "price": "$1,200",
      "features": [
        "3-hour dedicated session",
        "20 retouched selections",
        "Print release included",
        "5-day turnaround"
      ]
    },
    {
      "name": "Fine Art Commission",
      "price": "$4,500+",
      "features": [
        "Bespoke expedition shoot",
        "Museum-grade 36x24 archival prints",
        "Signed certificate of authenticity",
        "Exclusive rights"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Elena's mastery of natural light completely elevated our visual campaign.",
      "author": "Marcus Thorne",
      "role": "Creative Director, Vogue"
    },
    {
      "quote": "Every portrait delivered looks like a modern classical masterpiece.",
      "author": "Chloe Saint-Laurent",
      "role": "Curator"
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
