// Dynamic Hydration Engine for Victoria Sterling, Esq.
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
