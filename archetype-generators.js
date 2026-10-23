// Architectural Generators for 10 Structurally Distinct Portfolio Archetypes
// Each archetype features unique HTML structure, CSS layouts, and interactive JS components.

function getArchetypeHTML(prof, variant) {
  const commonHead = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prof.name} — ${prof.title} | ${variant.name}</title>
  <meta name="description" content="${prof.bio}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${variant.fonts}&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "${prof.name}",
    "jobTitle": "${prof.title}",
    "url": "https://aibuildinfra.com/services/web-development",
    "provider": {
      "@type": "Organization",
      "name": "AI BuildInfra",
      "url": "https://aibuildinfra.com/services/web-development"
    }
  }
  </script>`;

  const trustBadge = `
  <div class="footer-backlink" id="infra-credit-wrap">
    <a href="https://aibuildinfra.com/services/web-development" target="_blank" rel="noopener" class="infra-trust-badge" id="infra-trust-link">
      <span class="badge-icon">⚡</span>
      <span class="badge-text">Web Architecture by <strong>AI BuildInfra</strong></span>
      <span class="badge-score">100</span>
    </a>
  </div>`;

  switch(variant.variantId) {
    // -------------------------------------------------------------
    // ARCHETYPE 01: Obsidian Dark (Cinematic & EXIF Lightbox)
    // -------------------------------------------------------------
    case "template-01":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-obsidian">
  <header class="obsidian-nav">
    <div class="obsidian-dock">
      <span class="dock-brand" id="brand-name">${prof.name}</span>
      <nav class="dock-links">
        <a href="#hero">Overview</a>
        <a href="#showcase">Works</a>
        <a href="#services">Services</a>
        <a href="#contact" class="dock-cta">Inquire</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="obsidian-hero" id="hero">
      <div class="hero-backdrop" style="background-image: linear-gradient(180deg, rgba(7,7,9,0.3) 0%, #070709 100%), url('${prof.heroImage}');"></div>
      <div class="obsidian-hero-content">
        <span class="cinematic-kicker" id="hero-tagline">${prof.title}</span>
        <h1 class="cinematic-title" id="hero-headline">${prof.headline}</h1>
        <p class="cinematic-bio" id="hero-bio">${prof.bio}</p>
        <div class="cinematic-stats" id="metrics-grid"></div>
      </div>
    </section>

    <section class="obsidian-showcase" id="showcase">
      <div class="container">
        <div class="obsidian-section-head">
          <span class="obsidian-num">01 / SELECTED WORKS</span>
          <h2 id="items-title">${prof.itemsTitle}</h2>
          <p class="obsidian-sub">Click any piece to inspect EXIF metadata & high-resolution plates.</p>
        </div>
        <div class="obsidian-gallery" id="items-grid"></div>
      </div>
    </section>

    <section class="obsidian-services" id="services">
      <div class="container">
        <div class="obsidian-section-head">
          <span class="obsidian-num">02 / ENGAGEMENTS</span>
          <h2>Commission Packages</h2>
        </div>
        <div class="obsidian-packages-grid" id="packages-grid"></div>
      </div>
    </section>

    <section class="obsidian-reviews">
      <div class="container">
        <div class="obsidian-reviews-grid" id="reviews-grid"></div>
      </div>
    </section>

    <section class="obsidian-contact" id="contact">
      <div class="container">
        <div class="obsidian-contact-box">
          <span class="obsidian-num">03 / INITIATE</span>
          <h2>Direct Consultation</h2>
          <form class="obsidian-form" onsubmit="event.preventDefault(); alert('Inquiry transmitted.'); this.reset();">
            <div class="form-row">
              <input type="text" placeholder="Your Name" required>
              <input type="email" placeholder="Email Address" required>
            </div>
            <textarea rows="4" placeholder="Briefly describe project scope, requirements & timeline..." required></textarea>
            <button type="submit" class="btn-obsidian-submit">Transmit Request &rarr;</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="obsidian-footer">
    <div class="container footer-flex">
      <p>&copy; <span id="year"></span> ${prof.name}. ${prof.title}.</p>
      ${trustBadge}
    </div>
  </footer>

  <!-- Lightbox Modal -->
  <div id="lightbox-modal" class="lightbox-modal" onclick="closeLightbox(event)">
    <div class="lightbox-dialog" onclick="event.stopPropagation()">
      <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
      <img id="lightbox-img" src="" alt="Enlarged view">
      <div class="lightbox-meta">
        <h3 id="lightbox-title"></h3>
        <p id="lightbox-desc"></p>
        <span id="lightbox-exif" class="exif-tag"></span>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 02: Nordic Light (2-Column Editorial Monograph)
    // -------------------------------------------------------------
    case "template-02":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-nordic">
  <div class="nordic-masthead">
    <div class="container masthead-inner">
      <span class="coords">${prof.location.toUpperCase()} &bull; MONOGRAPH INDEX 2026</span>
      <span class="issue">VOL. XII &bull; EDITION 01</span>
    </div>
  </div>

  <header class="nordic-header">
    <div class="container header-flex">
      <h1 class="nordic-logo" id="brand-name">${prof.name}</h1>
      <span class="nordic-role" id="hero-tagline">${prof.title}</span>
    </div>
  </header>

  <main class="container monograph-layout">
    <!-- Left Column: Navigation & Indices -->
    <aside class="monograph-sidebar">
      <div class="sidebar-sticky">
        <div class="portrait-card">
          <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}">
          <span class="portrait-caption">${prof.name} &bull; Practice Archive</span>
        </div>
        <nav class="monograph-nav">
          <a href="#about"><span class="roman">I.</span> The Ethos</a>
          <a href="#metrics"><span class="roman">II.</span> Verified Ledger</a>
          <a href="#works"><span class="roman">III.</span> Case Studies</a>
          <a href="#rates"><span class="roman">IV.</span> Engagements</a>
          <a href="#dialogue"><span class="roman">V.</span> Dialogue</a>
        </nav>
        <div class="sidebar-contact-info">
          <p><strong>Direct Desk</strong><br>${prof.email}</p>
          <p><strong>Office Hours</strong><br>Mon &ndash; Fri / 09:00 &ndash; 18:00</p>
        </div>
      </div>
    </aside>

    <!-- Right Column: Flowing Monograph Content -->
    <section class="monograph-stream">
      <article class="stream-block" id="about">
        <span class="section-roman">I. THE ETHOS</span>
        <h2 class="editorial-headline" id="hero-headline">${prof.headline}</h2>
        <div class="editorial-copy">
          <p class="lead-paragraph" id="hero-bio">${prof.bio}</p>
        </div>
      </article>

      <article class="stream-block" id="metrics">
        <span class="section-roman">II. VERIFIED LEDGER</span>
        <div class="nordic-metrics-grid" id="metrics-grid"></div>
      </article>

      <article class="stream-block" id="works">
        <span class="section-roman">III. SELECTED ARCHIVE</span>
        <h3 id="items-title">${prof.itemsTitle}</h3>
        <div class="nordic-items-stream" id="items-grid"></div>
      </article>

      <article class="stream-block" id="rates">
        <span class="section-roman">IV. ENGAGEMENT TIERS</span>
        <div class="nordic-packages-list" id="packages-grid"></div>
      </article>

      <article class="stream-block" id="reviews">
        <span class="section-roman">V. ENDORSEMENTS</span>
        <div class="nordic-reviews-flow" id="reviews-grid"></div>
      </article>

      <article class="stream-block" id="dialogue">
        <span class="section-roman">VI. DIALOGUE</span>
        <div class="nordic-contact-card">
          <h3>Initiate Inquiry</h3>
          <p>Confidential submissions reviewed within one business day.</p>
          <form class="nordic-form" onsubmit="event.preventDefault(); alert('Inquiry recorded.'); this.reset();">
            <input type="text" placeholder="Full Name" required>
            <input type="email" placeholder="Professional Email" required>
            <textarea rows="4" placeholder="Scope & Objectives..." required></textarea>
            <button type="submit" class="btn-nordic">Submit Protocol &rarr;</button>
          </form>
        </div>
      </article>
    </section>
  </main>

  <footer class="nordic-footer">
    <div class="container footer-flex">
      <p>&copy; <span id="year"></span> ${prof.name}. Monograph layout.</p>
      ${trustBadge}
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 03: Bento Grid (Asymmetrical Multi-Cell Gadget Grid)
    // -------------------------------------------------------------
    case "template-03":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-bento">
  <div class="bento-screen-wrap">
    <header class="bento-top-bar">
      <div class="container top-bar-flex">
        <div class="bento-brand">
          <span class="bento-logo-icon">⊞</span>
          <span class="bento-name" id="brand-name">${prof.name}</span>
          <span class="bento-badge" id="hero-tagline">${prof.title}</span>
        </div>
        <div class="bento-clock-pill">
          <span class="clock-dot"></span>
          <span id="live-clock">--:--:-- UTC</span>
        </div>
      </div>
    </header>

    <main class="container bento-main-stage">
      <div class="bento-grid-dashboard">
        <!-- Cell 1: Main Persona Profile (2x2) -->
        <div class="bento-card cell-hero-profile">
          <div class="hero-top">
            <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}" class="bento-avatar">
            <div class="hero-status-pill">
              <span class="status-pulse"></span>
              <span>Available for Consultations</span>
            </div>
          </div>
          <h1 class="bento-headline" id="hero-headline">${prof.headline}</h1>
          <p class="bento-bio" id="hero-bio">${prof.bio}</p>
          <div class="bento-profile-actions">
            <a href="#bento-contact" class="bento-btn-primary">Initiate Project</a>
            <a href="#bento-work" class="bento-btn-secondary">Browse Work</a>
          </div>
        </div>

        <!-- Cell 2: Live Metrics Stats (2x1) -->
        <div class="bento-card cell-metrics" id="metrics-grid"></div>

        <!-- Cell 3: Flagship Showcase (2x2) -->
        <div class="bento-card cell-showcase" id="bento-work">
          <div class="bento-card-header">
            <span class="bento-chip">FLAGSHIP MONOGRAPHS</span>
            <h3 id="items-title">${prof.itemsTitle}</h3>
          </div>
          <div class="bento-items-grid" id="items-grid"></div>
        </div>

        <!-- Cell 4: Cooperation Tiers (2x1) -->
        <div class="bento-card cell-services">
          <div class="bento-card-header">
            <span class="bento-chip">SERVICE TIERS</span>
            <h3>Engagement Packages</h3>
          </div>
          <div class="bento-packages-row" id="packages-grid"></div>
        </div>

        <!-- Cell 5: Reviews Widget (1x1) -->
        <div class="bento-card cell-testimonials">
          <div class="bento-card-header">
            <span class="bento-chip">CLIENT VOICE</span>
            <h3>Endorsements</h3>
          </div>
          <div class="bento-reviews-feed" id="reviews-grid"></div>
        </div>

        <!-- Cell 6: Direct Connect Card (1x1) -->
        <div class="bento-card cell-contact" id="bento-contact">
          <div class="bento-card-header">
            <span class="bento-chip">TRANSMIT</span>
            <h3>Quick Inquiry</h3>
          </div>
          <form class="bento-mini-form" onsubmit="event.preventDefault(); alert('Transmission verified!'); this.reset();">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea rows="2" placeholder="Brief scope..." required></textarea>
            <button type="submit" class="bento-btn-send">Send &nearr;</button>
          </form>
        </div>
      </div>
    </main>

    <footer class="bento-footer">
      <div class="container bento-footer-row">
        <p>&copy; <span id="year"></span> ${prof.name}. Engineered via Modular Bento Grid.</p>
        ${trustBadge}
      </div>
    </footer>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 04: Glassmorphic Aura (Multi-Layer Glass & Cursor Tracker)
    // -------------------------------------------------------------
    case "template-04":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-glass">
  <div class="ambient-glow-sphere sphere-1"></div>
  <div class="ambient-glow-sphere sphere-2"></div>
  <div id="cursor-glow" class="cursor-glow"></div>

  <header class="glass-header">
    <div class="container glass-nav-shell">
      <div class="glass-brand">
        <span class="glass-orb">◈</span>
        <span id="brand-name">${prof.name}</span>
      </div>
      <nav class="glass-links">
        <a href="#about">About</a>
        <a href="#portfolio">Showcase</a>
        <a href="#packages">Tiers</a>
        <a href="#contact" class="glass-cta-pill">Contact</a>
      </nav>
    </div>
  </header>

  <main class="container glass-stage">
    <section class="glass-card hero-glass-card" id="about">
      <div class="hero-glass-flex">
        <div class="glass-text">
          <span class="glass-aura-pill" id="hero-tagline">${prof.title}</span>
          <h1 class="glass-h1" id="hero-headline">${prof.headline}</h1>
          <p class="glass-p" id="hero-bio">${prof.bio}</p>
          <div class="glass-metrics" id="metrics-grid"></div>
        </div>
        <div class="glass-avatar-frame">
          <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}">
        </div>
      </div>
    </section>

    <section class="glass-card" id="portfolio">
      <div class="glass-card-title">
        <span class="glass-mini-tag">LUMINOUS SHOWCASE</span>
        <h2 id="items-title">${prof.itemsTitle}</h2>
      </div>
      <div class="glass-items-grid" id="items-grid"></div>
    </section>

    <section class="glass-card" id="packages">
      <div class="glass-card-title">
        <span class="glass-mini-tag">COLLABORATION TIERS</span>
        <h2>Services & Rates</h2>
      </div>
      <div class="glass-packages-grid" id="packages-grid"></div>
    </section>

    <section class="glass-card" id="reviews">
      <div class="glass-card-title">
        <span class="glass-mini-tag">TESTIMONIALS</span>
        <h2>Client Feedback</h2>
      </div>
      <div class="glass-reviews-grid" id="reviews-grid"></div>
    </section>

    <section class="glass-card contact-glass-card" id="contact">
      <div class="glass-card-title">
        <span class="glass-mini-tag">TRANSLUCENT CHANNEL</span>
        <h2>Initiate Dialogue</h2>
      </div>
      <form class="glass-form" onsubmit="event.preventDefault(); alert('Message reflected & logged.'); this.reset();">
        <div class="form-row">
          <input type="text" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
        </div>
        <textarea rows="4" placeholder="Your requirements..." required></textarea>
        <button type="submit" class="btn-glass-submit">Transmit Message ◈</button>
      </form>
    </section>
  </main>

  <footer class="glass-footer">
    <div class="container glass-footer-flex">
      <p>&copy; <span id="year"></span> ${prof.name}. Glassmorphic Aura Architecture.</p>
      ${trustBadge}
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 05: Neo-Brutalist (Marquee Ticker & Sticker Badges)
    // -------------------------------------------------------------
    case "template-05":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-brutalist">
  <!-- Top Marquee Banner -->
  <div class="brutalist-marquee-bar">
    <div class="marquee-track">
      <span>✦ ${prof.name.toUpperCase()} ✦ ${prof.title.toUpperCase()} ✦ AVAILABLE WORLDWIDE ✦ 100% VERIFIED WORK ✦ ${prof.name.toUpperCase()} ✦ ${prof.title.toUpperCase()} ✦ AVAILABLE WORLDWIDE ✦</span>
    </div>
  </div>

  <header class="brutalist-header">
    <div class="container brutalist-nav-box">
      <div class="brutalist-brand-badge">
        <h1 id="brand-name">${prof.name}</h1>
        <span class="brutalist-sub">${prof.tagline}</span>
      </div>
      <nav class="brutalist-nav-links">
        <a href="#about" class="b-link">ABOUT</a>
        <a href="#works" class="b-link">WORKS</a>
        <a href="#pricing" class="b-link">PRICING</a>
        <a href="#contact" class="b-cta-btn">INQUIRE NOW !</a>
      </nav>
    </div>
  </header>

  <main class="container brutalist-main">
    <section class="brutalist-hero-block" id="about">
      <div class="hero-brutal-left">
        <div class="sticker-badge sticker-1">★ TOP RATED ★</div>
        <span class="raw-kicker" id="hero-tagline">${prof.title}</span>
        <h2 class="raw-h1" id="hero-headline">${prof.headline}</h2>
        <p class="raw-bio" id="hero-bio">${prof.bio}</p>
        <div class="raw-stats-row" id="metrics-grid"></div>
      </div>
      <div class="hero-brutal-right">
        <div class="raw-img-frame">
          <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}">
          <div class="sticker-badge sticker-2">100% READY</div>
        </div>
      </div>
    </section>

    <!-- Mid Marquee Accent -->
    <div class="brutalist-tape">
      <div class="tape-track">
        <span>/// CASE STUDIES /// PORTFOLIO SHOWCASE /// REAL DELIVERABLES /// CLIENT IMPACT /// NO NONSENSE ///</span>
      </div>
    </div>

    <section class="brutalist-section" id="works">
      <div class="brutalist-section-title">
        <h2 id="items-title">${prof.itemsTitle}</h2>
      </div>
      <div class="brutalist-grid" id="items-grid"></div>
    </section>

    <section class="brutalist-section" id="pricing">
      <div class="brutalist-section-title">
        <h2>COOPERATION TIERS</h2>
      </div>
      <div class="brutalist-packages-grid" id="packages-grid"></div>
    </section>

    <section class="brutalist-section" id="reviews">
      <div class="brutalist-section-title">
        <h2>WHAT CLIENTS SAY</h2>
      </div>
      <div class="brutalist-reviews-grid" id="reviews-grid"></div>
    </section>

    <section class="brutalist-section" id="contact">
      <div class="brutalist-contact-box">
        <h2>READY TO WORK? GET IN TOUCH</h2>
        <form class="brutalist-form" onsubmit="event.preventDefault(); alert('Message dispatched with brutal efficiency.'); this.reset();">
          <div class="raw-form-row">
            <input type="text" placeholder="NAME" required>
            <input type="email" placeholder="EMAIL" required>
          </div>
          <textarea rows="4" placeholder="PROJECT DETAILS & BUDGET..." required></textarea>
          <button type="submit" class="brutal-btn-submit">SUBMIT INQUIRY ➔</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="brutalist-footer">
    <div class="container brutalist-footer-row">
      <p>&copy; <span id="year"></span> ${prof.name}. NEO-BRUTALIST ARCHITECTURE.</p>
      ${trustBadge}
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 06: Split-Screen Studio (True 50/50 Dual-Pane Viewport)
    // -------------------------------------------------------------
    case "template-06":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-split">
  <div class="split-viewport">
    <!-- Fixed Left Column (50% Desktop) -->
    <aside class="split-left-pane">
      <div class="left-pane-inner">
        <div class="left-brand-block">
          <h1 class="split-name" id="brand-name">${prof.name}</h1>
          <span class="split-kicker" id="hero-tagline">${prof.title}</span>
        </div>

        <div class="left-avatar-card">
          <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}">
          <div class="split-status-beacon">
            <span class="beacon-dot"></span>
            <span>Direct Availability Active</span>
          </div>
        </div>

        <p class="split-bio-summary" id="hero-bio">${prof.bio}</p>

        <!-- Dynamic Scroll Spy Indicator -->
        <nav class="split-spy-nav" id="split-spy">
          <a href="#pane-headline" class="spy-item active" data-target="pane-headline">01. Overview</a>
          <a href="#pane-works" class="spy-item" data-target="pane-works">02. Showcase</a>
          <a href="#pane-packages" class="spy-item" data-target="pane-packages">03. Services</a>
          <a href="#pane-contact" class="spy-item" data-target="pane-contact">04. Contact</a>
        </nav>

        <div class="left-pane-footer">
          <p class="direct-email">${prof.email}</p>
          ${trustBadge}
        </div>
      </div>
    </aside>

    <!-- Scrolling Right Column (50% Desktop) -->
    <main class="split-right-pane" id="split-scroll-pane">
      <div class="right-pane-inner">
        <!-- Section 1: Headline & Metrics -->
        <section class="split-content-section" id="pane-headline">
          <span class="pane-sec-num">01 / OVERVIEW</span>
          <h2 class="right-headline" id="hero-headline">${prof.headline}</h2>
          <div class="split-metrics-grid" id="metrics-grid"></div>
        </section>

        <!-- Section 2: Showcase Works -->
        <section class="split-content-section" id="pane-works">
          <span class="pane-sec-num">02 / PORTFOLIO</span>
          <h2 id="items-title">${prof.itemsTitle}</h2>
          <div class="split-items-list" id="items-grid"></div>
        </section>

        <!-- Section 3: Packages -->
        <section class="split-content-section" id="pane-packages">
          <span class="pane-sec-num">03 / COOPERATION</span>
          <h2>Service Packages</h2>
          <div class="split-packages-list" id="packages-grid"></div>
        </section>

        <!-- Section 4: Reviews -->
        <section class="split-content-section" id="pane-reviews">
          <span class="pane-sec-num">CLIENT REVIEWS</span>
          <div class="split-reviews-stack" id="reviews-grid"></div>
        </section>

        <!-- Section 5: Contact -->
        <section class="split-content-section" id="pane-contact">
          <span class="pane-sec-num">04 / CONNECT</span>
          <h2>Initiate Engagement</h2>
          <form class="split-form" onsubmit="event.preventDefault(); alert('Message transmitted to studio desk.'); this.reset();">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Email Address" required>
            <textarea rows="4" placeholder="Project scope, timeline, goals..." required></textarea>
            <button type="submit" class="btn-split-submit">Transmit to Studio &rarr;</button>
          </form>
          <p class="copyright-note">&copy; <span id="year"></span> ${prof.name}. Dual-Pane Studio Architecture.</p>
        </section>
      </div>
    </main>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 07: Sidebar App (Dashboard with Vertical Left Dock)
    // -------------------------------------------------------------
    case "template-07":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-app">
  <div class="app-workspace">
    <!-- Left Navigation Dock (64px icon dock) -->
    <aside class="app-dock">
      <div class="dock-top-logo" title="${prof.name}">
        <span>⚡</span>
      </div>

      <nav class="dock-tabs">
        <button class="dock-tab-btn active" data-tab="tab-overview" title="Overview">
          <span class="dock-tab-icon">⊞</span>
          <span class="dock-tab-tooltip">Overview</span>
        </button>
        <button class="dock-tab-btn" data-tab="tab-works" title="Showcase">
          <span class="dock-tab-icon">📁</span>
          <span class="dock-tab-tooltip">Projects</span>
        </button>
        <button class="dock-tab-btn" data-tab="tab-services" title="Services">
          <span class="dock-tab-icon">⚡</span>
          <span class="dock-tab-tooltip">Services</span>
        </button>
        <button class="dock-tab-btn" data-tab="tab-contact" title="Inquire">
          <span class="dock-tab-icon">✉️</span>
          <span class="dock-tab-tooltip">Contact</span>
        </button>
      </nav>

      <div class="dock-bottom-avatar">
        <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}" title="${prof.name}">
      </div>
    </aside>

    <!-- Main Application Stage -->
    <div class="app-stage-wrapper">
      <!-- App Topbar -->
      <header class="app-topbar">
        <div class="topbar-left">
          <span class="app-path-crumb">${prof.name}</span>
          <span class="path-sep">/</span>
          <span class="app-current-view" id="app-view-label">Overview</span>
        </div>
        <div class="topbar-right">
          <span class="app-badge" id="hero-tagline">${prof.title}</span>
          <button class="btn-app-action" onclick="switchAppTab('tab-contact')">Direct Message &nearr;</button>
        </div>
      </header>

      <!-- App Viewport Container -->
      <main class="app-viewport-container">
        <!-- Viewport 1: Overview -->
        <div class="app-viewport active" id="tab-overview">
          <div class="app-hero-panel">
            <h1 class="app-h1" id="hero-headline">${prof.headline}</h1>
            <p class="app-bio" id="hero-bio">${prof.bio}</p>
          </div>
          <div class="app-stats-row" id="metrics-grid"></div>
          <div class="app-quick-cards-grid">
            <div class="app-card" onclick="switchAppTab('tab-works')">
              <span class="app-card-tag">DIRECTORY</span>
              <h3>Selected Works 📁</h3>
              <p>Explore production case studies & deliverables.</p>
            </div>
            <div class="app-card" onclick="switchAppTab('tab-services')">
              <span class="app-card-tag">CAPACITIES</span>
              <h3>Service Packages ⚡</h3>
              <p>Review cooperation tiers, deliverables & rates.</p>
            </div>
          </div>
        </div>

        <!-- Viewport 2: Projects Showcase -->
        <div class="app-viewport" id="tab-works">
          <div class="viewport-header">
            <h2 id="items-title">${prof.itemsTitle}</h2>
            <p>Production releases and creative monograph plates.</p>
          </div>
          <div class="app-projects-grid" id="items-grid"></div>
        </div>

        <!-- Viewport 3: Services -->
        <div class="app-viewport" id="tab-services">
          <div class="viewport-header">
            <h2>Cooperation Tiers & Rates</h2>
            <p>Predictable deliverables and transparent agreements.</p>
          </div>
          <div class="app-services-grid" id="packages-grid"></div>
          <div class="app-reviews-box" style="margin-top: 2rem;">
            <h3>Verified Testimonials</h3>
            <div class="app-reviews-grid" id="reviews-grid"></div>
          </div>
        </div>

        <!-- Viewport 4: Contact -->
        <div class="app-viewport" id="tab-contact">
          <div class="viewport-header">
            <h2>Direct Communications Channel</h2>
            <p>Fast-track project intake with immediate desk notification.</p>
          </div>
          <div class="app-contact-card">
            <form class="app-form" onsubmit="event.preventDefault(); alert('Message dispatched to application inbox.'); this.reset();">
              <div class="form-row">
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Professional Email" required>
              </div>
              <textarea rows="4" placeholder="Describe scope, objectives and desired start date..." required></textarea>
              <button type="submit" class="btn-app-submit">Transmit Ticket ⚡</button>
            </form>
          </div>
        </div>
      </main>

      <footer class="app-footer">
        <p>&copy; <span id="year"></span> ${prof.name}. Application Shell Layout.</p>
        ${trustBadge}
      </footer>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 08: Magazine Serif (Publication Masthead & Chapters)
    // -------------------------------------------------------------
    case "template-08":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-magazine">
  <div class="magazine-frame">
    <!-- Classical Masthead -->
    <header class="magazine-masthead">
      <div class="masthead-topline">
        <span>EST. 2026 &bull; THE COUTURE MONOGRAPH</span>
        <span>ISSUE NO. 08 &bull; ARCHIVAL PRINT EDITION</span>
        <span>${prof.location.toUpperCase()}</span>
      </div>
      <h1 class="masthead-title" id="brand-name">${prof.name}</h1>
      <div class="masthead-subline">
        <span id="hero-tagline">${prof.title}</span>
      </div>
    </header>

    <main class="magazine-body">
      <!-- Chapter I: The Monograph -->
      <section class="magazine-chapter" id="chapter-1">
        <div class="chapter-header">
          <span class="chap-num">CHAPTER I</span>
          <h2 class="chap-title">THE MANIFESTO &amp; PHILOSOPHY</h2>
        </div>
        <div class="magazine-spread">
          <div class="spread-left">
            <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}" class="plate-img">
            <span class="plate-caption">FIG 1.0 &mdash; Official portraiture of ${prof.name}.</span>
          </div>
          <div class="spread-right">
            <h3 class="quote-headline" id="hero-headline">${prof.headline}</h3>
            <p class="drop-cap-p" id="hero-bio">${prof.bio}</p>
            <div class="magazine-stats-bar" id="metrics-grid"></div>
          </div>
        </div>
      </section>

      <!-- Chapter II: The Selected Works -->
      <section class="magazine-chapter" id="chapter-2">
        <div class="chapter-header">
          <span class="chap-num">CHAPTER II</span>
          <h2 class="chap-title" id="items-title">${prof.itemsTitle}</h2>
        </div>
        <div class="magazine-editorial-grid" id="items-grid"></div>
      </section>

      <!-- Chapter III: The Engagements -->
      <section class="magazine-chapter" id="chapter-3">
        <div class="chapter-header">
          <span class="chap-num">CHAPTER III</span>
          <h2 class="chap-title">REPERTOIRE &amp; COMMISSIONS</h2>
        </div>
        <div class="magazine-rates-grid" id="packages-grid"></div>
      </section>

      <!-- Chapter IV: Testimonials -->
      <section class="magazine-chapter" id="chapter-4">
        <div class="chapter-header">
          <span class="chap-num">CHAPTER IV</span>
          <h2 class="chap-title">CRITICAL ACCLAIM</h2>
        </div>
        <div class="magazine-reviews-stream" id="reviews-grid"></div>
      </section>

      <!-- Chapter V: The Dialogue -->
      <section class="magazine-chapter" id="chapter-5">
        <div class="chapter-header">
          <span class="chap-num">CHAPTER V</span>
          <h2 class="chap-title">CORRESPONDENCE</h2>
        </div>
        <div class="magazine-correspondence-box">
          <p class="inquiry-lead">For editorial commissions, institutional engagements, or private consultations:</p>
          <form class="magazine-form" onsubmit="event.preventDefault(); alert('Correspondence dispatched to private desk.'); this.reset();">
            <div class="form-row">
              <input type="text" placeholder="Signatory Name" required>
              <input type="email" placeholder="Electronic Mail" required>
            </div>
            <textarea rows="4" placeholder="Detail the nature of your inquiry..." required></textarea>
            <button type="submit" class="btn-magazine-send">Transmit Dispatch &rarr;</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="magazine-footer">
      <div class="mag-footer-inner">
        <p>&copy; <span id="year"></span> ${prof.name}. Classical Editorial Architecture.</p>
        ${trustBadge}
      </div>
    </footer>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 09: Kinetic Motion (Draggable Project Carousel)
    // -------------------------------------------------------------
    case "template-09":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-kinetic">
  <!-- Kinetic Ticker Strip -->
  <div class="kinetic-ticker">
    <div class="ticker-content">
      <span>⚡ LIVE ARCHIVE &bull; ${prof.name.toUpperCase()} &bull; ${prof.title.toUpperCase()} &bull; 100% FLUID RESPONSIVE &bull; ⚡ LIVE ARCHIVE &bull; ${prof.name.toUpperCase()} &bull; ${prof.title.toUpperCase()} &bull;</span>
    </div>
  </div>

  <header class="kinetic-header">
    <div class="container kinetic-nav-bar">
      <h1 class="kinetic-logo" id="brand-name">${prof.name}</h1>
      <div class="kinetic-pulse-badge">
        <span class="k-pulse-dot"></span>
        <span id="hero-tagline">${prof.title}</span>
      </div>
      <a href="#kinetic-contact" class="btn-kinetic-cta">CONNECT NOW</a>
    </div>
  </header>

  <main class="container kinetic-main">
    <section class="kinetic-hero">
      <h2 class="kinetic-mega-headline" id="hero-headline">${prof.headline}</h2>
      <p class="kinetic-bio" id="hero-bio">${prof.bio}</p>
      <div class="kinetic-stats-deck" id="metrics-grid"></div>
    </section>

    <!-- Interactive Horizontal Carousel Section -->
    <section class="kinetic-carousel-section" id="portfolio">
      <div class="carousel-header">
        <div>
          <span class="kinetic-kicker">INTERACTIVE REEL</span>
          <h2 id="items-title">${prof.itemsTitle}</h2>
        </div>
        <div class="carousel-controls">
          <button class="c-btn" id="c-prev" aria-label="Previous">&larr;</button>
          <button class="c-btn" id="c-next" aria-label="Next">&rarr;</button>
        </div>
      </div>
      <div class="kinetic-carousel-wrapper" id="carousel-wrapper">
        <div class="kinetic-carousel-track" id="items-grid"></div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="kinetic-services-section">
      <div class="kinetic-sec-head">
        <span class="kinetic-kicker">CAPACITIES</span>
        <h2>Commission Packages</h2>
      </div>
      <div class="kinetic-packages-grid" id="packages-grid"></div>
    </section>

    <!-- Reviews -->
    <section class="kinetic-reviews-section">
      <div class="kinetic-sec-head">
        <span class="kinetic-kicker">FEEDBACK</span>
        <h2>Client Endorsements</h2>
      </div>
      <div class="kinetic-reviews-grid" id="reviews-grid"></div>
    </section>

    <!-- Contact -->
    <section class="kinetic-contact-section" id="kinetic-contact">
      <div class="kinetic-contact-card">
        <h2>TRANSMIT INQUIRY ⚡</h2>
        <form class="kinetic-form" onsubmit="event.preventDefault(); alert('Transmission locked and received.'); this.reset();">
          <div class="k-form-row">
            <input type="text" placeholder="YOUR NAME" required>
            <input type="email" placeholder="YOUR EMAIL" required>
          </div>
          <textarea rows="4" placeholder="PROJECT OUTLINE & TIMELINE..." required></textarea>
          <button type="submit" class="btn-k-submit">DISPATCH MESSAGE &rarr;</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="kinetic-footer">
    <div class="container k-footer-row">
      <p>&copy; <span id="year"></span> ${prof.name}. Kinetic Motion Engine.</p>
      ${trustBadge}
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>`;

    // -------------------------------------------------------------
    // ARCHETYPE 10: Terminal Monospace CLI (Real Interactive Bash Shell)
    // -------------------------------------------------------------
    case "template-10":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-terminal">
  <div class="terminal-shell">
    <!-- Terminal Window Container -->
    <div class="terminal-window">
      <!-- Window Titlebar -->
      <div class="terminal-titlebar">
        <div class="window-controls">
          <span class="w-btn w-close"></span>
          <span class="w-btn w-min"></span>
          <span class="w-btn w-max"></span>
        </div>
        <div class="window-title">bash &mdash; portfolio@${prof.id.replace(/^\d+-/, '')}: ~ (80x24)</div>
        <div class="window-status"><span class="term-status-dot"></span> LIVE</div>
      </div>

      <!-- Quick Command Bar -->
      <div class="cli-shortcuts-bar">
        <span class="shortcut-label">RUN:</span>
        <button class="cli-btn" onclick="runCommand('help')">help</button>
        <button class="cli-btn" onclick="runCommand('bio')">cat bio.txt</button>
        <button class="cli-btn" onclick="runCommand('projects')">ls projects/</button>
        <button class="cli-btn" onclick="runCommand('stats')">./get_metrics.sh</button>
        <button class="cli-btn" onclick="runCommand('rates')">cat packages.json</button>
        <button class="cli-btn" onclick="runCommand('contact')">./contact.sh</button>
        <button class="cli-btn" onclick="runCommand('clear')">clear</button>
      </div>

      <!-- Terminal Output Canvas -->
      <div class="terminal-body" id="terminal-screen">
        <pre class="ascii-art">
+----------------------------------------------------------+
|  PORTFOLIO TERMINAL v4.2.0-LTS // ENVIRONMENT READY      |
|  HOST: aibuildinfra.com  USER: ${prof.id.replace(/^\d+-/, '')}                    |
+----------------------------------------------------------+
        </pre>
        <p class="term-line intro-line">System initialized. Type <code class="t-code">help</code> or click commands above to explore ${prof.name}'s verified portfolio.</p>
        <p class="term-line prompt-demo"><span class="t-prompt">$</span> whoami</p>
        <p class="term-line response-line"><strong>${prof.name}</strong> &mdash; ${prof.title} (${prof.location})</p>
        
        <!-- Live Terminal History Log -->
        <div id="terminal-history"></div>

        <!-- Active Interactive Prompt Line -->
        <div class="terminal-input-row">
          <span class="t-prompt">$</span>
          <input type="text" id="terminal-input" class="terminal-input-field" placeholder="Type command here (e.g. help, projects, bio)..." autocomplete="off" autofocus>
          <span class="blinking-cursor">▋</span>
        </div>
      </div>

      <!-- Graphical Data Stores (Hidden / Hydrated for terminal commands) -->
      <div id="brand-name" style="display:none;">${prof.name}</div>
      <div id="hero-headline" style="display:none;">${prof.headline}</div>
      <div id="hero-tagline" style="display:none;">${prof.title}</div>
      <div id="hero-bio" style="display:none;">${prof.bio}</div>
      <div id="items-title" style="display:none;">${prof.itemsTitle}</div>
      <div id="metrics-grid" style="display:none;"></div>
      <div id="items-grid" style="display:none;"></div>
      <div id="packages-grid" style="display:none;"></div>
      <div id="reviews-grid" style="display:none;"></div>
      <span id="year" style="display:none;"></span>
    </div>

    <!-- Terminal Footer -->
    <footer class="terminal-footer">
      <div class="container term-footer-flex">
        <span>portfolio-os v4.2.0-lts // &copy; <span id="term-year">2026</span> ${prof.name}</span>
        ${trustBadge}
      </div>
    </footer>
  </div>

  <script src="app.js"></script>
</body>
</html>`;
    default:
      return "";
  }
}

function getArchetypeCSS(variant) {
  // Base universal reset
  const baseReset = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { line-height: 1.6; overflow-x: hidden; word-wrap: break-word; overflow-wrap: break-word; }
  a { text-decoration: none; color: inherit; transition: all 0.2s ease; }
  img { max-width: 100%; display: block; object-fit: cover; }
  button { cursor: pointer; border: none; font-family: inherit; }
  .container { width: 92%; max-width: 1280px; margin: 0 auto; }
  .footer-backlink a { text-decoration: none !important; }
  .infra-trust-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.35rem 0.85rem; border-radius: 30px; font-size: 0.78rem; color: #a1a1aa;
    transition: all 0.2s ease;
  }
  .infra-trust-badge:hover { background: rgba(255, 255, 255, 0.12); color: #ffffff; border-color: rgba(255, 255, 255, 0.3); }
  .infra-trust-badge strong { color: #ffffff; }
  .badge-score { background: #10b981; color: #000000; font-weight: 800; font-size: 0.68rem; padding: 0.1rem 0.4rem; border-radius: 8px; }
  `;

  switch(variant.variantId) {
    // -------------------------------------------------------------
    // CSS 01: Obsidian Dark
    // -------------------------------------------------------------
    case "template-01":
      return `${baseReset}
      body { background: #070709; color: #f4f4f5; font-family: 'Inter', -apple-system, sans-serif; }
      .obsidian-nav { position: fixed; top: 20px; left: 0; right: 0; z-index: 100; display: flex; justify-content: center; }
      .obsidian-dock {
        background: rgba(18, 18, 22, 0.85); backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px;
        padding: 0.6rem 1.4rem; display: flex; align-items: center; gap: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      }
      .dock-brand { font-weight: 700; font-size: 0.95rem; color: #ffffff; }
      .dock-links { display: flex; align-items: center; gap: 1.2rem; font-size: 0.85rem; color: #a1a1aa; }
      .dock-links a:hover { color: #ffffff; }
      .dock-cta { background: #ffffff; color: #000000 !important; font-weight: 700; padding: 0.35rem 0.9rem; border-radius: 20px; }
      .obsidian-hero { min-height: 85vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; padding: 7rem 1.5rem 4rem; }
      .hero-backdrop { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0.35; z-index: 1; filter: saturate(0.8); }
      .obsidian-hero-content { position: relative; z-index: 2; max-width: 900px; }
      .cinematic-kicker { font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; color: #a1a1aa; margin-bottom: 1rem; display: inline-block; }
      .cinematic-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5.5vw, 4.2rem); font-weight: 800; line-height: 1.15; color: #ffffff; margin-bottom: 1.4rem; }
      .cinematic-bio { font-size: 1.1rem; color: #a1a1aa; line-height: 1.7; max-width: 740px; margin: 0 auto 2.5rem; }
      .cinematic-stats { display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 2rem; }
      .metric-card strong { font-size: 2rem; font-weight: 800; color: #ffffff; display: block; line-height: 1; }
      .metric-card span { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #71717a; margin-top: 0.3rem; display: block; }
      .obsidian-showcase, .obsidian-services, .obsidian-reviews, .obsidian-contact { padding: 6rem 0; border-top: 1px solid rgba(255, 255, 255, 0.06); }
      .obsidian-section-head { margin-bottom: 3rem; }
      .obsidian-num { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; color: #71717a; display: block; margin-bottom: 0.5rem; }
      .obsidian-section-head h2 { font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; font-weight: 700; color: #ffffff; margin-bottom: 0.4rem; }
      .obsidian-sub { color: #a1a1aa; font-size: 0.95rem; }
      .obsidian-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.8rem; }
      .obsidian-item-card {
        background: #101014; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px;
        overflow: hidden; cursor: pointer; transition: all 0.3s ease;
      }
      .obsidian-item-card:hover { transform: translateY(-5px); border-color: rgba(255, 255, 255, 0.3); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7); }
      .item-media { aspect-ratio: 16/10; overflow: hidden; background: #000; position: relative; }
      .item-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .obsidian-item-card:hover .item-media img { transform: scale(1.05); }
      .item-exif-pill { position: absolute; bottom: 10px; left: 10px; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); border: 1px solid rgba(255, 255, 255, 0.2); font-size: 0.68rem; padding: 0.2rem 0.6rem; border-radius: 4px; color: #ffffff; }
      .item-caption { padding: 1.4rem; }
      .item-caption h3 { font-size: 1.15rem; font-weight: 700; color: #ffffff; margin-bottom: 0.35rem; }
      .item-caption p { font-size: 0.88rem; color: #a1a1aa; line-height: 1.5; }
      .obsidian-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .obsidian-pkg-card { background: #101014; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2.2rem; display: flex; flex-direction: column; }
      .pkg-price { font-size: 2rem; font-weight: 800; color: #ffffff; margin: 0.8rem 0 1.2rem; }
      .pkg-features { list-style: none; margin-bottom: 2rem; flex-grow: 1; }
      .pkg-features li { font-size: 0.88rem; color: #a1a1aa; padding: 0.4rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.04); }
      .btn-obsidian-inquire { background: #ffffff; color: #000000; font-weight: 700; text-align: center; padding: 0.75rem; border-radius: 6px; }
      .btn-obsidian-inquire:hover { background: #e4e4e7; }
      .obsidian-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.8rem; }
      .obsidian-rev-card { background: #101014; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2rem; }
      .rev-quote { font-size: 1.05rem; font-style: italic; color: #e4e4e7; line-height: 1.6; margin-bottom: 1rem; }
      .rev-author { font-weight: 700; color: #ffffff; font-size: 0.9rem; }
      .rev-role { font-size: 0.78rem; color: #71717a; }
      .obsidian-contact-box { background: #101014; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 3rem; max-width: 800px; margin: 0 auto; }
      .obsidian-form input, .obsidian-form textarea { width: 100%; background: #070709; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; padding: 0.85rem 1.1rem; color: #ffffff; font-size: 0.92rem; margin-bottom: 1rem; }
      .obsidian-form input:focus, .obsidian-form textarea:focus { outline: none; border-color: #ffffff; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .btn-obsidian-submit { background: #ffffff; color: #000000; font-weight: 700; padding: 0.85rem 1.8rem; border-radius: 6px; font-size: 0.92rem; width: 100%; }
      .obsidian-footer { border-top: 1px solid rgba(255, 255, 255, 0.06); padding: 3rem 0; font-size: 0.85rem; color: #71717a; }
      .footer-flex { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      .lightbox-modal { display: none; position: fixed; inset: 0; z-index: 1000; background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(12px); align-items: center; justify-content: center; padding: 2rem; }
      .lightbox-modal.active { display: flex; }
      .lightbox-dialog { max-width: 900px; width: 100%; background: #101014; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 12px; overflow: hidden; position: relative; }
      .lightbox-close { position: absolute; top: 15px; right: 20px; font-size: 2rem; color: #ffffff; background: transparent; z-index: 10; }
      .lightbox-dialog img { width: 100%; max-height: 60vh; object-fit: contain; background: #000; }
      .lightbox-meta { padding: 1.8rem; }
      .lightbox-meta h3 { font-size: 1.4rem; color: #ffffff; margin-bottom: 0.4rem; }
      .lightbox-meta p { color: #a1a1aa; font-size: 0.95rem; margin-bottom: 0.8rem; }
      .exif-tag { font-family: monospace; font-size: 0.78rem; background: rgba(255, 255, 255, 0.08); padding: 0.3rem 0.7rem; border-radius: 4px; color: #ffffff; }
      @media (max-width: 768px) { .form-row { grid-template-columns: 1fr; } .obsidian-dock { gap: 1rem; padding: 0.5rem 1rem; } }
      `;

    // -------------------------------------------------------------
    // CSS 02: Nordic Light
    // -------------------------------------------------------------
    case "template-02":
      return `${baseReset}
      body { background: #fbfbf9; color: #18181b; font-family: 'Inter', -apple-system, sans-serif; }
      .nordic-masthead { border-bottom: 1px solid rgba(0, 0, 0, 0.08); padding: 0.75rem 0; font-size: 0.75rem; letter-spacing: 0.12em; color: #71717a; }
      .masthead-inner { display: flex; justify-content: space-between; }
      .nordic-header { padding: 3rem 0 2rem; border-bottom: 1px solid rgba(0, 0, 0, 0.08); }
      .header-flex { display: flex; justify-content: space-between; align-items: baseline; }
      .nordic-logo { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: #09090b; }
      .nordic-role { font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: #52525b; }
      .monograph-layout { display: grid; grid-template-columns: 280px 1fr; gap: 4rem; padding: 4rem 0 6rem; }
      .sidebar-sticky { position: sticky; top: 30px; }
      .portrait-card img { width: 100%; border-radius: 4px; filter: grayscale(1); margin-bottom: 0.5rem; }
      .portrait-caption { font-size: 0.72rem; letter-spacing: 0.08em; color: #71717a; text-transform: uppercase; }
      .monograph-nav { margin: 2rem 0; display: flex; flex-direction: column; gap: 0.75rem; }
      .monograph-nav a { font-size: 0.88rem; color: #52525b; font-weight: 500; }
      .monograph-nav a:hover { color: #000000; }
      .roman { font-family: 'Playfair Display', serif; font-style: italic; color: #000000; margin-right: 0.4rem; }
      .sidebar-contact-info { font-size: 0.8rem; color: #71717a; line-height: 1.6; border-top: 1px solid rgba(0, 0, 0, 0.08); padding-top: 1.5rem; }
      .stream-block { margin-bottom: 5rem; }
      .section-roman { font-family: 'Playfair Display', serif; font-size: 0.8rem; letter-spacing: 0.15em; color: #71717a; display: block; margin-bottom: 0.8rem; }
      .editorial-headline { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3.2rem); line-height: 1.2; font-weight: 600; color: #09090b; margin-bottom: 1.5rem; }
      .lead-paragraph { font-size: 1.25rem; line-height: 1.8; color: #27272a; margin-bottom: 2rem; }
      .lead-paragraph::first-letter { font-family: 'Playfair Display', serif; font-size: 4.5rem; float: left; line-height: 0.8; margin-right: 0.8rem; font-weight: 700; color: #09090b; }
      .nordic-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid rgba(0,0,0,0.08); border-bottom: 1px solid rgba(0,0,0,0.08); padding: 2rem 0; }
      .nordic-metric strong { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #09090b; display: block; }
      .nordic-metric span { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: #71717a; }
      .nordic-items-stream { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-top: 2rem; }
      .nordic-work-card { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.06); padding: 1.5rem; border-radius: 4px; }
      .nordic-work-card img { width: 100%; aspect-ratio: 4/3; margin-bottom: 1rem; }
      .nordic-work-card h4 { font-family: 'Playfair Display', serif; font-size: 1.2rem; margin-bottom: 0.3rem; }
      .nordic-work-card p { font-size: 0.85rem; color: #52525b; line-height: 1.5; }
      .nordic-packages-list { display: flex; flex-direction: column; gap: 1.2rem; margin-top: 1.5rem; }
      .nordic-pkg { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.08); padding: 1.8rem; display: flex; justify-content: space-between; align-items: baseline; }
      .nordic-pkg-left h4 { font-family: 'Playfair Display', serif; font-size: 1.25rem; }
      .nordic-pkg-left ul { list-style: none; font-size: 0.85rem; color: #52525b; margin-top: 0.5rem; }
      .nordic-pkg-price { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: #09090b; }
      .nordic-reviews-flow { display: flex; flex-direction: column; gap: 2rem; }
      .nordic-quote { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.4rem; line-height: 1.6; color: #09090b; }
      .nordic-author { font-size: 0.85rem; color: #71717a; margin-top: 0.5rem; }
      .nordic-contact-card { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.08); padding: 3rem; border-radius: 4px; }
      .nordic-form input, .nordic-form textarea { width: 100%; background: #fbfbf9; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 2px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.9rem; }
      .btn-nordic { background: #09090b; color: #ffffff; padding: 0.85rem 2rem; font-weight: 600; font-size: 0.88rem; }
      .nordic-footer { border-top: 1px solid rgba(0, 0, 0, 0.08); padding: 2.5rem 0; font-size: 0.8rem; color: #71717a; }
      @media (max-width: 900px) { .monograph-layout { grid-template-columns: 1fr; } .sidebar-sticky { position: static; } .nordic-items-stream { grid-template-columns: 1fr; } .nordic-metrics-grid { grid-template-columns: 1fr 1fr; } }
      `;

    // -------------------------------------------------------------
    // CSS 03: Bento Grid
    // -------------------------------------------------------------
    case "template-03":
      return `${baseReset}
      body { background: #0b0c10; color: #f8fafc; font-family: 'Inter', -apple-system, sans-serif; }
      .bento-screen-wrap { padding: 1.5rem 0 3rem; }
      .bento-top-bar { border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 1.2rem; margin-bottom: 2rem; }
      .top-bar-flex { display: flex; justify-content: space-between; align-items: center; }
      .bento-brand { display: flex; align-items: center; gap: 0.8rem; }
      .bento-logo-icon { font-size: 1.5rem; color: #38bdf8; }
      .bento-name { font-weight: 800; font-size: 1.15rem; color: #ffffff; }
      .bento-badge { font-size: 0.72rem; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: #38bdf8; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 700; }
      .bento-clock-pill { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 0.4rem 0.9rem; font-family: monospace; font-size: 0.8rem; color: #38bdf8; display: flex; align-items: center; gap: 0.5rem; }
      .clock-dot { width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 6px #10b981; }
      .bento-grid-dashboard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
      }
      .bento-card {
        background: #13161f; border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px; padding: 1.8rem; position: relative;
        transition: transform 0.25s ease, border-color 0.25s ease;
      }
      .bento-card:hover { border-color: rgba(56, 189, 248, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
      .cell-hero-profile { grid-column: span 2; grid-row: span 2; display: flex; flex-direction: column; justify-content: space-between; }
      .bento-avatar { width: 90px; height: 90px; border-radius: 50%; border: 3px solid rgba(56, 189, 248, 0.3); }
      .hero-status-pill { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: 600; margin-top: 1rem; }
      .status-pulse { width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      .bento-headline { font-family: 'Space Grotesk', sans-serif; font-size: 1.85rem; font-weight: 800; color: #ffffff; line-height: 1.25; margin: 1.2rem 0 0.8rem; }
      .bento-bio { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; }
      .bento-profile-actions { display: flex; gap: 0.8rem; }
      .bento-btn-primary { background: #38bdf8; color: #000000; font-weight: 700; padding: 0.65rem 1.4rem; border-radius: 8px; font-size: 0.88rem; }
      .bento-btn-secondary { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15); color: #ffffff; padding: 0.65rem 1.4rem; border-radius: 8px; font-size: 0.88rem; }
      .cell-metrics { grid-column: span 2; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; align-items: center; text-align: center; }
      .bento-stat strong { font-family: 'Space Grotesk', sans-serif; font-size: 2rem; color: #38bdf8; display: block; line-height: 1; }
      .bento-stat span { font-size: 0.72rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 0.3rem; display: block; }
      .cell-showcase { grid-column: span 2; grid-row: span 2; }
      .bento-card-header { margin-bottom: 1.2rem; }
      .bento-chip { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.1em; color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 0.15rem 0.5rem; border-radius: 4px; display: inline-block; margin-bottom: 0.4rem; }
      .bento-card-header h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; color: #ffffff; }
      .bento-items-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .bento-item-tile { background: #0b0d13; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 10px; overflow: hidden; }
      .bento-item-tile img { width: 100%; aspect-ratio: 16/10; }
      .bento-tile-body { padding: 0.9rem; }
      .bento-tile-body h4 { font-size: 0.92rem; color: #ffffff; margin-bottom: 0.2rem; }
      .bento-tile-body p { font-size: 0.78rem; color: #94a3b8; }
      .cell-services { grid-column: span 2; }
      .bento-packages-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-top: 0.8rem; }
      .bento-pkg-tile { background: #0b0d13; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 10px; padding: 1rem; }
      .bento-pkg-tile h5 { font-size: 0.88rem; color: #ffffff; margin-bottom: 0.4rem; }
      .bento-pkg-price { font-size: 1.25rem; font-weight: 800; color: #38bdf8; }
      .cell-testimonials { grid-column: span 1; }
      .bento-rev-quote { font-style: italic; font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 0.5rem; }
      .bento-rev-by { font-weight: 700; font-size: 0.78rem; color: #ffffff; }
      .cell-contact { grid-column: span 1; }
      .bento-mini-form input, .bento-mini-form textarea { width: 100%; background: #0b0d13; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 0.55rem; font-size: 0.8rem; color: #ffffff; margin-bottom: 0.5rem; }
      .bento-btn-send { background: #38bdf8; color: #000; font-weight: 700; font-size: 0.8rem; padding: 0.55rem; width: 100%; border-radius: 6px; }
      .bento-footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 2rem; margin-top: 3rem; font-size: 0.82rem; color: #94a3b8; }
      .bento-footer-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      @media (max-width: 992px) {
        .bento-grid-dashboard { grid-template-columns: 1fr; }
        .cell-hero-profile, .cell-metrics, .cell-showcase, .cell-services, .cell-testimonials, .cell-contact { grid-column: span 1; }
        .cell-metrics { grid-template-columns: 1fr 1fr; }
        .bento-packages-row { grid-template-columns: 1fr; }
      }
      `;

    // -------------------------------------------------------------
    // CSS 04: Glassmorphic Aura
    // -------------------------------------------------------------
    case "template-04":
      return `${baseReset}
      body { background: #030712; color: #f9fafb; font-family: 'Plus Jakarta Sans', sans-serif; position: relative; overflow-x: hidden; }
      .ambient-glow-sphere { position: fixed; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0; }
      .sphere-1 { width: 500px; height: 500px; background: rgba(59, 130, 246, 0.25); top: -100px; left: -100px; }
      .sphere-2 { width: 600px; height: 600px; background: rgba(139, 92, 246, 0.2); bottom: -100px; right: -100px; }
      .cursor-glow { width: 350px; height: 350px; background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%); border-radius: 50%; position: fixed; pointer-events: none; z-index: 1; transform: translate(-50%, -50%); transition: width 0.3s, height 0.3s; }
      .glass-header { position: sticky; top: 15px; z-index: 50; }
      .glass-nav-shell {
        background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 40px; padding: 0.75rem 1.8rem;
        display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      }
      .glass-brand { display: flex; align-items: center; gap: 0.6rem; font-weight: 800; font-size: 1.05rem; }
      .glass-orb { font-size: 1.2rem; color: #38bdf8; }
      .glass-links { display: flex; align-items: center; gap: 1.5rem; font-size: 0.88rem; color: #94a3b8; }
      .glass-links a:hover { color: #ffffff; }
      .glass-cta-pill { background: linear-gradient(135deg, #38bdf8, #818cf8); color: #000000 !important; font-weight: 700; padding: 0.35rem 1rem; border-radius: 20px; }
      .glass-stage { position: relative; z-index: 10; padding: 3rem 0 6rem; display: flex; flex-direction: column; gap: 2.5rem; }
      .glass-card {
        background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 24px; padding: 3rem;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); position: relative; overflow: hidden;
      }
      .glass-card-title { margin-bottom: 2rem; }
      .glass-mini-tag { font-size: 0.72rem; letter-spacing: 0.12em; font-weight: 800; color: #38bdf8; display: block; margin-bottom: 0.4rem; }
      .glass-card-title h2 { font-size: 2rem; font-weight: 800; color: #ffffff; }
      .hero-glass-flex { display: flex; justify-content: space-between; align-items: center; gap: 3rem; }
      .glass-aura-pill { display: inline-block; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; font-size: 0.78rem; font-weight: 700; padding: 0.35rem 0.9rem; border-radius: 20px; margin-bottom: 1.2rem; }
      .glass-h1 { font-size: clamp(2.2rem, 4.5vw, 3.6rem); font-weight: 800; line-height: 1.18; margin-bottom: 1.2rem; background: linear-gradient(135deg, #ffffff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .glass-p { font-size: 1.05rem; color: #94a3b8; line-height: 1.7; margin-bottom: 2rem; }
      .glass-avatar-frame img { width: 220px; height: 220px; border-radius: 50%; border: 4px solid rgba(255, 255, 255, 0.15); box-shadow: 0 0 40px rgba(56, 189, 248, 0.2); }
      .glass-metrics { display: flex; gap: 2rem; flex-wrap: wrap; }
      .g-stat strong { font-size: 2rem; font-weight: 800; color: #ffffff; display: block; line-height: 1; }
      .g-stat span { font-size: 0.75rem; text-transform: uppercase; color: #64748b; margin-top: 0.3rem; display: block; }
      .glass-items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.8rem; }
      .glass-item-tile { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; }
      .glass-item-tile img { width: 100%; aspect-ratio: 16/10; }
      .g-item-info { padding: 1.4rem; }
      .g-item-info h3 { font-size: 1.15rem; color: #ffffff; margin-bottom: 0.3rem; }
      .g-item-info p { font-size: 0.85rem; color: #94a3b8; }
      .glass-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
      .glass-pkg { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 2rem; }
      .glass-pkg h3 { font-size: 1.2rem; color: #ffffff; }
      .g-price { font-size: 2rem; font-weight: 800; color: #38bdf8; margin: 0.8rem 0 1.2rem; }
      .glass-pkg ul { list-style: none; font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem; }
      .glass-pkg li { padding: 0.35rem 0; }
      .glass-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
      .g-rev { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 1.8rem; }
      .g-rev-q { font-style: italic; font-size: 0.95rem; color: #cbd5e1; margin-bottom: 0.8rem; }
      .g-rev-a { font-weight: 700; color: #ffffff; font-size: 0.88rem; }
      .glass-form input, .glass-form textarea { width: 100%; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 10px; padding: 0.85rem; color: #ffffff; font-size: 0.92rem; margin-bottom: 1rem; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .btn-glass-submit { background: linear-gradient(135deg, #38bdf8, #818cf8); color: #000; font-weight: 800; padding: 0.85rem 2rem; border-radius: 10px; font-size: 0.95rem; }
      .glass-footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 3rem 0; font-size: 0.85rem; color: #64748b; }
      .glass-footer-flex { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      @media (max-width: 850px) { .hero-glass-flex { flex-direction: column; text-align: center; } .form-row { grid-template-columns: 1fr; } }
      `;

    // -------------------------------------------------------------
    // CSS 05: Neo-Brutalist
    // -------------------------------------------------------------
    case "template-05":
      return `${baseReset}
      body { background: #ffe600; color: #000000; font-family: 'Space Grotesk', -apple-system, sans-serif; font-weight: 600; }
      .brutalist-marquee-bar { background: #000000; color: #ffe600; padding: 0.75rem 0; overflow: hidden; white-space: nowrap; font-weight: 800; font-size: 0.9rem; letter-spacing: 0.1em; border-bottom: 3px solid #000000; }
      .marquee-track { display: inline-block; animation: marquee 25s linear infinite; }
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .brutalist-header { padding: 2rem 0; }
      .brutalist-nav-box { background: #ffffff; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; padding: 1.2rem 2rem; display: flex; justify-content: space-between; align-items: center; }
      .brutalist-brand-badge h1 { font-size: 1.6rem; font-weight: 900; line-height: 1; }
      .brutalist-sub { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; }
      .brutalist-nav-links { display: flex; align-items: center; gap: 1.2rem; }
      .b-link { color: #000000; font-weight: 800; font-size: 0.9rem; }
      .b-link:hover { text-decoration: underline; }
      .b-cta-btn { background: #000000; color: #ffffff !important; padding: 0.6rem 1.4rem; border: 2px solid #000000; font-weight: 800; font-size: 0.85rem; box-shadow: 3px 3px 0px #000000; }
      .b-cta-btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0px #000000; }
      .brutalist-main { padding-bottom: 6rem; display: flex; flex-direction: column; gap: 4rem; }
      .brutalist-hero-block { background: #ffffff; border: 3px solid #000000; box-shadow: 8px 8px 0px #000000; padding: 3.5rem; display: grid; grid-template-columns: 1.4fr 1fr; gap: 3rem; position: relative; }
      .sticker-badge { position: absolute; background: #000000; color: #ffffff; font-size: 0.75rem; font-weight: 900; padding: 0.4rem 0.8rem; border: 2px solid #000000; }
      .sticker-1 { top: -15px; left: 30px; transform: rotate(-5deg); background: #ff0055; }
      .sticker-2 { bottom: -15px; right: 20px; transform: rotate(4deg); background: #00f0ff; color: #000; }
      .raw-kicker { font-size: 0.85rem; font-weight: 900; letter-spacing: 0.1em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 0.2rem 0.6rem; display: inline-block; margin-bottom: 1rem; }
      .raw-h1 { font-size: clamp(2.2rem, 4vw, 3.4rem); font-weight: 900; line-height: 1.15; margin-bottom: 1.2rem; }
      .raw-bio { font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }
      .raw-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; border-top: 3px solid #000000; padding-top: 1.5rem; }
      .raw-stat strong { font-size: 2.2rem; font-weight: 900; display: block; line-height: 1; }
      .raw-stat span { font-size: 0.72rem; text-transform: uppercase; font-weight: 800; }
      .raw-img-frame { border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; background: #000; position: relative; }
      .raw-img-frame img { width: 100%; height: 100%; object-fit: cover; }
      .brutalist-tape { background: #000000; color: #ffffff; padding: 0.6rem 0; border: 3px solid #000000; transform: rotate(-1deg); margin: 1rem 0; overflow: hidden; white-space: nowrap; font-weight: 900; font-size: 0.85rem; }
      .tape-track { display: inline-block; animation: marquee 20s linear infinite; }
      .brutalist-section-title h2 { font-size: 2.2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 1.5rem; }
      .brutalist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
      .brutal-card { background: #ffffff; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; }
      .brutal-card img { width: 100%; aspect-ratio: 16/10; border-bottom: 3px solid #000000; }
      .brutal-body { padding: 1.5rem; }
      .brutal-body h3 { font-size: 1.3rem; font-weight: 900; margin-bottom: 0.5rem; }
      .brutal-body p { font-size: 0.9rem; line-height: 1.5; font-weight: 500; }
      .brutalist-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
      .brutal-pkg { background: #ffffff; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; padding: 2rem; }
      .b-price { font-size: 2.5rem; font-weight: 900; margin: 0.8rem 0 1.2rem; }
      .brutal-pkg ul { list-style: none; margin-bottom: 1.5rem; }
      .brutal-pkg li { padding: 0.4rem 0; border-bottom: 2px solid #f0f0f0; font-size: 0.9rem; }
      .brutalist-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .brutal-rev { background: #ffffff; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; padding: 2rem; }
      .brutal-rev-q { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; }
      .brutalist-contact-box { background: #ffffff; border: 3px solid #000000; box-shadow: 8px 8px 0px #000000; padding: 3rem; }
      .brutalist-form input, .brutalist-form textarea { width: 100%; border: 3px solid #000000; padding: 1rem; font-size: 0.95rem; font-family: inherit; font-weight: 700; margin-bottom: 1rem; }
      .raw-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .brutal-btn-submit { background: #000000; color: #ffffff; font-size: 1.1rem; font-weight: 900; padding: 1rem 2.5rem; border: 3px solid #000000; box-shadow: 5px 5px 0px #000000; }
      .brutal-btn-submit:active { transform: translate(3px, 3px); box-shadow: 2px 2px 0px #000000; }
      .brutalist-footer { border-top: 3px solid #000000; background: #000000; color: #ffffff; padding: 3rem 0; }
      .brutalist-footer-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      @media (max-width: 850px) { .brutalist-hero-block { grid-template-columns: 1fr; } .raw-stats-row { grid-template-columns: 1fr 1fr; } .raw-form-row { grid-template-columns: 1fr; } }
      `;

    // -------------------------------------------------------------
    // CSS 06: Split-Screen Studio
    // -------------------------------------------------------------
    case "template-06":
      return `${baseReset}
      body { background: #0e1117; color: #f0f6fc; font-family: 'Plus Jakarta Sans', sans-serif; overflow: hidden; }
      .split-viewport { display: flex; height: 100vh; overflow: hidden; }
      .split-left-pane { width: 45%; height: 100vh; background: #07090e; border-right: 1px solid rgba(255, 255, 255, 0.08); padding: 3.5rem 3rem; display: flex; flex-direction: column; justify-content: space-between; overflow-y: auto; }
      .split-name { font-family: 'Cinzel', serif; font-size: 2.5rem; font-weight: 700; color: #ffffff; }
      .split-kicker { font-size: 0.8rem; letter-spacing: 0.12em; color: #d4af37; text-transform: uppercase; font-weight: 600; display: block; margin-top: 0.4rem; }
      .left-avatar-card { margin: 2rem 0 1.5rem; position: relative; }
      .left-avatar-card img { width: 140px; height: 140px; border-radius: 50%; border: 2px solid rgba(212, 175, 55, 0.4); }
      .split-status-beacon { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; color: #d4af37; background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.25); padding: 0.25rem 0.75rem; border-radius: 20px; margin-top: 0.8rem; }
      .beacon-dot { width: 6px; height: 6px; background: #d4af37; border-radius: 50%; }
      .split-bio-summary { color: #8b949e; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
      .split-spy-nav { display: flex; flex-direction: column; gap: 0.9rem; }
      .spy-item { font-size: 0.9rem; color: #6e7681; font-weight: 600; transition: all 0.2s; }
      .spy-item:hover, .spy-item.active { color: #d4af37; transform: translateX(6px); }
      .left-pane-footer { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1.5rem; font-size: 0.82rem; color: #8b949e; }
      .split-right-pane { width: 55%; height: 100vh; overflow-y: auto; padding: 4rem 3.5rem; }
      .split-content-section { margin-bottom: 6rem; scroll-margin-top: 40px; }
      .pane-sec-num { font-size: 0.75rem; letter-spacing: 0.15em; color: #d4af37; font-weight: 700; display: block; margin-bottom: 0.6rem; }
      .right-headline { font-family: 'Cinzel', serif; font-size: 2.2rem; color: #ffffff; line-height: 1.3; margin-bottom: 2rem; }
      .split-metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
      .split-m-card { background: #161b22; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 1.8rem; }
      .split-m-card strong { font-size: 2rem; color: #d4af37; display: block; font-family: 'Cinzel', serif; }
      .split-m-card span { font-size: 0.78rem; text-transform: uppercase; color: #8b949e; }
      .split-items-list { display: flex; flex-direction: column; gap: 2rem; }
      .split-item { background: #161b22; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; overflow: hidden; }
      .split-item img { width: 100%; aspect-ratio: 16/9; }
      .split-item-body { padding: 1.8rem; }
      .split-item-body h3 { font-size: 1.25rem; color: #ffffff; margin-bottom: 0.4rem; }
      .split-item-body p { font-size: 0.9rem; color: #8b949e; }
      .split-packages-list { display: flex; flex-direction: column; gap: 1.5rem; }
      .split-pkg { background: #161b22; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2rem; display: flex; justify-content: space-between; align-items: baseline; }
      .split-pkg h3 { font-size: 1.2rem; color: #ffffff; }
      .split-pkg-price { font-size: 1.8rem; font-weight: 700; color: #d4af37; }
      .split-reviews-stack { display: flex; flex-direction: column; gap: 1.5rem; }
      .split-rev { background: #161b22; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 1.8rem; }
      .split-rev-q { font-style: italic; color: #c9d1d9; font-size: 0.95rem; margin-bottom: 0.6rem; }
      .split-form input, .split-form textarea { width: 100%; background: #07090e; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 8px; padding: 0.85rem; color: #ffffff; margin-bottom: 1rem; font-size: 0.9rem; }
      .btn-split-submit { background: #d4af37; color: #000000; font-weight: 700; padding: 0.85rem 2rem; border-radius: 8px; font-size: 0.95rem; }
      .copyright-note { font-size: 0.78rem; color: #6e7681; margin-top: 2rem; }
      @media (max-width: 900px) { body { overflow: auto; } .split-viewport { flex-direction: column; height: auto; } .split-left-pane, .split-right-pane { width: 100%; height: auto; overflow: visible; padding: 2.5rem 1.5rem; } }
      `;

    // -------------------------------------------------------------
    // CSS 07: Sidebar App
    // -------------------------------------------------------------
    case "template-07":
      return `${baseReset}
      body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; overflow: hidden; }
      .app-workspace { display: flex; height: 100vh; overflow: hidden; }
      .app-dock { width: 68px; background: #090d16; border-right: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 1.2rem 0; flex-shrink: 0; }
      .dock-top-logo { font-size: 1.6rem; color: #38bdf8; }
      .dock-tabs { display: flex; flex-direction: column; gap: 0.8rem; }
      .dock-tab-btn { width: 44px; height: 44px; border-radius: 10px; background: transparent; color: #64748b; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; position: relative; transition: all 0.2s; }
      .dock-tab-btn:hover, .dock-tab-btn.active { background: #1e293b; color: #38bdf8; }
      .dock-bottom-avatar img { width: 36px; height: 36px; border-radius: 50%; border: 2px solid rgba(56, 189, 248, 0.5); }
      .app-stage-wrapper { flex: 1; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
      .app-topbar { height: 60px; background: #0f172a; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; flex-shrink: 0; }
      .topbar-left { font-size: 0.88rem; font-weight: 600; }
      .app-path-crumb { color: #94a3b8; }
      .path-sep { color: #475569; margin: 0 0.4rem; }
      .app-current-view { color: #ffffff; }
      .topbar-right { display: flex; align-items: center; gap: 1rem; }
      .app-badge { font-size: 0.75rem; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; padding: 0.25rem 0.75rem; border-radius: 20px; font-weight: 600; }
      .btn-app-action { background: #38bdf8; color: #000; font-weight: 700; font-size: 0.8rem; padding: 0.45rem 1rem; border-radius: 6px; }
      .app-viewport-container { flex: 1; overflow-y: auto; padding: 2.5rem 3rem; }
      .app-viewport { display: none; }
      .app-viewport.active { display: block; animation: fadeIn 0.25s ease; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      .app-hero-panel { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2.5rem; margin-bottom: 2rem; }
      .app-h1 { font-size: 2.2rem; font-weight: 800; color: #ffffff; margin-bottom: 0.8rem; line-height: 1.25; }
      .app-bio { font-size: 1.05rem; color: #94a3b8; line-height: 1.6; max-width: 800px; }
      .app-stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2.5rem; }
      .app-stat-tile { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 1.5rem; }
      .app-stat-tile strong { font-size: 2rem; font-weight: 800; color: #38bdf8; display: block; }
      .app-stat-tile span { font-size: 0.75rem; text-transform: uppercase; color: #64748b; }
      .app-quick-cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
      .app-card { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2rem; cursor: pointer; transition: all 0.2s; }
      .app-card:hover { border-color: #38bdf8; transform: translateY(-3px); }
      .app-card-tag { font-size: 0.7rem; font-weight: 700; color: #38bdf8; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem; }
      .app-card h3 { font-size: 1.3rem; color: #ffffff; margin-bottom: 0.3rem; }
      .app-card p { font-size: 0.88rem; color: #94a3b8; }
      .viewport-header { margin-bottom: 2rem; }
      .viewport-header h2 { font-size: 1.8rem; font-weight: 800; color: #ffffff; }
      .viewport-header p { font-size: 0.95rem; color: #94a3b8; }
      .app-projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.8rem; }
      .app-proj-card { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; overflow: hidden; }
      .app-proj-card img { width: 100%; aspect-ratio: 16/10; }
      .app-proj-body { padding: 1.4rem; }
      .app-proj-body h3 { font-size: 1.15rem; color: #ffffff; margin-bottom: 0.3rem; }
      .app-proj-body p { font-size: 0.85rem; color: #94a3b8; }
      .app-services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
      .app-pkg { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2rem; }
      .app-pkg-price { font-size: 1.8rem; font-weight: 800; color: #38bdf8; margin: 0.6rem 0 1rem; }
      .app-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
      .app-rev { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 1.5rem; font-size: 0.9rem; color: #cbd5e1; font-style: italic; }
      .app-contact-card { background: #1e293b; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 2.5rem; max-width: 700px; }
      .app-form input, .app-form textarea { width: 100%; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; padding: 0.85rem; color: #ffffff; margin-bottom: 1rem; font-size: 0.9rem; }
      .btn-app-submit { background: #38bdf8; color: #000; font-weight: 700; padding: 0.85rem 2rem; border-radius: 6px; font-size: 0.95rem; }
      .app-footer { height: 50px; background: #090d16; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; font-size: 0.78rem; color: #64748b; flex-shrink: 0; }
      @media (max-width: 800px) { body { overflow: auto; } .app-workspace { flex-direction: column; height: auto; } .app-dock { width: 100%; height: 60px; flex-direction: row; padding: 0 1.5rem; } .dock-tabs { flex-direction: row; } .app-stage-wrapper { height: auto; overflow: visible; } .app-viewport-container { padding: 1.5rem; } .app-stats-row { grid-template-columns: 1fr 1fr; } .app-quick-cards-grid { grid-template-columns: 1fr; } }
      `;

    // -------------------------------------------------------------
    // CSS 08: Magazine Serif
    // -------------------------------------------------------------
    case "template-08":
      return `${baseReset}
      body { background: #181512; color: #f7f4ef; font-family: 'Outfit', sans-serif; }
      .magazine-frame { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem 5rem; }
      .magazine-masthead { text-align: center; border-bottom: 2px solid #e2b17a; padding: 2rem 0 3rem; margin-bottom: 4rem; }
      .masthead-topline { display: flex; justify-content: space-between; font-size: 0.75rem; letter-spacing: 0.15em; color: #a8a096; text-transform: uppercase; border-bottom: 1px solid rgba(226, 177, 122, 0.2); padding-bottom: 0.8rem; margin-bottom: 1.5rem; }
      .masthead-title { font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 700; letter-spacing: -0.02em; color: #f7f4ef; }
      .masthead-subline { font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; color: #e2b17a; font-weight: 600; margin-top: 0.5rem; }
      .magazine-chapter { margin-bottom: 6rem; }
      .chapter-header { text-align: center; margin-bottom: 3rem; }
      .chap-num { font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.85rem; letter-spacing: 0.2em; color: #e2b17a; display: block; margin-bottom: 0.4rem; }
      .chap-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: #f7f4ef; }
      .magazine-spread { display: grid; grid-template-columns: 1fr 1.3fr; gap: 4rem; align-items: center; }
      .plate-img { width: 100%; border-radius: 4px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6); }
      .plate-caption { font-size: 0.75rem; color: #a8a096; font-style: italic; margin-top: 0.6rem; display: block; }
      .quote-headline { font-family: 'Playfair Display', serif; font-size: 2.2rem; line-height: 1.3; color: #e2b17a; margin-bottom: 1.5rem; font-style: italic; }
      .drop-cap-p { font-size: 1.15rem; line-height: 1.8; color: #d4cec5; margin-bottom: 2rem; }
      .drop-cap-p::first-letter { font-family: 'Playfair Display', serif; font-size: 4rem; float: left; line-height: 0.85; margin-right: 0.8rem; color: #e2b17a; font-weight: 700; }
      .magazine-stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; border-top: 1px solid rgba(226, 177, 122, 0.2); padding-top: 1.5rem; }
      .mag-stat strong { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: #e2b17a; display: block; }
      .mag-stat span { font-size: 0.7rem; text-transform: uppercase; color: #a8a096; }
      .magazine-editorial-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
      .mag-work-plate { background: #221d19; border: 1px solid rgba(226, 177, 122, 0.15); padding: 1.5rem; }
      .mag-work-plate img { width: 100%; aspect-ratio: 4/3; margin-bottom: 1rem; }
      .mag-work-plate h3 { font-family: 'Playfair Display', serif; font-size: 1.25rem; color: #f7f4ef; margin-bottom: 0.3rem; }
      .mag-work-plate p { font-size: 0.85rem; color: #a8a096; }
      .magazine-rates-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; }
      .mag-pkg { background: #221d19; border: 1px solid rgba(226, 177, 122, 0.15); padding: 2.2rem; text-align: center; }
      .mag-pkg h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #f7f4ef; }
      .mag-price { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #e2b17a; margin: 1rem 0; font-style: italic; }
      .magazine-reviews-stream { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .mag-rev { background: #221d19; border: 1px solid rgba(226, 177, 122, 0.15); padding: 2rem; }
      .mag-quote { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.15rem; color: #d4cec5; line-height: 1.6; margin-bottom: 0.8rem; }
      .magazine-correspondence-box { background: #221d19; border: 1px solid rgba(226, 177, 122, 0.2); padding: 3rem; max-width: 760px; margin: 0 auto; text-align: center; }
      .inquiry-lead { font-size: 0.95rem; color: #a8a096; margin-bottom: 2rem; }
      .magazine-form input, .magazine-form textarea { width: 100%; background: #181512; border: 1px solid rgba(226, 177, 122, 0.3); padding: 0.85rem; color: #f7f4ef; font-size: 0.9rem; margin-bottom: 1rem; border-radius: 2px; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .btn-magazine-send { background: #e2b17a; color: #181512; font-weight: 700; padding: 0.9rem 2.5rem; font-size: 0.95rem; font-family: 'Playfair Display', serif; letter-spacing: 0.05em; }
      .magazine-footer { border-top: 1px solid rgba(226, 177, 122, 0.2); padding: 3rem 0; font-size: 0.82rem; color: #a8a096; }
      .mag-footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      @media (max-width: 850px) { .magazine-spread { grid-template-columns: 1fr; } .magazine-stats-bar { grid-template-columns: 1fr 1fr; } .form-row { grid-template-columns: 1fr; } }
      `;

    // -------------------------------------------------------------
    // CSS 09: Kinetic Motion
    // -------------------------------------------------------------
    case "template-09":
      return `${baseReset}
      body { background: #080310; color: #ffffff; font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
      .kinetic-ticker { background: #ff007f; color: #ffffff; padding: 0.6rem 0; font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: 0.08em; overflow: hidden; white-space: nowrap; }
      .ticker-content { display: inline-block; animation: marquee 20s linear infinite; }
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .kinetic-header { padding: 2rem 0; }
      .kinetic-nav-bar { display: flex; justify-content: space-between; align-items: center; }
      .kinetic-logo { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; letter-spacing: 0.05em; color: #ffffff; }
      .kinetic-pulse-badge { display: flex; align-items: center; gap: 0.5rem; background: rgba(255, 0, 127, 0.15); border: 1px solid rgba(255, 0, 127, 0.4); padding: 0.35rem 0.9rem; border-radius: 20px; font-size: 0.78rem; font-weight: 700; color: #ff007f; }
      .k-pulse-dot { width: 8px; height: 8px; background: #ff007f; border-radius: 50%; box-shadow: 0 0 10px #ff007f; }
      .btn-kinetic-cta { background: #ff007f; color: #ffffff; font-weight: 800; font-size: 0.85rem; padding: 0.6rem 1.4rem; border-radius: 6px; }
      .kinetic-main { padding-bottom: 6rem; display: flex; flex-direction: column; gap: 5rem; }
      .kinetic-hero { padding: 2rem 0; }
      .kinetic-mega-headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 8vw, 6.5rem); line-height: 0.95; letter-spacing: 0.02em; background: linear-gradient(135deg, #ffffff 40%, #ff007f 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1.5rem; }
      .kinetic-bio { font-size: 1.15rem; color: #a099b2; line-height: 1.7; max-width: 850px; margin-bottom: 2.5rem; }
      .kinetic-stats-deck { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid rgba(255, 0, 127, 0.2); padding-top: 2rem; }
      .k-stat strong { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #ff007f; display: block; line-height: 1; }
      .k-stat span { font-size: 0.78rem; text-transform: uppercase; color: #a099b2; font-weight: 600; }
      .carousel-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; }
      .kinetic-kicker { font-size: 0.75rem; letter-spacing: 0.15em; font-weight: 800; color: #ff007f; display: block; margin-bottom: 0.3rem; }
      .carousel-header h2, .kinetic-sec-head h2 { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; letter-spacing: 0.05em; color: #ffffff; }
      .carousel-controls { display: flex; gap: 0.6rem; }
      .c-btn { width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); color: #ffffff; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255, 255, 255, 0.15); transition: all 0.2s; }
      .c-btn:hover { background: #ff007f; border-color: #ff007f; }
      .kinetic-carousel-wrapper { overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding-bottom: 1rem; }
      .kinetic-carousel-wrapper::-webkit-scrollbar { display: none; }
      .kinetic-carousel-track { display: flex; gap: 1.8rem; }
      .kinetic-reel-card { min-width: 340px; flex-shrink: 0; scroll-snap-align: start; background: #120c24; border: 1px solid rgba(255, 0, 127, 0.2); border-radius: 14px; overflow: hidden; }
      .kinetic-reel-card img { width: 100%; aspect-ratio: 16/10; }
      .k-reel-body { padding: 1.5rem; }
      .k-reel-body h3 { font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 0.4rem; }
      .k-reel-body p { font-size: 0.88rem; color: #a099b2; }
      .kinetic-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.8rem; }
      .k-pkg { background: #120c24; border: 1px solid rgba(255, 0, 127, 0.2); border-radius: 14px; padding: 2rem; }
      .k-price { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; color: #ff007f; margin: 0.8rem 0 1.2rem; }
      .kinetic-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.8rem; }
      .k-rev { background: #120c24; border: 1px solid rgba(255, 0, 127, 0.2); border-radius: 14px; padding: 2rem; }
      .kinetic-contact-card { background: #120c24; border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 16px; padding: 3rem; }
      .kinetic-form input, .kinetic-form textarea { width: 100%; background: #080310; border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 0.85rem; color: #ffffff; margin-bottom: 1rem; }
      .k-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .btn-k-submit { background: #ff007f; color: #ffffff; font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem; letter-spacing: 0.05em; padding: 0.85rem 2.5rem; border-radius: 8px; }
      .kinetic-footer { border-top: 1px solid rgba(255, 0, 127, 0.2); padding: 3rem 0; font-size: 0.85rem; color: #a099b2; }
      .k-footer-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      @media (max-width: 850px) { .kinetic-stats-deck { grid-template-columns: 1fr 1fr; } .k-form-row { grid-template-columns: 1fr; } .kinetic-reel-card { min-width: 280px; } }
      `;

    // -------------------------------------------------------------
    // CSS 10: Terminal Monospace CLI
    // -------------------------------------------------------------
    case "template-10":
      return `${baseReset}
      body { background: #050505; color: #22c55e; font-family: 'Fira Code', 'JetBrains Mono', monospace; min-height: 100vh; padding: 2rem 1rem; }
      .terminal-shell { max-width: 1000px; margin: 0 auto; }
      .terminal-window { background: #0d1117; border: 1px solid #30363d; border-radius: 8px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9); overflow: hidden; }
      .terminal-titlebar { background: #161b22; border-bottom: 1px solid #30363d; padding: 0.65rem 1rem; display: flex; justify-content: space-between; align-items: center; }
      .window-controls { display: flex; gap: 0.45rem; }
      .w-btn { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
      .w-close { background: #ff5f56; } .w-min { background: #ffbd2e; } .w-max { background: #27c93f; }
      .window-title { font-size: 0.78rem; color: #8b949e; }
      .window-status { font-size: 0.72rem; color: #22c55e; font-weight: 700; display: flex; align-items: center; gap: 0.35rem; }
      .term-status-dot { width: 6px; height: 6px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 6px #22c55e; }
      .cli-shortcuts-bar { background: #11161d; border-bottom: 1px solid #21262d; padding: 0.5rem 1rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
      .shortcut-label { font-size: 0.72rem; color: #8b949e; font-weight: 700; margin-right: 0.3rem; }
      .cli-btn { background: #21262d; border: 1px solid #30363d; color: #c9d1d9; font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 4px; font-family: inherit; }
      .cli-btn:hover { background: #30363d; color: #22c55e; border-color: #22c55e; }
      .terminal-body { padding: 1.5rem; min-height: 520px; font-size: 0.88rem; line-height: 1.6; }
      .ascii-art { font-size: 0.7rem; color: #22c55e; margin-bottom: 1rem; overflow-x: auto; }
      .term-line { margin-bottom: 0.6rem; color: #e6edf3; }
      .intro-line { color: #8b949e; }
      .t-code { background: rgba(34, 197, 94, 0.15); color: #22c55e; padding: 0.1rem 0.3rem; border-radius: 3px; }
      .t-prompt { color: #58a6ff; font-weight: 700; margin-right: 0.4rem; }
      .prompt-demo { color: #8b949e; }
      .response-line { color: #58a6ff; margin-bottom: 1.2rem; }
      .terminal-input-row { display: flex; align-items: center; margin-top: 1rem; }
      .terminal-input-field { flex: 1; background: transparent; border: none; color: #22c55e; font-family: inherit; font-size: 0.95rem; outline: none; }
      .blinking-cursor { color: #22c55e; animation: blink 1s infinite; margin-left: 2px; }
      @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
      .term-cmd-echo { color: #e6edf3; margin-top: 0.8rem; }
      .term-cmd-res { margin-bottom: 1rem; }
      .cli-card-block { background: #161b22; border: 1px solid #30363d; border-radius: 4px; padding: 0.8rem 1rem; margin: 0.5rem 0; color: #c9d1d9; }
      .cli-card-title { color: #22c55e; font-weight: 700; }
      .terminal-footer { margin-top: 1.5rem; font-size: 0.78rem; color: #6e7681; }
      .term-footer-flex { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem; }
      @media (max-width: 600px) { .ascii-art { display: none; } }
      `;
    default:
      return baseReset;
  }
}

function getArchetypeJS(prof, variant) {
  const commonDataFetch = `
// Universal Data Hydration Engine with File:// Fallback
const FALLBACK_DATA = ${JSON.stringify(prof, null, 2)};

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
`;

  const attributionClause = `
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
    wrap.innerHTML = \`
      <a href="\${targetUrl}" target="_blank" rel="noopener" class="infra-trust-badge" id="infra-trust-link">
        <span class="badge-icon">⚡</span>
        <span class="badge-text">Web Architecture by <strong>AI BuildInfra</strong></span>
        <span class="badge-score">100</span>
      </a>
    \`;
  }
}
`;

  switch(variant.variantId) {
    // -------------------------------------------------------------
    // JS 01: Obsidian Dark (With EXIF Lightbox Modal)
    // -------------------------------------------------------------
    case "template-01":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="metric-card">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  // Gallery
  const itemsGrid = document.getElementById('items-grid');
  itemsGrid.innerHTML = data.items.map((item, idx) => \`
    <article class="obsidian-item-card" onclick="openLightbox(\${idx})">
      <div class="item-media">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <span class="item-exif-pill">\${item.meta}</span>
      </div>
      <div class="item-caption">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  // Packages
  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="obsidian-pkg-card">
      <h3>\${p.name}</h3>
      <div class="pkg-price">\${p.price}</div>
      <ul class="pkg-features">\${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}</ul>
      <a href="#contact" class="btn-obsidian-inquire">Inquire &gt;</a>
    </div>
  \`).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="obsidian-rev-card">
      <p class="rev-quote">"\${r.quote}"</p>
      <div class="rev-author">\${r.author}</div>
      <div class="rev-role">\${r.role}</div>
    </div>
  \`).join('');

  window._obsidianItems = data.items;
  ensureAttributionBadge();
}

function openLightbox(idx) {
  const item = window._obsidianItems[idx];
  if (!item) return;
  document.getElementById('lightbox-img').src = item.img;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('lightbox-desc').textContent = item.desc;
  document.getElementById('lightbox-exif').textContent = item.meta;
  document.getElementById('lightbox-modal').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 02: Nordic Light
    // -------------------------------------------------------------
    case "template-02":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="nordic-metric">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  // Items
  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="nordic-work-card">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <h4>\${item.title}</h4>
      <p>\${item.desc}</p>
    </article>
  \`).join('');

  // Packages
  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="nordic-pkg">
      <div class="nordic-pkg-left">
        <h4>\${p.name}</h4>
        <ul>\${p.features.map(f => \`<li>— \${f}</li>\`).join('')}</ul>
      </div>
      <div class="nordic-pkg-price">\${p.price}</div>
    </div>
  \`).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="nordic-rev-item">
      <p class="nordic-quote">"\${r.quote}"</p>
      <p class="nordic-author">— \${r.author}, \${r.role}</p>
    </div>
  \`).join('');

  ensureAttributionBadge();
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 03: Bento Grid (Live Clock & Dynamic Widget Hydration)
    // -------------------------------------------------------------
    case "template-03":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="bento-stat">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  // Items
  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="bento-item-tile">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="bento-tile-body">
        <h4>\${item.title}</h4>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  // Packages
  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="bento-pkg-tile">
      <h5>\${p.name}</h5>
      <div class="bento-pkg-price">\${p.price}</div>
    </div>
  \`).join('');

  // Reviews
  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="bento-rev-item">
      <p class="bento-rev-quote">"\${r.quote}"</p>
      <span class="bento-rev-by">\${r.author} &bull; \${r.role}</span>
    </div>
  \`).join('');

  // Start live clock
  updateClock();
  setInterval(updateClock, 1000);

  ensureAttributionBadge();
}

function updateClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + " LOCAL";
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 04: Glassmorphic Aura (With Cursor Glow Follower)
    // -------------------------------------------------------------
    case "template-04":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="g-stat">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="glass-item-tile">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="g-item-info">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="glass-pkg">
      <h3>\${p.name}</h3>
      <div class="g-price">\${p.price}</div>
      <ul>\${p.features.map(f => \`<li>✦ \${f}</li>\`).join('')}</ul>
      <a href="#contact" class="glass-cta-pill">Inquire &gt;</a>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="g-rev">
      <p class="g-rev-q">"\${r.quote}"</p>
      <span class="g-rev-a">\${r.author} &bull; \${r.role}</span>
    </div>
  \`).join('');

  // Mouse move follower
  const glow = document.getElementById('cursor-glow');
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  ensureAttributionBadge();
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 05: Neo-Brutalist
    // -------------------------------------------------------------
    case "template-05":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="raw-stat">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="brutal-card">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="brutal-body">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="brutal-pkg">
      <h3>\${p.name}</h3>
      <div class="b-price">\${p.price}</div>
      <ul>\${p.features.map(f => \`<li>✔ \${f}</li>\`).join('')}</ul>
      <a href="#contact" class="b-cta-btn">GET THIS ➔</a>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="brutal-rev">
      <p class="brutal-rev-q">"\${r.quote}"</p>
      <span class="brutal-rev-a">★ \${r.author} (\${r.role})</span>
    </div>
  \`).join('');

  ensureAttributionBadge();
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 06: Split-Screen Studio (With Right Pane Scroll Spy)
    // -------------------------------------------------------------
    case "template-06":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="split-m-card">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="split-item">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="split-item-body">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="split-pkg">
      <div>
        <h3>\${p.name}</h3>
        <span style="font-size:0.8rem; color:#8b949e;">\${p.features.join(' • ')}</span>
      </div>
      <div class="split-pkg-price">\${p.price}</div>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="split-rev">
      <p class="split-rev-q">"\${r.quote}"</p>
      <span style="font-weight:700; color:#d4af37; font-size:0.85rem;">\${r.author} &bull; \${r.role}</span>
    </div>
  \`).join('');

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

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 07: Sidebar App (Tab Viewport Switcher)
    // -------------------------------------------------------------
    case "template-07":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="app-stat-tile">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="app-proj-card">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="app-proj-body">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="app-pkg">
      <h3>\${p.name}</h3>
      <div class="app-pkg-price">\${p.price}</div>
      <ul style="list-style:none; font-size:0.85rem; color:#94a3b8; margin-bottom:1rem;">
        \${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}
      </ul>
      <button class="btn-app-action" onclick="switchAppTab('tab-contact')">Inquire</button>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="app-rev">
      <p>"\${r.quote}"</p>
      <span style="color:#38bdf8; font-weight:700; margin-top:0.4rem; display:block;">\${r.author} &bull; \${r.role}</span>
    </div>
  \`).join('');

  // Setup tab buttons
  document.querySelectorAll('.dock-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchAppTab(btn.dataset.tab));
  });

  ensureAttributionBadge();
}

function switchAppTab(tabId) {
  document.querySelectorAll('.app-viewport').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.dock-tab-btn').forEach(b => b.classList.remove('active'));
  
  const targetView = document.getElementById(tabId);
  const targetBtn = document.querySelector(\`[data-tab="\${tabId}"]\`);
  if (targetView) targetView.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  const labelMap = {
    'tab-overview': 'Overview',
    'tab-works': 'Projects',
    'tab-services': 'Services & Rates',
    'tab-contact': 'Contact'
  };
  const labelEl = document.getElementById('app-view-label');
  if (labelEl) labelEl.textContent = labelMap[tabId] || 'Workspace';
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 08: Magazine Serif
    // -------------------------------------------------------------
    case "template-08":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="mag-stat">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="mag-work-plate">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <h3>\${item.title}</h3>
      <p>\${item.desc}</p>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="mag-pkg">
      <h3>\${p.name}</h3>
      <div class="mag-price">\${p.price}</div>
      <p style="font-size:0.85rem; color:#a8a096;">\${p.features.join(' &bull; ')}</p>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="mag-rev">
      <p class="mag-quote">"\${r.quote}"</p>
      <span style="font-size:0.85rem; color:#e2b17a; font-weight:700;">— \${r.author}, \${r.role}</span>
    </div>
  \`).join('');

  ensureAttributionBadge();
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 09: Kinetic Motion (Draggable / Navigable Carousel)
    // -------------------------------------------------------------
    case "template-09":
      return `${commonDataFetch}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('metrics-grid').innerHTML = data.stats.map(s => \`
    <div class="k-stat">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  document.getElementById('items-grid').innerHTML = data.items.map(item => \`
    <article class="kinetic-reel-card">
      <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      <div class="k-reel-body">
        <h3>\${item.title}</h3>
        <p>\${item.desc}</p>
      </div>
    </article>
  \`).join('');

  document.getElementById('packages-grid').innerHTML = data.packages.map(p => \`
    <div class="k-pkg">
      <h3>\${p.name}</h3>
      <div class="k-price">\${p.price}</div>
      <p style="font-size:0.85rem; color:#a099b2;">\${p.features.join(' &bull; ')}</p>
    </div>
  \`).join('');

  document.getElementById('reviews-grid').innerHTML = data.reviews.map(r => \`
    <div class="k-rev">
      <p style="font-style:italic; margin-bottom:0.5rem;">"\${r.quote}"</p>
      <span style="font-weight:700; color:#ff007f;">\${r.author} &bull; \${r.role}</span>
    </div>
  \`).join('');

  // Carousel controls
  const prevBtn = document.getElementById('c-prev');
  const nextBtn = document.getElementById('c-next');
  const wrapper = document.getElementById('carousel-wrapper');
  if (prevBtn && nextBtn && wrapper) {
    prevBtn.addEventListener('click', () => wrapper.scrollBy({ left: -360, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => wrapper.scrollBy({ left: 360, behavior: 'smooth' }));
  }

  ensureAttributionBadge();
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;

    // -------------------------------------------------------------
    // JS 10: Terminal Monospace CLI (Real Interactive Bash Shell)
    // -------------------------------------------------------------
    case "template-10":
      return `${commonDataFetch}

let termData = null;

function initSite(data) {
  termData = data;
  const termYear = document.getElementById('term-year');
  if (termYear) termYear.textContent = new Date().getFullYear();

  const input = document.getElementById('terminal-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        if (cmd) {
          executeCommand(cmd);
          input.value = '';
        }
      }
    });
  }

  ensureAttributionBadge();
}

function runCommand(cmd) {
  executeCommand(cmd);
}

function executeCommand(cmd) {
  const history = document.getElementById('terminal-history');
  if (!history || !termData) return;

  const normalized = cmd.toLowerCase().trim();
  let output = '';

  if (normalized === 'clear' || normalized === 'cls') {
    history.innerHTML = '';
    return;
  } else if (normalized === 'help' || normalized === '?') {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">AVAILABLE SYSTEM COMMANDS:</span><br>
        &bull; <strong>help</strong>          &mdash; Display this command dictionary<br>
        &bull; <strong>bio / about</strong>   &mdash; Read \${termData.name}'s professional ethos<br>
        &bull; <strong>projects / ls</strong> &mdash; List selected case studies & works<br>
        &bull; <strong>stats</strong>         &mdash; Query verified career metrics<br>
        &bull; <strong>rates / packages</strong> &mdash; View cooperation tiers & deliverables<br>
        &bull; <strong>reviews</strong>       &mdash; Print client endorsements<br>
        &bull; <strong>contact</strong>       &mdash; Display direct consultation hotline<br>
        &bull; <strong>clear</strong>         &mdash; Wipe console screen
      </div>
    \`;
  } else if (normalized.includes('bio') || normalized.includes('about')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">USER PROFILE: \${termData.name}</span><br>
        <span style="color:#58a6ff;">ROLE: \${termData.title}</span><br>
        <p style="margin-top:0.4rem; color:#e6edf3;">\${termData.bio}</p>
      </div>
    \`;
  } else if (normalized.includes('project') || normalized === 'ls' || normalized.includes('work')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">DIRECTORY LISTING: /var/showcase/</span>
        \${termData.items.map(item => \`
          <div style="margin-top:0.5rem; padding-top:0.4rem; border-top:1px solid #30363d;">
            <span style="color:#58a6ff; font-weight:700;">&bull; \${item.title}</span> [\${item.tag}]<br>
            <span style="color:#8b949e; font-size:0.8rem;">\${item.desc}</span><br>
            <span style="color:#22c55e; font-size:0.75rem;">META: \${item.meta}</span>
          </div>
        \`).join('')}
      </div>
    \`;
  } else if (normalized.includes('stat') || normalized.includes('metric')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">VERIFIED SYSTEM METRICS:</span><br>
        \${termData.stats.map(s => \`
          &bull; <strong style="color:#22c55e;">\${s.val}</strong> &mdash; \${s.label}<br>
        \`).join('')}
      </div>
    \`;
  } else if (normalized.includes('rate') || normalized.includes('package') || normalized.includes('price')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">COMMISSION TIERS: packages.json</span>
        \${termData.packages.map(p => \`
          <div style="margin-top:0.5rem;">
            <strong style="color:#58a6ff;">[\${p.name}]</strong> &mdash; <span style="color:#22c55e; font-weight:700;">\${p.price}</span><br>
            <span style="color:#8b949e; font-size:0.8rem;">Deliverables: \${p.features.join(' | ')}</span>
          </div>
        \`).join('')}
      </div>
    \`;
  } else if (normalized.includes('review') || normalized.includes('testimonial')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">CLIENT ENDORSEMENTS:</span>
        \${termData.reviews.map(r => \`
          <div style="margin-top:0.4rem;">
            <p style="font-style:italic;">"\${r.quote}"</p>
            <span style="color:#58a6ff;">&mdash; \${r.author} (\${r.role})</span>
          </div>
        \`).join('')}
      </div>
    \`;
  } else if (normalized.includes('contact')) {
    output = \`
      <div class="cli-card-block">
        <span class="cli-card-title">DIRECT CONTACT DISPATCH:</span><br>
        &bull; <strong>Email:</strong> \${termData.email}<br>
        &bull; <strong>Phone:</strong> \${termData.phone}<br>
        &bull; <strong>Location:</strong> \${termData.location}<br>
        <p style="color:#22c55e; margin-top:0.4rem;">Status: Desk actively receiving incoming submissions.</p>
      </div>
    \`;
  } else {
    output = \`<p style="color:#f85149;">bash: \${cmd}: command not recognized. Type <code class="t-code">help</code> for options.</p>\`;
  }

  const logEntry = document.createElement('div');
  logEntry.innerHTML = \`
    <div class="term-cmd-echo"><span class="t-prompt">$</span> \${cmd}</div>
    <div class="term-cmd-res">\${output}</div>
  \`;
  history.appendChild(logEntry);

  const screen = document.getElementById('terminal-screen');
  if (screen) screen.scrollTop = screen.scrollHeight;
}

${attributionClause}
document.addEventListener('DOMContentLoaded', loadData);
`;
    default:
      return `${commonDataFetch}
      function initSite(data) {
        document.getElementById('brand-name').textContent = data.name;
        ensureAttributionBadge();
      }
      ${attributionClause}
      document.addEventListener('DOMContentLoaded', loadData);
      `;
  }
}

module.exports = {
  getArchetypeHTML,
  getArchetypeCSS,
  getArchetypeJS
};

