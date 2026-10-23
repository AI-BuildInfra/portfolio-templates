
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "12-copywriter",
  "name": "Clara Hawthorne",
  "category": "creative",
  "title": "Senior Direct Response & Brand Copywriter",
  "headline": "Turning Complex Ideas Into Irresistible Prose That Drives Millions in Revenue",
  "tagline": "Direct Response • SaaS Messaging • Brand Strategy",
  "bio": "Clara Hawthorne has written campaigns generating over $35M in pipeline and revenue for venture-backed tech startups, boutique luxury brands, and bestselling book launches.",
  "location": "Chicago, IL & Remote",
  "email": "clara@hawthornecopy.com",
  "phone": "+1 (312) 555-0166",
  "heroImage": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "$35M+",
      "label": "Client Revenue Generated"
    },
    {
      "val": "10+",
      "label": "Years Writing Copy"
    },
    {
      "val": "48%",
      "label": "Average Email Open Rate"
    },
    {
      "val": "3x",
      "label": "Conversion Lift Record"
    }
  ],
  "itemsTitle": "High-Converting Campaigns & Case Studies",
  "items": [
    {
      "title": "SaaS Homepage Messaging Re-Architecture",
      "tag": "Conversion Copy",
      "desc": "Rewrote positioning headline, value props, and pricing page.",
      "meta": "+138% Demo Bookings",
      "img": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "B2B Executive Email Sequence",
      "tag": "Email Nurture",
      "desc": "7-part thought-leadership sequence targeting Enterprise CIOs.",
      "meta": "48.2% Open • $4.2M Pipeline",
      "img": "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Luxury Heritage Watch Brand Story",
      "tag": "Brand Narrative",
      "desc": "Crafted brand manifesto, product descriptions, and packaging copy.",
      "meta": "Sold Out In 3 Hours",
      "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "High-Ticket Course Sales Letter",
      "tag": "Long-Form Copy",
      "desc": "6,000-word persuasive sales letter with psychological objection handling.",
      "meta": "$1.8M Launch Gross",
      "img": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Website Messaging Overhaul",
      "price": "$4,200",
      "features": [
        "Customer interview research & mining",
        "Homepage, About & Product page copy",
        "Wireframe layout with typography notes",
        "2 rounds of revisions included"
      ]
    },
    {
      "name": "High-Converting Email Funnel",
      "price": "$2,800",
      "features": [
        "5-7 strategic sequence emails",
        "A/B subject line variants",
        "Compelling call-to-action hooks",
        "Behavioral segmentation strategy"
      ]
    },
    {
      "name": "Monthly Content Retainer",
      "price": "$3,500/mo",
      "features": [
        "4 high-authority technical essays",
        "Weekly newsletter editions",
        "Social media thought leadership hooks",
        "Bi-weekly strategy call"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Clara's copy transformed our conversion rates overnight. Pure wizardry.",
      "author": "Jason Miller",
      "role": "Founder, SaaSMetrics"
    },
    {
      "quote": "She captured our brand voice better than our own founding team could.",
      "author": "Nora Sterling",
      "role": "CMO, Verve Lux"
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
