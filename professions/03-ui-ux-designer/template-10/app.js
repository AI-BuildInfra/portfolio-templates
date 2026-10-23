
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "03-ui-ux-designer",
  "name": "Maya Lin",
  "category": "creative",
  "title": "Staff Product & Design Systems Designer",
  "headline": "Crafting Resilient Digital Products and Scalable Multi-Brand Design Systems",
  "tagline": "Design Systems • Enterprise SaaS • Fintech",
  "bio": "Over 9 years architecting products for fintech unicorns, developer platforms, and enterprise SaaS. Bridging rigorous qualitative research with production token architecture.",
  "location": "Seattle, WA & Remote",
  "email": "hello@mayalinux.design",
  "phone": "+1 (206) 555-0144",
  "heroImage": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "9+",
      "label": "Years Experience"
    },
    {
      "val": "14+",
      "label": "Design Systems Shipped"
    },
    {
      "val": "2.4M+",
      "label": "Active Platform Users"
    },
    {
      "val": "3",
      "label": "Design Awards (Red Dot)"
    }
  ],
  "itemsTitle": "Selected Product Case Studies",
  "items": [
    {
      "title": "VaultPay Global Treasury App",
      "tag": "Fintech",
      "desc": "Autonomous international cross-border liquidity management platform.",
      "meta": "+164% Daily Transactions",
      "img": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Prism Multi-Brand Design System",
      "tag": "Design Systems",
      "desc": "Unified 4 enterprise brands under tokenized WCAG 2.1 AAA accessibility.",
      "meta": "62% Faster Sprint Velocity",
      "img": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Orbit AI Codebase Copilot",
      "tag": "Developer Tools",
      "desc": "Human-in-the-loop AST visualization and code refactoring interface.",
      "meta": "4.9/5 CSAT Rating",
      "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Krypton Health Patient Portal",
      "tag": "HealthTech",
      "desc": "Empowering patients with transparent telehealth scheduling and lab results.",
      "meta": "98.7% Retention Rate",
      "img": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Design System Audit & Tokens",
      "price": "$4,500",
      "features": [
        "Figma token architecture review",
        "Accessibility WCAG compliance audit",
        "Component library restructuring",
        "Developer handoff documentation"
      ]
    },
    {
      "name": "End-to-End Product Design",
      "price": "$8,500+",
      "features": [
        "User research & journey blueprints",
        "Wireframes to high-fidelity prototypes",
        "Interactive Protopie testing",
        "Engineering support & QA"
      ]
    },
    {
      "name": "Monthly Staff Design Advisory",
      "price": "$3,800/mo",
      "features": [
        "15 hours design leadership",
        "Design sprint alignment",
        "Design team mentoring",
        "Executive design reviews"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Maya transformed our messy platform into a benchmark of elegant usability.",
      "author": "Samantha Vance",
      "role": "VP of Product"
    },
    {
      "quote": "Her deep understanding of design tokens saved our engineering squads months of work.",
      "author": "Julian Meyer",
      "role": "Head of Engineering"
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
