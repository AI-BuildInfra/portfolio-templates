// Dynamic Culinary Portfolio Hydration for Chef Antoine Laurent
const FALLBACK_DATA = {
  chef: {
    name: "Antoine Laurent",
    title: "Two-Michelin-Starred Executive Chef & Culinary Director",
    restaurant: "Maison Laurent & Atelier Umami",
    location: "Paris & San Francisco",
    tagline: "Reimagining classical French gastronomy through biodynamic terroir, wild foraging, and ancestral fermentation.",
    bio: "Chef Antoine Laurent trained under legendary masters in Lyon and Tokyo before establishing Maison Laurent. Honored with Two Michelin Stars and a Green Star for Sustainable Gastronomy, Antoine bridges precise technique with respectful stewardship of seasonal agriculture.",
    heroImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
  },
  metrics: [
    { val: "2", label: "Michelin Stars Awarded" },
    { val: "18+", label: "Years Culinary Mastery" },
    { val: "100%", label: "Biodynamic & Local Farms" },
    { val: "#28", label: "World's 50 Best Discovery" }
  ],
  tastingMenu: [
    {
      course: "First Service",
      dish: "Heirloom Beet Tartare & Smoked Creme Fraiche",
      ingredients: "Salt-baked golden beets, pickled mustard seed, foraged oxalis, elderflower reduction",
      dietary: "Vegetarian &bull; Gluten-Free"
    },
    {
      course: "Second Service",
      dish: "Line-Caught Brittany Turbot",
      ingredients: "Braised sea lettuce, vin jaune emulsion, chanterelle mushrooms, sea herbs",
      dietary: "Sustainable Seafood"
    },
    {
      course: "Third Service",
      dish: "Aged Périgord Duck Breast",
      ingredients: "Black garlic puree, glazed sunchokes, roasted sour cherries, jus de canard",
      dietary: "Heritage Poultry"
    },
    {
      course: "Grand Finale",
      dish: "Smoked Guanaja Chocolate & Fermented Quince",
      ingredients: "Crispy sourdough tuile, bay leaf infused olive oil gelato, cocoa nib crunch",
      dietary: "Organic Valrhona"
    }
  ],
  philosophy: [
    {
      pillar: "Micro-Seasonal Terroir",
      desc: "Menus evolve weekly based strictly on daily harvests from our 4-acre biodynamic farm."
    },
    {
      pillar: "Koji & Ancestral Fermentation",
      desc: "Deepening complexity through house-inoculated garums, lacto-fermented fruits, and artisanal vinegars."
    },
    {
      pillar: "Zero-Waste Alchemy",
      desc: "Every peel, bone, and stem is repurposed into reductions, infused butters, and natural dining ceramics."
    }
  ],
  press: [
    {
      publication: "The Michelin Guide",
      quote: "Chef Laurent achieves pure harmony on the plate. His delicate balance of acidity and deep savoriness is a masterclass in modern French cuisine."
    },
    {
      publication: "The New York Times",
      quote: "An unforgettable dining sanctuary. Antoine's line-caught turbot alone warrants a transatlantic pilgrimage."
    }
  ]
};

async function loadChefData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initChefSite(data);
  } catch (err) {
    console.warn("Using fallback culinary data:", err);
    initChefSite(FALLBACK_DATA);
  }
}

function initChefSite(data) {
  const c = data.chef;
  document.getElementById('chef-name').textContent = c.name.toUpperCase();
  document.getElementById('chef-tagline').textContent = c.tagline;
  document.getElementById('chef-bio').textContent = c.bio;
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

  // Tasting Menu
  const menuBox = document.getElementById('menu-container');
  menuBox.innerHTML = data.tastingMenu.map(t => `
    <div class="menu-item">
      <div class="menu-header">
        <span class="menu-course">${t.course}</span>
        <span class="menu-dietary">${t.dietary}</span>
      </div>
      <h3 class="dish-name">${t.dish}</h3>
      <p class="dish-ingredients">${t.ingredients}</p>
    </div>
  `).join('');

  // Philosophy
  const philBox = document.getElementById('philosophy-container');
  philBox.innerHTML = data.philosophy.map(p => `
    <div class="philosophy-card">
      <h4 class="pillar-title">${p.pillar}</h4>
      <p class="pillar-desc">${p.desc}</p>
    </div>
  `).join('');

  // Press
  const pressBox = document.getElementById('press-container');
  pressBox.innerHTML = data.press.map(pr => `
    <div class="press-card">
      <p class="press-quote">"${pr.quote}"</p>
      <span class="press-pub">— ${pr.publication}</span>
    </div>
  `).join('');

  // Mobile nav
  const burger = document.getElementById('chef-burger');
  const nav = document.getElementById('chef-nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadChefData);
