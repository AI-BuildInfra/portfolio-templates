// Dynamic Hydration Engine for Alex Rivera
const FALLBACK_DATA = {
  "id": "04-developer",
  "name": "Alex Rivera",
  "category": "tech",
  "title": "Senior Distributed Systems & Full-Stack Engineer",
  "headline": "Architecting Fault-Tolerant Microservices and High-Throughput Cloud Infrastructure",
  "tagline": "Rust • Go • TypeScript • Kubernetes",
  "bio": "Software engineer with 8+ years building resilient event-driven microservices, developer tooling, and distributed pipelines. Passionate about system latency, concurrency, and open-source.",
  "location": "Austin, TX & Remote",
  "email": "alex@riveradev.io",
  "phone": "+1 (512) 555-0182",
  "heroImage": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  "stats": [
    {
      "val": "8+",
      "label": "Years in Production"
    },
    {
      "val": "4.2M",
      "label": "Daily API Requests"
    },
    {
      "val": "18.5k",
      "label": "GitHub Stars"
    },
    {
      "val": "99.99%",
      "label": "Uptime SLA Maintained"
    }
  ],
  "itemsTitle": "Production Deployments & Open Source",
  "items": [
    {
      "title": "KubeStream Distributed Telemetry",
      "tag": "Rust / Kubernetes",
      "desc": "Real-time distributed log indexing and tracing engine for cloud clusters.",
      "meta": "Sub-15ms Latency Across 500 Nodes",
      "img": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "HyperGraph API Gateway",
      "tag": "Go / Docker",
      "desc": "High-throughput asynchronous federated GraphQL gateway with automatic caching.",
      "meta": "65,000 req/sec • 4ms p99",
      "img": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "StateForge State Engine",
      "tag": "TypeScript",
      "desc": "Declarative immutable state management library with zero boilerplate.",
      "meta": "250k Monthly NPM Downloads",
      "img": "https://images.unsplash.com/photo-1516116211227-bbc04ebf7972?auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "ZeroSec Secrets Manager",
      "tag": "Go / AWS",
      "desc": "Zero-knowledge ephemeral credential injector for container runtimes.",
      "meta": "Enterprise Ready",
      "img": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "packages": [
    {
      "name": "Architecture & Code Review",
      "price": "$1,800",
      "features": [
        "Distributed systems health audit",
        "Performance bottleneck identification",
        "Concurrency & memory leak profiling",
        "Actionable refactor roadmap"
      ]
    },
    {
      "name": "Microservices MVP Sprint",
      "price": "$6,500",
      "features": [
        "High-performance Go/Rust backend",
        "Docker & Kubernetes setup",
        "PostgreSQL schema & gRPC endpoints",
        "Automated CI/CD test pipeline"
      ]
    },
    {
      "name": "Fractional Principal Eng",
      "price": "$5,000/mo",
      "features": [
        "20 hours strategic guidance",
        "PR reviews and system design",
        "Incident post-mortem leadership",
        "Cloud cost optimization"
      ]
    }
  ],
  "reviews": [
    {
      "quote": "Alex resolved our distributed race condition in 48 hours. Brilliant systems thinker.",
      "author": "David Vance",
      "role": "CTO, CloudPulse"
    },
    {
      "quote": "His architecture reduced our AWS monthly bill by 38% while doubling throughput.",
      "author": "Elena Cruz",
      "role": "Head of Infrastructure"
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
