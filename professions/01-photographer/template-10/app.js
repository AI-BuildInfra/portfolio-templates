
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "01-photographer",
  "name": "Elena Vance",
  "category": "creative",
  "title": "Fine Art & Editorial Photographer",
  "headline": "Capturing Fleeting Light and Raw Emotion Across 30+ Countries",
  "tagline": "Fine Art • Editorial • Landscapes",
  "bio": "Elena Vance is an internationally published photographer whose work bridges cinematic realism with intimate portraiture. Featured in Vogue Escapes, National Geographic, and Harper's Arts.",
  "location": "San Francisco & Global",
  "email": "elena@auraframes.com",
  "phone": "+1 (415) 890-4321",
  "heroImage": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "12+",
      "label": "Years Experience"
    },
    {
      "val": "450+",
      "label": "Photo Shoots"
    },
    {
      "val": "32",
      "label": "Countries Explored"
    },
    {
      "val": "18",
      "label": "Global Awards"
    }
  ],
  "itemsTitle": "Selected Photography Series",
  "items": [
    {
      "title": "Whispers of Highlands",
      "tag": "Landscape",
      "desc": "Dawn mist rising over Scottish mountain crests.",
      "meta": "Sony A7R V • 24-70mm f/2.8",
      "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Seraphina at Dusk",
      "tag": "Portrait",
      "desc": "Golden hour natural backlight capturing quiet introspection.",
      "meta": "Leica M11 • 50mm f/0.95",
      "img": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Neon Reflections Tokyo",
      "tag": "Street",
      "desc": "Post-rain reflections and moody lights in Shinjuku.",
      "meta": "Fujifilm X-T5 • 33mm f/1.4",
      "img": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Velvet Monolith",
      "tag": "Editorial",
      "desc": "Haute couture high fashion autumn collection plates.",
      "meta": "Hasselblad X2D • 80mm f/1.9",
      "img": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Editorial & Commercial",
      "price": "$2,800",
      "features": [
        "Full-day shoot on location",
        "40 master retouched photos",
        "Full commercial usage rights",
        "Online client proofing gallery"
      ]
    },
    {
      "name": "Portrait Session",
      "price": "$1,200",
      "features": [
        "3-hour dedicated session",
        "20 retouched selections",
        "Print release included",
        "5-day turnaround"
      ]
    },
    {
      "name": "Fine Art Commission",
      "price": "$4,500+",
      "features": [
        "Bespoke expedition shoot",
        "Museum-grade 36x24 archival prints",
        "Signed certificate of authenticity",
        "Exclusive rights"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Elena's mastery of natural light completely elevated our visual campaign.",
      "author": "Marcus Thorne",
      "role": "Creative Director, Vogue"
    },
    {
      "quote": "Every portrait delivered looks like a modern classical masterpiece.",
      "author": "Chloe Saint-Laurent",
      "role": "Curator"
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
