// Dynamic Hydration Engine for Kai 'ViperX' Thorne
const FALLBACK_DATA = {
  "id": "05-gamer",
  "name": "Kai 'ViperX' Thorne",
  "category": "tech",
  "title": "Pro Esports Athlete & Twitch Partner",
  "headline": "Dominating FPS Arenas with Aggressive Tactical Mastery and Live Broadcasts",
  "tagline": "Valorant • Apex Legends • Esports Captain",
  "bio": "Top 10 Radiant FPS athlete and Team Phantom captain. Over 850k followers across Twitch & YouTube with 4 Major Championship MVP titles.",
  "location": "Los Angeles, CA",
  "email": "mgmt@viperx.gg",
  "phone": "+1 (310) 555-0199",
  "heroImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "850K+",
      "label": "Twitch & YouTube Followers"
    },
    {
      "val": "$280K+",
      "label": "Tournament Prize Earnings"
    },
    {
      "val": "#4",
      "label": "Peak Radiant Rank"
    },
    {
      "val": "4",
      "label": "Major MVP Trophies"
    }
  ],
  "itemsTitle": "Championship Highlights & Tournaments",
  "items": [
    {
      "title": "VCT Masters Berlin 2025",
      "tag": "Valorant",
      "desc": "1st Place Champions after an unforgettable 5-map reverse sweep.",
      "meta": "Tournament MVP 🏆",
      "img": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Red Bull Campus Clutch Cup",
      "tag": "Esports",
      "desc": "Gold Trophy champions leading tournament in frags and clutch percentage.",
      "meta": "1.68 KD Ratio",
      "img": "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Apex Global Invitational",
      "tag": "Apex Legends",
      "desc": "Runner-up silver finish with record kill points in match-point finals.",
      "meta": "Predator Bracket",
      "img": "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "360Hz Battle Station Tour",
      "tag": "Hardware",
      "desc": "Detailed breakdown of the RTX 4090 custom loop rig and rapid-trigger gear.",
      "meta": "Hardware Showcase",
      "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Stream Overlay & Brand Shoutout",
      "price": "$1,500",
      "features": [
        "Prominent animated banner overlay",
        "3 dedicated live on-stream shoutouts",
        "Clickable chat bot link triggers",
        "Social media post amplification"
      ]
    },
    {
      "name": "Dedicated YouTube Feature",
      "price": "$4,200",
      "features": [
        "10-15 minute gameplay video feature",
        "Dedicated product showcase & testing",
        "Pinned comment with promo discount code",
        "Cross-promotion on Twitter & Discord"
      ]
    },
    {
      "name": "Quarterly Brand Alliance",
      "price": "$10,000",
      "features": [
        "Exclusive hardware category lock",
        "Custom jersey logo placement",
        "Live event tournament appearances",
        "Content creator campaign integrations"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "ViperX brought incredible authenticity and record engagement to our mouse launch.",
      "author": "Sarah Jenkins",
      "role": "HyperX Marketing"
    },
    {
      "quote": "One of the most professional competitors in modern gaming.",
      "author": "Coach Tyler",
      "role": "Team Phantom"
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
