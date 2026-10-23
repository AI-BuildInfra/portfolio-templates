
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
