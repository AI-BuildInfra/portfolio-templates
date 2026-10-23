
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "06-architect",
  "name": "Kaelen Voss, AIA",
  "category": "creative",
  "title": "Principal Architect • Studio Arcos",
  "headline": "Sculpting Light, Sustainable Materiality, and Timeless Spatial Geometries",
  "tagline": "Sustainable Architecture • Mass Timber • Sanctuaries",
  "bio": "Kaelen Voss is an AIA architect whose practice specializes in sustainable residential sanctuaries, mass-timber civic structures, and adaptive re-use across Europe and North America.",
  "location": "Zurich, Switzerland & Copenhagen",
  "email": "inquiries@studioarcos.ch",
  "phone": "+41 44 215 8800",
  "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "16+",
      "label": "Years in Practice"
    },
    {
      "val": "42",
      "label": "Completed Projects"
    },
    {
      "val": "9",
      "label": "AIA & RIBA Design Awards"
    },
    {
      "val": "Zero-Net",
      "label": "Carbon Target Standard"
    }
  ],
  "itemsTitle": "Selected Architectural Monographs",
  "items": [
    {
      "title": "The Alpine Monolith",
      "tag": "Residential",
      "desc": "Submerged granite residence leveraging geothermal warmth in Vals.",
      "meta": "450 m² • Completed 2024",
      "img": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Fjord Cultural Pavilion",
      "tag": "Civic",
      "desc": "Cantilevered mass-timber event pavilion on the waters of Bergen.",
      "meta": "1,200 m² • CLT Structure",
      "img": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Koppar Atrium Lofts",
      "tag": "Adaptive Reuse",
      "desc": "Restored 19th-century locomotive depot transformed into biophilic lofts.",
      "meta": "2,800 m² • Stockholm",
      "img": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Solstice Desert Sanctuary",
      "tag": "Private Villa",
      "desc": "Rammed-earth desert pavilion with passive solar shade architecture.",
      "meta": "600 m² • Arizona",
      "img": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Feasibility & Site Program",
      "price": "$6,500",
      "features": [
        "Zoning and environmental review",
        "Sun-path solar analysis",
        "Initial spatial programmatic layout",
        "Preliminary budget model"
      ]
    },
    {
      "name": "Full Architectural Commission",
      "price": "Percentage of Build",
      "features": [
        "Concept to construction documents",
        "Permit acquisition leadership",
        "Material sourcing & contractor bids",
        "On-site construction supervision"
      ]
    },
    {
      "name": "Interior Spatial Refinement",
      "price": "$12,000",
      "features": [
        "Custom millwork design",
        "Sustainable material palette curation",
        "Acoustical & lighting plans",
        "Furniture procurement curation"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Studio Arcos captured our family's lifestyle with breathtaking sensitivity to nature.",
      "author": "Henrik Lindqvist",
      "role": "Villa Client"
    },
    {
      "quote": "Their mastery of mass-timber engineering set a new sustainability benchmark in Norway.",
      "author": "RIBA Jury Panel",
      "role": "Awards Committee"
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
  const metricsEl = document.getElementById('bp-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => `
      <div class="bp-metric-item">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `).join('');
  }

  const platesEl = document.getElementById('blueprint-plates');
  if (platesEl) {
    platesEl.innerHTML = data.items.map(item => `
      <article class="bp-plate-card">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="bp-plate-body">
          <span class="bp-plate-meta">${item.tag}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="bp-plate-meta">${item.meta}</span>
        </div>
      </article>
    `).join('');
  }

  const pkgsEl = document.getElementById('bp-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => `
      <div class="bp-pkg">
        <h4>${p.name}</h4>
        <strong>${p.price}</strong>
        <ul>${p.features.map(f => `<li>&bull; ${f}</li>`).join('')}</ul>
      </div>
    `).join('');
  }
  ensureAttributionBadge();
}
