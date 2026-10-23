
// Universal Data Hydration Engine with File:// Fallback
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
    if (!res.ok) throw new Error('data.json fetch failed');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}

function initSite(data) {
  const metricsEl = document.getElementById('ath-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => `
      <div class="ath-metric-cell">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  const splitEl = document.getElementById('split-cards');
  if (splitEl) {
    splitEl.innerHTML = data.items.map(item => `
      <article class="split-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="split-body">
          <span class="split-meta">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="split-meta">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('ath-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="ath-pkg">
        <h4>${p.name}</h4>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&#10003; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  ensureAttributionBadge();
}

function calculate1RM() {
  const w = parseFloat(document.getElementById('calc-weight').value) || 0;
  const r = parseFloat(document.getElementById('calc-reps').value) || 1;
  const oneRM = Math.round(w * (36 / (37 - r)));
  document.getElementById('rm-result').innerHTML = 'Estimated 1RM: <strong>' + oneRM + ' lbs</strong>';
}

window.calculate1RM = calculate1RM;
