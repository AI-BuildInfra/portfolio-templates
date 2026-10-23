// Dynamic Portfolio Hydration Engine for Elena Vance Photography
const FALLBACK_DATA = {
  profile: {
    name: "Elena Vance",
    title: "Visual Storyteller & Fine Art Photographer",
    tagline: "Capturing raw emotion, fleeting light, and untamed natural beauty across 30+ countries.",
    location: "San Francisco & Global",
    email: "elena@auraframes.com",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    aboutImage: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80",
    bio: "With over a decade behind the lens, Elena Vance weaves cinematic realism with intimate portraiture. Her work is recognized globally for evocative natural light and raw storytelling."
  },
  stats: [
    { value: "12+", label: "Years Experience" },
    { value: "450+", label: "Photo Shoots" },
    { value: "32", label: "Countries Explored" },
    { value: "18", label: "International Awards" }
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "500px", url: "https://500px.com" },
    { platform: "Behance", url: "https://behance.net" },
    { platform: "LinkedIn", url: "https://linkedin.com" }
  ],
  categories: ["All", "Portrait", "Landscape", "Editorial", "Street"],
  gallery: [
    {
      id: 1,
      title: "Whispers of the Highlands",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      camera: "Sony A7R V",
      lens: "FE 24-70mm f/2.8 GM II",
      exif: "28mm • f/8.0 • 1/250s • ISO 100",
      description: "Morning mist descending over the rugged peaks of the Scottish Highlands."
    },
    {
      id: 2,
      title: "Seraphina in Golden Hour",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
      camera: "Leica M11",
      lens: "Noctilux-M 50mm f/0.95",
      exif: "50mm • f/1.2 • 1/1000s • ISO 64",
      description: "Natural ambient backlight portrait capturing warmth and quiet introspection."
    },
    {
      id: 3,
      title: "Neon Echoes Tokyo",
      category: "Street",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      camera: "Fujifilm X-T5",
      lens: "XF 33mm f/1.4 R LM WR",
      exif: "33mm • f/2.0 • 1/160s • ISO 800",
      description: "Reflections in Shinjuku alleys following an autumn rain shower."
    },
    {
      id: 4,
      title: "Velvet Monolith",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 80mm f/1.9",
      exif: "80mm • f/4.0 • 1/400s • ISO 100",
      description: "Haute couture high fashion editorial for Autumn Collection."
    },
    {
      id: 5,
      title: "Solitude in Sahara",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      camera: "Sony A7R V",
      lens: "FE 70-200mm f/2.8 GM II",
      exif: "135mm • f/5.6 • 1/800s • ISO 100",
      description: "Dune contours sculpted by relentless Sahara desert winds."
    },
    {
      id: 6,
      title: "Grace in Movement",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L USM",
      exif: "85mm • f/1.4 • 1/1250s • ISO 160",
      description: "Contemporary ballet dancer suspended mid-cadence in studio."
    }
  ],
  gear: [
    { category: "Cameras", items: ["Sony Alpha A7R V", "Leica M11 Rangefinder", "Hasselblad X2D 100C"] },
    { category: "Lenses", items: ["Sony FE 24-70mm f/2.8 GM II", "Leica Noctilux 50mm f/0.95", "Canon RF 85mm f/1.2L"] },
    { category: "Lighting & Grip", items: ["Profoto B10X Plus Monolights", "Nanlite Forza 500 LED", "Gitzo Systematic Carbon Tripod"] }
  ],
  packages: [
    {
      name: "Editorial & Commercial",
      price: "$2,800",
      deliverables: ["Full-day on-location shoot", "Creative direction & moodboards", "40 fully retouched high-res images", "Commercial usage rights", "Private online client gallery"],
      highlight: true
    },
    {
      name: "Portrait & Intimate",
      price: "$1,200",
      deliverables: ["3-hour custom studio or outdoors session", "2 outfit changes", "20 master retouched photographs", "Print release rights", "Fast 5-day turnaround"],
      highlight: false
    },
    {
      name: "Fine Art Commission",
      price: "$4,500+",
      deliverables: ["Multi-day expedition / bespoke project", "Museum-grade archival prints (36x24\")", "Signed certificate of authenticity", "Exclusive limited series rights", "Behind-the-scenes documentary photobook"],
      highlight: false
    }
  ],
  testimonials: [
    {
      quote: "Elena captured our campaign with unmatched artistic grace. Her sensitivity to natural light completely elevated our visual brand identity.",
      client: "Marcus Thorne",
      role: "Creative Director, Vogue Escapes"
    },
    {
      quote: "The gallery she delivered was breath-taking. She managed to make every portrait look like a Renaissance painting with contemporary vibrancy.",
      client: "Chloe Saint-Laurent",
      role: "Fashion Model & Curator"
    }
  ]
};

let currentPhotos = [];
let activeCategory = "All";

async function loadPortfolioData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error('Network error loading data.json');
    const data = await response.json();
    initPortfolio(data);
  } catch (err) {
    console.warn("Serving fallback portfolio data due to local browser security or network restriction:", err);
    initPortfolio(FALLBACK_DATA);
  }
}

function initPortfolio(data) {
  // Update Header & Hero
  document.getElementById('brand-logo').textContent = data.profile.name;
  document.getElementById('hero-title').textContent = data.profile.name;
  document.getElementById('hero-tagline').textContent = data.profile.title;
  document.getElementById('hero-desc').textContent = data.profile.tagline;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  if (data.profile.heroImage) {
    document.getElementById('hero-bg').style.backgroundImage = `url('${data.profile.heroImage}')`;
  }

  // Update About
  document.getElementById('about-img').src = data.profile.aboutImage;
  document.getElementById('about-bio').textContent = data.profile.bio;
  document.getElementById('about-location').textContent = data.profile.location;

  // Social Links
  const socialsContainer = document.getElementById('social-links');
  socialsContainer.innerHTML = data.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill">${s.platform} &nearr;</a>
  `).join('');

  // Stats
  const statsContainer = document.getElementById('stats-container');
  statsContainer.innerHTML = data.stats.map(st => `
    <div class="stat-item">
      <span class="stat-num">${st.value}</span>
      <span class="stat-label">${st.label}</span>
    </div>
  `).join('');

  // Categories & Gallery
  currentPhotos = data.gallery;
  renderCategories(data.categories || ["All", "Portrait", "Landscape", "Editorial", "Street"]);
  renderGallery(currentPhotos);

  // Gear
  const gearContainer = document.getElementById('gear-container');
  gearContainer.innerHTML = data.gear.map(g => `
    <div class="gear-card">
      <h3>${g.category}</h3>
      <ul class="gear-list">
        ${g.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Packages
  const packagesContainer = document.getElementById('packages-container');
  packagesContainer.innerHTML = data.packages.map(p => `
    <div class="package-card ${p.highlight ? 'highlight' : ''}">
      ${p.highlight ? '<span class="highlight-badge">Recommended</span>' : ''}
      <h3 class="package-name">${p.name}</h3>
      <div class="package-price">${p.price}</div>
      <ul class="package-features">
        ${p.deliverables.map(d => `<li>${d}</li>`).join('')}
      </ul>
      <a href="#contact" class="btn ${p.highlight ? 'btn-primary' : 'btn-outline'} btn-block">Book Experience</a>
    </div>
  `).join('');

  // Testimonials
  const testContainer = document.getElementById('testimonials-container');
  testContainer.innerHTML = data.testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">${t.client}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `).join('');

  setupInteractions();
}

function renderCategories(categories) {
  const bar = document.getElementById('filter-bar');
  bar.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      const filtered = activeCategory === 'All' 
        ? currentPhotos 
        : currentPhotos.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
      renderGallery(filtered);
    });
  });
}

function renderGallery(photos) {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = photos.map(photo => `
    <div class="gallery-card" data-id="${photo.id}">
      <div class="gallery-img-wrap">
        <img src="${photo.image}" alt="${photo.title}" loading="lazy">
        <div class="gallery-card-overlay">
          <span class="card-cat">${photo.category}</span>
          <h4 class="card-title">${photo.title}</h4>
          <span class="card-meta">${photo.exif || photo.camera}</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id, 10);
      const photo = currentPhotos.find(p => p.id === id);
      if (photo) openLightbox(photo);
    });
  });
}

function openLightbox(photo) {
  const modal = document.getElementById('lightbox-modal');
  document.getElementById('lightbox-img').src = photo.image;
  document.getElementById('lightbox-cat').textContent = photo.category;
  document.getElementById('lightbox-title').textContent = photo.title;
  document.getElementById('lightbox-desc').textContent = photo.description || '';
  document.getElementById('lightbox-cam').textContent = photo.camera || 'Custom Rig';
  document.getElementById('lightbox-lens').textContent = photo.lens || 'Prime Lens';
  document.getElementById('lightbox-exif').textContent = photo.exif || 'Archival Quality';
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupInteractions() {
  // Mobile Nav
  const toggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Lightbox Close
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-close-overlay').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', loadPortfolioData);
