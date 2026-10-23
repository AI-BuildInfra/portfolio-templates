// Dynamic Hydration & Macro Calculator for Marcus Drake Fitness Coaching
const FALLBACK_DATA = {
  coach: {
    name: "Marcus Drake",
    handle: "@marcus_ironpulse",
    credentials: "CSCS, CPT, Precision Nutrition L2",
    location: "Miami, FL & Worldwide Online",
    tagline: "Evidence-based hypertrophy, fat loss recomposition, and elite athletic conditioning.",
    bio: "Marcus Drake is an NSCA Certified Strength & Conditioning Specialist (CSCS) with 11+ years transforming over 1,400 executives, collegiate athletes, and everyday lifters. His coaching methodology discards bro-science in favor of progressive overload, bioenergetic nutrition, and sustainable habits.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  metrics: [
    { val: "1,400+", label: "Clients Transformed" },
    { val: "11+", label: "Years Strength Coaching" },
    { val: "94%", label: "Client Goal Success Rate" },
    { val: "CSCS", label: "NSCA Elite Certified" }
  ],
  programs: [
    {
      name: "1-on-1 VIP Elite Coaching",
      price: "$499 / mo",
      tag: "Most Popular",
      features: [
        "Fully tailored progressive overload training program",
        "Macro & micronutrient meal plan with weekly adjustments",
        "Weekly 1-on-1 video form analysis & accountability audit",
        "Direct 24/7 private WhatsApp messaging with Coach Marcus",
        "Supplements & blood panel optimization protocol"
      ],
      highlight: true
    },
    {
      name: "Hybrid Online Blueprint",
      price: "$199 / mo",
      tag: "Flexible",
      features: [
        "Periodized 12-week hypertrophy or fat loss split",
        "Custom calorie & macronutrient target framework",
        "Bi-weekly digital check-ins with progress photo analysis",
        "Exercise video library access for perfect lifting mechanics",
        "Community Discord group access"
      ],
      highlight: false
    },
    {
      name: "Executive Athletic Conditioning",
      price: "$750 / mo",
      tag: "Private High-Performance",
      features: [
        "In-person Miami private studio training sessions",
        "Comprehensive mobility & structural injury prevention",
        "Executive travel workout regimens for busy itineraries",
        "Personalized recovery & sleep architecture tracking",
        "Concierge meal prep coordination"
      ],
      highlight: false
    }
  ],
  transformations: [
    {
      name: "Derek H., 38",
      profession: "Tech Founder",
      stats: "-32 lbs Fat &bull; +9 lbs Lean Mass",
      duration: "16 Weeks",
      quote: "Marcus tailored everything around my grueling 60-hour work weeks. The energy and strength gains were remarkable.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sophia M., 29",
      profession: "Creative Director",
      stats: "-24 lbs &bull; 1st Marathon Completed",
      duration: "20 Weeks",
      quote: "I stopped crash dieting and finally learned sustainable nutritional science. Best physical shape of my life.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

async function loadFitData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initFitSite(data);
  } catch (err) {
    console.warn("Using fallback fitness data:", err);
    initFitSite(FALLBACK_DATA);
  }
}

function initFitSite(data) {
  const c = data.coach;
  document.getElementById('coach-tagline').textContent = c.tagline;
  document.getElementById('coach-bio').textContent = c.bio;
  document.getElementById('year').textContent = new Date().getFullYear();

  if (c.heroImage) {
    document.getElementById('hero-bg').style.backgroundImage = `url('${c.heroImage}')`;
  }

  // Metrics
  const metBox = document.getElementById('metrics-container');
  metBox.innerHTML = data.metrics.map(m => `
    <div class="metric-item">
      <span class="metric-num">${m.val}</span>
      <span class="metric-lbl">${m.label}</span>
    </div>
  `).join('');

  // Transformations
  const transBox = document.getElementById('transformations-container');
  transBox.innerHTML = data.transformations.map(t => `
    <div class="trans-card">
      <div class="trans-photo">
        <img src="${t.image}" alt="${t.name}" loading="lazy">
      </div>
      <div class="trans-details">
        <div class="trans-header">
          <h3 class="trans-name">${t.name} (${t.profession})</h3>
          <span class="trans-duration">${t.duration}</span>
        </div>
        <div class="trans-stats">${t.stats}</div>
        <p class="trans-quote">"${t.quote}"</p>
      </div>
    </div>
  `).join('');

  // Programs
  const progBox = document.getElementById('programs-container');
  progBox.innerHTML = data.programs.map(p => `
    <div class="program-card ${p.highlight ? 'highlight' : ''}">
      ${p.highlight ? `<span class="highlight-ribbon">${p.tag}</span>` : ''}
      <h3 class="prog-name">${p.name}</h3>
      <div class="prog-price">${p.price}</div>
      <ul class="prog-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="#apply" class="btn ${p.highlight ? 'btn-pulse' : 'btn-translucent'} btn-block">Lock In Coaching</a>
    </div>
  `).join('');

  setupCalculator();
  setupMobileNav();
}

function setupCalculator() {
  const weightInput = document.getElementById('calc-weight');
  const goalSelect = document.getElementById('calc-goal');
  const btn = document.getElementById('btn-calc');
  const resCal = document.getElementById('res-calories');
  const resProt = document.getElementById('res-protein');

  function calculate() {
    const weight = parseFloat(weightInput.value) || 170;
    const goal = goalSelect.value;
    let baseMaintenance = weight * 15;
    let targetCals = baseMaintenance;
    let protein = Math.round(weight * 1.0);

    if (goal === 'cut') {
      targetCals = Math.round(baseMaintenance - 500);
      protein = Math.round(weight * 1.1); // Higher protein in a deficit
    } else if (goal === 'bulk') {
      targetCals = Math.round(baseMaintenance + 300);
      protein = Math.round(weight * 0.95);
    }

    resCal.textContent = targetCals.toLocaleString();
    resProt.textContent = `${protein}g`;
  }

  btn.addEventListener('click', calculate);
  calculate();
}

function setupMobileNav() {
  const burger = document.getElementById('fit-burger');
  const nav = document.getElementById('fit-nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadFitData);
