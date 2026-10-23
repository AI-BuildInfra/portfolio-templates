// Dynamic Hydration Engine for Liam O'Connor (NovaPulse)
const FALLBACK_DATA = {
  "id": "11-musician",
  "name": "Liam O'Connor (NovaPulse)",
  "category": "creative",
  "title": "Electronic Music Producer, DJ & Sound Designer",
  "headline": "Fusing Cinematic Orchestral Elements with Kinetic Melodic House",
  "tagline": "Producer • Touring DJ • Mixing Engineer",
  "bio": "Liam O'Connor (performing as NovaPulse) is an electronic producer whose tracks have surpassed 65M global streams. Headlining international festivals from ADE Amsterdam to Coachella Sahara.",
  "location": "Berlin & London",
  "email": "mgmt@novapulsemusic.com",
  "phone": "+49 30 555 0192",
  "heroImage": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "65M+",
      "label": "Spotify & Apple Streams"
    },
    {
      "val": "180+",
      "label": "International DJ Sets"
    },
    {
      "val": "#1",
      "label": "Beatport Melodic Chart"
    },
    {
      "val": "12",
      "label": "Official Remixes Shipped"
    }
  ],
  "itemsTitle": "Discography & Live Performances",
  "items": [
    {
      "title": "Echoes in the Stratosphere (EP)",
      "tag": "Original Release",
      "desc": "4-track melodic techno journey exploring analog Moog synthesis.",
      "meta": "Anjunadeep / Afterlife • 2025",
      "img": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Live at Printworks London",
      "tag": "Festival Set",
      "desc": "2-hour headline set featuring exclusive unreleased VIP edits.",
      "meta": "Full 4K Video Stream",
      "img": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Nebula Synthwave Re-Imagining",
      "tag": "Remix",
      "desc": "Official remix for Grammy-nominated synthpop group.",
      "meta": "Over 14M Streams",
      "img": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Bespoke Game Audio Scoring",
      "tag": "Sound Design",
      "desc": "Atmospheric ambient electronic soundtrack for indie sci-fi game.",
      "meta": "Unity & FMOD Integration",
      "img": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Festival & Club DJ Headline Set",
      "price": "$5,000+",
      "features": [
        "90 to 120-minute headline DJ performance",
        "Custom visuals sync file provided",
        "Social media tour date promotion",
        "Technical rider coordination"
      ]
    },
    {
      "name": "Full Production Track / Mix",
      "price": "$2,800",
      "features": [
        "Full electronic track arrangement",
        "Analog synth mastering & stem mixdown",
        "Radio edit, extended club mix, & instrumental",
        "Commercial sync licensing options"
      ]
    },
    {
      "name": "Bespoke Commercial Sound Score",
      "price": "$4,500",
      "features": [
        "Custom audio branding sonic identity",
        "Film / trailer atmospheric music composition",
        "All stem audio files in 24-bit 96kHz",
        "Full broadcast usage rights"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "NovaPulse creates evocative, stadium-sized melodic emotion.",
      "author": "Mixmag",
      "role": "Music Magazine"
    },
    {
      "quote": "His mastering and analog low-end punch are unrivaled in electronic music.",
      "author": "Pete Tong",
      "role": "BBC Radio 1"
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
