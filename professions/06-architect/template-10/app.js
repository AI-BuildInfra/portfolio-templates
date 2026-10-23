
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


let termData = null;

function initSite(data) {
  termData = data;
  const termYear = document.getElementById('term-year');
  if (termYear) termYear.textContent = new Date().getFullYear();

  const input = document.getElementById('terminal-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        if (cmd) {
          executeCommand(cmd);
          input.value = '';
        }
      }
    });
  }

  ensureAttributionBadge();
}

function runCommand(cmd) {
  executeCommand(cmd);
}

function executeCommand(cmd) {
  const history = document.getElementById('terminal-history');
  if (!history || !termData) return;

  const normalized = cmd.toLowerCase().trim();
  let output = '';

  if (normalized === 'clear' || normalized === 'cls') {
    history.innerHTML = '';
    return;
  } else if (normalized === 'help' || normalized === '?') {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">AVAILABLE SYSTEM COMMANDS:</span><br>
        &bull; <strong>help</strong>          &mdash; Display this command dictionary<br>
        &bull; <strong>bio / about</strong>   &mdash; Read ${termData.name}'s professional ethos<br>
        &bull; <strong>projects / ls</strong> &mdash; List selected case studies & works<br>
        &bull; <strong>stats</strong>         &mdash; Query verified career metrics<br>
        &bull; <strong>rates / packages</strong> &mdash; View cooperation tiers & deliverables<br>
        &bull; <strong>reviews</strong>       &mdash; Print client endorsements<br>
        &bull; <strong>contact</strong>       &mdash; Display direct consultation hotline<br>
        &bull; <strong>clear</strong>         &mdash; Wipe console screen
      </div>
    `;
  } else if (normalized.includes('bio') || normalized.includes('about')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">USER PROFILE: ${termData.name}</span><br>
        <span style="color:#58a6ff;">ROLE: ${termData.title}</span><br>
        <p style="margin-top:0.4rem; color:#e6edf3;">${termData.bio}</p>
      </div>
    `;
  } else if (normalized.includes('project') || normalized === 'ls' || normalized.includes('work')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">DIRECTORY LISTING: /var/showcase/</span>
        ${termData.items.map(item => `
          <div style="margin-top:0.5rem; padding-top:0.4rem; border-top:1px solid #30363d;">
            <span style="color:#58a6ff; font-weight:700;">&bull; ${item.title}</span> [${item.tag}]<br>
            <span style="color:#8b949e; font-size:0.8rem;">${item.desc}</span><br>
            <span style="color:#22c55e; font-size:0.75rem;">META: ${item.meta}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (normalized.includes('stat') || normalized.includes('metric')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">VERIFIED SYSTEM METRICS:</span><br>
        ${termData.stats.map(s => `
          &bull; <strong style="color:#22c55e;">${s.val}</strong> &mdash; ${s.label}<br>
        `).join('')}
      </div>
    `;
  } else if (normalized.includes('rate') || normalized.includes('package') || normalized.includes('price')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">COMMISSION TIERS: packages.json</span>
        ${termData.packages.map(p => `
          <div style="margin-top:0.5rem;">
            <strong style="color:#58a6ff;">[${p.name}]</strong> &mdash; <span style="color:#22c55e; font-weight:700;">${p.price}</span><br>
            <span style="color:#8b949e; font-size:0.8rem;">Deliverables: ${p.features.join(' | ')}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (normalized.includes('review') || normalized.includes('testimonial')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">CLIENT ENDORSEMENTS:</span>
        ${termData.reviews.map(r => `
          <div style="margin-top:0.4rem;">
            <p style="font-style:italic;">"${r.quote}"</p>
            <span style="color:#58a6ff;">&mdash; ${r.author} (${r.role})</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (normalized.includes('contact')) {
    output = `
      <div class="cli-card-block">
        <span class="cli-card-title">DIRECT CONTACT DISPATCH:</span><br>
        &bull; <strong>Email:</strong> ${termData.email}<br>
        &bull; <strong>Phone:</strong> ${termData.phone}<br>
        &bull; <strong>Location:</strong> ${termData.location}<br>
        <p style="color:#22c55e; margin-top:0.4rem;">Status: Desk actively receiving incoming submissions.</p>
      </div>
    `;
  } else {
    output = `<p style="color:#f85149;">bash: ${cmd}: command not recognized. Type <code class="t-code">help</code> for options.</p>`;
  }

  const logEntry = document.createElement('div');
  logEntry.innerHTML = `
    <div class="term-cmd-echo"><span class="t-prompt">$</span> ${cmd}</div>
    <div class="term-cmd-res">${output}</div>
  `;
  history.appendChild(logEntry);

  const screen = document.getElementById('terminal-screen');
  if (screen) screen.scrollTop = screen.scrollHeight;
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
