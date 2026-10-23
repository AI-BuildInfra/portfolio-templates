
// Universal Data Hydration Engine with File:// Fallback
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
    <div class="g-stat">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="glass-item-tile">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="g-item-info">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="glass-pkg">
      <h3>${p.name}</h3>
      <div class="g-price">${p.price}</div>
      <ul>${p.features.map(f => `<li>✦ ${f}</li>`).join('')}</ul>
      <a href="#contact" class="glass-cta-pill">Inquire &gt;</a>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="g-rev">
      <p class="g-rev-q">"${r.quote}"</p>
      <span class="g-rev-a">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Mouse move follower
  const glow = document.getElementById('cursor-glow');
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

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
