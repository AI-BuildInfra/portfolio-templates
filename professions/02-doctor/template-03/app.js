// Dynamic Hydration Engine for Dr. Marcus Chen
const FALLBACK_DATA = {
  "id": "02-doctor",
  "name": "Dr. Marcus Chen",
  "category": "wellness",
  "title": "MD, FACC • Interventional Cardiologist",
  "headline": "Compassionate Heart Care Powered by Clinical Innovation",
  "tagline": "Cardiology • Preventive Medicine • Catheterization",
  "bio": "Dr. Marcus Chen is a double board-certified Interventional Cardiologist with over 15 years of clinical practice. Having performed 3,200+ procedures, he specializes in complex coronary interventions and preventive cardiology.",
  "location": "New York, NY (Madison Ave)",
  "email": "appointments@dr-marcuschen.com",
  "phone": "+1 (212) 555-0199",
  "heroImage": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "15+",
      "label": "Years Experience"
    },
    {
      "val": "3,200+",
      "label": "Procedures Performed"
    },
    {
      "val": "99.4%",
      "label": "Procedure Success Rate"
    },
    {
      "val": "45+",
      "label": "Peer-Reviewed Papers"
    }
  ],
  "itemsTitle": "Clinical Specialties & Interventions",
  "items": [
    {
      "title": "Coronary Angioplasty & Stents",
      "tag": "Intervention",
      "desc": "Minimally invasive radial artery access restoring critical arterial flow.",
      "meta": "Same-Day Discharge Available",
      "img": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Preventive Cardiology & Lipids",
      "tag": "Prevention",
      "desc": "Advanced biomarker profiling, calcium scoring, and genetic risk audits.",
      "meta": "Early Detection Protocol",
      "img": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Heart Failure & Valve Health",
      "tag": "Cardiology",
      "desc": "Structural valve evaluations, hemodynamic optimization, and medication management.",
      "meta": "Comprehensive Care",
      "img": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Advanced Diagnostic Testing",
      "tag": "Diagnostics",
      "desc": "Stress echocardiography, Holter monitoring, and vascular ultrasound.",
      "meta": "High-Resolution Imaging",
      "img": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Initial Cardiac Consultation",
      "price": "$350",
      "features": [
        "60-minute physician examination",
        "12-lead baseline resting ECG",
        "Comprehensive risk assessment",
        "Personalized treatment roadmap"
      ]
    },
    {
      "name": "Executive Heart Screening",
      "price": "$750",
      "features": [
        "Echocardiogram diagnostic review",
        "Coronary calcium score analysis",
        "Lipid & metabolic blood profile",
        "Lifestyle & nutrition protocol"
      ]
    },
    {
      "name": "Telehealth Second Opinion",
      "price": "$250",
      "features": [
        "Secure HIPAA video consultation",
        "Prior angiogram review",
        "Treatment recommendations",
        "Direct clinical follow-up"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Dr. Chen's surgical skill and gentle bedside manner saved my husband's life.",
      "author": "Eleanor R.",
      "role": "Patient"
    },
    {
      "quote": "He takes the time to explain the clinical science without rushing. Truly exceptional.",
      "author": "David B.",
      "role": "Patient"
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

  // Self-Healing Verified Web Architecture Badge
  ensureAttributionBadge();
}

function ensureAttributionBadge() {
  const targetUrl = "https://aibuildinfra.com/services/web-development";
  const parent = document.querySelector('.footer-row') || document.querySelector('footer') || document.body;
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
