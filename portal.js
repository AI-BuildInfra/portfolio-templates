// Professional Catalog & UI Controller for 15 Professions x 10 Templates = 150 Templates
// High-Contrast Monochrome Architecture with Dual-Axis Filtering & 15x10 Matrix View

// 15 Canonical Professions Metadata with Icons & Badges
const PROFESSIONS_META = [
  { id: "01-photographer", num: "01", icon: "📸", title: "Photographers & Cinematographers", name: "Elena Vance", tag: "Creative & Visual", desc: "Fine art galleries, EXIF camera metadata, photo lightboxes, gear repertoire, and shoot packages." },
  { id: "02-doctor", num: "02", icon: "🩺", title: "Doctors & Medical Specialists", name: "Dr. Marcus Chen, MD", tag: "Healthcare", desc: "Clinical trust layout, emergency triage hotline, specialties grid, office hours schedule, and patient FAQs." },
  { id: "03-ui-ux-designer", num: "03", icon: "🎨", title: "UI/UX & Product Designers", name: "Maya Lin", tag: "Creative Tech", desc: "In-depth case studies with outcome metrics, 4-phase design sprint breakdown, and interactive design token sandbox." },
  { id: "04-developer", num: "04", icon: "💻", title: "Software Engineers & Developers", name: "Alex Rivera", tag: "Engineering", desc: "Interactive bash terminal CLI, GitHub star metrics, categorized tech stacks, and production architecture timelines." },
  { id: "05-gamer", num: "05", icon: "🎮", title: "Gamers & Esports Streamers", name: "Kai 'ViperX' Thorne", tag: "Gaming & Tech", desc: "Live Twitch broadcast radar, tournament trophy cabinet, 360Hz battle station PC rig specs, and stream radar." },
  { id: "06-architect", num: "06", icon: "🏛️", title: "Architects & Spatial Designers", name: "Kaelen Voss, AIA", tag: "Spatial Design", desc: "Travertine stone aesthetics, architectural built monograph plates, mass-timber materiality, and RIBA honors." },
  { id: "07-lawyer", num: "07", icon: "⚖️", title: "Lawyers & Legal Consultants", name: "Victoria Sterling, Esq.", tag: "Corporate Law", desc: "Executive navy & gold styling, representative M&A matters, state bar admissions, and privileged consultation intake." },
  { id: "08-fitness-trainer", num: "08", icon: "⚡", title: "Fitness Coaches & Trainers", name: "Marcus Drake, CSCS", tag: "Health & Fitness", desc: "Kinetic dark-orange styling, interactive calorie & macro estimator, verified client transformations, and coaching tiers." },
  { id: "09-content-creator", num: "09", icon: "🎬", title: "Content Creators & Filmmakers", name: "Aria Thorne", tag: "Media & Film", desc: "Sunset gradients, verified audience media kit (1.8M reach), multi-platform stats, and episodic film reels." },
  { id: "10-chef", num: "10", icon: "🍽️", title: "Chefs & Culinary Artists", name: "Antoine Laurent", tag: "Gastronomy", desc: "Truffle dark aesthetic, seasonal degustation tasting menu with dietary badges, terroir philosophy, and press reviews." },
  { id: "11-musician", num: "11", icon: "🎵", title: "Musicians, DJs & Producers", name: "Liam O'Connor (NovaPulse)", tag: "Music & Audio", desc: "Melodic house aesthetic, festival setlists, release discography, analog synthesis setups, and commercial sync." },
  { id: "12-copywriter", num: "12", icon: "✍️", title: "Copywriters & Authors", name: "Clara Hawthorne", tag: "Direct Response", desc: "High-converting sales letters, B2B email sequence case studies, brand manifestos, and revenue proof ($35M+)." },
  { id: "13-fashion-model", num: "13", icon: "👠", title: "Fashion Models & Stylists", name: "Seraphina Vance", tag: "High Fashion", desc: "Runway lookbooks, magazine cover spreads (Paris, Milan, NY), agency stats, measurements, and editorial rates." },
  { id: "14-cybersecurity", num: "14", icon: "🛡️", title: "Cybersecurity & Ethical Hackers", name: "Dante 'Cipher' Ward", tag: "Infosec", desc: "Zero-day vulnerability disclosures, CVE tracking, adversary emulation red team reports, and enterprise defense audits." },
  { id: "15-financial-advisor", num: "15", icon: "📈", title: "Financial Advisors & Planners", name: "Arthur Pendelton, CFP®", tag: "Private Wealth", desc: "Fee-only fiduciary wealth management, AUM metrics ($420M+), business exit strategy, and dynasty estate architecture." }
];

// 10 Design Archetypes Metadata
const DESIGN_VARIANTS_INFO = {
  "template-01": { label: "Obsidian Dark", badge: "Dark Minimalist", icon: "✦" },
  "template-02": { label: "Nordic Light", badge: "Clean Editorial", icon: "☼" },
  "template-03": { label: "Bento Grid", badge: "Asymmetric Bento", icon: "⊞" },
  "template-04": { label: "Glassmorphic Aura", badge: "Translucent Glow", icon: "◈" },
  "template-05": { label: "Neo-Brutalist", badge: "High-Contrast Bold", icon: "█" },
  "template-06": { label: "Split-Screen", badge: "Studio Dual Column", icon: "◫" },
  "template-07": { label: "Sidebar App", badge: "Dashboard Layout", icon: "☷" },
  "template-08": { label: "Magazine Serif", badge: "Publication Centered", icon: "✦" },
  "template-09": { label: "Kinetic Pulse", badge: "Vibrant Gradient", icon: "⚡" },
  "template-10": { label: "Terminal Monospace", badge: "Developer CLI", icon: ">_" }
};

let activeProfessionFilter = "all";
let activeArchetypeFilter = "all";
let searchQuery = "";
let currentViewMode = "grid"; // "grid" | "matrix"

// Group all templates by profession
function getGroupedTemplates() {
  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const groups = {};
  PROFESSIONS_META.forEach(p => {
    groups[p.id] = {
      meta: p,
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

// Render the 15x10 Architecture Matrix View
function renderMatrixView(grouped, container) {
  let renderedCount = 0;
  const filteredProfessions = PROFESSIONS_META.filter(p => {
    if (activeProfessionFilter !== 'all' && activeProfessionFilter !== p.id) return false;
    return true;
  });

  const variantsList = Object.entries(DESIGN_VARIANTS_INFO).filter(([vId]) => {
    if (activeArchetypeFilter !== 'all' && activeArchetypeFilter !== vId) return false;
    return true;
  });

  let matrixHtml = `
    <div class="matrix-view-container">
      <div class="matrix-header-info">
        <h3>15 × 10 Cross-Discipline Architectural Matrix</h3>
        <p>Direct architectural index: Compare all 15 professions against the 10 distinct design archetypes.</p>
      </div>
      <div class="matrix-table-wrapper">
        <table class="matrix-table">
          <thead>
            <tr>
              <th class="matrix-th-prof">Profession</th>
              ${variantsList.map(([vId, info]) => `
                <th class="matrix-th-variant">
                  <div class="matrix-col-header">
                    <span class="m-col-num">${vId.toUpperCase()}</span>
                    <span class="m-col-label">${info.label}</span>
                    <span class="m-col-badge">${info.badge}</span>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
  `;

  filteredProfessions.forEach(p => {
    const group = grouped[p.id];
    if (!group) return;

    let rowMatches = false;
    const rowCells = variantsList.map(([vId, info]) => {
      const template = group.templates.find(t => t.variantId === vId);
      if (!template) {
        return `<td class="matrix-cell empty">—</td>`;
      }

      // Check search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches = (
          template.variantName.toLowerCase().includes(q) ||
          template.variantType.toLowerCase().includes(q) ||
          info.label.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        );
        if (!matches) {
          return `<td class="matrix-cell dimmed">—</td>`;
        }
      }

      rowMatches = true;
      renderedCount++;
      return `
        <td class="matrix-cell">
          <div class="matrix-cell-card">
            <span class="cell-status-dot"></span>
            <a href="${template.path}" target="_blank" rel="noopener" class="matrix-link-pill" title="Preview ${template.variantName}">
              Demo &nearr;
            </a>
            <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/${template.folder}" target="_blank" rel="noopener" class="matrix-gh-link" title="Source">
              📁
            </a>
          </div>
        </td>
      `;
    });

    if (searchQuery.trim() !== '' && !rowMatches) return;

    matrixHtml += `
      <tr>
        <td class="matrix-prof-cell">
          <div class="m-prof-info">
            <span class="m-prof-icon">${p.icon}</span>
            <div class="m-prof-text">
              <strong>${p.num}. ${p.title.split('&')[0].trim()}</strong>
              <span class="m-persona">${p.name} &bull; ${p.tag}</span>
            </div>
          </div>
        </td>
        ${rowCells.join('')}
      </tr>
    `;
  });

  matrixHtml += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (renderedCount === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No matching matrix entries found</h3>
        <p>Try clearing filters or search terms to inspect the 150 combinations.</p>
        <button class="btn btn-primary" onclick="resetSearch()">Clear Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = matrixHtml;
  }

  updateCounter(renderedCount);
}

// Render the Showcase Grid View
function renderGridView(grouped, container) {
  let html = '';
  let renderedCount = 0;

  PROFESSIONS_META.forEach(p => {
    const group = grouped[p.id];
    if (!group) return;

    // Filter by active profession
    if (activeProfessionFilter !== 'all' && activeProfessionFilter !== p.id) {
      return;
    }

    // Filter templates within this group by archetype & search query
    let filteredTemplates = group.templates;
    
    // Archetype filter
    if (activeArchetypeFilter !== 'all') {
      filteredTemplates = filteredTemplates.filter(t => t.variantId === activeArchetypeFilter);
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filteredTemplates = filteredTemplates.filter(t => {
        const vInfo = DESIGN_VARIANTS_INFO[t.variantId] || {};
        return (
          t.variantName.toLowerCase().includes(q) ||
          t.variantType.toLowerCase().includes(q) ||
          (vInfo.label && vInfo.label.toLowerCase().includes(q)) ||
          (vInfo.badge && vInfo.badge.toLowerCase().includes(q)) ||
          p.title.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        );
      });
    }

    if (filteredTemplates.length === 0) return;

    renderedCount += filteredTemplates.length;

    html += `
      <section class="profession-section" id="prof-${p.id}">
        <!-- Profession Header Banner -->
        <div class="prof-header-card">
          <div class="prof-header-left">
            <div class="prof-num-badge">
              <span class="prof-icon">${p.icon}</span>
              <span class="prof-num">${p.num} / 15</span>
            </div>
            <div class="prof-titles">
              <div class="prof-tag-row">
                <span class="prof-category-tag">${p.tag}</span>
                <span class="prof-count-tag">${filteredTemplates.length} Design Variants</span>
              </div>
              <h2 class="prof-main-title">${p.title}</h2>
              <p class="prof-lead-persona">Featured Identity: <strong>${p.name}</strong> &bull; ${p.desc}</p>
            </div>
          </div>
          <div class="prof-header-right">
            <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/professions/${p.id}/" target="_blank" rel="noopener" class="btn btn-folder-hub" title="Browse on GitHub">
              Browse Folder 📁
            </a>
          </div>
        </div>

        <!-- Template-Wise Cards Grid for this Profession -->
        <div class="template-variants-grid">
          ${filteredTemplates.map(t => {
            const vInfo = DESIGN_VARIANTS_INFO[t.variantId] || { label: t.variantName, badge: t.variantType, icon: "✦" };
            return `
              <div class="template-variant-card archetype-${t.variantId}" id="card-${p.id}-${t.variantId}">
                <div class="variant-media">
                  <img src="${t.image}" alt="${t.variantName}" loading="lazy">
                  <div class="variant-media-overlay">
                    <span class="variant-num-pill">${t.variantId.toUpperCase()}</span>
                    <span class="variant-style-pill">${vInfo.icon} ${vInfo.badge}</span>
                  </div>
                </div>
                <div class="variant-body">
                  <div class="variant-meta">
                    <span class="variant-label-kicker">${p.title.split('&')[0]}</span>
                    <h3 class="variant-title">${vInfo.label}</h3>
                    <p class="variant-archetype">${t.variantName}</p>
                  </div>
                  <div class="variant-actions">
                    <a href="${t.path}" target="_blank" rel="noopener" class="btn-demo-pill">
                      <span>Live Preview</span> &nearr;
                    </a>
                    <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/${t.folder}" target="_blank" rel="noopener" class="btn-source-pill" title="View files on GitHub">
                      📁
                    </a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  });

  if (renderedCount === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No matching templates found</h3>
        <p>Try clearing your search or picking "All Archetypes" / "All Professions".</p>
        <button class="btn btn-primary" onclick="resetSearch()">Clear Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }

  updateCounter(renderedCount);
}

function updateCounter(renderedCount) {
  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const totalCount = catalog.length || 150;
  const counterEl = document.getElementById('catalog-counter-text');
  if (counterEl) {
    counterEl.textContent = `Displaying ${renderedCount} of ${totalCount} Templates Across 15 Professions`;
  }
}

// Master Render Router
function renderSections() {
  const container = document.getElementById('professions-container');
  const grouped = getGroupedTemplates();

  if (currentViewMode === 'matrix') {
    renderMatrixView(grouped, container);
  } else {
    renderGridView(grouped, container);
  }
}

// Render the Sticky Nav Tabs for 15 Professions
function renderProfessionRail() {
  const rail = document.getElementById('professions-nav-rail');
  if (!rail) return;

  rail.innerHTML = `
    <button class="rail-btn ${activeProfessionFilter === 'all' ? 'active' : ''}" data-prof="all">
      <span class="rail-icon">✦</span>
      <span class="rail-text">All Careers (15)</span>
    </button>
    ${PROFESSIONS_META.map(p => `
      <button class="rail-btn ${activeProfessionFilter === p.id ? 'active' : ''}" data-prof="${p.id}">
        <span class="rail-icon">${p.icon}</span>
        <span class="rail-text">${p.num}. ${p.title.split('&')[0].trim()}</span>
      </button>
    `).join('')}
  `;

  rail.querySelectorAll('.rail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rail.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProfessionFilter = btn.dataset.prof;
      renderSections();
      
      if (activeProfessionFilter !== 'all' && currentViewMode === 'grid') {
        const targetSection = document.getElementById(`prof-${activeProfessionFilter}`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// Render the Archetypes Rail (Dual-Axis Axis 1)
function renderArchetypeRail() {
  const rail = document.getElementById('archetypes-nav-rail');
  if (!rail) return;

  rail.innerHTML = `
    <button class="rail-btn ${activeArchetypeFilter === 'all' ? 'active' : ''}" data-archetype="all">
      <span class="rail-icon">✦</span>
      <span class="rail-text">All 10 Archetypes</span>
    </button>
    ${Object.entries(DESIGN_VARIANTS_INFO).map(([vId, info]) => `
      <button class="rail-btn ${activeArchetypeFilter === vId ? 'active' : ''}" data-archetype="${vId}">
        <span class="rail-icon">${info.icon}</span>
        <span class="rail-text">${info.label}</span>
      </button>
    `).join('')}
  `;

  rail.querySelectorAll('.rail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rail.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeArchetypeFilter = btn.dataset.archetype;
      renderSections();
    });
  });
}

// Initialize View Mode Toggle (Grid vs Matrix)
function initViewToggle() {
  const buttons = document.querySelectorAll('.view-toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.dataset.view;
      renderSections();
    });
  });
}

function initSearch() {
  const input = document.getElementById('global-search-input');
  if (!input) return;
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderSections();
  });
}

function resetSearch() {
  searchQuery = '';
  activeProfessionFilter = 'all';
  activeArchetypeFilter = 'all';
  const input = document.getElementById('global-search-input');
  if (input) input.value = '';
  renderProfessionRail();
  renderArchetypeRail();
  renderSections();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfessionRail();
  renderArchetypeRail();
  initViewToggle();
  initSearch();
  renderSections();
});
