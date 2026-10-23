// Dynamic Architectural Portfolio Hydration for Studio Arcos / Kaelen Voss
const FALLBACK_DATA = {
  studio: {
    name: "Kaelen Voss, AIA",
    practice: "Studio Arcos Architecture",
    location: "Zurich & Copenhagen",
    tagline: "Sculpting light, sustainable materiality, and timeless spatial geometries.",
    bio: "Kaelen Voss is an internationally recognized architect specializing in sustainable residential sanctuaries, civic pavilions, and adaptive mass-timber renovations. With a philosophy rooted in Nordic restraint and passive solar thermodynamics, Studio Arcos creates buildings that age with dignity.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  metrics: [
    { val: "16+", label: "Years in Practice" },
    { val: "42", label: "Completed Projects" },
    { val: "9", label: "AIA & RIBA Design Awards" },
    { val: "Zero-Net", label: "Carbon Target Achieved" }
  ],
  projects: [
    {
      id: "alpine-residence",
      title: "The Alpine Monolith",
      category: "Residential",
      location: "Vals, Switzerland",
      year: "2024",
      area: "450 m²",
      materials: "Locally quarried granite & charred larch",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      desc: "Submerged partially into the hillside to leverage natural geothermal thermal mass and minimize visual landscape intrusion."
    },
    {
      id: "nordic-pavilion",
      title: "Fjord Cultural Pavilion",
      category: "Civic & Cultural",
      location: "Bergen, Norway",
      year: "2023",
      area: "1,200 m²",
      materials: "Cross-laminated timber (CLT) & triple-glazed acoustic glass",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      desc: "Cantilevered mass-timber event hall providing uninterrupted panoramic fjord vistas with passive cross-ventilation."
    },
    {
      id: "urban-atrium",
      title: "Koppar Atrium Lofts",
      category: "Adaptive Reuse",
      location: "Stockholm, Sweden",
      year: "2022",
      area: "2,800 m²",
      materials: "Restored 19th-century brickwork, blackened steel, terrazzo",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
      desc: "Conversion of a historic locomotive repair hall into 14 biophilic loft residences wrapped around a daylighting atrium."
    }
  ],
  materials: [
    { name: "Cross-Laminated Timber", origin: "Sustainably harvested Scandinavian Spruce", benefit: "Carbon sequestering structural core" },
    { name: "Board-Formed Concrete", origin: "Low-clinker hydraulic lime binder", benefit: "Tactile thermal mass insulation" },
    { name: "Patinated Zinc", origin: "Recycled architectural grade panels", benefit: "100+ year maintenance-free lifespan" },
    { name: "Fluted Low-Iron Glass", origin: "Acoustically laminated triple pane", benefit: "Optimal daylighting with zero glare" }
  ],
  awards: [
    "2024 RIBA International Award for Excellence",
    "2023 Swiss Architectural Heritage Gold Medal",
    "2022 Mies Crown Hall Americas Prize (MCHAP) Finalist",
    "2020 Architectural Digest Innovator of the Year"
  ]
};

async function loadArchData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot fetch data.json');
    const data = await res.json();
    initArchSite(data);
  } catch (err) {
    console.warn("Using fallback architecture data:", err);
    initArchSite(FALLBACK_DATA);
  }
}

function initArchSite(data) {
  const s = data.studio;
  document.getElementById('studio-tagline').textContent = s.tagline;
  document.getElementById('studio-bio').textContent = s.bio;
  document.getElementById('logo-sub').textContent = `${s.name.toUpperCase()} • ${s.location.toUpperCase()}`;
  document.getElementById('year').textContent = new Date().getFullYear();

  if (s.heroImage) {
    document.getElementById('hero-bg').style.backgroundImage = `url('${s.heroImage}')`;
  }

  // Metrics
  const metricsBox = document.getElementById('metrics-container');
  metricsBox.innerHTML = data.metrics.map(m => `
    <div class="metric-item">
      <span class="metric-num">${m.val}</span>
      <span class="metric-lbl">${m.label}</span>
    </div>
  `).join('');

  // Projects
  const projBox = document.getElementById('projects-container');
  projBox.innerHTML = data.projects.map(p => `
    <article class="project-entry">
      <div class="project-photo">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="project-details">
        <span class="project-cat">${p.category} &bull; ${p.location}</span>
        <h3 class="project-name">${p.title}</h3>
        <div class="project-specs-grid">
          <div class="project-spec-item">
            <strong>Year Completed</strong>
            <span>${p.year}</span>
          </div>
          <div class="project-spec-item">
            <strong>Gross Built Area</strong>
            <span>${p.area}</span>
          </div>
          <div class="project-spec-item" style="grid-column: span 2;">
            <strong>Primary Materiality</strong>
            <span>${p.materials}</span>
          </div>
        </div>
        <p class="project-narrative">${p.desc}</p>
      </div>
    </article>
  `).join('');

  // Materials
  const matBox = document.getElementById('materials-container');
  matBox.innerHTML = data.materials.map(mat => `
    <div class="material-card">
      <h4 class="material-name">${mat.name}</h4>
      <p class="material-origin">Source: ${mat.origin}</p>
      <p class="material-benefit"><strong>Tectonic Benefit:</strong> ${mat.benefit}</p>
    </div>
  `).join('');

  // Awards
  const awBox = document.getElementById('awards-container');
  awBox.innerHTML = data.awards.map(aw => `
    <div class="award-item">${aw}</div>
  `).join('');

  // Mobile nav
  const burger = document.getElementById('arch-burger');
  const menu = document.getElementById('arch-menu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadArchData);
