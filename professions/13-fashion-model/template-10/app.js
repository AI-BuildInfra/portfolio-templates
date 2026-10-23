
// Universal Data Hydration Engine with File:// Fallback
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
    if (!res.ok) throw new Error('data.json fetch failed');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}

function initSite(data) {
  const polaroidGrid = document.getElementById('polaroid-grid');
  if (polaroidGrid) {
    polaroidGrid.innerHTML = data.items.map((item, idx) => {
      const poses = ["Front Polaroids", "Profile Casting", "Runway Walk", "Beauty Headshot"];
      return `
        <div class="polaroid-card">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="polaroid-tag">${poses[idx] || item.title}</span>
        </div>
      `;
    }).join('');
  }

  const cardsEl = document.getElementById('cc-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => `
      <article class="cc-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="cc-card-body">
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 700; text-transform: uppercase;">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span style="font-size: 0.75rem; color: #fff; font-weight: 600;">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('cc-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="cc-pkg">
        <h4>${p.name}</h4>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&#10003; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  ensureAttributionBadge();
}
