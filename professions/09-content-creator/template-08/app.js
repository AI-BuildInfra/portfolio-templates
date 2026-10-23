
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "09-content-creator",
  "name": "Aria Thorne",
  "category": "creative",
  "title": "Cinematic Travel & Tech Storyteller",
  "headline": "Crafting Cinematic Visual Narratives for a Global Community of 1.8M Explorers",
  "tagline": "Filmmaker • Tech Creator • Visual Nomad",
  "bio": "Aria Thorne is an award-winning travel filmmaker and digital creator with 1.8M+ community followers. She partners with leading brands like Sony, DJI, and Airbnb to craft high-production human stories.",
  "location": "Los Angeles & Tokyo",
  "email": "mgmt@ariathorne.media",
  "phone": "+1 (323) 555-0177",
  "heroImage": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "1.8M+",
      "label": "Total Social Audience"
    },
    {
      "val": "45M+",
      "label": "Annual Video Impressions"
    },
    {
      "val": "6.8%",
      "label": "Average Engagement Rate"
    },
    {
      "val": "74%",
      "label": "Audience Aged 22 - 38"
    }
  ],
  "itemsTitle": "Featured Films & Brand Campaigns",
  "items": [
    {
      "title": "48 Hours in Kyoto's Hidden Alleys",
      "tag": "Travel Film",
      "desc": "Cinematic short film produced in exclusive partnership with Sony Alpha.",
      "meta": "1.4M YouTube Views",
      "img": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "The Ultimate Solo Nomad Tech Stack",
      "tag": "Tech Review",
      "desc": "Detailed breakdown of camera rigs, laptops, and mobile battery setups.",
      "meta": "890k YouTube Views",
      "img": "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Iceland Beyond the Ring Road",
      "tag": "Documentary",
      "desc": "Glacier trekking and drone exploration of volcanic highland valleys.",
      "meta": "2.1M YouTube Views",
      "img": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Nordic Minimalist Cabin Life",
      "tag": "Lifestyle",
      "desc": "Documenting off-grid Scandinavian living, sustainable solar and craft.",
      "meta": "950k YouTube Views",
      "img": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Integrated YouTube Episode",
      "price": "$6,500",
      "features": [
        "60-90 second dedicated organic integration",
        "Product testing in real-world travel scenario",
        "Clickable link in top line of description",
        "Permanent video placement rights"
      ]
    },
    {
      "name": "Dedicated Brand Short Film",
      "price": "$14,000",
      "features": [
        "Exclusive 8-12 minute cinematic episode",
        "Brand co-direction & creative storyboard",
        "Full 4K ProRes master file delivery",
        "Commercial usage rights for brand channels"
      ]
    },
    {
      "name": "Multi-Platform Social Package",
      "price": "$9,500",
      "features": [
        "1 YouTube integration",
        "2 Instagram Reels / TikTok videos",
        "3 Instagram Stories with link stickers",
        "High-res commercial photography stills"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Aria's storytelling delivered our highest ROI influencer campaign of the year.",
      "author": "Claire Bennet",
      "role": "Sony Electronics"
    },
    {
      "quote": "The cinematography is indistinguishable from high-budget cinema.",
      "author": "Marcus Reed",
      "role": "Airbnb Creative"
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
    <div class="mag-stat">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="mag-work-plate">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="mag-pkg">
      <h3>${p.name}</h3>
      <div class="mag-price">${p.price}</div>
      <p style="font-size:0.85rem; color:#a8a096;">${p.features.join(' &bull; ')}</p>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="mag-rev">
      <p class="mag-quote">"${r.quote}"</p>
      <span style="font-size:0.85rem; color:#e2b17a; font-weight:700;">— ${r.author}, ${r.role}</span>
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
