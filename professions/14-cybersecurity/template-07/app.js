
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "14-cybersecurity",
  "name": "Dante 'Cipher' Ward",
  "category": "tech",
  "title": "Principal Security Researcher & Red Teamer",
  "headline": "Uncovering Critical Vulnerabilities and Hardening Enterprise Zero-Trust Defenses",
  "tagline": "Offensive Security • Cloud Pen-Testing • Zero-Day Research",
  "bio": "Dante Ward is an offensive security engineer with 12+ years conducting adversary emulations and cloud penetration tests. He has discovered 40+ CVEs and secured Fortune 100 fintech infrastructures.",
  "location": "San Jose, CA & Remote",
  "email": "dante@zerodaysecurity.io",
  "phone": "+1 (408) 555-0153",
  "heroImage": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "42",
      "label": "CVEs Discovered"
    },
    {
      "val": "$1.2M",
      "label": "Bug Bounty Payouts"
    },
    {
      "val": "120+",
      "label": "Red Team Engagements"
    },
    {
      "val": "OSCP/OSCE",
      "label": "Elite Certifications"
    }
  ],
  "itemsTitle": "Adversary Emulations & Security Audits",
  "items": [
    {
      "title": "Kubernetes Cloud Privilege Escalation",
      "tag": "CVE-2024-X",
      "desc": "Discovered critical RBAC bypass allowing container breakout to host node.",
      "meta": "Critical Severity 9.8",
      "img": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Global Bank Red Team Emulation",
      "tag": "Red Team",
      "desc": "Simulated advanced threat actor breaching Active Directory domain in 4 days.",
      "meta": "Full Remediation Delivered",
      "img": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Smart Contract Reentrancy Exploit Audit",
      "tag": "Web3 Audit",
      "desc": "Audited decentralized lending protocol securing $450M in liquidity.",
      "meta": "$450M TVL Secured",
      "img": "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Hardware Firmware Reverse Engineering",
      "tag": "IoT Security",
      "desc": "Extracted encryption keys from encrypted flash memory via side-channel analysis.",
      "meta": "Hardware Root of Trust",
      "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Web & API Penetration Test",
      "price": "$4,500",
      "features": [
        "OWASP Top 10 vulnerability assessment",
        "Authentication & business logic testing",
        "Comprehensive executive & technical report",
        "Complimentary re-testing validation"
      ]
    },
    {
      "name": "Full-Scope Red Team Engagement",
      "price": "$12,000",
      "features": [
        "Adversary simulation (External & Internal)",
        "Social engineering & phishing tests",
        "Privilege escalation & domain compromise",
        "Defensive detection tuning debrief"
      ]
    },
    {
      "name": "Virtual CISO & Advisory",
      "price": "$4,000/mo",
      "features": [
        "SOC 2 & ISO 27001 readiness review",
        "Cloud infrastructure security architecture",
        "Incident response table-top exercises",
        "Vendor risk assessment oversight"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Dante identified an authentication zero-day that three prior audit firms missed entirely.",
      "author": "Robert Hayes",
      "role": "CISO, Fintech Global"
    },
    {
      "quote": "His reports don't just point out flaws; they deliver bulletproof remediation code.",
      "author": "Elena Rostova",
      "role": "VP of Security"
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
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => `
    <div class="app-stat-tile">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="app-proj-card">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="app-proj-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="app-pkg">
      <h3>${p.name}</h3>
      <div class="app-pkg-price">${p.price}</div>
      <ul style="list-style:none; font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">
        ${p.features.map(f => `<li>&bull; ${f}</li>`).join('')}
      </ul>
      <button class="btn-app-action" onclick="switchAppTab('tab-contact')">Inquire</button>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="app-rev">
      <p>"${r.quote}"</p>
      <span style="color:#38bdf8; font-weight:700; margin-top:0.4rem; display:block;">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Setup tab buttons
  document.querySelectorAll('.dock-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAppTab(btn.dataset.tab));
  });

  ensureAttributionBadge();
}

function switchAppTab(tabId) {
  document.querySelectorAll('.app-viewport').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.dock-tab-btn').forEach(b => b.classList.remove('active'));
  
  const targetView = document.getElementById(tabId);
  const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (targetView) targetView.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  const labelMap = {
    'tab-overview': 'Overview',
    'tab-works': 'Projects',
    'tab-services': 'Services & Rates',
    'tab-contact': 'Contact'
  };
  const labelEl = document.getElementById('app-view-label');
  if (labelEl) labelEl.textContent = labelMap[tabId] || 'Workspace';
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
