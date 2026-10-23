// Catalog Data for the 10 Profession Templates
const TEMPLATES_CATALOG = [
  {
    id: "01-photographer",
    title: "Elena Vance — Fine Art Photography",
    profession: "Photographer / Cinematographer",
    category: "creative",
    desc: "Obsidian dark mode, filterable category masonry, full-bleed photo lightbox with EXIF gear specs, investment packages, and client reviews.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    tags: ["Dark Gallery", "EXIF Data", "Masonry Grid", "Packages"],
    path: "./professions/01-photographer/index.html",
    folder: "./professions/01-photographer/"
  },
  {
    id: "02-doctor",
    title: "Dr. Marcus Chen — Cardiology & Medicine",
    profession: "Doctor / Healthcare Specialist",
    category: "wellness",
    desc: "Clinical trust sapphire aesthetic, urgent emergency hotline banner, clinical specialties grid, office hours schedule, and patient FAQ accordion.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    tags: ["Clinical Trust", "Office Hours", "Patient FAQs", "Booking"],
    path: "./professions/02-doctor/index.html",
    folder: "./professions/02-doctor/"
  },
  {
    id: "03-ui-ux-designer",
    title: "Maya Lin — Staff Product & Design Systems",
    profession: "UI/UX & Product Designer",
    category: "creative",
    desc: "Bold neo-tech dark layout, problem-solution-impact case studies, 4-phase design sprint breakdown, and interactive live token sandbox.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Case Studies", "Sprint Process", "Interactive Tokens", "Lime Glow"],
    path: "./professions/03-ui-ux-designer/index.html",
    folder: "./professions/03-ui-ux-designer/"
  },
  {
    id: "04-developer",
    title: "Alex Rivera — Distributed Systems & DevOps",
    profession: "Software Engineer / Developer",
    category: "tech",
    desc: "GitHub dark mode, interactive terminal command emulator, production project cards with star badges, categorized tech stack, and career log.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Interactive CLI", "GitHub Stars", "Tech Stack", "Git Timeline"],
    path: "./professions/04-developer/index.html",
    folder: "./professions/04-developer/"
  },
  {
    id: "05-gamer",
    title: "Kai 'ViperX' Thorne — Esports Pro & Streamer",
    profession: "Gamer / Esports Streamer",
    category: "tech",
    desc: "Cyberpunk neon dark theme, live Twitch broadcast radar, tournament trophy cabinet, 360Hz battle station PC rig specs, and weekly schedule.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    tags: ["Cyberpunk", "Live Twitch Radar", "Trophy Case", "PC Rig Specs"],
    path: "./professions/05-gamer/index.html",
    folder: "./professions/05-gamer/"
  },
  {
    id: "06-architect",
    title: "Studio Arcos — Sustainable Architecture",
    profession: "Architect / Interior Designer",
    category: "creative",
    desc: "Travertine and slate editorial aesthetic, architectural built monograph plates, sustainable mass timber materiality palette, and RIBA honors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Minimalist Stone", "Built Monographs", "Materiality", "RIBA Awards"],
    path: "./professions/06-architect/index.html",
    folder: "./professions/06-architect/"
  },
  {
    id: "07-lawyer",
    title: "Victoria Sterling, Esq. — Corporate Counsel",
    profession: "Lawyer / Legal Consultant",
    category: "business",
    desc: "Prestigious executive navy and regal gold aesthetic, landmark M&A representative matters, state bar admissions, and privileged intake form.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    tags: ["Executive Navy", "M&A Matters", "Bar Admissions", "Privilege Form"],
    path: "./professions/07-lawyer/index.html",
    folder: "./professions/07-lawyer/"
  },
  {
    id: "08-fitness-trainer",
    title: "Marcus Drake — CSCS Elite Strength Coach",
    profession: "Fitness Trainer / Coach",
    category: "wellness",
    desc: "Kinetic dark-orange aesthetic, interactive calorie & protein goal calculator, client body transformation stats, and tiered coaching packages.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    tags: ["Macro Calculator", "Transformation Stats", "Tiered Plans", "Kinetic"],
    path: "./professions/08-fitness-trainer/index.html",
    folder: "./professions/08-fitness-trainer/"
  },
  {
    id: "09-content-creator",
    title: "Aria Thorne — Travel & Tech Storyteller",
    profession: "Content Creator / Media Kit",
    category: "creative",
    desc: "Vibrant sunset gradient aesthetic, verified audience demographics media kit, YouTube/TikTok stats, featured episodic films, and brand collaborations.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    tags: ["Media Kit", "Multi-Platform Stats", "Episodic Series", "Collabs"],
    path: "./professions/09-content-creator/index.html",
    folder: "./professions/09-content-creator/"
  },
  {
    id: "10-chef",
    title: "Chef Antoine Laurent — Two-Starred Gastronomy",
    profession: "Executive Chef / Fine Dining",
    category: "business",
    desc: "Truffle and copper amber culinary aesthetic, seasonal degustation tasting menu with dietary badges, biodynamic philosophy, and private dining concierge.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    tags: ["Michelin Accolades", "Tasting Menus", "Farm Philosophy", "Private Dining"],
    path: "./professions/10-chef/index.html",
    folder: "./professions/10-chef/"
  }
];

function renderCatalog(items) {
  const grid = document.getElementById('templates-grid');
  grid.innerHTML = items.map(item => `
    <article class="template-card" data-category="${item.category}">
      <div class="card-preview">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="card-badge">${item.profession}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-tags">
          ${item.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
        <div class="card-actions">
          <a href="${item.path}" class="btn-view" target="_blank" rel="noopener">Live Demo &nearr;</a>
          <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/${item.folder.replace('./', '')}" target="_blank" class="btn-folder" title="View Source on GitHub">Source 📁</a>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFilters() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      if (filter === 'all') {
        renderCatalog(TEMPLATES_CATALOG);
      } else {
        const filtered = TEMPLATES_CATALOG.filter(t => t.category === filter);
        renderCatalog(filtered);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog(TEMPLATES_CATALOG);
  setupFilters();
});
