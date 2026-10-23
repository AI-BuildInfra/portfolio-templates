// Dynamic Portfolio Hydration for Maya Lin UX/UI Portfolio
const FALLBACK_DATA = {
  designer: {
    name: "Maya Lin",
    role: "Staff Product & Design Systems Designer",
    availability: "Available for Select Contract Engagements & Design Audits",
    location: "Seattle, WA & Remote Worldwide",
    tagline: "Crafting resilient digital product experiences, scalable multi-brand design systems, and delightful human interactions.",
    bio: "Over the past 9 years, I have architected digital products for fintech unicorns, enterprise SaaS platforms, and early-stage startups. My focus unites rigorous user research, systematic component architectures, and micro-interaction polish.",
    email: "hello@mayalinux.design"
  },
  metrics: [
    { val: "9+", label: "Years Designing" },
    { val: "14+", label: "Design Systems Shipped" },
    { val: "2.4M+", label: "Active Product Users" },
    { val: "3", label: "Red Dot & Awwwards" }
  ],
  caseStudies: [
    {
      id: "vaultpay",
      title: "VaultPay — Autonomous Global Treasury App",
      summary: "Redesigning international cross-border liquidity management for high-growth tech enterprises.",
      impact: "+164% Daily Active Transactions",
      tags: ["Fintech", "Mobile iOS/Android", "Design System"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      challenge: "Fragmented financial dashboards led to 34% drop-off during cross-border settlement approvals.",
      solution: "Engineered an intelligent batch-approval interface reducing settlement latency from 4.2 minutes to 28 seconds.",
      tools: ["Figma", "Protopie", "Design Tokens"]
    },
    {
      id: "prism-tokens",
      title: "Prism Multi-Brand Design System",
      summary: "Unified 4 legacy corporate brands under a tokenized WCAG 2.1 AAA accessible system.",
      impact: "62% Faster Sprint Velocity",
      tags: ["Design Systems", "Web SaaS", "Accessibility"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      challenge: "4 distinct enterprise engineering squads had duplicated 210+ button and input variations with zero code alignment.",
      solution: "Built a centralised token library syncing Figma variables directly with Style Dictionary into React and Flutter repos.",
      tools: ["Figma Tokens", "Zeroheight", "Storybook"]
    },
    {
      id: "orbit-ai",
      title: "Orbit AI — Intelligent Codebase Copilot",
      summary: "Human-in-the-loop conversational interface for automated code refactoring and AST visualization.",
      impact: "4.9/5 CSAT Across 80k Devs",
      tags: ["AI Interface", "Developer Tools", "Dark UI"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      challenge: "Complex automated diff proposals confused non-senior engineers, causing rejection of correct suggestions.",
      solution: "Designed contextual inline side-by-side AST visualizers with multi-stage approval granularity.",
      tools: ["Figma", "Principle", "Tailwind CSS"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Behavioral Ethnography",
      description: "Stakeholder immersion, cognitive walkthroughs, user interviews, and friction mapping across the user lifecycle."
    },
    {
      step: "02",
      title: "Information Architecture & Low-Fi",
      description: "Tree testing, user journey blueprints, and rapid wireframing to resolve structural complexity before styling."
    },
    {
      step: "03",
      title: "Tokenized Systems & Micro-Interactions",
      description: "Component tokenization, accessibility audits, typography scales, and tactile motion design."
    },
    {
      step: "04",
      title: "Validation & Engineering Handoff",
      description: "Usability testing rounds, interactive prototypes, edge-case documentation, and Storybook code pairing."
    }
  ],
  testimonials: [
    {
      quote: "Maya transformed our chaotic platform into a benchmark of elegant usability. Her deep understanding of design tokens saved our engineering department hundreds of hours.",
      author: "Samantha Vance",
      role: "VP of Product, VaultPay"
    },
    {
      quote: "One of the most methodical and visionary designers I've collaborated with. Maya doesn't just make things look gorgeous; she solves real business problems.",
      author: "Julian Meyer",
      role: "Head of Engineering, Orbit AI"
    }
  ]
};

async function loadDesignerData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initDesignerSite(data);
  } catch (err) {
    console.warn("Using fallback UI/UX data:", err);
    initDesignerSite(FALLBACK_DATA);
  }
}

function initDesignerSite(data) {
  const d = data.designer;
  document.getElementById('nav-name').textContent = d.name;
  document.getElementById('availability-text').textContent = d.availability;
  document.getElementById('hero-tagline').textContent = d.tagline;
  document.getElementById('hero-bio').textContent = d.bio;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metricsBox = document.getElementById('metrics-strip');
  metricsBox.innerHTML = data.metrics.map(m => `
    <div class="metric-card">
      <span class="metric-num">${m.val}</span>
      <span class="metric-label">${m.label}</span>
    </div>
  `).join('');

  // Case Studies
  const casesBox = document.getElementById('cases-container');
  casesBox.innerHTML = data.caseStudies.map(c => `
    <article class="case-card">
      <div class="case-info">
        <div>
          <div class="case-tags">
            ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <h3 class="case-title">${c.title}</h3>
          <p class="case-summary">${c.summary}</p>
          <div class="case-impact-chip">📈 Outcome: ${c.impact}</div>
          <div class="case-deep-dive">
            <p><strong>Challenge:</strong> ${c.challenge}</p>
            <p><strong>Solution:</strong> ${c.solution}</p>
          </div>
        </div>
        <div class="case-tools">
          <span style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; letter-spacing:0.05em">Stack: </span>
          ${c.tools.join(' • ')}
        </div>
      </div>
      <div class="case-media">
        <img src="${c.image}" alt="${c.title}" loading="lazy">
      </div>
    </article>
  `).join('');

  // Process
  const processBox = document.getElementById('process-container');
  processBox.innerHTML = data.process.map(p => `
    <div class="process-card">
      <div class="process-step">${p.step}</div>
      <h3 class="process-title">${p.title}</h3>
      <p class="process-desc">${p.description}</p>
    </div>
  `).join('');

  // Testimonials
  const testBox = document.getElementById('testimonials-container');
  testBox.innerHTML = data.testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">${t.author}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `).join('');

  setupTokenSandbox();
  setupNav();
}

function setupTokenSandbox() {
  const box = document.getElementById('preview-box');
  const btnLight = document.getElementById('btn-theme-light');
  const btnDark = document.getElementById('btn-theme-dark');
  const btnLime = document.getElementById('btn-theme-lime');
  const demoBtn = document.getElementById('interactive-demo-btn');

  function clearActive() {
    [btnLight, btnDark, btnLime].forEach(b => b.classList.remove('active'));
  }

  btnLight.addEventListener('click', () => {
    clearActive();
    btnLight.classList.add('active');
    box.style.background = '#ffffff';
    box.style.color = '#0f172a';
    box.querySelector('.preview-text').style.color = '#475569';
  });

  btnDark.addEventListener('click', () => {
    clearActive();
    btnDark.classList.add('active');
    box.style.background = '#111827';
    box.style.color = '#f9fafb';
    box.querySelector('.preview-text').style.color = '#94a3b8';
  });

  btnLime.addEventListener('click', () => {
    clearActive();
    btnLime.classList.add('active');
    box.style.background = '#1a2e05';
    box.style.color = '#f7fee7';
    box.querySelector('.preview-text').style.color = '#d9f99d';
  });

  demoBtn.addEventListener('click', () => {
    alert("Token state triggered: Micro-interaction animation executed!");
  });
}

function setupNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadDesignerData);
