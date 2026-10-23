// ==========================================================================
// Domain-Specific Archetype Generators for Specialized Professions
// Replaces generic bash terminals and mismatched templates with 100%
// authentic, credible, profession-relevant designs.
// ==========================================================================

function getDomainTemplate10HTML(prof, variant, commonHead, trustBadge) {
  switch (prof.id) {
    // ------------------------------------------------------------------------
    // 01. PHOTOGRAPHER: 35mm Analog Film Contact Sheet & Darkroom Loupe Studio
    // ------------------------------------------------------------------------
    case "01-photographer":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-darkroom safelight-red">
  <header class="darkroom-header">
    <div class="darkroom-bar">
      <div class="film-brand-stamp">
        <span class="film-code">ILFORD HP5 PLUS 400</span>
        <span class="film-exp">SAFETY FILM &bull; 36 EXP</span>
      </div>
      <div class="safelight-controls">
        <span class="safelight-label">DARKROOM ILLUMINATION:</span>
        <button class="safelight-btn active" id="btn-safelight-red" onclick="setSafelight('red')">🔴 Red Safelight</button>
        <button class="safelight-btn" id="btn-safelight-white" onclick="setSafelight('white')">⚪ Daylight Proof</button>
      </div>
      <a href="#inquire" class="darkroom-cta">Commission Prints &rarr;</a>
    </div>
  </header>

  <main class="darkroom-viewport">
    <div class="sprocket-track">
      ${Array.from({length: 24}).map(() => `<span class="sprocket-hole"></span>`).join('')}
    </div>

    <div class="contact-sheet-board">
      <div class="sheet-title-stamp">
        <div class="stamp-meta">
          <h1>${prof.name} &mdash; MASTER CONTACT SHEET</h1>
          <p>${prof.title} &bull; ${prof.headline}</p>
        </div>
        <div class="stamp-batch">
          <span>ROLL #2026-B</span>
          <span>DEV: D-76 (1:1) @ 20&deg;C</span>
          <span>DATE: ${new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div class="frames-grid" id="contact-frames-grid"></div>

      <div class="darkroom-specs-strip">
        <div class="spec-cell">
          <span class="sc-label">EMULSION STOCK</span>
          <strong class="sc-val">Silver Gelatin Fiber (Baryta)</strong>
        </div>
        <div class="spec-cell">
          <span class="sc-label">CAMERA PLATFORMS</span>
          <strong class="sc-val">Hasselblad X2D 100C &bull; Leica M11</strong>
        </div>
        <div class="spec-cell">
          <span class="sc-label">CHEMISTRY DEV</span>
          <strong class="sc-val">Kodak D-76 &bull; Ilfostop &bull; Rapid Fixer</strong>
        </div>
        <div class="spec-cell">
          <span class="sc-label">EDITION RUNS</span>
          <strong class="sc-val">Archival 1/15 Signed Fine Art Plates</strong>
        </div>
      </div>
    </div>

    <div class="sprocket-track">
      ${Array.from({length: 24}).map(() => `<span class="sprocket-hole"></span>`).join('')}
    </div>

    <div id="loupe-modal" class="loupe-modal" onclick="closeLoupeModal()">
      <div class="loupe-content" onclick="event.stopPropagation()">
        <button class="loupe-close" onclick="closeLoupeModal()">&times;</button>
        <div class="loupe-view" id="loupe-view">
          <img id="loupe-img" src="" alt="Enlarged Proof">
        </div>
        <div class="loupe-caption" id="loupe-caption"></div>
      </div>
    </div>

    <section class="darkroom-inquiry" id="inquire">
      <div class="container">
        <div class="inquiry-card">
          <h2>Order Archival Gelatin Silver Prints &amp; Commissions</h2>
          <p>Every print is hand-developed in our San Francisco darkroom, washed for 60 minutes in archival siphon washers, selenium toned for permanence, and mounted on 100% cotton museum rag board.</p>
          <div class="edition-tiers" id="edition-tiers"></div>
          <div class="inquiry-form-wrap">
            <form onsubmit="handleInquiry(event)">
              <div class="form-row">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Email Address" required>
              </div>
              <input type="text" placeholder="Desired Print Title or Shoot Brief" required>
              <button type="submit" class="btn-darkroom-submit">Submit Print Inquiry &rarr;</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="darkroom-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. All darkroom negatives registered with the Fine Art Guild.</p>
      ${trustBadge}
    </div>
  </footer>

  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 02. DOCTOR: Clinical Case Files & Medical Board Dossier
    // ------------------------------------------------------------------------
    case "02-doctor":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-clinical">
  <header class="clinical-header">
    <div class="container clinical-header-inner">
      <div class="clinical-id">
        <span class="caduceus">🩺</span>
        <div>
          <h1>${prof.name}</h1>
          <span class="clinical-sub">${prof.title} &bull; LICENSED ATTENDING PHYSICIAN</span>
        </div>
      </div>
      <div class="clinical-affiliations">
        <span class="affil-tag">Mount Sinai Hospital</span>
        <span class="affil-tag">NYU Langone Medical</span>
        <a href="#requisition" class="btn-triage-book">Schedule Consultation</a>
      </div>
    </div>
  </header>

  <main class="container clinical-main">
    <section class="clinical-memo-block">
      <div class="memo-header">
        <div class="memo-title">CLINICAL DOSSIER &bull; INTERVENTIONAL CARDIOLOGY DIVISION</div>
        <div class="memo-meta">REF: NY-MED-CARD-2026 &bull; CONFIDENTIAL MEDICAL RECORD</div>
      </div>
      <div class="memo-body">
        <div class="memo-lead">
          <h2>${prof.headline}</h2>
          <p>${prof.bio}</p>
        </div>
        <div class="clinical-metrics-grid" id="clinical-metrics"></div>
      </div>
    </section>

    <section class="clinical-registry-section">
      <div class="section-badge-clinical">SECTION I &bull; PROCEDURAL SPECIALTIES &amp; INTERVENTIONS</div>
      <div class="registry-grid" id="cases-grid"></div>
    </section>

    <section class="clinical-requisition-section" id="requisition">
      <div class="requisition-card">
        <div class="req-head">
          <span class="req-seal">🏥</span>
          <div>
            <h3>Consultation Requisition &amp; Patient Triage Intake</h3>
            <p>For urgent acute symptoms, please dial 911 immediately. For outpatient evaluations and elective cardiac catheterization second opinions, submit below.</p>
          </div>
        </div>
        <div class="packages-clinical" id="clinical-packages"></div>
        <form class="clinical-form" onsubmit="handleClinicalSubmit(event)">
          <div class="c-row">
            <input type="text" placeholder="Patient Full Legal Name" required>
            <input type="tel" placeholder="Contact Phone Number" required>
          </div>
          <div class="c-row">
            <input type="email" placeholder="Email Address" required>
            <select required>
              <option value="">Select Primary Clinical Indication</option>
              <option value="coronary">Coronary Artery Disease / Angina</option>
              <option value="prevention">Preventive Cardiac Risk &amp; Calcium Scoring</option>
              <option value="valve">Structural Heart &amp; Valve Evaluation</option>
              <option value="second-opinion">Catheterization Second Opinion</option>
            </select>
          </div>
          <button type="submit" class="btn-clinical-submit">Submit Formal Requisition &rarr;</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="clinical-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Board Certified in Interventional Cardiology &bull; HIPAA Compliant.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 03. UI/UX DESIGNER: Design System Token Studio & Component Sandbox
    // ------------------------------------------------------------------------
    case "03-ui-ux-designer":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-figma-studio">
  <header class="figma-top-bar">
    <div class="figma-brand">
      <span class="figma-icon">❖</span>
      <span class="figma-file-title">${prof.name} &mdash; Design System &amp; Product Portfolio</span>
      <span class="figma-version-pill">v4.8 Production</span>
    </div>
    <div class="figma-viewport-controls">
      <button class="vp-btn active" onclick="setCanvasWidth('desktop')">🖥️ Desktop 1440</button>
      <button class="vp-btn" onclick="setCanvasWidth('tablet')">📱 Tablet 768</button>
      <button class="vp-btn" onclick="setCanvasWidth('mobile')">📱 Mobile 390</button>
    </div>
    <div class="figma-actions">
      <a href="#contact" class="btn-share-spec">Hire Designer &nearr;</a>
    </div>
  </header>

  <div class="figma-workspace">
    <aside class="figma-token-sidebar">
      <div class="token-sidebar-header">DESIGN TOKENS</div>
      <div class="token-group">
        <span class="token-group-title">COLOR PALETTE</span>
        <div class="token-swatches">
          <div class="token-swatch" style="background: #3b82f6;" title="Primary / 500"><span>#3b82f6</span></div>
          <div class="token-swatch" style="background: #10b981;" title="Success / 500"><span>#10b981</span></div>
          <div class="token-swatch" style="background: #f59e0b;" title="Warning / 500"><span>#f59e0b</span></div>
          <div class="token-swatch" style="background: #ef4444;" title="Danger / 500"><span>#ef4444</span></div>
          <div class="token-swatch" style="background: #0f172a;" title="Slate / 900"><span>#0f172a</span></div>
        </div>
      </div>
      <div class="token-group">
        <span class="token-group-title">TYPOGRAPHY TOKENS</span>
        <div class="token-text-scale">
          <div class="token-row"><span>Display:</span><strong>Inter 48px / -0.02em</strong></div>
          <div class="token-row"><span>Heading:</span><strong>Inter 24px / 600</strong></div>
          <div class="token-row"><span>Body:</span><strong>Inter 15px / 1.6</strong></div>
          <div class="token-row"><span>Code:</span><strong>JetBrains Mono 13px</strong></div>
        </div>
      </div>
      <div class="token-group">
        <span class="token-group-title">COMPONENT PLAYGROUND</span>
        <div class="interactive-sandbox-box">
          <label style="font-size: 0.72rem; color: #a1a1aa; display: block; margin-bottom: 0.4rem;">Button State Switcher:</label>
          <div class="sandbox-buttons">
            <button class="preview-btn state-default">Primary</button>
            <button class="preview-btn state-hover">Hover</button>
            <button class="preview-btn state-active">Active</button>
          </div>
        </div>
      </div>
    </aside>

    <main class="figma-canvas-viewport" id="figma-canvas">
      <div class="artboard-frame" id="artboard-frame">
        <div class="artboard-titlebar">
          <span class="artboard-name">Frame: Case Studies &amp; Design Architecture</span>
          <span class="artboard-dim" id="artboard-dim">1440 &times; 2800</span>
        </div>
        <div class="artboard-inner">
          <section class="canvas-hero">
            <span class="canvas-chip">${prof.title}</span>
            <h1 class="canvas-h1">${prof.headline}</h1>
            <p class="canvas-bio">${prof.bio}</p>
            <div class="canvas-metrics" id="canvas-metrics"></div>
          </section>
          <section class="canvas-cases">
            <div class="canvas-section-head">
              <h2>Shipped Product Case Studies</h2>
              <p>End-to-end design architectures with quantified business impacts.</p>
            </div>
            <div class="canvas-cases-grid" id="cases-grid"></div>
          </section>
          <section class="canvas-services" id="contact">
            <div class="canvas-section-head">
              <h2>Design System &amp; Product Sprints</h2>
            </div>
            <div class="canvas-packages" id="packages-grid"></div>
          </section>
        </div>
      </div>
    </main>
  </div>

  <footer class="figma-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Product Design &amp; Scalable Multi-Brand Design Systems.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 05. GAMER: Esports Battle Station HUD & Stream Radar
    // ------------------------------------------------------------------------
    case "05-gamer":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-esports">
  <header class="hud-top-bar">
    <div class="container hud-inner">
      <div class="hud-streamer-tag">
        <span class="live-dot pulse"></span>
        <span class="hud-callsign">${prof.name}</span>
        <span class="hud-clan-tag">[VIPER]</span>
      </div>
      <div class="hud-ticker">
        <span class="ticker-label">BROADCAST RADAR:</span>
        <span class="ticker-val">TWITCH PARTNER &bull; 1080P 60FPS LOW-LATENCY</span>
      </div>
      <a href="#rig" class="btn-hud-rig">Hardware Specs &rarr;</a>
    </div>
  </header>

  <main class="container hud-main">
    <section class="hud-hero-box">
      <div class="hud-hero-grid">
        <div class="hud-hero-left">
          <span class="hud-kicker">&bull; PRO ESPORTS &amp; BROADCAST PROFILE &bull;</span>
          <h1 class="hud-headline">${prof.headline}</h1>
          <p class="hud-bio">${prof.bio}</p>
          <div class="hud-stats-radar" id="hud-stats"></div>
        </div>
        <div class="hud-hero-right">
          <div class="hud-stream-window">
            <img src="${prof.heroImage}" alt="${prof.name}" class="hud-poster-img">
            <div class="hud-overlay-elements">
              <span class="hud-online-badge">&#9679; LIVE SCENE</span>
              <span class="hud-res-badge">360Hz PRO</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hud-section">
      <div class="hud-section-header">
        <h2>Tournament Trophies &amp; Match Highlights</h2>
        <span class="hud-bracket-status">ACTIVE TIER 1 CIRCUIT</span>
      </div>
      <div class="hud-cards-grid" id="hud-cards"></div>
    </section>

    <section class="hud-rig-section" id="rig">
      <div class="hud-section-header">
        <h2>Battlestation Hardware Specifications</h2>
        <span class="hud-bracket-status">ZERO-BOTTLENECK WORKSTATION</span>
      </div>
      <div class="rig-specs-grid">
        <div class="rig-card">
          <span class="rig-icon">⚡</span>
          <h4>Processor</h4>
          <p>AMD Ryzen 9 7950X3D (16-Core, 5.7GHz Boost)</p>
        </div>
        <div class="rig-card">
          <span class="rig-icon">🎮</span>
          <h4>Graphics Engine</h4>
          <p>NVIDIA GeForce RTX 4090 24GB GDDR6X</p>
        </div>
        <div class="rig-card">
          <span class="rig-icon">🖥️</span>
          <h4>Display Monitor</h4>
          <p>ASUS ROG Swift 360Hz QD-OLED 0.03ms G-Sync</p>
        </div>
        <div class="rig-card">
          <span class="rig-icon">🎧</span>
          <h4>Audio &amp; Mic</h4>
          <p>Shure SM7B + GoXLR + Sennheiser HD660S</p>
        </div>
      </div>
    </section>

    <section class="hud-sponsors-section">
      <div class="hud-packages-grid" id="hud-packages"></div>
    </section>
  </main>

  <footer class="hud-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Esports Professional &amp; Verified Twitch Partner.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 06. ARCHITECT: Cyan Blueprint & Architectural CAD Spec
    // ------------------------------------------------------------------------
    case "06-architect":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-blueprint">
  <header class="blueprint-header">
    <div class="container blueprint-header-inner">
      <div class="blueprint-stamp-box">
        <span class="bp-code">DWG NO: ARCH-2026-X</span>
        <h1>${prof.name} &bull; STUDIO DE ARCHITECTURA</h1>
      </div>
      <div class="blueprint-nav-specs">
        <span>SCALE: 1:50</span>
        <span>STATUS: APPROVED</span>
        <a href="#commission" class="bp-cta">Commission Project &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container blueprint-viewport">
    <section class="blueprint-hero-plate">
      <div class="bp-hero-content">
        <span class="bp-kicker">ARCHITECTURAL SPECIFICATION &bull; RESIDENTIAL &amp; CULTURAL</span>
        <h2 class="bp-headline">${prof.headline}</h2>
        <p class="bp-bio">${prof.bio}</p>
        <div class="bp-metrics-docket" id="bp-metrics"></div>
      </div>
    </section>

    <section class="blueprint-plates-section">
      <div class="bp-section-stamp">
        <h3>ELEVATION PLATES &amp; MATERIALITY SCHEDULE</h3>
        <span>SECTION A-A &bull; RIBA / AIA REGISTERED ARCHITECT</span>
      </div>
      <div class="blueprint-plates-grid" id="blueprint-plates"></div>
    </section>

    <section class="blueprint-commission" id="commission">
      <div class="bp-comm-card">
        <h3>Architectural Engagement Tiers</h3>
        <p>Bespoke residential compounds, civic cultural institutions, and commercial master plans.</p>
        <div class="bp-packages-grid" id="bp-packages"></div>
      </div>
    </section>
  </main>

  <footer class="blueprint-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Registered Member American Institute of Architects (AIA).</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 07. LAWYER: Supreme Court Brief & Judicial Case Docket
    // ------------------------------------------------------------------------
    case "07-lawyer":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-judicial">
  <header class="judicial-header">
    <div class="container judicial-bar">
      <div class="judicial-seal">
        <span class="seal-icon">⚖️</span>
        <div>
          <h1>${prof.name}</h1>
          <span class="judicial-bar-num">${prof.title} &bull; STATE BAR OF NEW YORK</span>
        </div>
      </div>
      <div class="judicial-jurisdiction">
        <span>U.S. SUPREME COURT &bull; SDNY &bull; 2ND CIRCUIT</span>
        <a href="#retainer" class="btn-retainer">Retain Counsel &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container judicial-main">
    <section class="judicial-folio">
      <div class="folio-stamp">&sect; 1.01 MEMORANDUM OF JURISDICTION &amp; PRACTICE</div>
      <h2 class="judicial-headline">${prof.headline}</h2>
      <p class="judicial-bio">${prof.bio}</p>
      <div class="judicial-verdict-metrics" id="judicial-metrics"></div>
    </section>

    <section class="judicial-docket-section">
      <div class="docket-header">
        <h3>RECORD OF REPRESENTATIVE MATTERS &amp; VERDICTS</h3>
        <span>REPORTED IN FEDERAL &amp; ARBITRATION REPORTERS</span>
      </div>
      <div class="docket-grid" id="docket-grid"></div>
    </section>

    <section class="judicial-retainer-section" id="retainer">
      <div class="retainer-box">
        <h3>Privileged Legal Consultation &amp; Conflict Check</h3>
        <p>All inquiries are treated with strict attorney-client privilege. Representation begins upon execution of a formal retainer agreement.</p>
        <div class="retainer-tiers" id="retainer-tiers"></div>
        <form class="retainer-form" onsubmit="handleRetainerSubmit(event)">
          <div class="j-row">
            <input type="text" placeholder="Individual / Entity Legal Name" required>
            <input type="email" placeholder="Corporate Email Address" required>
          </div>
          <button type="submit" class="btn-retainer-submit">Submit Formal Conflict Intake &rarr;</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="judicial-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Attorney Advertising. Prior results do not guarantee similar outcomes.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 08. FITNESS TRAINER: Athletic Performance Log & Macro Periodization
    // ------------------------------------------------------------------------
    case "08-fitness-trainer":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-athletic">
  <header class="athletic-header">
    <div class="container athletic-bar">
      <div class="athletic-brand">
        <span class="ath-icon">⚡</span>
        <div>
          <h1>${prof.name}</h1>
          <span class="ath-cert">${prof.title} &bull; CSCS CERTIFIED</span>
        </div>
      </div>
      <div class="athletic-links">
        <a href="#macro-calc">Macro Calc</a>
        <a href="#coaching" class="btn-ath-cta">Apply for Coaching &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container athletic-main">
    <section class="ath-hero-plate">
      <span class="ath-kicker">ELITE STRENGTH &amp; CONDITIONING PROTOCOL</span>
      <h2 class="ath-headline">${prof.headline}</h2>
      <p class="ath-bio">${prof.bio}</p>
      <div class="ath-metrics-grid" id="ath-metrics"></div>
    </section>

    <section class="ath-tools-section" id="macro-calc">
      <div class="ath-tools-grid">
        <div class="tool-card">
          <h3>Interactive 1RM Strength Calculator</h3>
          <p>Estimate your one-rep max using the Brzycki Formula.</p>
          <div class="calc-inputs">
            <input type="number" id="calc-weight" placeholder="Weight (lbs)" value="225">
            <input type="number" id="calc-reps" placeholder="Reps Completed" value="5">
            <button onclick="calculate1RM()" class="btn-calc">Calculate 1RM</button>
          </div>
          <div class="calc-result" id="rm-result">Estimated 1RM: <strong>253 lbs</strong></div>
        </div>

        <div class="tool-card">
          <h3>Daily Macro Nutrient Estimator</h3>
          <p>Optimal target macros based on body composition goals.</p>
          <div class="macro-breakdown">
            <div class="macro-bar"><span class="m-lbl">Protein (40%)</span><span class="m-val">200g</span></div>
            <div class="macro-bar"><span class="m-lbl">Carbohydrates (35%)</span><span class="m-val">175g</span></div>
            <div class="macro-bar"><span class="m-lbl">Fats (25%)</span><span class="m-val">55g</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="ath-split-section">
      <div class="ath-section-head">
        <h3>Client Transformations &amp; Benchmark Metrics</h3>
      </div>
      <div class="split-cards-grid" id="split-cards"></div>
    </section>

    <section class="ath-coaching-section" id="coaching">
      <div class="coaching-card">
        <h3>1-on-1 High Performance Coaching Applications</h3>
        <p>Bespoke periodization programming, weekly biometric check-ins, and precision nutrition guidance.</p>
        <div class="ath-packages-grid" id="ath-packages"></div>
      </div>
    </section>
  </main>

  <footer class="athletic-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Certified Strength and Conditioning Specialist (CSCS).</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 09. CONTENT CREATOR: Creator Media Kit & Brand Sponsorship Deck
    // ------------------------------------------------------------------------
    case "09-content-creator":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-mediakit">
  <header class="mediakit-header">
    <div class="container mediakit-bar">
      <div class="mk-brand">
        <span class="mk-badge">MEDIA KIT</span>
        <h1>${prof.name}</h1>
      </div>
      <div class="mk-reach-badge">
        <span>VERIFIED REACH: 1.8M AUDIENCE</span>
        <a href="#sponsor" class="btn-sponsor">Partner With Aria &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container mediakit-main">
    <section class="mk-deck-hero">
      <div class="deck-lead">
        <span class="deck-kicker">OFFICIAL BRAND PARTNERSHIP DECK &bull; 2026</span>
        <h2>${prof.headline}</h2>
        <p>${prof.bio}</p>
      </div>
      <div class="deck-metrics-grid" id="deck-metrics"></div>
    </section>

    <section class="mk-cases-section">
      <div class="mk-section-head">
        <h3>Sponsored Campaign Highlights &amp; Video Portfolio</h3>
      </div>
      <div class="mk-cards-grid" id="mk-cards"></div>
    </section>

    <section class="mk-sponsor-section" id="sponsor">
      <div class="mk-sponsor-card">
        <h3>Integration Packages &amp; Deliverables</h3>
        <p>Dedicated YouTube integrations, multi-platform TikTok/Reels bundles, and brand ambassador licensing.</p>
        <div class="mk-packages-grid" id="mk-packages"></div>
      </div>
    </section>
  </main>

  <footer class="mediakit-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Verified Media Kit &bull; Managed by Underscore Talent.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 10. CHEF: Chalkboard Degustation Carte & Culinary Atelier
    // ------------------------------------------------------------------------
    case "10-chef":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-chalkboard">
  <header class="chalk-header">
    <div class="container chalk-bar">
      <div class="chalk-brand">
        <span class="chalk-symbol">🍽️</span>
        <div>
          <h1>${prof.name}</h1>
          <span class="chalk-sub">${prof.title} &bull; ATELIER DE GASTRONOMIE</span>
        </div>
      </div>
      <div class="chalk-nav">
        <a href="#carte">Degustation Carte</a>
        <a href="#reserve" class="btn-chalk-reserve">Reserve Table &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container chalk-main">
    <section class="chalk-carte-board" id="carte">
      <div class="chalk-dust-frame">
        <div class="chalk-heading">
          <h2>AUTUMN DEGUSTATION TASTING MENU</h2>
          <p class="chalk-lead">${prof.headline}</p>
          <div class="chalk-rules-decor">~ * ~</div>
        </div>
        <div class="chalk-courses-grid" id="chalk-courses"></div>
        <div class="chalk-sommelier-notes">
          <h4>Terroir &amp; Purveyor Commitments</h4>
          <p>All produce sourced from 100% biodynamic orchards in Île-de-France. Brittany coastal line-caught seafood. Natural, low-intervention wine pairings curated by Sommelier Claire Moreau.</p>
        </div>
      </div>
    </section>

    <section class="chalk-metrics-strip" id="chalk-metrics"></section>

    <section class="chalk-reserve-section" id="reserve">
      <div class="chalk-reserve-card">
        <h3>Private Residence Degustation Engagements</h3>
        <p>Bespoke multi-course culinary services for intimate private dinners, winery galas, and restaurant advisory.</p>
        <div class="chalk-packages-grid" id="chalk-packages"></div>
      </div>
    </section>
  </main>

  <footer class="chalk-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Member Les Grandes Tables du Monde.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 11. MUSICIAN: Vinyl Record Turntable & Audio Player
    // ------------------------------------------------------------------------
    case "11-musician":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-vinyl">
  <header class="vinyl-header">
    <div class="container vinyl-bar">
      <div class="vinyl-brand">
        <span class="v-disc-icon">💿</span>
        <h1>${prof.name}</h1>
      </div>
      <div class="vinyl-stream-counter">
        <span>65M+ STREAMS &bull; BEATPORT #1</span>
        <a href="#tour" class="btn-vinyl-tour">Tour Dates &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container vinyl-main">
    <section class="turntable-deck">
      <div class="turntable-shell">
        <div class="turntable-platter">
          <div class="vinyl-record" id="vinyl-disc">
            <div class="vinyl-grooves"></div>
            <div class="vinyl-center-label">
              <span class="record-title">NOVAPULSE</span>
              <span class="record-rpm">33⅓ RPM</span>
              <span class="record-sub">SIDE A</span>
            </div>
          </div>
        </div>

        <div class="turntable-controls-panel">
          <span class="vinyl-kicker">NOW SPINNING &bull; HIGH FIDELITY STEREO</span>
          <h2 id="now-playing-title">${prof.headline}</h2>
          <p class="track-meta">${prof.bio}</p>
          
          <div class="audio-controls-row">
            <button class="btn-play-vinyl" id="btn-play-vinyl" onclick="toggleVinylPlay()">
              <span id="play-icon">▶ Play Synthesizer Preview</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="vinyl-releases-section">
      <div class="vinyl-section-head">
        <h3>Selected Discography &amp; Festival Sets</h3>
      </div>
      <div class="vinyl-grid" id="vinyl-grid"></div>
    </section>

    <section class="vinyl-tour-section" id="tour">
      <div class="tour-card">
        <h3>Festival Headline Sets &amp; Sonic Commissions</h3>
        <p>Available for international club residencies, festival main stages, and bespoke commercial film scoring.</p>
        <div class="vinyl-packages" id="vinyl-packages"></div>
      </div>
    </section>
  </main>

  <footer class="vinyl-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Electronic Music Producer &amp; Sound Designer.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 12. COPYWRITER: Vintage Typewriter Manuscript & Sales Letter
    // ------------------------------------------------------------------------
    case "12-copywriter":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-typewriter">
  <header class="typewriter-header">
    <div class="container tw-bar">
      <div class="tw-brand">
        <span class="tw-key">¶</span>
        <h1>${prof.name}</h1>
      </div>
      <div class="tw-meta-right">
        <span>$35M+ CLIENT REVENUE PROVEN</span>
        <a href="#hire" class="btn-tw-hire">Hire Copywriter &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container typewriter-main">
    <article class="manuscript-page">
      <div class="manuscript-header-stamp">
        <div class="stamp-from">FROM THE DESK OF: ${prof.name.toUpperCase()}</div>
        <div class="stamp-to">TO: Founders, CMOs &amp; Direct Response Marketers</div>
        <div class="stamp-date">DATE: ${new Date().toLocaleDateString()}</div>
      </div>

      <div class="manuscript-headline">
        <h2>${prof.headline}</h2>
        <div class="red-marginalia-note">&larr; Tested against 4 control headlines. Won by +138% conversion lift.</div>
      </div>

      <div class="manuscript-body">
        <p>${prof.bio}</p>
        <p>Most copywriters write words that sound pretty. I write prose engineered around <strong>buying psychology</strong>, pain agitation, risk reversal, and psychological proof triggers.</p>
      </div>

      <div class="manuscript-stats" id="tw-stats"></div>

      <section class="manuscript-campaigns">
        <div class="manuscript-subhead">
          <h3>EXHIBIT A: HIGH-CONVERTING SALES LETTERS &amp; EMAIL SEQUENCES</h3>
        </div>
        <div class="campaigns-list" id="tw-campaigns"></div>
      </section>

      <section class="manuscript-packages" id="hire">
        <div class="manuscript-subhead">
          <h3>EXHIBIT B: COPYWRITING ENGAGEMENT OPTIONS</h3>
        </div>
        <div class="tw-packages-grid" id="tw-packages"></div>
      </section>

      <div class="manuscript-signoff">
        <p>Sincerely,</p>
        <div class="tw-signature">${prof.name}</div>
        <p class="tw-sign-title">${prof.title}</p>
      </div>
    </article>
  </main>

  <footer class="typewriter-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Direct Response &amp; Brand Storytelling.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 13. FASHION MODEL: Agency Comp Card & Polaroid Casting Sheet
    // ------------------------------------------------------------------------
    case "13-fashion-model":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-compcard">
  <header class="compcard-header">
    <div class="container cc-bar">
      <div class="cc-brand">
        <span class="cc-agency-mark">PARIS &bull; MILAN &bull; NYC</span>
        <h1>${prof.name}</h1>
      </div>
      <div class="cc-actions">
        <button class="btn-print-compcard" onclick="window.print()">🖨️ Print Comp Card</button>
        <a href="#book" class="btn-book-model">Book Model &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container compcard-main">
    <div class="compcard-board">
      <div class="compcard-front">
        <div class="cc-hero-frame">
          <img src="${prof.heroImage}" alt="${prof.name} Editorial Front">
          <div class="cc-front-name-plate">
            <h2>${prof.name.toUpperCase()}</h2>
            <span>${prof.title.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div class="compcard-back">
        <div class="polaroid-grid" id="polaroid-grid"></div>

        <div class="model-stats-box">
          <div class="stat-col"><span class="lbl">HEIGHT</span><strong>5' 11" / 180cm</strong></div>
          <div class="stat-col"><span class="lbl">BUST</span><strong>32" / 81cm</strong></div>
          <div class="stat-col"><span class="lbl">WAIST</span><strong>24" / 61cm</strong></div>
          <div class="stat-col"><span class="lbl">HIPS</span><strong>34" / 86cm</strong></div>
          <div class="stat-col"><span class="lbl">SHOES</span><strong>39 EU / 8.5 US</strong></div>
          <div class="stat-col"><span class="lbl">EYES</span><strong>Green</strong></div>
          <div class="stat-col"><span class="lbl">HAIR</span><strong>Auburn</strong></div>
        </div>

        <div class="agency-rep-row">
          <span>PARIS: Elite Model Mgmt</span> &bull; 
          <span>MILAN: Women Management</span> &bull; 
          <span>NEW YORK: Ford Models</span>
        </div>
      </div>
    </div>

    <section class="compcard-lookbooks">
      <div class="cc-section-head">
        <h3>Runway Appearances &amp; High-Fashion Spreads</h3>
      </div>
      <div class="cc-cards-grid" id="cc-cards"></div>
    </section>

    <section class="compcard-booking-section" id="book">
      <div class="cc-booking-card">
        <h3>Commercial &amp; Editorial Booking Inquiries</h3>
        <p>Available for Paris, Milan, and New York Fashion Weeks, global fragrance and beauty campaigns, and high-fashion editorial covers.</p>
        <div class="cc-packages-grid" id="cc-packages"></div>
      </div>
    </section>
  </main>

  <footer class="compcard-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Represented Worldwide by Elite, Women &amp; Ford.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    // ------------------------------------------------------------------------
    // 15. FINANCIAL ADVISOR: Bloomberg Wealth Terminal & Asset Allocation Matrix
    // ------------------------------------------------------------------------
    case "15-financial-advisor":
      return `<!DOCTYPE html>
<html lang="en">
<head>${commonHead}</head>
<body class="arch-wealth-terminal">
  <header class="wealth-header">
    <div class="container wealth-bar">
      <div class="wealth-brand">
        <span class="terminal-amber-box">FIDUCIARY</span>
        <div>
          <h1>${prof.name}</h1>
          <span class="wealth-sub">${prof.title} &bull; SEC REGISTERED</span>
        </div>
      </div>
      <div class="wealth-aum-strip">
        <span>AUM: $420M+ FIDUCIARY ASSETS</span>
        <a href="#consult" class="btn-wealth-consult">Retain Wealth Advisor &rarr;</a>
      </div>
    </div>
  </header>

  <main class="container wealth-main">
    <section class="wealth-overview-plate">
      <div class="wealth-stamp">PORTFOLIO STRATEGY MEMORANDUM &bull; FAMILY OFFICE ADVISORY</div>
      <h2>${prof.headline}</h2>
      <p>${prof.bio}</p>
      <div class="wealth-metrics-grid" id="wealth-metrics"></div>
    </section>

    <section class="wealth-matrix-section">
      <div class="wealth-section-head">
        <h3>Target Asset Allocation Architecture (Core Fiduciary Model)</h3>
      </div>
      <div class="matrix-grid">
        <div class="alloc-card">
          <div class="alloc-pie" style="background: conic-gradient(#10b981 0% 55%, #3b82f6 55% 80%, #f59e0b 80% 95%, #64748b 95% 100%);"></div>
          <div class="alloc-legend">
            <div><span class="dot" style="background: #10b981;"></span> Global Core Equities (55%)</div>
            <div><span class="dot" style="background: #3b82f6;"></span> Tax-Advantaged Munis &amp; Fixed Income (25%)</div>
            <div><span class="dot" style="background: #f59e0b;"></span> Private Credit &amp; Real Assets (15%)</div>
            <div><span class="dot" style="background: #64748b;"></span> Systematic Liquidity &amp; Cash (5%)</div>
          </div>
        </div>
        <div class="fiduciary-oath-card">
          <h4>The 100% Fiduciary Standard</h4>
          <p>We do not sell commission-laden annuities, proprietary mutual funds, or trade for kickbacks. Our fee-only model means our compensation aligns exclusively with preserving and growing your family net worth.</p>
          <ul class="fiduciary-checklist">
            <li>&#10003; Legally bound fiduciary loyalty</li>
            <li>&#10003; Continuous automated tax-loss harvesting</li>
            <li>&#10003; Dynasty trust &amp; multi-generational shielding</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="wealth-capabilities-section">
      <div class="wealth-section-head">
        <h3>Private Wealth Advisory Capabilities</h3>
      </div>
      <div class="wealth-cards-grid" id="wealth-cards"></div>
    </section>

    <section class="wealth-inquiry-section" id="consult">
      <div class="wealth-inquiry-card">
        <h3>Comprehensive Wealth Advisory Retainers</h3>
        <p>Strictly fee-only wealth consulting for families with $2M+ investable liquid assets.</p>
        <div class="wealth-packages-grid" id="wealth-packages"></div>
      </div>
    </section>
  </main>

  <footer class="wealth-footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${prof.name}. Certified Financial Planner (CFP&reg;) &bull; Fiduciary Standard.</p>
      ${trustBadge}
    </div>
  </footer>
  <script src="data.json" type="application/json" id="portfolio-data"></script>
  <script src="app.js"></script>
</body>
</html>`;

    default:
      return null;
  }
}

// ----------------------------------------------------------------------------
// CSS GENERATOR FOR CUSTOM DOMAIN TEMPLATES
// ----------------------------------------------------------------------------
function getDomainTemplate10CSS(prof, variant, baseReset) {
  switch (prof.id) {
    case "01-photographer":
      return `${baseReset}
      body.arch-darkroom { background: #070709; color: #d4d4d8; font-family: 'Space Grotesk', -apple-system, sans-serif; min-height: 100vh; }
      body.safelight-red { --light-glow: rgba(239, 68, 68, 0.4); --light-accent: #ef4444; --light-surface: #150909; }
      body.safelight-white { --light-glow: rgba(255, 255, 255, 0.2); --light-accent: #ffffff; --light-surface: #12141a; }
      .darkroom-header { background: #000000; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding: 0.9rem 1.5rem; position: sticky; top: 0; z-index: 100; }
      .darkroom-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .film-brand-stamp { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; letter-spacing: 0.15em; color: var(--light-accent); font-weight: 700; }
      .safelight-controls { display: flex; align-items: center; gap: 0.6rem; }
      .safelight-label { font-size: 0.7rem; color: #71717a; font-family: 'JetBrains Mono', monospace; }
      .safelight-btn { background: #18181b; border: 1px solid #27272a; color: #a1a1aa; font-size: 0.78rem; padding: 0.35rem 0.8rem; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
      .safelight-btn.active, .safelight-btn:hover { background: #27272a; color: #ffffff; border-color: var(--light-accent); box-shadow: 0 0 10px var(--light-glow); }
      .darkroom-cta { background: var(--light-accent); color: #000000; font-weight: 700; font-size: 0.82rem; padding: 0.45rem 1rem; border-radius: 4px; }
      .sprocket-track { background: #000000; padding: 0.5rem 0; display: flex; justify-content: space-around; border-top: 1px solid #18181b; border-bottom: 1px solid #18181b; }
      .sprocket-hole { width: 14px; height: 22px; background: #0f1015; border-radius: 3px; border: 1px solid #27272a; display: inline-block; }
      .contact-sheet-board { max-width: 1360px; margin: 2rem auto; background: var(--light-surface); border: 2px solid #27272a; border-radius: 8px; padding: 2.5rem; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9); transition: all 0.3s; }
      .sheet-title-stamp { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px dashed #3f3f46; padding-bottom: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
      .stamp-meta h1 { font-size: 1.8rem; font-weight: 800; color: #ffffff; letter-spacing: -0.02em; }
      .stamp-meta p { font-size: 0.9rem; color: #a1a1aa; margin-top: 0.3rem; }
      .stamp-batch { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--light-accent); display: flex; flex-direction: column; gap: 0.2rem; text-align: right; }
      .frames-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.8rem; }
      .contact-frame-card { background: #000000; border: 1px solid #27272a; border-radius: 4px; overflow: hidden; position: relative; cursor: pointer; transition: transform 0.2s, border-color 0.2s; }
      .contact-frame-card:hover { transform: translateY(-4px); border-color: var(--light-accent); box-shadow: 0 10px 25px var(--light-glow); }
      .frame-media { aspect-ratio: 4/5; overflow: hidden; position: relative; }
      .frame-media img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(110%); transition: filter 0.3s, transform 0.4s; }
      body.safelight-red .contact-frame-card:hover img { filter: grayscale(0%) contrast(100%); transform: scale(1.04); }
      body.safelight-white img { filter: grayscale(0%); }
      .frame-header-stamp { position: absolute; top: 8px; left: 8px; right: 8px; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #ef4444; font-weight: 700; pointer-events: none; }
      .frame-info { padding: 0.85rem; font-size: 0.8rem; }
      .frame-title { font-weight: 700; color: #ffffff; display: block; margin-bottom: 0.2rem; }
      .frame-exif { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #71717a; }
      .darkroom-specs-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; border-top: 1px solid #27272a; margin-top: 2.5rem; padding-top: 1.5rem; }
      .spec-cell { display: flex; flex-direction: column; gap: 0.2rem; }
      .sc-label { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #71717a; }
      .sc-val { font-size: 0.88rem; color: #ffffff; font-weight: 600; }
      .darkroom-inquiry { padding: 4rem 0; }
      .inquiry-card { background: #0c0d12; border: 1px solid #27272a; border-radius: 8px; padding: 3rem; text-align: center; max-width: 900px; margin: 0 auto; }
      .inquiry-card h2 { font-size: 1.8rem; color: #ffffff; margin-bottom: 0.8rem; }
      .inquiry-card p { color: #a1a1aa; line-height: 1.6; max-width: 700px; margin: 0 auto 2rem; font-size: 0.95rem; }
      .edition-tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
      .tier-box { background: #18181b; border: 1px solid #27272a; border-radius: 6px; padding: 1.2rem; text-align: left; }
      .tier-box h4 { color: #ffffff; font-size: 0.95rem; margin-bottom: 0.3rem; }
      .tier-box strong { color: var(--light-accent); font-size: 1.2rem; display: block; margin-bottom: 0.5rem; }
      .tier-box span { font-size: 0.78rem; color: #a1a1aa; line-height: 1.4; display: block; }
      .inquiry-form-wrap form { display: flex; flex-direction: column; gap: 0.8rem; max-width: 600px; margin: 0 auto; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
      .inquiry-form-wrap input { background: #18181b; border: 1px solid #27272a; color: #ffffff; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.88rem; font-family: inherit; }
      .btn-darkroom-submit { background: var(--light-accent); color: #000000; font-weight: 700; padding: 0.85rem; border-radius: 4px; border: none; cursor: pointer; font-size: 0.95rem; }
      .darkroom-footer { border-top: 1px solid #18181b; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #71717a; }
      .loupe-modal { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(10px); z-index: 200; display: none; align-items: center; justify-content: center; padding: 2rem; }
      .loupe-modal.active { display: flex; }
      .loupe-content { background: #12141a; border: 1px solid #3f3f46; border-radius: 8px; max-width: 900px; width: 100%; padding: 2rem; position: relative; }
      .loupe-close { position: absolute; top: 15px; right: 20px; font-size: 2rem; color: #ffffff; background: transparent; border: none; cursor: pointer; }
      .loupe-view { max-height: 600px; overflow: hidden; border-radius: 4px; display: flex; justify-content: center; }
      .loupe-view img { max-height: 560px; width: auto; object-fit: contain; }
      .loupe-caption { margin-top: 1rem; color: #ffffff; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }
      `;

    case "02-doctor":
      return `${baseReset}
      body.arch-clinical { background: #f4f6f9; color: #1e293b; font-family: 'Inter', -apple-system, sans-serif; min-height: 100vh; }
      .clinical-header { background: #ffffff; border-bottom: 2px solid #0284c7; padding: 1.2rem 0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04); }
      .clinical-header-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
      .clinical-id { display: flex; align-items: center; gap: 1rem; }
      .caduceus { font-size: 2.2rem; }
      .clinical-id h1 { font-size: 1.4rem; font-weight: 800; color: #0f172a; }
      .clinical-sub { font-size: 0.75rem; color: #0284c7; font-weight: 700; letter-spacing: 0.08em; }
      .clinical-affiliations { display: flex; align-items: center; gap: 0.8rem; }
      .affil-tag { background: #e0f2fe; color: #0369a1; font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.75rem; border-radius: 4px; }
      .btn-triage-book { background: #0284c7; color: #ffffff; font-weight: 700; font-size: 0.85rem; padding: 0.55rem 1.2rem; border-radius: 4px; text-decoration: none; }
      .clinical-main { padding: 3rem 0; display: flex; flex-direction: column; gap: 3rem; max-width: 1200px; margin: 0 auto; }
      .clinical-memo-block { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05); overflow: hidden; }
      .memo-header { background: #0f172a; color: #ffffff; padding: 0.8rem 1.5rem; display: flex; justify-content: space-between; font-size: 0.75rem; font-family: monospace; letter-spacing: 0.08em; }
      .memo-body { padding: 2.5rem; }
      .memo-lead h2 { font-size: 1.8rem; color: #0f172a; font-weight: 800; margin-bottom: 0.8rem; }
      .memo-lead p { font-size: 1.05rem; color: #475569; line-height: 1.7; margin-bottom: 2rem; max-width: 900px; }
      .clinical-metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.2rem; border-top: 1px solid #e2e8f0; padding-top: 1.8rem; }
      .c-metric { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 1.2rem; }
      .c-metric strong { font-size: 1.8rem; color: #0284c7; display: block; font-weight: 800; line-height: 1; margin-bottom: 0.3rem; }
      .c-metric span { font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase; }
      .section-badge-clinical { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; color: #0369a1; background: #e0f2fe; padding: 0.4rem 1rem; border-radius: 4px; display: inline-block; margin-bottom: 1.5rem; }
      .registry-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
      .case-card { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
      .case-card img { width: 100%; height: 180px; object-fit: cover; }
      .case-body { padding: 1.4rem; }
      .case-body h4 { font-size: 1.1rem; color: #0f172a; margin-bottom: 0.4rem; font-weight: 700; }
      .case-body p { font-size: 0.85rem; color: #64748b; line-height: 1.55; margin-bottom: 0.8rem; }
      .case-tag { font-size: 0.72rem; color: #0284c7; font-weight: 700; text-transform: uppercase; }
      .requisition-card { background: #ffffff; border: 2px solid #0284c7; border-radius: 8px; padding: 3rem; }
      .req-head { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1.5rem; }
      .req-seal { font-size: 2.5rem; }
      .req-head h3 { font-size: 1.6rem; color: #0f172a; margin-bottom: 0.3rem; }
      .req-head p { font-size: 0.9rem; color: #64748b; }
      .packages-clinical { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; margin-bottom: 2rem; }
      .pkg-clin { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 1.4rem; }
      .pkg-clin h4 { font-size: 1rem; color: #0f172a; margin-bottom: 0.3rem; }
      .pkg-clin strong { font-size: 1.3rem; color: #0284c7; display: block; margin-bottom: 0.5rem; }
      .pkg-clin ul { list-style: none; font-size: 0.8rem; color: #64748b; display: flex; flex-direction: column; gap: 0.3rem; }
      .clinical-form { display: flex; flex-direction: column; gap: 1rem; }
      .c-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .clinical-form input, .clinical-form select { border: 1px solid #cbd5e1; background: #ffffff; padding: 0.8rem 1rem; border-radius: 4px; font-size: 0.9rem; }
      .btn-clinical-submit { background: #0284c7; color: #ffffff; font-weight: 700; padding: 0.9rem; border-radius: 4px; border: none; font-size: 1rem; cursor: pointer; }
      .clinical-footer { background: #ffffff; border-top: 1px solid #e2e8f0; padding: 2rem 0; text-align: center; font-size: 0.85rem; color: #64748b; }
      `;

    case "03-ui-ux-designer":
      return `${baseReset}
      body.arch-figma-studio { background: #1e1e1e; color: #f5f5f5; font-family: 'Inter', -apple-system, sans-serif; min-height: 100vh; display: flex; flex-direction: column; }
      .figma-top-bar { background: #2c2c2c; border-bottom: 1px solid #3c3c3c; padding: 0.65rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
      .figma-brand { display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem; font-weight: 600; }
      .figma-icon { color: #0d99ff; font-size: 1.1rem; }
      .figma-version-pill { background: #3c3c3c; font-size: 0.68rem; padding: 0.2rem 0.5rem; border-radius: 4px; color: #a1a1aa; }
      .figma-viewport-controls { display: flex; gap: 0.4rem; }
      .vp-btn { background: #3c3c3c; border: 1px solid #4a4a4a; color: #d4d4d8; font-size: 0.75rem; padding: 0.35rem 0.75rem; border-radius: 4px; cursor: pointer; }
      .vp-btn.active, .vp-btn:hover { background: #0d99ff; color: #ffffff; border-color: #0d99ff; }
      .btn-share-spec { background: #0d99ff; color: #ffffff; font-weight: 700; font-size: 0.78rem; padding: 0.45rem 1rem; border-radius: 4px; text-decoration: none; }
      .figma-workspace { display: flex; flex: 1; overflow: hidden; }
      .figma-token-sidebar { width: 300px; background: #252525; border-right: 1px solid #3c3c3c; padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1.8rem; font-size: 0.82rem; }
      .token-sidebar-header { font-size: 0.7rem; font-weight: 700; color: #8e8e93; letter-spacing: 0.1em; }
      .token-group { display: flex; flex-direction: column; gap: 0.6rem; }
      .token-group-title { font-size: 0.68rem; font-weight: 700; color: #a1a1aa; text-transform: uppercase; }
      .token-swatches { display: flex; gap: 0.4rem; flex-wrap: wrap; }
      .token-swatch { width: 44px; height: 32px; border-radius: 4px; display: flex; align-items: flex-end; padding: 2px; }
      .token-swatch span { font-size: 0.5rem; background: rgba(0,0,0,0.6); color: #fff; padding: 1px 2px; border-radius: 2px; }
      .token-text-scale { display: flex; flex-direction: column; gap: 0.35rem; }
      .token-row { display: flex; justify-content: space-between; font-size: 0.72rem; color: #a1a1aa; }
      .token-row strong { color: #ffffff; }
      .interactive-sandbox-box { background: #1c1c1c; border: 1px solid #3c3c3c; border-radius: 6px; padding: 0.85rem; }
      .sandbox-buttons { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
      .preview-btn { padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.75rem; border: none; cursor: pointer; }
      .preview-btn.state-default { background: #0d99ff; color: #fff; }
      .preview-btn.state-hover { background: #007be5; color: #fff; }
      .preview-btn.state-active { background: #005bb5; color: #fff; }
      .figma-canvas-viewport { flex: 1; background: #141414; background-image: radial-gradient(#2c2c2c 1px, transparent 1px); background-size: 24px 24px; padding: 3rem; overflow-y: auto; display: flex; justify-content: center; }
      .artboard-frame { background: #ffffff; color: #000000; border-radius: 8px; box-shadow: 0 20px 70px rgba(0, 0, 0, 0.8); width: 100%; max-width: 1200px; transition: max-width 0.3s; overflow: hidden; }
      .artboard-titlebar { background: #f3f4f6; border-bottom: 1px solid #e5e7eb; padding: 0.6rem 1.2rem; display: flex; justify-content: space-between; font-size: 0.75rem; color: #6b7280; font-family: monospace; }
      .artboard-inner { padding: 3.5rem; }
      .canvas-chip { background: #e0f2fe; color: #0284c7; font-weight: 700; font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 9999px; display: inline-block; margin-bottom: 1.2rem; }
      .canvas-h1 { font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; line-height: 1.15; margin-bottom: 1rem; color: #111827; }
      .canvas-bio { font-size: 1.1rem; color: #4b5563; line-height: 1.7; max-width: 800px; margin-bottom: 2rem; }
      .canvas-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid #e5e7eb; padding-top: 2rem; margin-bottom: 4rem; }
      .c-stat-box strong { font-size: 2.2rem; font-weight: 800; color: #0d99ff; display: block; line-height: 1; }
      .c-stat-box span { font-size: 0.75rem; color: #6b7280; font-weight: 600; text-transform: uppercase; }
      .canvas-section-head { margin-bottom: 2rem; }
      .canvas-section-head h2 { font-size: 1.8rem; font-weight: 800; color: #111827; }
      .canvas-cases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 4rem; }
      .canvas-case-card { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
      .canvas-case-card img { width: 100%; height: 220px; object-fit: cover; }
      .case-content-box { padding: 1.6rem; }
      .case-content-box h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; }
      .case-content-box p { font-size: 0.9rem; color: #4b5563; line-height: 1.6; margin-bottom: 1rem; }
      .canvas-packages { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
      .canvas-pkg-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.8rem; }
      .canvas-pkg-card h3 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .canvas-pkg-card strong { font-size: 1.6rem; color: #0d99ff; display: block; margin-bottom: 0.8rem; }
      .canvas-pkg-card ul { list-style: none; font-size: 0.85rem; color: #4b5563; display: flex; flex-direction: column; gap: 0.4rem; }
      .figma-footer { background: #252525; border-top: 1px solid #3c3c3c; padding: 1.5rem 0; text-align: center; font-size: 0.78rem; color: #8e8e93; }
      `;

    case "05-gamer":
      return `${baseReset}
      body.arch-esports { background: #080a10; color: #f1f5f9; font-family: 'Space Grotesk', -apple-system, sans-serif; min-height: 100vh; }
      .hud-top-bar { background: #0d111a; border-bottom: 2px solid #06b6d4; padding: 0.8rem 0; }
      .hud-inner { display: flex; justify-content: space-between; align-items: center; max-width: 1300px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .hud-streamer-tag { display: flex; align-items: center; gap: 0.6rem; font-weight: 800; font-size: 1.2rem; }
      .live-dot { width: 8px; height: 8px; background: #ef4444; border-radius: 50%; box-shadow: 0 0 10px #ef4444; }
      .hud-clan-tag { color: #06b6d4; font-size: 0.85rem; }
      .hud-ticker { font-family: monospace; font-size: 0.75rem; color: #94a3b8; }
      .btn-hud-rig { background: #06b6d4; color: #000; font-weight: 800; padding: 0.45rem 1rem; border-radius: 4px; text-decoration: none; }
      .hud-main { padding: 3rem 0; max-width: 1300px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
      .hud-hero-box { background: #0d111a; border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 8px; padding: 3rem; box-shadow: 0 0 35px rgba(6, 182, 212, 0.1); }
      .hud-hero-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 3rem; align-items: center; }
      .hud-kicker { font-family: monospace; font-size: 0.72rem; color: #06b6d4; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 1rem; display: block; }
      .hud-headline { font-size: clamp(2rem, 3.8vw, 3.2rem); font-weight: 900; line-height: 1.15; margin-bottom: 1.2rem; }
      .hud-bio { color: #94a3b8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem; }
      .hud-stats-radar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; }
      .hud-stat-cell strong { font-size: 2rem; color: #06b6d4; font-weight: 900; display: block; line-height: 1; }
      .hud-stat-cell span { font-size: 0.72rem; color: #64748b; font-family: monospace; text-transform: uppercase; }
      .hud-stream-window { position: relative; border-radius: 8px; overflow: hidden; border: 2px solid #1e293b; aspect-ratio: 16/10; }
      .hud-poster-img { width: 100%; height: 100%; object-fit: cover; }
      .hud-overlay-elements { position: absolute; top: 10px; left: 10px; right: 10px; display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; font-family: monospace; }
      .hud-online-badge { background: rgba(0,0,0,0.8); color: #ef4444; padding: 0.25rem 0.6rem; border-radius: 4px; }
      .hud-res-badge { background: rgba(0,0,0,0.8); color: #06b6d4; padding: 0.25rem 0.6rem; border-radius: 4px; }
      .hud-section-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 2rem; }
      .hud-section-header h2 { font-size: 1.8rem; font-weight: 800; }
      .hud-bracket-status { font-family: monospace; font-size: 0.75rem; color: #06b6d4; font-weight: 700; }
      .hud-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .hud-card { background: #0d111a; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; }
      .hud-card img { width: 100%; height: 180px; object-fit: cover; }
      .hud-card-body { padding: 1.5rem; }
      .hud-card-body h3 { font-size: 1.15rem; margin-bottom: 0.4rem; }
      .hud-card-body p { font-size: 0.88rem; color: #94a3b8; line-height: 1.5; margin-bottom: 0.8rem; }
      .rig-specs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
      .rig-card { background: #0d111a; border: 1px solid #1e293b; border-radius: 8px; padding: 1.8rem; }
      .rig-icon { font-size: 1.8rem; display: block; margin-bottom: 0.6rem; }
      .rig-card h4 { font-size: 1rem; color: #06b6d4; margin-bottom: 0.3rem; }
      .rig-card p { font-size: 0.85rem; color: #94a3b8; }
      .hud-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
      .hud-pkg { background: #0d111a; border: 1px solid #1e293b; border-radius: 8px; padding: 1.8rem; }
      .hud-pkg h3 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .hud-pkg strong { font-size: 1.6rem; color: #06b6d4; display: block; margin-bottom: 0.8rem; }
      .hud-pkg ul { list-style: none; font-size: 0.82rem; color: #94a3b8; display: flex; flex-direction: column; gap: 0.35rem; }
      .hud-footer { border-top: 1px solid #1e293b; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #64748b; }
      `;

    case "06-architect":
      return `${baseReset}
      body.arch-blueprint { background: #0b1d3a; color: #e2e8f0; font-family: 'Space Grotesk', -apple-system, sans-serif; min-height: 100vh; background-image: linear-gradient(rgba(23, 78, 119, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(23, 78, 119, 0.25) 1px, transparent 1px); background-size: 20px 20px; }
      .blueprint-header { background: #08172e; border-bottom: 2px solid #38bdf8; padding: 1.2rem 0; }
      .blueprint-header-inner { display: flex; justify-content: space-between; align-items: center; max-width: 1300px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .blueprint-stamp-box h1 { font-size: 1.3rem; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; }
      .bp-code { font-family: monospace; font-size: 0.72rem; color: #38bdf8; font-weight: 700; display: block; }
      .blueprint-nav-specs { font-family: monospace; font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 1rem; }
      .bp-cta { background: #38bdf8; color: #08172e; font-weight: 800; padding: 0.45rem 1rem; border-radius: 2px; text-decoration: none; font-size: 0.82rem; }
      .blueprint-viewport { padding: 3rem 0; max-width: 1300px; margin: 0 auto; display: flex; flex-direction: column; gap: 3.5rem; }
      .blueprint-hero-plate { background: rgba(8, 23, 46, 0.85); border: 1px solid #1e40af; border-radius: 4px; padding: 3rem; }
      .bp-kicker { font-family: monospace; font-size: 0.72rem; color: #38bdf8; letter-spacing: 0.12em; font-weight: 700; margin-bottom: 0.8rem; display: block; }
      .bp-headline { font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; color: #ffffff; margin-bottom: 1rem; }
      .bp-bio { font-size: 1.05rem; color: #94a3b8; line-height: 1.7; max-width: 850px; margin-bottom: 2rem; }
      .bp-metrics-docket { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px dashed #1e40af; padding-top: 1.5rem; }
      .bp-metric-item strong { font-size: 2rem; color: #38bdf8; font-weight: 800; display: block; }
      .bp-metric-item span { font-size: 0.72rem; color: #94a3b8; font-family: monospace; text-transform: uppercase; }
      .bp-section-stamp { border-bottom: 1px solid #1e40af; padding-bottom: 0.8rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: baseline; }
      .bp-section-stamp h3 { font-size: 1.4rem; color: #ffffff; font-weight: 700; }
      .bp-section-stamp span { font-family: monospace; font-size: 0.72rem; color: #38bdf8; }
      .blueprint-plates-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .bp-plate-card { background: #08172e; border: 1px solid #1e40af; border-radius: 4px; overflow: hidden; }
      .bp-plate-card img { width: 100%; height: 220px; object-fit: cover; }
      .bp-plate-body { padding: 1.5rem; }
      .bp-plate-body h4 { font-size: 1.15rem; color: #ffffff; margin-bottom: 0.4rem; }
      .bp-plate-body p { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin-bottom: 0.8rem; }
      .bp-plate-meta { font-family: monospace; font-size: 0.72rem; color: #38bdf8; }
      .bp-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .bp-pkg { background: #08172e; border: 1px solid #1e40af; padding: 1.6rem; border-radius: 4px; }
      .bp-pkg h4 { font-size: 1.05rem; color: #ffffff; margin-bottom: 0.3rem; }
      .bp-pkg strong { font-size: 1.5rem; color: #38bdf8; display: block; margin-bottom: 0.8rem; }
      .bp-pkg ul { list-style: none; font-size: 0.82rem; color: #94a3b8; display: flex; flex-direction: column; gap: 0.35rem; }
      .blueprint-footer { border-top: 1px solid #1e40af; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #64748b; }
      `;

    case "07-lawyer":
      return `${baseReset}
      body.arch-judicial { background: #faf9f6; color: #1c1917; font-family: 'Newsreader', Georgia, serif; min-height: 100vh; }
      .judicial-header { background: #1c1917; color: #ffffff; padding: 1.4rem 0; border-bottom: 3px double #d4af37; }
      .judicial-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .judicial-seal { display: flex; align-items: center; gap: 1rem; }
      .seal-icon { font-size: 2rem; }
      .judicial-seal h1 { font-family: 'Cinzel', serif; font-size: 1.4rem; letter-spacing: 0.05em; }
      .judicial-bar-num { font-size: 0.75rem; color: #d4af37; font-family: sans-serif; letter-spacing: 0.1em; }
      .judicial-jurisdiction { font-family: sans-serif; font-size: 0.75rem; color: #a8a29e; display: flex; align-items: center; gap: 1.2rem; }
      .btn-retainer { background: #d4af37; color: #1c1917; font-weight: 700; padding: 0.5rem 1.2rem; text-decoration: none; border-radius: 2px; font-family: sans-serif; font-size: 0.82rem; }
      .judicial-main { padding: 3.5rem 0; max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
      .judicial-folio { background: #ffffff; border: 1px solid #e7e5e4; padding: 3.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
      .folio-stamp { font-family: sans-serif; font-size: 0.72rem; color: #78716c; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 1.2rem; }
      .judicial-headline { font-size: clamp(2.2rem, 3.8vw, 3.2rem); font-weight: 700; line-height: 1.2; margin-bottom: 1.2rem; color: #0c0a09; }
      .judicial-bio { font-size: 1.15rem; color: #44403c; line-height: 1.8; margin-bottom: 2.5rem; }
      .judicial-verdict-metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid #e7e5e4; padding-top: 2rem; }
      .j-metric strong { font-size: 2.2rem; color: #1c1917; display: block; line-height: 1; font-family: 'Cinzel', serif; margin-bottom: 0.3rem; }
      .j-metric span { font-size: 0.72rem; font-family: sans-serif; color: #78716c; text-transform: uppercase; }
      .docket-header { border-bottom: 2px solid #1c1917; padding-bottom: 0.6rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: baseline; }
      .docket-header h3 { font-family: 'Cinzel', serif; font-size: 1.3rem; }
      .docket-header span { font-family: sans-serif; font-size: 0.72rem; color: #78716c; }
      .docket-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .docket-card { background: #ffffff; border: 1px solid #e7e5e4; padding: 1.8rem; }
      .docket-tag { font-family: sans-serif; font-size: 0.68rem; color: #b45309; font-weight: 700; text-transform: uppercase; margin-bottom: 0.4rem; display: block; }
      .docket-card h4 { font-size: 1.15rem; margin-bottom: 0.5rem; font-weight: 700; }
      .docket-card p { font-size: 0.92rem; color: #57534e; line-height: 1.6; margin-bottom: 0.8rem; }
      .docket-meta { font-family: sans-serif; font-size: 0.75rem; color: #78716c; font-weight: 600; }
      .retainer-box { background: #ffffff; border: 2px solid #1c1917; padding: 3rem; }
      .retainer-box h3 { font-family: 'Cinzel', serif; font-size: 1.6rem; margin-bottom: 0.5rem; }
      .retainer-box p { font-size: 0.95rem; color: #57534e; line-height: 1.6; margin-bottom: 2rem; }
      .retainer-tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem; }
      .ret-tier { background: #f5f5f4; border: 1px solid #e7e5e4; padding: 1.5rem; }
      .ret-tier h4 { font-size: 1.05rem; margin-bottom: 0.3rem; }
      .ret-tier strong { font-size: 1.4rem; color: #1c1917; display: block; font-family: sans-serif; margin-bottom: 0.6rem; }
      .ret-tier ul { list-style: none; font-family: sans-serif; font-size: 0.78rem; color: #57534e; display: flex; flex-direction: column; gap: 0.3rem; }
      .retainer-form { display: flex; flex-direction: column; gap: 1rem; }
      .j-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .retainer-form input { border: 1px solid #d6d3d1; padding: 0.8rem 1rem; font-family: sans-serif; font-size: 0.9rem; }
      .btn-retainer-submit { background: #1c1917; color: #ffffff; font-family: sans-serif; font-weight: 700; padding: 0.9rem; border: none; cursor: pointer; font-size: 0.95rem; }
      .judicial-footer { background: #1c1917; color: #a8a29e; font-family: sans-serif; font-size: 0.78rem; text-align: center; padding: 2rem 0; }
      `;

    case "08-fitness-trainer":
      return `${baseReset}
      body.arch-athletic { background: #0f1013; color: #f3f4f6; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; min-height: 100vh; }
      .athletic-header { background: #18191e; border-bottom: 2px solid #a3e635; padding: 1rem 0; }
      .athletic-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .athletic-brand { display: flex; align-items: center; gap: 0.8rem; }
      .ath-icon { font-size: 1.6rem; color: #a3e635; }
      .athletic-brand h1 { font-size: 1.3rem; font-weight: 800; }
      .ath-cert { font-size: 0.72rem; color: #a3e635; font-weight: 700; }
      .athletic-links { display: flex; align-items: center; gap: 1.2rem; }
      .athletic-links a { color: #d1d5db; text-decoration: none; font-size: 0.85rem; font-weight: 600; }
      .btn-ath-cta { background: #a3e635; color: #000; font-weight: 800; padding: 0.5rem 1.2rem; border-radius: 4px; }
      .athletic-main { padding: 3rem 0; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 3.5rem; }
      .ath-hero-plate { background: #18191e; border: 1px solid #27272a; border-radius: 8px; padding: 3rem; }
      .ath-kicker { font-size: 0.72rem; color: #a3e635; font-weight: 800; letter-spacing: 0.1em; display: block; margin-bottom: 0.8rem; }
      .ath-headline { font-size: clamp(2rem, 3.8vw, 3.2rem); font-weight: 900; margin-bottom: 1rem; }
      .ath-bio { font-size: 1.05rem; color: #9ca3af; line-height: 1.6; max-width: 800px; margin-bottom: 2rem; }
      .ath-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid #27272a; padding-top: 1.5rem; }
      .ath-metric-cell strong { font-size: 2.2rem; color: #a3e635; font-weight: 900; display: block; }
      .ath-metric-cell span { font-size: 0.72rem; color: #6b7280; text-transform: uppercase; font-weight: 700; }
      .ath-tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
      .tool-card { background: #18191e; border: 1px solid #27272a; border-radius: 8px; padding: 2rem; }
      .tool-card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 0.4rem; color: #fff; }
      .tool-card p { font-size: 0.85rem; color: #9ca3af; margin-bottom: 1.5rem; }
      .calc-inputs { display: flex; gap: 0.8rem; margin-bottom: 1rem; }
      .calc-inputs input { background: #0f1013; border: 1px solid #374151; color: #fff; padding: 0.6rem 0.8rem; border-radius: 4px; width: 100%; font-family: inherit; }
      .btn-calc { background: #a3e635; color: #000; font-weight: 800; border: none; padding: 0 1.2rem; border-radius: 4px; cursor: pointer; white-space: nowrap; }
      .calc-result { background: #0f1013; border: 1px solid #a3e635; padding: 0.8rem; border-radius: 4px; text-align: center; color: #a3e635; font-size: 1rem; }
      .macro-breakdown { display: flex; flex-direction: column; gap: 0.8rem; }
      .macro-bar { display: flex; justify-content: space-between; background: #0f1013; border: 1px solid #27272a; padding: 0.8rem 1rem; border-radius: 4px; font-weight: 700; }
      .split-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .split-card { background: #18191e; border: 1px solid #27272a; border-radius: 8px; overflow: hidden; }
      .split-card img { width: 100%; height: 200px; object-fit: cover; }
      .split-body { padding: 1.4rem; }
      .split-body h4 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.3rem; }
      .split-body p { font-size: 0.85rem; color: #9ca3af; line-height: 1.5; margin-bottom: 0.8rem; }
      .split-meta { font-size: 0.75rem; color: #a3e635; font-weight: 700; }
      .ath-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .ath-pkg { background: #18191e; border: 1px solid #27272a; border-radius: 8px; padding: 1.8rem; }
      .ath-pkg h4 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .ath-pkg strong { font-size: 1.6rem; color: #a3e635; display: block; margin-bottom: 0.8rem; }
      .ath-pkg ul { list-style: none; font-size: 0.82rem; color: #9ca3af; display: flex; flex-direction: column; gap: 0.35rem; }
      .athletic-footer { border-top: 1px solid #27272a; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #6b7280; }
      `;

    case "09-content-creator":
      return `${baseReset}
      body.arch-mediakit { background: #0a0714; color: #f5f3ff; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; min-height: 100vh; }
      .mediakit-header { background: #130d24; border-bottom: 2px solid #ec4899; padding: 1rem 0; }
      .mediakit-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .mk-brand { display: flex; align-items: center; gap: 0.8rem; }
      .mk-badge { background: #ec4899; color: #fff; font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 4px; }
      .mk-brand h1 { font-size: 1.3rem; font-weight: 800; }
      .mk-reach-badge { font-size: 0.8rem; font-weight: 700; color: #c084fc; display: flex; align-items: center; gap: 1.2rem; }
      .btn-sponsor { background: #ec4899; color: #fff; font-weight: 700; padding: 0.5rem 1.2rem; border-radius: 4px; text-decoration: none; font-size: 0.85rem; }
      .mediakit-main { padding: 3rem 0; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 3.5rem; }
      .mk-deck-hero { background: #130d24; border: 1px solid rgba(236, 72, 153, 0.2); border-radius: 8px; padding: 3rem; }
      .deck-kicker { font-size: 0.72rem; color: #ec4899; font-weight: 800; letter-spacing: 0.1em; display: block; margin-bottom: 0.8rem; }
      .deck-lead h2 { font-size: clamp(2rem, 3.8vw, 3.2rem); font-weight: 900; margin-bottom: 1rem; }
      .deck-lead p { font-size: 1.05rem; color: #c4b5fd; line-height: 1.6; max-width: 800px; margin-bottom: 2rem; }
      .deck-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; }
      .mk-stat-cell strong { font-size: 2.2rem; color: #ec4899; font-weight: 900; display: block; }
      .mk-stat-cell span { font-size: 0.72rem; color: #a78bfa; text-transform: uppercase; font-weight: 700; }
      .mk-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .mk-card { background: #130d24; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
      .mk-card img { width: 100%; height: 200px; object-fit: cover; }
      .mk-card-body { padding: 1.4rem; }
      .mk-card-body h4 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.3rem; }
      .mk-card-body p { font-size: 0.85rem; color: #c4b5fd; line-height: 1.5; margin-bottom: 0.8rem; }
      .mk-card-meta { font-size: 0.75rem; color: #ec4899; font-weight: 700; }
      .mk-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .mk-pkg { background: #130d24; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1.8rem; }
      .mk-pkg h4 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .mk-pkg strong { font-size: 1.6rem; color: #ec4899; display: block; margin-bottom: 0.8rem; }
      .mk-pkg ul { list-style: none; font-size: 0.82rem; color: #c4b5fd; display: flex; flex-direction: column; gap: 0.35rem; }
      .mediakit-footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #a78bfa; }
      `;

    case "10-chef":
      return `${baseReset}
      body.arch-chalkboard { background: #18191c; color: #f4f4f5; font-family: 'Playfair Display', Georgia, serif; min-height: 100vh; }
      .chalk-header { background: #101113; border-bottom: 2px dashed rgba(255,255,255,0.2); padding: 1.2rem 0; }
      .chalk-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .chalk-brand { display: flex; align-items: center; gap: 0.8rem; }
      .chalk-symbol { font-size: 1.8rem; }
      .chalk-brand h1 { font-size: 1.4rem; font-weight: 700; }
      .chalk-sub { font-family: sans-serif; font-size: 0.72rem; color: #e4d5b7; letter-spacing: 0.1em; }
      .chalk-nav { display: flex; align-items: center; gap: 1.2rem; font-family: sans-serif; font-size: 0.85rem; }
      .chalk-nav a { color: #d4d4d8; text-decoration: none; }
      .btn-chalk-reserve { background: #e4d5b7; color: #18191c; font-weight: 700; padding: 0.5rem 1.2rem; border-radius: 2px; }
      .chalk-main { padding: 3rem 0; max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
      .chalk-carte-board { background: #121316; border: 3px solid #27272a; border-radius: 4px; padding: 3rem; box-shadow: 0 15px 45px rgba(0,0,0,0.7); }
      .chalk-heading { text-align: center; margin-bottom: 2.5rem; }
      .chalk-heading h2 { font-size: clamp(1.8rem, 3.2vw, 2.6rem); letter-spacing: 0.05em; margin-bottom: 0.6rem; color: #fff; }
      .chalk-lead { font-size: 1.1rem; color: #e4d5b7; font-style: italic; }
      .chalk-rules-decor { font-size: 1.2rem; color: rgba(255,255,255,0.4); margin-top: 0.6rem; }
      .chalk-courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
      .chalk-course-card { border-bottom: 1px dotted rgba(255,255,255,0.2); padding-bottom: 1.5rem; }
      .chalk-course-tag { font-family: sans-serif; font-size: 0.72rem; color: #e4d5b7; font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem; display: block; }
      .chalk-course-card h4 { font-size: 1.2rem; margin-bottom: 0.4rem; }
      .chalk-course-card p { font-family: sans-serif; font-size: 0.88rem; color: #a1a1aa; line-height: 1.5; margin-bottom: 0.5rem; }
      .chalk-course-meta { font-family: sans-serif; font-size: 0.75rem; color: #e4d5b7; font-style: italic; }
      .chalk-sommelier-notes { background: #1a1b1f; border-left: 3px solid #e4d5b7; padding: 1.5rem; }
      .chalk-sommelier-notes h4 { font-size: 1.1rem; margin-bottom: 0.4rem; color: #e4d5b7; }
      .chalk-sommelier-notes p { font-family: sans-serif; font-size: 0.88rem; color: #d4d4d8; line-height: 1.6; }
      .chalk-metrics-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center; border-top: 1px solid #27272a; padding-top: 2rem; }
      .chalk-stat strong { font-size: 2.2rem; color: #e4d5b7; display: block; }
      .chalk-stat span { font-family: sans-serif; font-size: 0.72rem; color: #71717a; text-transform: uppercase; }
      .chalk-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .chalk-pkg { background: #121316; border: 1px solid #27272a; padding: 1.8rem; border-radius: 4px; }
      .chalk-pkg h4 { font-size: 1.15rem; margin-bottom: 0.4rem; }
      .chalk-pkg strong { font-family: sans-serif; font-size: 1.5rem; color: #e4d5b7; display: block; margin-bottom: 0.8rem; }
      .chalk-pkg ul { list-style: none; font-family: sans-serif; font-size: 0.82rem; color: #a1a1aa; display: flex; flex-direction: column; gap: 0.35rem; }
      .chalk-footer { border-top: 1px solid #27272a; padding: 2rem 0; text-align: center; font-family: sans-serif; font-size: 0.8rem; color: #71717a; }
      `;

    case "11-musician":
      return `${baseReset}
      body.arch-vinyl { background: #0b0914; color: #f3f4f6; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; min-height: 100vh; }
      .vinyl-header { background: #120e24; border-bottom: 2px solid #8b5cf6; padding: 1rem 0; }
      .vinyl-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .vinyl-brand { display: flex; align-items: center; gap: 0.8rem; }
      .v-disc-icon { font-size: 1.8rem; }
      .vinyl-brand h1 { font-size: 1.3rem; font-weight: 800; }
      .vinyl-stream-counter { font-size: 0.8rem; font-weight: 700; color: #c4b5fd; display: flex; align-items: center; gap: 1.2rem; }
      .btn-vinyl-tour { background: #8b5cf6; color: #fff; font-weight: 700; padding: 0.5rem 1.2rem; border-radius: 4px; text-decoration: none; font-size: 0.85rem; }
      .vinyl-main { padding: 3rem 0; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
      .turntable-deck { background: #120e24; border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 3rem; }
      .turntable-shell { display: grid; grid-template-columns: 1fr 1.3fr; gap: 3rem; align-items: center; }
      .turntable-platter { display: flex; justify-content: center; position: relative; }
      .vinyl-record { width: 260px; height: 260px; border-radius: 50%; background: radial-gradient(circle, #2e2640 10%, #0d0b17 12%, #191428 35%, #0d0b17 55%, #191428 75%, #000 100%); border: 3px solid #372f52; box-shadow: 0 10px 40px rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; position: relative; }
      .vinyl-center-label { width: 90px; height: 90px; border-radius: 50%; background: #8b5cf6; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800; border: 2px solid #fff; text-align: center; }
      .vinyl-record.spinning { animation: spinRecord 3s linear infinite; }
      @keyframes spinRecord { 100% { transform: rotate(360deg); } }
      .vinyl-kicker { font-size: 0.72rem; color: #8b5cf6; font-weight: 800; letter-spacing: 0.12em; display: block; margin-bottom: 0.6rem; }
      .turntable-controls-panel h2 { font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 900; margin-bottom: 0.8rem; }
      .track-meta { font-size: 0.95rem; color: #c4b5fd; margin-bottom: 2rem; line-height: 1.6; }
      .audio-controls-row { display: flex; align-items: center; gap: 1.5rem; }
      .btn-play-vinyl { background: #8b5cf6; color: #fff; font-weight: 800; padding: 0.85rem 1.8rem; border-radius: 6px; border: none; font-size: 1rem; cursor: pointer; }
      .vinyl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.8rem; }
      .v-card { background: #120e24; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
      .v-card img { width: 100%; height: 200px; object-fit: cover; }
      .v-body { padding: 1.4rem; }
      .v-body h4 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.3rem; }
      .v-body p { font-size: 0.85rem; color: #c4b5fd; line-height: 1.5; margin-bottom: 0.8rem; }
      .v-meta { font-size: 0.75rem; color: #8b5cf6; font-weight: 700; }
      .vinyl-packages { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .v-pkg { background: #120e24; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 1.8rem; }
      .v-pkg h4 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .v-pkg strong { font-size: 1.6rem; color: #8b5cf6; display: block; margin-bottom: 0.8rem; }
      .v-pkg ul { list-style: none; font-size: 0.82rem; color: #c4b5fd; display: flex; flex-direction: column; gap: 0.35rem; }
      .vinyl-footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #a78bfa; }
      `;

    case "12-copywriter":
      return `${baseReset}
      body.arch-typewriter { background: #f4efe6; color: #1f1d1a; font-family: 'Courier Prime', 'Special Elite', monospace; min-height: 100vh; }
      .typewriter-header { background: #1f1d1a; color: #fff; padding: 1rem 0; }
      .tw-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .tw-brand { display: flex; align-items: center; gap: 0.6rem; font-weight: 700; }
      .tw-key { font-size: 1.4rem; color: #ef4444; }
      .tw-meta-right { font-size: 0.78rem; display: flex; align-items: center; gap: 1rem; color: #d6d3d1; }
      .btn-tw-hire { background: #ef4444; color: #fff; font-weight: 700; padding: 0.45rem 1rem; text-decoration: none; border-radius: 3px; font-size: 0.82rem; }
      .typewriter-main { padding: 3rem 0; max-width: 900px; margin: 0 auto; }
      .manuscript-page { background: #fffcf7; border: 1px solid #d6cfc2; padding: 3.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.06); }
      .manuscript-header-stamp { border-bottom: 2px solid #1f1d1a; padding-bottom: 1rem; margin-bottom: 2rem; font-size: 0.78rem; line-height: 1.6; }
      .manuscript-headline h2 { font-size: 1.8rem; font-weight: 700; line-height: 1.3; margin-bottom: 0.8rem; color: #000; }
      .red-marginalia-note { color: #dc2626; font-size: 0.82rem; font-style: italic; margin-bottom: 1.5rem; }
      .manuscript-body p { font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem; }
      .manuscript-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; border-top: 1px dashed #1f1d1a; border-bottom: 1px dashed #1f1d1a; padding: 1.5rem 0; margin: 2rem 0; }
      .tw-stat-item strong { font-size: 1.8rem; color: #dc2626; display: block; }
      .tw-stat-item span { font-size: 0.72rem; text-transform: uppercase; }
      .manuscript-subhead { border-bottom: 1px solid #1f1d1a; padding-bottom: 0.4rem; margin: 2rem 0 1.2rem; }
      .manuscript-subhead h3 { font-size: 1rem; font-weight: 700; }
      .campaign-item { margin-bottom: 1.5rem; }
      .campaign-item h4 { font-size: 1.1rem; color: #000; margin-bottom: 0.3rem; }
      .campaign-item p { font-size: 0.92rem; color: #44403c; margin-bottom: 0.3rem; }
      .campaign-item span { font-size: 0.78rem; color: #dc2626; font-weight: 700; }
      .tw-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.2rem; }
      .tw-pkg { border: 1px solid #d6cfc2; padding: 1.4rem; background: #faf7f0; }
      .tw-pkg h4 { font-size: 1rem; margin-bottom: 0.3rem; }
      .tw-pkg strong { font-size: 1.3rem; color: #dc2626; display: block; margin-bottom: 0.5rem; }
      .tw-pkg ul { list-style: none; font-size: 0.78rem; display: flex; flex-direction: column; gap: 0.3rem; }
      .manuscript-signoff { margin-top: 3rem; border-top: 1px solid #d6cfc2; padding-top: 1.5rem; }
      .tw-signature { font-size: 1.4rem; font-weight: 700; margin: 0.5rem 0; color: #000; }
      .typewriter-footer { text-align: center; padding: 2rem 0; font-size: 0.8rem; color: #78716c; }
      `;

    case "13-fashion-model":
      return `${baseReset}
      body.arch-compcard { background: #000000; color: #ffffff; font-family: 'Space Grotesk', -apple-system, sans-serif; min-height: 100vh; }
      .compcard-header { background: #000; border-bottom: 1px solid #27272a; padding: 1rem 0; }
      .cc-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .cc-brand { display: flex; flex-direction: column; }
      .cc-agency-mark { font-size: 0.68rem; letter-spacing: 0.2em; color: #a1a1aa; font-weight: 700; }
      .cc-brand h1 { font-size: 1.4rem; font-weight: 800; }
      .cc-actions { display: flex; align-items: center; gap: 0.8rem; }
      .btn-print-compcard { background: #27272a; color: #fff; border: 1px solid #3f3f46; font-size: 0.82rem; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
      .btn-book-model { background: #ffffff; color: #000; font-weight: 800; font-size: 0.82rem; padding: 0.55rem 1.2rem; border-radius: 4px; text-decoration: none; }
      .compcard-main { padding: 3rem 0; max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 4rem; }
      .compcard-board { background: #121214; border: 1px solid #27272a; border-radius: 8px; padding: 2.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
      .cc-hero-frame { position: relative; aspect-ratio: 3/4; overflow: hidden; border-radius: 4px; }
      .cc-hero-frame img { width: 100%; height: 100%; object-fit: cover; }
      .cc-front-name-plate { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, #000 0%, transparent 100%); padding: 2rem 1.5rem 1rem; }
      .cc-front-name-plate h2 { font-size: 1.8rem; font-weight: 900; letter-spacing: 0.05em; }
      .cc-front-name-plate span { font-size: 0.75rem; color: #a1a1aa; font-weight: 600; }
      .polaroid-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
      .polaroid-card { background: #ffffff; padding: 8px 8px 18px; border-radius: 2px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); transform: rotate(-1deg); }
      .polaroid-card:nth-child(even) { transform: rotate(1.5deg); }
      .polaroid-card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; }
      .polaroid-tag { font-size: 0.65rem; color: #000; font-weight: 700; margin-top: 6px; display: block; text-align: center; }
      .model-stats-box { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem; border-top: 1px solid #27272a; border-bottom: 1px solid #27272a; padding: 1.2rem 0; margin-bottom: 1.5rem; }
      .stat-col .lbl { font-size: 0.65rem; color: #71717a; font-weight: 700; display: block; }
      .stat-col strong { font-size: 0.85rem; color: #ffffff; }
      .agency-rep-row { font-size: 0.72rem; color: #a1a1aa; text-align: center; }
      .cc-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.8rem; }
      .cc-card { background: #121214; border: 1px solid #27272a; border-radius: 4px; overflow: hidden; }
      .cc-card img { width: 100%; height: 280px; object-fit: cover; }
      .cc-card-body { padding: 1.2rem; }
      .cc-card-body h4 { font-size: 1.1rem; margin-bottom: 0.3rem; }
      .cc-card-body p { font-size: 0.82rem; color: #a1a1aa; line-height: 1.5; }
      .cc-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .cc-pkg { background: #121214; border: 1px solid #27272a; border-radius: 4px; padding: 1.8rem; }
      .cc-pkg h4 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .cc-pkg strong { font-size: 1.6rem; color: #fff; display: block; margin-bottom: 0.8rem; }
      .cc-pkg ul { list-style: none; font-size: 0.82rem; color: #a1a1aa; display: flex; flex-direction: column; gap: 0.35rem; }
      .compcard-footer { border-top: 1px solid #27272a; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #71717a; }
      `;

    case "15-financial-advisor":
      return `${baseReset}
      body.arch-wealth-terminal { background: #080b11; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; min-height: 100vh; }
      .wealth-header { background: #0e131d; border-bottom: 2px solid #10b981; padding: 1rem 0; }
      .wealth-bar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; flex-wrap: wrap; gap: 1rem; }
      .wealth-brand { display: flex; align-items: center; gap: 0.8rem; }
      .terminal-amber-box { background: #f59e0b; color: #000; font-size: 0.68rem; font-weight: 800; padding: 0.25rem 0.6rem; border-radius: 3px; font-family: monospace; }
      .wealth-brand h1 { font-size: 1.3rem; font-weight: 800; }
      .wealth-sub { font-size: 0.72rem; color: #10b981; font-weight: 700; font-family: monospace; }
      .wealth-aum-strip { font-size: 0.78rem; font-family: monospace; color: #94a3b8; display: flex; align-items: center; gap: 1.2rem; }
      .btn-wealth-consult { background: #10b981; color: #000; font-weight: 800; padding: 0.5rem 1.2rem; border-radius: 4px; text-decoration: none; font-size: 0.85rem; }
      .wealth-main { padding: 3rem 0; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 3.5rem; }
      .wealth-overview-plate { background: #0e131d; border: 1px solid #1e293b; border-radius: 8px; padding: 3rem; }
      .wealth-stamp { font-family: monospace; font-size: 0.72rem; color: #10b981; letter-spacing: 0.12em; font-weight: 700; margin-bottom: 0.8rem; }
      .wealth-overview-plate h2 { font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; margin-bottom: 1rem; }
      .wealth-overview-plate p { font-size: 1.05rem; color: #94a3b8; line-height: 1.6; max-width: 850px; margin-bottom: 2rem; }
      .wealth-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; border-top: 1px solid #1e293b; padding-top: 1.8rem; }
      .wealth-metric-cell strong { font-size: 2.2rem; color: #10b981; font-weight: 900; display: block; font-family: monospace; }
      .wealth-metric-cell span { font-size: 0.72rem; color: #64748b; text-transform: uppercase; font-family: monospace; }
      .matrix-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
      .alloc-card, .fiduciary-oath-card { background: #0e131d; border: 1px solid #1e293b; border-radius: 8px; padding: 2.2rem; }
      .alloc-pie { width: 140px; height: 140px; border-radius: 50%; margin: 0 auto 1.5rem; box-shadow: 0 0 25px rgba(0,0,0,0.5); }
      .alloc-legend { display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.85rem; color: #cbd5e1; }
      .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 0.4rem; }
      .fiduciary-oath-card h4 { font-size: 1.25rem; color: #fff; margin-bottom: 0.8rem; font-weight: 700; }
      .fiduciary-oath-card p { font-size: 0.9rem; color: #94a3b8; line-height: 1.6; margin-bottom: 1.5rem; }
      .fiduciary-checklist { list-style: none; font-size: 0.85rem; color: #10b981; display: flex; flex-direction: column; gap: 0.6rem; font-weight: 600; }
      .wealth-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem; }
      .wealth-card { background: #0e131d; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; }
      .wealth-card img { width: 100%; height: 180px; object-fit: cover; }
      .wealth-card-body { padding: 1.4rem; }
      .wealth-card-body h4 { font-size: 1.15rem; margin-bottom: 0.4rem; }
      .wealth-card-body p { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin-bottom: 0.8rem; }
      .wealth-card-meta { font-family: monospace; font-size: 0.75rem; color: #10b981; }
      .wealth-packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 1.5rem; }
      .wealth-pkg { background: #0e131d; border: 1px solid #1e293b; border-radius: 8px; padding: 1.8rem; }
      .wealth-pkg h4 { font-size: 1.1rem; margin-bottom: 0.4rem; }
      .wealth-pkg strong { font-family: monospace; font-size: 1.6rem; color: #10b981; display: block; margin-bottom: 0.8rem; }
      .wealth-pkg ul { list-style: none; font-size: 0.82rem; color: #94a3b8; display: flex; flex-direction: column; gap: 0.35rem; }
      .wealth-footer { border-top: 1px solid #1e293b; padding: 2rem 0; text-align: center; font-size: 0.8rem; color: #64748b; }
      `;

    default:
      return `${baseReset}
      body { background: #0a0d14; color: #f1f5f9; font-family: -apple-system, sans-serif; min-height: 100vh; padding: 2rem 0; }
      `;
  }
}

// ----------------------------------------------------------------------------
// JS GENERATOR FOR CUSTOM DOMAIN TEMPLATES
// ----------------------------------------------------------------------------
function getDomainTemplate10JS(prof, variant, commonDataFetch) {
  switch (prof.id) {
    case "01-photographer":
      return `${commonDataFetch}

let photoData = null;

function initSite(data) {
  photoData = data;
  renderFrames(data.items);
  renderTiers(data.packages);
  ensureAttributionBadge();
}

function renderFrames(items) {
  const container = document.getElementById('contact-frames-grid');
  if (!container) return;

  container.innerHTML = items.map((item, idx) => {
    const frameNum = String(idx + 1).padStart(2, '0');
    return \`
      <article class="contact-frame-card" onclick="openLoupe('\${item.img}', '\${escapeHtml(item.title)} &bull; \${escapeHtml(item.meta)}')">
        <div class="frame-media">
          <img src="\${item.img}" alt="\${item.title}" loading="lazy">
          <div class="frame-header-stamp">
            <span>EXP \${frameNum}A</span>
            <span>TX-400</span>
          </div>
        </div>
        <div class="frame-info">
          <strong class="frame-title">\${item.title}</strong>
          <span class="frame-exif">\${item.meta}</span>
        </div>
      </article>
    \`;
  }).join('');
}

function renderTiers(packages) {
  const container = document.getElementById('edition-tiers');
  if (!container) return;

  container.innerHTML = packages.map(pkg => \`
    <div class="tier-box">
      <h4>\${pkg.name}</h4>
      <strong>\${pkg.price}</strong>
      <span>\${pkg.features.join(' &bull; ')}</span>
    </div>
  \`).join('');
}

function setSafelight(mode) {
  const body = document.body;
  const btnRed = document.getElementById('btn-safelight-red');
  const btnWhite = document.getElementById('btn-safelight-white');

  if (mode === 'red') {
    body.className = 'arch-darkroom safelight-red';
    if (btnRed) btnRed.classList.add('active');
    if (btnWhite) btnWhite.classList.remove('active');
  } else {
    body.className = 'arch-darkroom safelight-white';
    if (btnWhite) btnWhite.classList.add('active');
    if (btnRed) btnRed.classList.remove('active');
  }
}

function openLoupe(imgSrc, caption) {
  const modal = document.getElementById('loupe-modal');
  const img = document.getElementById('loupe-img');
  const cap = document.getElementById('loupe-caption');

  if (modal && img && cap) {
    img.src = imgSrc;
    cap.textContent = caption;
    modal.classList.add('active');
  }
}

function closeLoupeModal() {
  const modal = document.getElementById('loupe-modal');
  if (modal) modal.classList.remove('active');
}

function handleInquiry(e) {
  e.preventDefault();
  alert('Thank you! Your fine art print inquiry has been dispatched to Elena Vance\\'s studio.');
  e.target.reset();
}

function escapeHtml(str) {
  return String(str).replace(/'/g, "\\\\'");
}

window.setSafelight = setSafelight;
window.openLoupe = openLoupe;
window.closeLoupeModal = closeLoupeModal;
window.handleInquiry = handleInquiry;
`;

    case "02-doctor":
      return `${commonDataFetch}

function initSite(data) {
  const metricsEl = document.getElementById('clinical-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="c-metric">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const casesEl = document.getElementById('cases-grid');
  if (casesEl) {
    casesEl.innerHTML = data.items.map(item => \`
      <article class="case-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="case-body">
          <span class="case-tag">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <div style="font-size: 0.75rem; color: #0284c7; font-weight: 600;">\${item.meta}</div>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('clinical-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="pkg-clin">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#10003; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }

  ensureAttributionBadge();
}

function handleClinicalSubmit(e) {
  e.preventDefault();
  alert('Clinical Requisition Logged. Dr. Marcus Chen\\'s triage coordinator will review within 24 business hours.');
  e.target.reset();
}

window.handleClinicalSubmit = handleClinicalSubmit;
`;

    case "03-ui-ux-designer":
      return `${commonDataFetch}

function initSite(data) {
  const metricsEl = document.getElementById('canvas-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="c-stat-box">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const casesEl = document.getElementById('cases-grid');
  if (casesEl) {
    casesEl.innerHTML = data.items.map(item => \`
      <article class="canvas-case-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="case-content-box">
          <span style="font-size: 0.72rem; color: #0d99ff; font-weight: 700; text-transform: uppercase;">\${item.tag}</span>
          <h3>\${item.title}</h3>
          <p>\${item.desc}</p>
          <span style="background: #f3f4f6; color: #111827; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.6rem; border-radius: 4px;">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('packages-grid');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="canvas-pkg-card">
        <h3>\${p.name}</h3>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#10003; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }

  ensureAttributionBadge();
}

function setCanvasWidth(mode) {
  const frame = document.getElementById('artboard-frame');
  const dim = document.getElementById('artboard-dim');
  const btns = document.querySelectorAll('.vp-btn');
  btns.forEach(b => b.classList.remove('active'));

  if (mode === 'desktop') {
    frame.style.maxWidth = '1200px';
    dim.textContent = '1440 × 2800';
    btns[0].classList.add('active');
  } else if (mode === 'tablet') {
    frame.style.maxWidth = '768px';
    dim.textContent = '768 × 2800';
    btns[1].classList.add('active');
  } else if (mode === 'mobile') {
    frame.style.maxWidth = '390px';
    dim.textContent = '390 × 2800';
    btns[2].classList.add('active');
  }
}

window.setCanvasWidth = setCanvasWidth;
`;

    case "05-gamer":
      return `${commonDataFetch}
function initSite(data) {
  const statsEl = document.getElementById('hud-stats');
  if (statsEl) {
    statsEl.innerHTML = data.stats.map(s => \`
      <div class="hud-stat-cell">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const cardsEl = document.getElementById('hud-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => \`
      <article class="hud-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="hud-card-body">
          <span style="font-size: 0.72rem; color: #06b6d4; font-family: monospace; font-weight: 700;">\${item.tag}</span>
          <h3>\${item.title}</h3>
          <p>\${item.desc}</p>
          <span style="font-family: monospace; font-size: 0.75rem; color: #ef4444;">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('hud-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="hud-pkg">
        <h3>\${p.name}</h3>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#9679; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "06-architect":
      return `${commonDataFetch}
function initSite(data) {
  const metricsEl = document.getElementById('bp-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="bp-metric-item">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const platesEl = document.getElementById('blueprint-plates');
  if (platesEl) {
    platesEl.innerHTML = data.items.map(item => \`
      <article class="bp-plate-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="bp-plate-body">
          <span class="bp-plate-meta">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span class="bp-plate-meta">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('bp-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="bp-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "07-lawyer":
      return `${commonDataFetch}
function initSite(data) {
  const metricsEl = document.getElementById('judicial-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="j-metric">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const docketEl = document.getElementById('docket-grid');
  if (docketEl) {
    docketEl.innerHTML = data.items.map(item => \`
      <article class="docket-card">
        <span class="docket-tag">\${item.tag}</span>
        <h4>\${item.title}</h4>
        <p>\${item.desc}</p>
        <span class="docket-meta">\${item.meta}</span>
      </article>
    \`).join('');
  }

  const tiersEl = document.getElementById('retainer-tiers');
  if (tiersEl) {
    tiersEl.innerHTML = data.packages.map(p => \`
      <div class="ret-tier">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&sect; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}

function handleRetainerSubmit(e) {
  e.preventDefault();
  alert('Privileged Conflict Intake Delivered to Victoria Sterling, Esq. Chambers.');
  e.target.reset();
}

window.handleRetainerSubmit = handleRetainerSubmit;
`;

    case "08-fitness-trainer":
      return `${commonDataFetch}
function initSite(data) {
  const metricsEl = document.getElementById('ath-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="ath-metric-cell">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const splitEl = document.getElementById('split-cards');
  if (splitEl) {
    splitEl.innerHTML = data.items.map(item => \`
      <article class="split-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="split-body">
          <span class="split-meta">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span class="split-meta">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('ath-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="ath-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#10003; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}

function calculate1RM() {
  const w = parseFloat(document.getElementById('calc-weight').value) || 0;
  const r = parseFloat(document.getElementById('calc-reps').value) || 1;
  const oneRM = Math.round(w * (36 / (37 - r)));
  document.getElementById('rm-result').innerHTML = 'Estimated 1RM: <strong>' + oneRM + ' lbs</strong>';
}

window.calculate1RM = calculate1RM;
`;

    case "09-content-creator":
      return `${commonDataFetch}
function initSite(data) {
  const metricsEl = document.getElementById('deck-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="mk-stat-cell">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const cardsEl = document.getElementById('mk-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => \`
      <article class="mk-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="mk-card-body">
          <span class="mk-card-meta">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span class="mk-card-meta">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('mk-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="mk-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "10-chef":
      return `${commonDataFetch}
function initSite(data) {
  const coursesEl = document.getElementById('chalk-courses');
  if (coursesEl) {
    coursesEl.innerHTML = data.items.map(item => \`
      <div class="chalk-course-card">
        <span class="chalk-course-tag">\${item.tag}</span>
        <h4>\${item.title}</h4>
        <p>\${item.desc}</p>
        <span class="chalk-course-meta">Pairing: \${item.meta}</span>
      </div>
    \`).join('');
  }

  const metricsEl = document.getElementById('chalk-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="chalk-stat">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const pkgsEl = document.getElementById('chalk-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="chalk-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>~ \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "11-musician":
      return `${commonDataFetch}
let isPlaying = false;
let audioCtx = null;
let osc = null;

function initSite(data) {
  const gridEl = document.getElementById('vinyl-grid');
  if (gridEl) {
    gridEl.innerHTML = data.items.map(item => \`
      <article class="v-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="v-body">
          <span class="v-meta">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span class="v-meta">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('vinyl-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="v-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#9835; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}

function toggleVinylPlay() {
  const disc = document.getElementById('vinyl-disc');
  const btn = document.getElementById('btn-play-vinyl');

  if (!isPlaying) {
    isPlaying = true;
    if (disc) disc.classList.add('spinning');
    if (btn) btn.innerHTML = '❚❚ Pause Synthesizer';
    playSynthTone();
  } else {
    isPlaying = false;
    if (disc) disc.classList.remove('spinning');
    if (btn) btn.innerHTML = '▶ Play Synthesizer Preview';
    stopSynthTone();
  }
}

function playSynthTone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();
    osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130.81, audioCtx.currentTime); // C3 chord tone
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
  } catch(e) {}
}

function stopSynthTone() {
  try {
    if (osc) { osc.stop(); osc.disconnect(); }
    if (audioCtx) { audioCtx.close(); }
  } catch(e) {}
}

window.toggleVinylPlay = toggleVinylPlay;
`;

    case "12-copywriter":
      return `${commonDataFetch}
function initSite(data) {
  const statsEl = document.getElementById('tw-stats');
  if (statsEl) {
    statsEl.innerHTML = data.stats.map(s => \`
      <div class="tw-stat-item">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const campaignsEl = document.getElementById('tw-campaigns');
  if (campaignsEl) {
    campaignsEl.innerHTML = data.items.map(item => \`
      <div class="campaign-item">
        <h4>\${item.title} &bull; [\${item.tag}]</h4>
        <p>\${item.desc}</p>
        <span>Performance Proof: \${item.meta}</span>
      </div>
    \`).join('');
  }

  const pkgsEl = document.getElementById('tw-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="tw-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "13-fashion-model":
      return `${commonDataFetch}
function initSite(data) {
  const polaroidGrid = document.getElementById('polaroid-grid');
  if (polaroidGrid) {
    polaroidGrid.innerHTML = data.items.map((item, idx) => {
      const poses = ["Front Polaroids", "Profile Casting", "Runway Walk", "Beauty Headshot"];
      return \`
        <div class="polaroid-card">
          <img src="\${item.img}" alt="\${item.title}" loading="lazy">
          <span class="polaroid-tag">\${poses[idx] || item.title}</span>
        </div>
      \`;
    }).join('');
  }

  const cardsEl = document.getElementById('cc-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => \`
      <article class="cc-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="cc-card-body">
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 700; text-transform: uppercase;">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span style="font-size: 0.75rem; color: #fff; font-weight: 600;">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('cc-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="cc-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&#10003; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    case "15-financial-advisor":
      return `${commonDataFetch}
function initSite(data) {
  const metricsEl = document.getElementById('wealth-metrics');
  if (metricsEl) {
    metricsEl.innerHTML = data.stats.map(s => \`
      <div class="wealth-metric-cell">
        <strong>\${s.val}</strong>
        <span>\${s.label}</span>
      </div>
    \`).join('');
  }

  const cardsEl = document.getElementById('wealth-cards');
  if (cardsEl) {
    cardsEl.innerHTML = data.items.map(item => \`
      <article class="wealth-card">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
        <div class="wealth-card-body">
          <span class="wealth-card-meta">\${item.tag}</span>
          <h4>\${item.title}</h4>
          <p>\${item.desc}</p>
          <span class="wealth-card-meta">\${item.meta}</span>
        </div>
      </article>
    \`).join('');
  }

  const pkgsEl = document.getElementById('wealth-packages');
  if (pkgsEl) {
    pkgsEl.innerHTML = data.packages.map(p => \`
      <div class="wealth-pkg">
        <h4>\${p.name}</h4>
        <strong>\${p.price}</strong>
        <ul>\${p.features.map(f => \`<li>&bull; \${f}</li>\`).join('')}</ul>
      </div>
    \`).join('');
  }
  ensureAttributionBadge();
}
`;

    default:
      return `${commonDataFetch}
function initSite(data) {
  ensureAttributionBadge();
}
`;
  }
}

module.exports = {
  getDomainTemplate10HTML,
  getDomainTemplate10CSS,
  getDomainTemplate10JS
};
