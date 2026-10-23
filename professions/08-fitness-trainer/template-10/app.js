
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
