// Dynamic Portfolio Hydration & Interactive Bash Terminal for Alex Rivera
const FALLBACK_DATA = {
  developer: {
    name: "Alex Rivera",
    handle: "@alexrivera_dev",
    title: "Senior Distributed Systems & Full-Stack Engineer",
    status: "building high-throughput distributed microservices",
    bio: "Software engineer with 8+ years architecting fault-tolerant microservices, event-driven pipelines, and developer tooling. Passionate about Rust, Go, TypeScript, and Kubernetes.",
    location: "Austin, TX & Remote",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "alex@riveradev.io"
  },
  stats: [
    { val: "8+", label: "Years in Production" },
    { val: "4.2M", label: "Daily API Requests" },
    { val: "18.5k", label: "GitHub Stars Earned" },
    { val: "99.99%", label: "Service SLA Kept" }
  ],
  skills: {
    languages: ["Rust", "Go", "TypeScript", "Python", "SQL", "Bash"],
    backend: ["Node.js / Express", "FastAPI", "gRPC", "GraphQL", "Apache Kafka"],
    cloudDevOps: ["Docker", "Kubernetes", "AWS (ECS, Lambda, S3)", "Terraform", "CI/CD (GitHub Actions)"],
    databases: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Elasticsearch"]
  },
  projects: [
    {
      title: "KubeStream",
      tagline: "Real-time distributed log indexing and telemetry engine for Kubernetes clusters.",
      tech: ["Rust", "gRPC", "ClickHouse", "WebSockets"],
      stars: "4.8k",
      githubUrl: "https://github.com",
      liveDemo: "https://example.com",
      highlights: "Achieved sub-15ms log aggregation latency across 500+ container nodes."
    },
    {
      title: "HyperGraph API Gateway",
      tagline: "High-throughput asynchronous federated GraphQL gateway with automatic caching.",
      tech: ["Go", "Redis", "Docker", "Prometheus"],
      stars: "3.1k",
      githubUrl: "https://github.com",
      liveDemo: "https://example.com",
      highlights: "Processed 65,000 req/sec with zero memory leaks and 4ms p99 latency."
    },
    {
      title: "StateForge",
      tagline: "Declarative immutable state management library with zero boilerplate.",
      tech: ["TypeScript", "Vite", "Jest"],
      stars: "6.2k",
      githubUrl: "https://github.com",
      liveDemo: "https://example.com",
      highlights: "Downloaded over 250,000 times/month across NPM ecosystem."
    }
  ],
  experience: [
    {
      role: "Staff Distributed Systems Engineer",
      company: "Aura Scale Technologies",
      period: "2022 - Present",
      description: "Architected event-driven message bus handling 400M+ events/day using Kafka and Go. Reduced cloud infrastructure spend by 38% via Kubernetes autoscaling."
    },
    {
      role: "Senior Backend Engineer",
      company: "CloudForge Labs",
      period: "2019 - 2022",
      description: "Led backend migration from monolithic architecture to containerized microservices. Maintained 99.99% uptime across global multi-region deployments."
    },
    {
      role: "Full Stack Engineer",
      company: "Nexis Systems",
      period: "2017 - 2019",
      description: "Developed React dashboard and Node.js REST APIs for real-time industrial IoT monitoring."
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, experience, contact, clear",
    bio: "Alex Rivera: Senior Distributed Systems & Full-Stack Engineer with 8+ years building resilient microservices.",
    skills: "Rust, Go, TypeScript, Kubernetes, Kafka, AWS, PostgreSQL, Redis",
    projects: "KubeStream (Rust), HyperGraph (Go), StateForge (TypeScript)",
    experience: "Staff Engineer @ Aura Scale | Senior Backend @ CloudForge",
    contact: "Email: alex@riveradev.io | GitHub: @alexrivera_dev"
  }
};

let activeCommands = {};

async function loadDevData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Failed to load data.json');
    const data = await res.json();
    initDevSite(data);
  } catch (err) {
    console.warn("Using fallback developer data:", err);
    initDevSite(FALLBACK_DATA);
  }
}

function initDevSite(data) {
  const d = data.developer;
  activeCommands = data.terminalCommands || FALLBACK_DATA.terminalCommands;

  document.getElementById('hero-title').textContent = d.name;
  document.getElementById('hero-subtitle').textContent = d.title;
  document.getElementById('hero-status').textContent = `system online • ${d.status}`;
  document.getElementById('hero-desc').textContent = d.bio;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Social Links
  const socials = document.getElementById('hero-socials');
  socials.innerHTML = `
    <a href="${d.github}" class="link-pill" target="_blank" rel="noopener">GitHub</a>
    <a href="${d.linkedin}" class="link-pill" target="_blank" rel="noopener">LinkedIn</a>
    <a href="${d.twitter}" class="link-pill" target="_blank" rel="noopener">Twitter / X</a>
    <a href="mailto:${d.email}" class="link-pill">Email</a>
  `;

  // Metrics
  const metricsBox = document.getElementById('metrics-container');
  metricsBox.innerHTML = data.stats.map(s => `
    <div class="metric-card">
      <span class="metric-num">${s.val}</span>
      <span class="metric-lbl">${s.label}</span>
    </div>
  `).join('');

  // Projects
  const projectsBox = document.getElementById('projects-container');
  projectsBox.innerHTML = data.projects.map(p => `
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">${p.title}</h3>
        <span class="project-stars">★ ${p.stars}</span>
      </div>
      <p class="project-tagline">${p.tagline}</p>
      <p class="project-highlights">${p.highlights}</p>
      <div class="project-techs">
        ${p.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
      <div class="project-actions">
        <a href="${p.liveDemo}" target="_blank" class="btn-demo">View Demo &nearr;</a>
        <a href="${p.githubUrl}" target="_blank" class="btn-demo" style="color:#bc8cff;border-color:rgba(188,140,255,0.4)">Source &gt;</a>
      </div>
    </div>
  `).join('');

  // Skills
  const skillsBox = document.getElementById('skills-container');
  const catNames = {
    languages: "Core Languages",
    backend: "Distributed Backend & Messaging",
    cloudDevOps: "Cloud Architecture & DevOps",
    databases: "Databases & Storage Engines"
  };
  skillsBox.innerHTML = Object.entries(data.skills).map(([key, list]) => `
    <div class="skill-category-card">
      <h3 class="skill-cat-title">${catNames[key] || key}</h3>
      <div class="skill-tags">
        ${list.map(item => `<div class="skill-item">${item}</div>`).join('')}
      </div>
    </div>
  `).join('');

  // Experience
  const expBox = document.getElementById('experience-container');
  expBox.innerHTML = data.experience.map(e => `
    <div class="exp-item">
      <div class="exp-header">
        <span class="exp-role">${e.role}</span>
        <span class="exp-company">@ ${e.company}</span>
      </div>
      <span class="exp-period">${e.period}</span>
      <p class="exp-desc">${e.description}</p>
    </div>
  `).join('');

  setupTerminal();
  setupBurgerNav();
}

function setupTerminal() {
  const input = document.getElementById('term-input');
  const history = document.getElementById('term-history');
  const screen = document.getElementById('terminal-screen');

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';

      if (!cmd) return;

      if (cmd === 'clear') {
        history.innerHTML = '';
        return;
      }

      const row = document.createElement('div');
      row.style.marginBottom = '0.5rem';

      const promptLine = document.createElement('p');
      promptLine.innerHTML = `<span style="color:#3fb950">guest@riveradev:~$</span> <span style="color:#f0f6fc">${cmd}</span>`;
      row.appendChild(promptLine);

      const respLine = document.createElement('p');
      respLine.style.color = '#8b949e';
      respLine.style.marginLeft = '1rem';

      if (activeCommands[cmd]) {
        respLine.textContent = activeCommands[cmd];
      } else {
        respLine.innerHTML = `command not found: ${cmd}. Type <span style="color:#d29922">help</span> for available commands.`;
      }

      row.appendChild(respLine);
      history.appendChild(row);
      screen.scrollTop = screen.scrollHeight;
    }
  });
}

function setupBurgerNav() {
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('dev-menu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadDevData);
