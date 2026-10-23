
// Universal Data Hydration Engine with File:// Fallback
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
    <div class="bento-stat">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  // Items
  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="bento-item-tile">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="bento-tile-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  // Packages
  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="bento-pkg-tile">
      <h5>${p.name}</h5>
      <div class="bento-pkg-price">${p.price}</div>
    </div>
  `).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="bento-rev-item">
      <p class="bento-rev-quote">"${r.quote}"</p>
      <span class="bento-rev-by">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Start live clock
  updateClock();
  setInterval(updateClock, 1000);

  ensureAttributionBadge();
}

function updateClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + " LOCAL";
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
