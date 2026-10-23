
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


let photoData = null;

function initSite(data) {
  photoData = data;
  renderFrames(data.items);
  renderTiers(data.packages);
  ensureAttributionBadge();
}

function renderFrames(items) {
  const container = document.getElementById('contact-frames-grid');
  if (!container) return;

  container.innerHTML = items.map((item, idx) => {
    const frameNum = String(idx + 1).padStart(2, '0');
    return `
      <article class="contact-frame-card" onclick="openLoupe('${item.img}', '${escapeHtml(item.title)} &bull; ${escapeHtml(item.meta)}')">
        <div class="frame-media">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <div class="frame-header-stamp">
            <span>EXP ${frameNum}A</span>
            <span>TX-400</span>
          </div>
        </div>
        <div class="frame-info">
          <strong class="frame-title">${item.title}</strong>
          <span class="frame-exif">${item.meta}</span>
        </div>
      </article>
    `;
  }).join('');
}

function renderTiers(packages) {
  const container = document.getElementById('edition-tiers');
  if (!container) return;

  container.innerHTML = packages.map(pkg => `
    <div class="tier-box">
      <h4>${pkg.name}</h4>
      <strong>${pkg.price}</strong>
      <span>${pkg.features.join(' &bull; ')}</span>
    </div>
  `).join('');
}

function setSafelight(mode) {
  const body = document.body;
  const btnRed = document.getElementById('btn-safelight-red');
  const btnWhite = document.getElementById('btn-safelight-white');

  if (mode === 'red') {
    body.className = 'arch-darkroom safelight-red';
    if (btnRed) btnRed.classList.add('active');
    if (btnWhite) btnWhite.classList.remove('active');
  } else {
    body.className = 'arch-darkroom safelight-white';
    if (btnWhite) btnWhite.classList.add('active');
    if (btnRed) btnRed.classList.remove('active');
  }
}

function openLoupe(imgSrc, caption) {
  const modal = document.getElementById('loupe-modal');
  const img = document.getElementById('loupe-img');
  const cap = document.getElementById('loupe-caption');

  if (modal && img && cap) {
    img.src = imgSrc;
    cap.textContent = caption;
    modal.classList.add('active');
  }
}

function closeLoupeModal() {
  const modal = document.getElementById('loupe-modal');
  if (modal) modal.classList.remove('active');
}

function handleInquiry(e) {
  e.preventDefault();
  alert('Thank you! Your fine art print inquiry has been dispatched to Elena Vance\'s studio.');
  e.target.reset();
}

function escapeHtml(str) {
  return String(str).replace(/'/g, "\\'");
}

window.setSafelight = setSafelight;
window.openLoupe = openLoupe;
window.closeLoupeModal = closeLoupeModal;
window.handleInquiry = handleInquiry;
