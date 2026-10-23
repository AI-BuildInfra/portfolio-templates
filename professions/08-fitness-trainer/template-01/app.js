// Dynamic Hydration Engine for Marcus Drake
const FALLBACK_DATA = {
  "id": "08-fitness-trainer",
  "name": "Marcus Drake",
  "category": "wellness",
  "title": "CSCS • Elite Strength & Physique Coach",
  "headline": "Evidence-Based Hypertrophy, Recomposition, and Peak Athletic Conditioning",
  "tagline": "Strength • Fat Loss • Executive Fitness",
  "bio": "Marcus Drake is an NSCA Certified Strength & Conditioning Specialist with 11+ years transforming 1,400+ executives and competitive lifters using scientific progressive overload.",
  "location": "Miami, FL & Online Worldwide",
  "email": "marcus@ironpulsecoaching.com",
  "phone": "+1 (305) 555-0188",
  "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "1,400+",
      "label": "Clients Transformed"
    },
    {
      "val": "11+",
      "label": "Years Experience"
    },
    {
      "val": "94%",
      "label": "Goal Success Rate"
    },
    {
      "val": "CSCS",
      "label": "NSCA Elite Certified"
    }
  ],
  "itemsTitle": "Client Transformation Case Studies",
  "items": [
    {
      "title": "Derek H. (Tech Founder, 38)",
      "tag": "Recomposition",
      "desc": "Dropped 32 lbs of fat while gaining 9 lbs lean muscle over 16 weeks.",
      "meta": "-32 lbs Fat • +9 lbs Lean Mass",
      "img": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Sophia M. (Director, 29)",
      "tag": "Athletic Conditioning",
      "desc": "Transformed core stamina and completed her first marathon injury-free.",
      "meta": "-24 lbs • Sub 3:45 Marathon",
      "img": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Julian K. (Executive, 45)",
      "tag": "Strength Rebuild",
      "desc": "Eliminated chronic lower back pain and added 85 lbs to his deadlift.",
      "meta": "Pain Free • 405 lb Deadlift",
      "img": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Elena R. (CrossFit Competitor)",
      "tag": "Peak Hypertrophy",
      "desc": "Dialed in bioenergetic nutrition and qualified for Regional Finals.",
      "meta": "State Podium Finish",
      "img": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "1-on-1 VIP Online Coaching",
      "price": "$499/mo",
      "features": [
        "Fully tailored progressive training split",
        "Custom macro & micronutrient meal plan",
        "Weekly 1-on-1 video form review & audit",
        "24/7 direct WhatsApp access to Marcus"
      ]
    },
    {
      "name": "Hybrid Online Blueprint",
      "price": "$199/mo",
      "features": [
        "12-week periodized hypertrophy split",
        "Flexible dieting macro framework",
        "Bi-weekly digital check-ins",
        "Full exercise video library access"
      ]
    },
    {
      "name": "Executive Private Coaching",
      "price": "$750/mo",
      "features": [
        "In-person Miami private gym sessions",
        "Comprehensive mobility & injury prevention",
        "Travel workout protocols for business trips",
        "Sleep & recovery biometrics tracking"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Marcus fits everything around my 60-hour work weeks. The strength gains are incredible.",
      "author": "Derek H.",
      "role": "CEO"
    },
    {
      "quote": "No crash diets, no gimmicks. Pure exercise science that actually works.",
      "author": "Sophia M.",
      "role": "Creative Director"
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
