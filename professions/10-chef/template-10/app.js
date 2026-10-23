
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "10-chef",
  "name": "Antoine Laurent",
  "category": "business",
  "title": "Two-Michelin-Starred Executive Chef",
  "headline": "Reimagining Classical French Gastronomy Through Biodynamic Terroir and Ancestral Craft",
  "tagline": "Modern French • Wild Terroir • Two Michelin Stars",
  "bio": "Trained in Lyon and Tokyo before establishing Maison Laurent. Honored with Two Michelin Stars and a Green Star for sustainable gastronomy, Antoine champions zero-waste cooking and heirloom seeds.",
  "location": "Paris, France & San Francisco",
  "email": "concierge@maisonlaurent.fr",
  "phone": "+33 1 42 68 55 00",
  "heroImage": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "2",
      "label": "Michelin Stars"
    },
    {
      "val": "18+",
      "label": "Years Culinary Mastery"
    },
    {
      "val": "100%",
      "label": "Biodynamic Sourcing"
    },
    {
      "val": "#28",
      "label": "World's 50 Best Discovery"
    }
  ],
  "itemsTitle": "Autumn Degustation Tasting Courses",
  "items": [
    {
      "title": "Heirloom Golden Beet Tartare",
      "tag": "First Service",
      "desc": "Salt-baked beets with smoked crème fraîche, pickled mustard, and oxalis.",
      "meta": "Vegetarian • Farm Grown",
      "img": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Line-Caught Brittany Turbot",
      "tag": "Second Service",
      "desc": "Braised sea lettuce, vin jaune emulsion, and wild autumn chanterelles.",
      "meta": "Sustainable Coastal Catch",
      "img": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Aged Périgord Duck Breast",
      "tag": "Third Service",
      "desc": "Black garlic puree, glazed sunchokes, sour cherries, and rich duck jus.",
      "meta": "Heritage Poultry",
      "img": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Smoked Guanaja Dark Chocolate",
      "tag": "Grand Finale",
      "desc": "Sourdough tuile, bay leaf olive oil gelato, and crunchy cocoa nibs.",
      "meta": "Organic Valrhona",
      "img": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Private Residence 7-Course Dinner",
      "price": "$3,800 + ingredients",
      "features": [
        "Dedicated service for up to 10 guests",
        "Full chef and sommelier team on-site",
        "Custom printed menus with wine pairings",
        "Complete kitchen clean-up"
      ]
    },
    {
      "name": "Winery Brand Pairing Gala",
      "price": "$6,500+",
      "features": [
        "Multi-course menu matched to wine portfolio",
        "Interactive chef culinary introduction",
        "Sourcing from premier local biodynamic farms",
        "Staff coordination & prep management"
      ]
    },
    {
      "name": "Restaurant Concept Advisory",
      "price": "$10,000",
      "features": [
        "Full seasonal menu architecture design",
        "Kitchen station workflow & plating guides",
        "Kitchen brigade training residency",
        "Cost of goods (COGS) margin optimization"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Chef Laurent achieves pure culinary harmony on every plate.",
      "author": "The Michelin Guide",
      "role": "Inspector Report"
    },
    {
      "quote": "His turbot alone justifies a transatlantic pilgrimage to Paris.",
      "author": "The New York Times",
      "role": "Restaurant Critic"
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
