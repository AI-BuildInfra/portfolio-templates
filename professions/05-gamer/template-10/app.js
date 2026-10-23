
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
  const statsEl = document.getElementById('hud-stats');
  if (statsEl) {
    statsEl.innerHTML = data.stats.map(s => `
      <div class="hud-stat-cell">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  const cardsEl = document.getElementById('hud-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => `
      <article class="hud-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="hud-card-body">
          <span style="font-size: 0.72rem; color: #06b6d4; font-family: monospace; font-weight: 700;">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <span style="font-family: monospace; font-size: 0.75rem; color: #ef4444;">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('hud-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="hud-pkg">
        <h3>${p.name}</h3>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&#9679; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  ensureAttributionBadge();
}
