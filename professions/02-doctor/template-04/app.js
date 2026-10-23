
// Universal Data Hydration Engine with File:// Fallback
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
