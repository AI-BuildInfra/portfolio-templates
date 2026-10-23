// ==========================================================================
// Minimalist Portal Controller | AI BuildInfra Portfolio Archives
// Single-Paradigm, Uncluttered, Fast-Finder Navigation
// ==========================================================================

const PROFESSIONS_META = [
  { id: "01-photographer", num: "01", icon: "📸", title: "Photographers & Cinematographers", name: "Elena Vance", tag: "Creative & Visual", desc: "Fine art galleries, EXIF camera metadata, photo lightboxes, gear repertoire, and client booking forms." },
  { id: "02-doctor", num: "02", icon: "🩺", title: "Doctors & Medical Specialists", name: "Dr. Marcus Chen, MD", tag: "Healthcare", desc: "Clinical trust layout, emergency triage hotline, specialties grid, office hours schedule, and patient intake." },
  { id: "03-ui-ux-designer", num: "03", icon: "🎨", title: "UI/UX & Product Designers", name: "Maya Lin", tag: "Creative Tech", desc: "In-depth case studies with outcome metrics, 4-phase design sprint breakdown, and design token sandboxes." },
  { id: "04-developer", num: "04", icon: "💻", title: "Software Engineers & Developers", name: "Alex Rivera", tag: "Engineering", desc: "Interactive bash terminal CLI, GitHub star metrics, categorized tech stacks, and production architecture timelines." },
  { id: "05-gamer", num: "05", icon: "🎮", title: "Gamers & Esports Streamers", name: "Kai 'ViperX' Thorne", tag: "Gaming & Esports", desc: "Live Twitch broadcast radar, tournament trophy cabinet, 360Hz battle station PC rig specs, and stream schedule." },
  { id: "06-architect", num: "06", icon: "🏛️", title: "Architects & Spatial Designers", name: "Kaelen Voss, AIA", tag: "Spatial Design", desc: "Travertine stone aesthetics, architectural built monograph plates, mass-timber materiality, and RIBA honors." },
  { id: "07-lawyer", num: "07", icon: "⚖️", title: "Lawyers & Legal Consultants", name: "Victoria Sterling, Esq.", tag: "Corporate Law", desc: "Executive styling, representative M&A matters, state bar admissions, and privileged consultation intake." },
  { id: "08-fitness-trainer", num: "08", icon: "⚡", title: "Fitness Coaches & Trainers", name: "Marcus Drake, CSCS", tag: "Health & Fitness", desc: "Interactive calorie & macro estimator, verified client transformations, program tiers, and training plans." },
  { id: "09-content-creator", num: "09", icon: "🎬", title: "Content Creators & Filmmakers", name: "Aria Thorne", tag: "Media & Film", desc: "Verified audience media kit (1.8M reach), multi-platform stats, episodic film reels, and brand sponsorship rates." },
  { id: "10-chef", num: "10", icon: "🍽️", title: "Chefs & Culinary Artists", name: "Antoine Laurent", tag: "Gastronomy", desc: "Seasonal degustation tasting menu with dietary badges, terroir philosophy, culinary awards, and private dining bookings." },
  { id: "11-musician", num: "11", icon: "🎵", title: "Musicians, DJs & Producers", name: "Liam O'Connor (NovaPulse)", tag: "Music & Audio", desc: "Festival setlists, release discography, analog synthesis setups, audio players, and commercial sync licensing." },
  { id: "12-copywriter", num: "12", icon: "✍️", title: "Copywriters & Authors", name: "Clara Hawthorne", tag: "Direct Response", desc: "High-converting sales letters, B2B email sequence breakdowns, brand manifestos, and verified revenue proof ($35M+)." },
  { id: "13-fashion-model", num: "13", icon: "👠", title: "Fashion Models & Stylists", name: "Seraphina Vance", tag: "High Fashion", desc: "Runway lookbooks, magazine cover spreads (Paris, Milan, NY), agency stats, measurements, and editorial rates." },
  { id: "14-cybersecurity", num: "14", icon: "🛡️", title: "Cybersecurity & Ethical Hackers", name: "Dante 'Cipher' Ward", tag: "Infosec", desc: "Zero-day vulnerability disclosures, CVE tracking, adversary emulation red team reports, and enterprise defense audits." },
  { id: "15-financial-advisor", num: "15", icon: "📈", title: "Financial Advisors & Planners", name: "Arthur Pendelton, CFP®", tag: "Private Wealth", desc: "Fee-only fiduciary wealth management, AUM metrics ($420M+), business exit strategy, and dynasty estate architecture." }
];

const ARCHETYPES_META = {
  "template-01": { label: "Obsidian Dark", badge: "Cinematic Dark", summary: "High-contrast dark canvas with EXIF data modal & photo zoom lightbox." },
  "template-02": { label: "Nordic Light", badge: "Clean Editorial", summary: "Warm serif monograph with roman numerals, drop caps & reading progress bar." },
  "template-03": { label: "Bento Grid", badge: "Asymmetric Bento", summary: "Modular bento layout featuring live timezone clock & interactive widget tabs." },
  "template-04": { label: "Glassmorphic Aura", badge: "Translucent Glow", summary: "Frosted blur surfaces with dynamic mouse-following glow spotlight effect." },
  "template-05": { label: "Neo-Brutalist", badge: "High-Contrast Marquee", summary: "Bold black borders, retro sticker badges & smooth infinite scrolling marquee." },
  "template-06": { label: "Split-Screen", badge: "Dual-Pane 50/50", summary: "Pinned bio on the left, independent scroll showcase with scroll-spy on the right." },
  "template-07": { label: "Sidebar App", badge: "SaaS Dashboard Dock", summary: "Modern productivity dock with collapsible navigation sidebar and sub-panels." },
  "template-08": { label: "Magazine Serif", badge: "Publication Masthead", summary: "Classic editorial newspaper masthead, dateline stamp, and pull-quote sidebars." },
  "template-09": { label: "Kinetic Pulse", badge: "Draggable Reel Carousel", summary: "Horizontal touch & drag gallery reel with kinetic friction physics." },
  "template-10": { label: "Terminal Monospace", badge: "Interactive Bash CLI", summary: "Functional hacker shell with command parser (`help`, `cat`, `skills`, `clear`)." }
};

let activeProfessionFilter = "all";
let activeArchetypeFilter = "all";
let searchQuery = "";

// Helper to get all templates grouped by profession
function getGroupedTemplates() {
  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const groups = {};
  
  PROFESSIONS_META.forEach(p => {
    // Find representative image from catalog
    const firstMatch = catalog.find(t => t.professionId === p.id);
    groups[p.id] = {
      meta: p,
      image: firstMatch ? firstMatch.image : "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      templates: []
    };
  });

  catalog.forEach(t => {
    if (groups[t.professionId]) {
      groups[t.professionId].templates.push(t);
    }
  });

  return groups;
}

// Render the main canvas: Clean Career Cards or Direct Template Grid when filtered
function renderMainCanvas() {
  const container = document.getElementById('professions-container');
  const counterText = document.getElementById('catalog-counter-text');
  if (!container) return;

  const grouped = getGroupedTemplates();
  const q = searchQuery.trim().toLowerCase();

  // If a specific design style is selected or search targets a template design
  if (activeArchetypeFilter !== 'all') {
    renderFilteredTemplatesView(container, counterText, grouped, q);
    return;
  }

  // Filter career cards by profession dropdown and keyword search
  const filteredProfessions = PROFESSIONS_META.filter(p => {
    const matchesProfession = (activeProfessionFilter === 'all' || p.id === activeProfessionFilter);
    if (!matchesProfession) return false;

    if (!q) return true;
    const searchString = `${p.num} ${p.title} ${p.name} ${p.tag} ${p.desc}`.toLowerCase();
    return searchString.includes(q);
  });

  // Update Status Bar Count
  if (counterText) {
    if (filteredProfessions.length === 15) {
      counterText.innerHTML = `Displaying <strong>15 Careers</strong> &bull; <strong>150 Production Templates</strong>`;
    } else {
      counterText.innerHTML = `Showing <strong>${filteredProfessions.length} of 15</strong> Careers matching filters`;
    }
  }

  if (filteredProfessions.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No Careers Match Your Search</h3>
        <p>No results found for "${escapeHtml(searchQuery)}". Try adjusting your search keyword or reset filters.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render Clean 3-Column Career Grid
  const cardsHtml = filteredProfessions.map(p => {
    const group = grouped[p.id];
    const imgUrl = group ? group.image : "";
    return `
      <article class="career-card" data-prof-id="${p.id}">
        <div class="career-media">
          <img src="${imgUrl}" alt="${p.title}" loading="lazy">
          <div class="career-media-tags">
            <span class="career-num-pill">CAREER ${p.num} / 15</span>
            <span class="career-badge-pill">10 UNIQUE DESIGNS</span>
          </div>
        </div>
        <div class="career-body">
          <span class="career-kicker">${escapeHtml(p.tag)}</span>
          <h2 class="career-title">${escapeHtml(p.title)}</h2>
          <div class="career-persona">Persona: <strong>${escapeHtml(p.name)}</strong></div>
          <p class="career-desc">${escapeHtml(p.desc)}</p>
          <div class="career-actions">
            <button class="btn-view-career" onclick="openProfessionDrawer('${p.id}')">
              <span>Explore 10 Designs</span> &rarr;
            </button>
            <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/professions/${p.id}" target="_blank" rel="noopener" class="btn-gh-shortcut" title="View Source Files on GitHub">
              📂 Code
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = `<div class="career-grid">${cardsHtml}</div>`;
}

// Render filtered view when user picks an archetype style (e.g. Bento Grid, Terminal CLI)
function renderFilteredTemplatesView(container, counterText, grouped, q) {
  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const archInfo = ARCHETYPES_META[activeArchetypeFilter] || { label: activeArchetypeFilter, badge: "Design Archetype", summary: "" };

  const matches = catalog.filter(t => {
    const matchesArch = (t.variantId === activeArchetypeFilter);
    const matchesProf = (activeProfessionFilter === 'all' || t.professionId === activeProfessionFilter);
    if (!matchesArch || !matchesProf) return false;

    if (!q) return true;
    const searchString = `${t.professionTitle} ${t.professionName} ${t.variantName} ${t.variantType}`.toLowerCase();
    return searchString.includes(q);
  });

  if (counterText) {
    counterText.innerHTML = `Showing <strong>${matches.length}</strong> templates for style: <strong>${archInfo.label}</strong>`;
  }

  if (matches.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No Matching Templates Found</h3>
        <p>No templates found for style "${archInfo.label}" with current filters.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  const itemsHtml = matches.map(t => {
    return `
      <article class="drawer-item-card">
        <div class="drawer-item-media">
          <img src="${t.image}" alt="${t.professionTitle}" loading="lazy">
          <span class="drawer-variant-tag">${t.variantId.toUpperCase()}</span>
          <span class="drawer-style-tag">${archInfo.badge}</span>
        </div>
        <div class="drawer-item-body">
          <span class="drawer-archetype-name">${escapeHtml(t.professionTitle)}</span>
          <h4>${escapeHtml(t.professionName)} &bull; ${escapeHtml(t.variantName)}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1rem;">${archInfo.summary}</p>
          <div class="drawer-actions">
            <a href="${t.path}" target="_blank" rel="noopener" class="btn-drawer-demo">
              Live Preview &nearr;
            </a>
            <button class="btn-drawer-code" onclick="openProfessionDrawer('${t.professionId}')" title="Inspect All 10 Designs">
              All 10 &rarr;
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = `
    <div class="catalog-filtered-header">
      <div>
        <span class="hero-kicker" style="margin-bottom: 0.5rem;">FILTERED BY DESIGN STYLE</span>
        <h2>${archInfo.label} (${matches.length} Variations)</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">${archInfo.summary}</p>
      </div>
      <button class="btn btn-github" onclick="resetFilters()">
        &larr; View All 15 Careers
      </button>
    </div>
    <div class="drawer-cards-grid">
      ${itemsHtml}
    </div>
  `;
}

// Open Slide-Over Drawer for a specific career showing its 10 distinct archetypes
function openProfessionDrawer(profId) {
  const meta = PROFESSIONS_META.find(p => p.id === profId);
  if (!meta) return;

  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const templates = catalog.filter(t => t.professionId === profId);

  const drawerHeader = document.getElementById('drawer-header');
  const drawerBody = document.getElementById('drawer-body');
  const drawer = document.getElementById('profession-drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (!drawer || !overlay) return;

  // Build Drawer Header
  drawerHeader.innerHTML = `
    <div class="drawer-header-left">
      <span class="drawer-icon">${meta.icon}</span>
      <div>
        <span class="drawer-num">DISCIPLINE ${meta.num} / 15 &bull; ${meta.tag.toUpperCase()}</span>
        <h2>${escapeHtml(meta.title)}</h2>
        <p>Featured Lead Persona: <strong>${escapeHtml(meta.name)}</strong> &bull; 10 Production Archetypes</p>
      </div>
    </div>
    <div class="drawer-header-right">
      <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/professions/${meta.id}" target="_blank" rel="noopener" class="btn btn-github" style="font-size: 0.78rem;">
        📂 GitHub Folder &nearr;
      </a>
      <button class="drawer-close-btn" onclick="closeProfessionDrawer()" title="Close Drawer (Esc)">
        &times;
      </button>
    </div>
  `;

  // Build Drawer Body Cards (10 Archetypes)
  const cardsHtml = templates.map((t, idx) => {
    const arch = ARCHETYPES_META[t.variantId] || { label: t.variantName, badge: t.variantType, summary: "" };
    const numDisplay = String(idx + 1).padStart(2, '0');
    return `
      <article class="drawer-item-card">
        <div class="drawer-item-media">
          <img src="${t.image}" alt="${t.variantName}" loading="lazy">
          <span class="drawer-variant-tag">STYLE ${numDisplay} / 10</span>
          <span class="drawer-style-tag">${arch.badge}</span>
        </div>
        <div class="drawer-item-body">
          <span class="drawer-archetype-name">${arch.label}</span>
          <h4>${escapeHtml(t.variantName)}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45; margin-bottom: 1.2rem;">
            ${arch.summary}
          </p>
          <div class="drawer-actions">
            <a href="${t.path}" target="_blank" rel="noopener" class="btn-drawer-demo">
              Live Preview &nearr;
            </a>
            <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/${t.folder}" target="_blank" rel="noopener" class="btn-drawer-code" title="View Source Directory">
              Source &nearr;
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  drawerBody.innerHTML = `
    <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-tertiary); letter-spacing: 0.08em;">
        SELECT ANY DESIGN TO PREVIEW LIVE (HYDRATED BY DATA.JSON)
      </span>
      <span style="font-size: 0.8rem; color: var(--text-secondary);">
        10 of 10 Loaded
      </span>
    </div>
    <div class="drawer-cards-grid">
      ${cardsHtml}
    </div>
  `;

  // Activate Drawer
  overlay.classList.add('active');
  drawer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProfessionDrawer() {
  const drawer = document.getElementById('profession-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// User Action Handlers
function handleProfessionChange(val) {
  activeProfessionFilter = val;
  renderMainCanvas();
}

function handleArchetypeChange(val) {
  activeArchetypeFilter = val;
  renderMainCanvas();
}

function handleSearch(val) {
  searchQuery = val;
  renderMainCanvas();
}

function resetFilters() {
  activeProfessionFilter = "all";
  activeArchetypeFilter = "all";
  searchQuery = "";

  const selProf = document.getElementById('select-profession');
  const selArch = document.getElementById('select-archetype');
  const searchInput = document.getElementById('search-input');

  if (selProf) selProf.value = "all";
  if (selArch) selArch.value = "all";
  if (searchInput) searchInput.value = "";

  renderMainCanvas();
}

// Escape key listener to close drawer
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProfessionDrawer();
  }
});

// Utility to escape HTML strings
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global attachments for inline HTML handlers
window.handleProfessionChange = handleProfessionChange;
window.handleArchetypeChange = handleArchetypeChange;
window.handleSearch = handleSearch;
window.openProfessionDrawer = openProfessionDrawer;
window.closeProfessionDrawer = closeProfessionDrawer;
window.resetFilters = resetFilters;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderMainCanvas();
});
