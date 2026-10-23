// World-Class Monochrome Portal Curation Engine
// 15 Professions x 10 Structural Archetypes = 150 Dynamic Templates

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

const DESIGN_VARIANTS_INFO = {
  "template-01": { label: "Obsidian Dark", badge: "Cinematic Dark", icon: "✦" },
  "template-02": { label: "Nordic Light", badge: "Clean Editorial", icon: "☼" },
  "template-03": { label: "Bento Grid", badge: "Asymmetric Bento", icon: "⊞" },
  "template-04": { label: "Glassmorphic Aura", badge: "Translucent Glow", icon: "◈" },
  "template-05": { label: "Neo-Brutalist", badge: "High-Contrast Marquee", icon: "█" },
  "template-06": { label: "Split-Screen", badge: "Dual-Column 50/50", icon: "◫" },
  "template-07": { label: "Sidebar App", badge: "Dashboard Layout", icon: "☷" },
  "template-08": { label: "Magazine Serif", badge: "Publication Masthead", icon: "✦" },
  "template-09": { label: "Kinetic Pulse", badge: "Draggable Carousel", icon: "⚡" },
  "template-10": { label: "Terminal Monospace", badge: "Interactive Bash CLI", icon: ">_" }
};

// Top 6 Curated Spotlight Websites
const SPOTLIGHT_PICKS = [
  { profId: "04-developer", variantId: "template-10", title: "Developer Terminal CLI", lead: "Real bash terminal shell with command execution and green phosphor cursor.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" },
  { profId: "02-doctor", variantId: "template-03", title: "Doctor Bento Grid", lead: "Clinical cardiology dashboard with live local clock and modular widgets.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" },
  { profId: "01-photographer", variantId: "template-01", title: "Photographer Obsidian Dark", lead: "Cinematic full-bleed galleries with EXIF camera metadata and lightbox modal.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" },
  { profId: "03-ui-ux-designer", variantId: "template-06", title: "UI/UX Split-Screen Studio", lead: "True 50/50 dual-pane viewport with dynamic scroll-spy indicator.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80" },
  { profId: "05-gamer", variantId: "template-05", title: "Gamer Neo-Brutalist", lead: "Raw brutalist borders, infinite scrolling marquee tags, and sticker badges.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" },
  { profId: "06-architect", variantId: "template-02", title: "Architect Nordic Editorial", lead: "Clean architectural 2-column monograph with roman numerals and drop caps.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" }
];

let activeProfessionFilter = "all";
let activeArchetypeFilter = "all";
let searchQuery = "";
let currentViewMode = "hubs"; // "hubs" | "catalog" | "matrix"

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

// 1. Render Spotlight Deck (Hero Carousel / Grid)
function renderSpotlightDeck() {
  const container = document.getElementById('spotlight-container');
  if (!container) return;

  container.innerHTML = `
    <div class="spotlight-section-header">
      <div class="spotlight-title-wrap">
        <span class="spotlight-kicker">✦ CURATOR'S CHOICE</span>
        <h2>Featured Architecture Spotlights</h2>
      </div>
      <p class="spotlight-sub">6 live production archetypes showcasing true structural divergence.</p>
    </div>
    <div class="spotlight-grid">
      ${SPOTLIGHT_PICKS.map(pick => `
        <article class="spotlight-card">
          <div class="spotlight-media">
            <img src="${pick.img}" alt="${pick.title}" loading="lazy">
            <span class="spotlight-badge">${pick.variantId.toUpperCase()}</span>
          </div>
          <div class="spotlight-body">
            <h3>${pick.title}</h3>
            <p>${pick.lead}</p>
            <div class="spotlight-actions">
              <a href="professions/${pick.profId}/${pick.variantId}/index.html" target="_blank" rel="noopener" class="btn-spotlight-demo">
                Live Preview &nearr;
              </a>
              <button class="btn-spotlight-hub" onclick="openProfessionDrawer('${pick.profId}')">
                Explore All 10 &rarr;
              </button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

// 2. Render 15 Profession Hub Cards (The Clean Core Canvas)
function renderProfessionHubs(grouped, container) {
  let filteredProfessions = PROFESSIONS_META;

  if (activeProfessionFilter !== 'all') {
    filteredProfessions = filteredProfessions.filter(p => p.id === activeProfessionFilter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filteredProfessions = filteredProfessions.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  if (filteredProfessions.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No matching careers found</h3>
        <p>Try searching for a different keyword like "Developer", "Doctor", or "Chef".</p>
        <button class="btn btn-primary" onclick="resetSearch()">Reset Filters</button>
      </div>
    `;
    updateCounter(0);
    return;
  }

  let html = `
    <div class="hubs-intro-header">
      <div class="hubs-header-left">
        <span class="hub-kicker">15 PRODUCTION DISCIPLINES</span>
        <h2>Browse by Profession Hub</h2>
      </div>
      <p class="hubs-sub">Select any career discipline to open its dedicated collection of 10 distinct design archetypes.</p>
    </div>
    <div class="profession-hubs-grid">
      ${filteredProfessions.map(p => {
        const group = grouped[p.id];
        const defaultTemplate = (group && group.templates[0]) ? group.templates[0] : null;
        const heroThumb = defaultTemplate ? defaultTemplate.image : '';

        return `
          <div class="prof-hub-card" id="hub-${p.id}">
            <div class="hub-card-header">
              <div class="hub-icon-box">
                <span class="hub-icon">${p.icon}</span>
                <span class="hub-num">${p.num}</span>
              </div>
              <div class="hub-header-meta">
                <span class="hub-category-tag">${p.tag}</span>
                <h3 class="hub-title">${p.title}</h3>
                <span class="hub-persona">${p.name}</span>
              </div>
            </div>

            <div class="hub-preview-frame">
              <img id="hub-img-${p.id}" src="${heroThumb}" alt="${p.title}" loading="lazy">
              <div class="hub-preview-overlay">
                <span id="hub-badge-${p.id}" class="hub-style-badge">10 ARCHETYPES INCLUDED</span>
              </div>
            </div>

            <!-- Interactive Archetype Mini Dock -->
            <div class="hub-style-dock" title="Hover to preview archetype">
              ${Object.entries(DESIGN_VARIANTS_INFO).map(([vId, info], idx) => `
                <button 
                  class="dock-dot ${idx === 0 ? 'active' : ''}" 
                  data-prof="${p.id}" 
                  data-variant="${vId}"
                  title="${info.label} (${info.badge})"
                  onmouseenter="previewHubArchetype('${p.id}', '${vId}')"
                  onclick="previewHubArchetype('${p.id}', '${vId}')"
                >
                  ${idx + 1}
                </button>
              `).join('')}
            </div>

            <p class="hub-desc">${p.desc}</p>

            <div class="hub-card-actions">
              <button class="btn-hub-explore" onclick="openProfessionDrawer('${p.id}')">
                <span>Explore 10 Designs</span> &rarr;
              </button>
              <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/professions/${p.id}/" target="_blank" rel="noopener" class="btn-hub-gh" title="GitHub Directory">
                📁
              </a>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.innerHTML = html;
  updateCounter(filteredProfessions.length * 10);
}

// Preview archetype image on hub card hover
window.previewHubArchetype = function(profId, variantId) {
  const card = document.getElementById(`hub-${profId}`);
  if (!card) return;

  const info = DESIGN_VARIANTS_INFO[variantId];
  const badgeEl = document.getElementById(`hub-badge-${profId}`);
  if (badgeEl && info) {
    badgeEl.textContent = `${info.icon} ${info.label.toUpperCase()}`;
  }

  card.querySelectorAll('.dock-dot').forEach(d => {
    if (d.dataset.variant === variantId) d.classList.add('active');
    else d.classList.remove('active');
  });
};

// 3. Render Direct Filterable Catalog (When user selects an archetype or searches)
function renderDirectCatalog(grouped, container) {
  let renderedCount = 0;
  let html = `
    <div class="catalog-view-header">
      <div class="hubs-header-left">
        <span class="hub-kicker">SEARCH & ARCHETYPE FILTER</span>
        <h2>Catalog Explorer</h2>
      </div>
      <button class="btn btn-github" onclick="switchViewMode('hubs')">&larr; Return to Profession Hubs</button>
    </div>
    <div class="template-variants-grid">
  `;

  PROFESSIONS_META.forEach(p => {
    const group = grouped[p.id];
    if (!group) return;

    if (activeProfessionFilter !== 'all' && activeProfessionFilter !== p.id) return;

    let templates = group.templates;
    if (activeArchetypeFilter !== 'all') {
      templates = templates.filter(t => t.variantId === activeArchetypeFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      templates = templates.filter(t => {
        const vInfo = DESIGN_VARIANTS_INFO[t.variantId] || {};
        return (
          t.variantName.toLowerCase().includes(q) ||
          t.variantType.toLowerCase().includes(q) ||
          (vInfo.label && vInfo.label.toLowerCase().includes(q)) ||
          p.title.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q)
        );
      });
    }

    templates.forEach(t => {
      renderedCount++;
      const vInfo = DESIGN_VARIANTS_INFO[t.variantId] || { label: t.variantName, badge: t.variantType, icon: "✦" };
      html += `
        <div class="template-variant-card archetype-${t.variantId}">
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
              <p class="variant-archetype">${p.name} &bull; ${t.variantName}</p>
            </div>
            <div class="variant-actions">
              <a href="${t.path}" target="_blank" rel="noopener" class="btn-demo-pill">
                Live Preview &nearr;
              </a>
              <button class="btn-source-pill" onclick="openProfessionDrawer('${p.id}')" title="View all 10 for ${p.title}">
                10 &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });

  html += `</div>`;

  if (renderedCount === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <h3>No matching templates found</h3>
        <p>Try searching for a different keyword or resetting your archetype filters.</p>
        <button class="btn btn-primary" onclick="resetSearch()">Reset Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }

  updateCounter(renderedCount);
}

// 4. Render 15x10 Architecture Matrix View
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
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
          <div>
            <h3>15 × 10 Cross-Discipline Architectural Matrix</h3>
            <p>Direct architectural index: Compare all 15 professions against the 10 distinct design archetypes.</p>
          </div>
          <button class="btn btn-github" onclick="switchViewMode('hubs')">&larr; Return to Hubs</button>
        </div>
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

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches = (
          template.variantName.toLowerCase().includes(q) ||
          template.variantType.toLowerCase().includes(q) ||
          info.label.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q)
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

  container.innerHTML = matrixHtml;
  updateCounter(renderedCount);
}

// Master Render Router
function renderSections() {
  const container = document.getElementById('professions-container');
  const grouped = getGroupedTemplates();

  if (currentViewMode === 'matrix') {
    renderMatrixView(grouped, container);
  } else if (currentViewMode === 'catalog' || activeArchetypeFilter !== 'all' || searchQuery.trim() !== '') {
    renderDirectCatalog(grouped, container);
  } else {
    renderProfessionHubs(grouped, container);
  }
}

function updateCounter(renderedCount) {
  const catalog = (typeof TEMPLATES_CATALOG !== 'undefined') ? TEMPLATES_CATALOG : (window.TEMPLATES_CATALOG || []);
  const totalCount = catalog.length || 150;
  const counterEl = document.getElementById('catalog-counter-text');
  if (counterEl) {
    counterEl.textContent = `Displaying ${renderedCount} of ${totalCount} Templates Across 15 Disciplines`;
  }
}

// 5. Slide-Over Modal Drawer (For Inspecting All 10 Designs of a Profession)
window.openProfessionDrawer = function(profId) {
  const p = PROFESSIONS_META.find(item => item.id === profId);
  const grouped = getGroupedTemplates();
  const group = grouped[profId];
  if (!p || !group) return;

  const drawer = document.getElementById('profession-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const header = document.getElementById('drawer-header');
  const body = document.getElementById('drawer-body');

  header.innerHTML = `
    <div class="drawer-header-left">
      <span class="drawer-icon">${p.icon}</span>
      <div>
        <span class="drawer-num">${p.num} / 15 &bull; ${p.tag.toUpperCase()}</span>
        <h2>${p.title}</h2>
        <p>Featured Practitioner: <strong>${p.name}</strong> &bull; 10 Production Archetypes</p>
      </div>
    </div>
    <div class="drawer-header-right">
      <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/professions/${p.id}/" target="_blank" rel="noopener" class="btn btn-github">
        GitHub Folder 📁
      </a>
      <button class="drawer-close-btn" onclick="closeProfessionDrawer()">&times;</button>
    </div>
  `;

  body.innerHTML = `
    <div class="drawer-cards-grid">
      ${group.templates.map(t => {
        const vInfo = DESIGN_VARIANTS_INFO[t.variantId] || { label: t.variantName, badge: t.variantType, icon: "✦" };
        return `
          <div class="drawer-item-card archetype-${t.variantId}">
            <div class="drawer-item-media">
              <img src="${t.image}" alt="${t.variantName}" loading="lazy">
              <span class="drawer-variant-tag">${t.variantId.toUpperCase()}</span>
              <span class="drawer-style-tag">${vInfo.icon} ${vInfo.badge}</span>
            </div>
            <div class="drawer-item-body">
              <span class="drawer-archetype-name">${vInfo.label}</span>
              <h4>${t.variantName}</h4>
              <div class="drawer-actions">
                <a href="${t.path}" target="_blank" rel="noopener" class="btn-drawer-demo">
                  Live Preview &nearr;
                </a>
                <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/${t.folder}" target="_blank" rel="noopener" class="btn-drawer-code" title="View Source on GitHub">
                  📁
                </a>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  drawer.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProfessionDrawer = function() {
  const drawer = document.getElementById('profession-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// 6. Navigation Rails & Mode Controls
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
    });
  });
}

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

window.switchViewMode = function(mode) {
  currentViewMode = mode;
  document.querySelectorAll('.view-toggle-btn').forEach(b => {
    if (b.dataset.view === mode) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderSections();
};

function initViewToggle() {
  const buttons = document.querySelectorAll('.view-toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => switchViewMode(btn.dataset.view));
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
  currentViewMode = 'hubs';
  const input = document.getElementById('global-search-input');
  if (input) input.value = '';
  renderProfessionRail();
  renderArchetypeRail();
  switchViewMode('hubs');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProfessionDrawer();
});

document.addEventListener('DOMContentLoaded', () => {
  renderSpotlightDeck();
  renderProfessionRail();
  renderArchetypeRail();
  initViewToggle();
  initSearch();
  renderSections();
});
