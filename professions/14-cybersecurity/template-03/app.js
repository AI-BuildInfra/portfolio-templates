// Dynamic Hydration Engine for Dante 'Cipher' Ward
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
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('hero-avatar').src = data.avatar;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metricsBox = document.getElementById('metrics-grid');
  metricsBox.innerHTML = data.stats.map(s => `
    <div class="metric-card">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  // Items
  const itemsBox = document.getElementById('items-grid');
  itemsBox.innerHTML = data.items.map(item => `
    <article class="item-card">
      <div class="item-thumb">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="item-info">
        <span class="item-tag">${item.tag}</span>
        <h3 class="item-title">${item.title}</h3>
        <p class="item-desc">${item.desc}</p>
        <span class="item-meta">${item.meta}</span>
      </div>
    </article>
  `).join('');

  // Packages
  const pkgBox = document.getElementById('packages-grid');
  pkgBox.innerHTML = data.packages.map(p => `
    <div class="package-card">
      <h3 class="pkg-name">${p.name}</h3>
      <div class="pkg-price">${p.price}</div>
      <ul class="pkg-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn btn-primary btn-block">Inquire &gt;</a>
    </div>
  `).join('');

  // Reviews
  const revBox = document.getElementById('reviews-grid');
  revBox.innerHTML = data.reviews.map(r => `
    <div class="review-card">
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-author">${r.author}</div>
      <div class="review-role">${r.role}</div>
    </div>
  `).join('');

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadData);
