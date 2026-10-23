// Dynamic Hydration Engine for Elena Vance
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
