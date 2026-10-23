
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = {
  "id": "07-lawyer",
  "name": "Victoria Sterling, Esq.",
  "category": "business",
  "title": "Principal Counsel • Sterling Legal",
  "headline": "Strategic Legal Counsel for Transformative M&A, IP, and Corporate Governance",
  "tagline": "Mergers & Acquisitions • Corporate Law • IP Litigation",
  "bio": "Victoria Sterling has over 18 years of legal advisory experience representing Fortune 500 corporations, private equity funds, and emerging technology ventures before federal courts and international arbitrations.",
  "location": "One World Trade Center, New York, NY",
  "email": "counsel@sterlinglegal.com",
  "phone": "+1 (212) 555-8840",
  "heroImage": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "18+",
      "label": "Years Bar Experience"
    },
    {
      "val": "$4.5B+",
      "label": "M&A Aggregate Value"
    },
    {
      "val": "98%",
      "label": "Resolution Success Rate"
    },
    {
      "val": "Band 1",
      "label": "Chambers USA Ranking"
    }
  ],
  "itemsTitle": "Representative Matters & Legal Focus",
  "items": [
    {
      "title": "$480M Cross-Border Cloud Acquisition",
      "tag": "M&A",
      "desc": "Structured international acquisition with full US and EU antitrust clearances.",
      "meta": "Closed in 90 Days",
      "img": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "$92M Biotech Patent Settlement",
      "tag": "IP Litigation",
      "desc": "Lead litigation counsel securing historic favorable damages and global royalties.",
      "meta": "Federal Circuit Victory",
      "img": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Corporate Governance & Board Advisory",
      "tag": "Securities",
      "desc": "Advising public company boards on SEC compliance and activist defense.",
      "meta": "Ongoing Counsel",
      "img": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "FTC Antitrust Scrutiny Defense",
      "tag": "Antitrust",
      "desc": "Secured unconditional clearance for high-profile fintech infrastructure merger.",
      "meta": "Zero Divestitures",
      "img": "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Strategic Matter Assessment",
      "price": "$1,500",
      "features": [
        "2-hour confidential review",
        "Risk exposure & liability analysis",
        "Preliminary litigation or transaction roadmap",
        "Conflict checks completed"
      ]
    },
    {
      "name": "M&A Deal Legal Retainer",
      "price": "Custom Fee",
      "features": [
        "Due diligence room management",
        "Purchase agreement negotiation",
        "Regulatory filing representations",
        "Closing & escrow supervision"
      ]
    },
    {
      "name": "General Counsel Advisory",
      "price": "$6,500/mo",
      "features": [
        "Direct partner access",
        "Commercial contracts review",
        "Employment & IP agreements",
        "Board meeting attendance"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Victoria Sterling is the most formidable negotiator in modern corporate M&A.",
      "author": "Edward Hastings",
      "role": "Managing Partner, Private Equity"
    },
    {
      "quote": "Her IP courtroom strategy saved our core technology patents.",
      "author": "Dr. Linda Zhao",
      "role": "CEO, BioHealth"
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
    <div class="split-m-card">
      <strong>${s.val}</strong>
      <span>${s.label}</span>
    </div>
  `).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => `
    <article class="split-item">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="split-item-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => `
    <div class="split-pkg">
      <div>
        <h3>${p.name}</h3>
        <span style="font-size:0.8rem; color:#8b949e;">${p.features.join(' • ')}</span>
      </div>
      <div class="split-pkg-price">${p.price}</div>
    </div>
  `).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => `
    <div class="split-rev">
      <p class="split-rev-q">"${r.quote}"</p>
      <span style="font-weight:700; color:#d4af37; font-size:0.85rem;">${r.author} &bull; ${r.role}</span>
    </div>
  `).join('');

  // Scroll spy setup
  const scrollPane = document.getElementById('split-scroll-pane');
  const spyLinks = document.querySelectorAll('.spy-item');
  if (scrollPane && spyLinks.length > 0) {
    scrollPane.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.split-content-section');
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - scrollPane.offsetTop;
        if (scrollPane.scrollTop >= top - 100) {
          current = sec.getAttribute('id');
        }
      });
      spyLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === current) link.classList.add('active');
      });
    });
  }

  ensureAttributionBadge();
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
