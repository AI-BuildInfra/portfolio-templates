// Dynamic Portfolio Hydration & Media Kit for Aria Thorne
const FALLBACK_DATA = {
  creator: {
    name: "Aria Thorne",
    handle: "@ariathorne",
    niche: "Tech, Cinematic Travel & Digital Nomad Lifestyle",
    tagline: "Crafting cinematic visual narratives and inspiring a community of 1.8M curious explorers.",
    bio: "Aria Thorne is an award-winning travel filmmaker and tech creator. With over 1.8 million followers across platforms and 45 million annual impressions, Aria partners with global forward-thinking brands to tell genuine, high-production human stories.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
  },
  audienceStats: [
    { val: "1.8M+", label: "Total Social Reach" },
    { val: "45M+", label: "Annual Video Impressions" },
    { val: "6.8%", label: "Avg. Engagement Rate (3x Industry Avg)" },
    { val: "74%", label: "Audience Aged 22 - 38" }
  ],
  platforms: [
    { name: "YouTube", followers: "840K Subs", stat: "8.2M Monthly Views", url: "https://youtube.com" },
    { name: "Instagram", followers: "620K Followers", stat: "7.4% Reel Engagement", url: "https://instagram.com" },
    { name: "TikTok", followers: "380K Followers", stat: "14M Likes Total", url: "https://tiktok.com" },
    { name: "Substack", followers: "42K Readers", stat: "48% Open Rate", url: "https://substack.com" }
  ],
  episodes: [
    {
      title: "48 Hours Inside Kyoto's Hidden Temples",
      views: "1.4M Views",
      brand: "In Partnership with Sony Alpha",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Ultimate Solo Nomad Workflow (2025 Tech Stack)",
      views: "890K Views",
      brand: "Featured Notion & Peak Design",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Iceland Beyond the Ring Road: Volcanic Highlands",
      views: "2.1M Views",
      brand: "In Partnership with DJI",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80"
    }
  ],
  partnerships: [
    { brand: "Sony Electronics", scope: "Global Ambassador & Camera Launch Film" },
    { brand: "Airbnb", scope: "Curated Remote Sanctuary Campaign (6 Episodes)" },
    { brand: "DJI Drones", scope: "Flagship Drone Commercial Series & Tutorials" },
    { brand: "Notion", scope: "Productivity System Integration & Live Workshop" }
  ]
};

async function loadCreatorData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initCreatorSite(data);
  } catch (err) {
    console.warn("Using fallback creator data:", err);
    initCreatorSite(FALLBACK_DATA);
  }
}

function initCreatorSite(data) {
  const c = data.creator;
  document.getElementById('creator-tagline').textContent = c.tagline;
  document.getElementById('creator-bio').textContent = c.bio;
  document.getElementById('creator-avatar').src = c.avatar;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metBox = document.getElementById('metrics-container');
  metBox.innerHTML = data.audienceStats.map(m => `
    <div class="metric-card">
      <span class="metric-val">${m.val}</span>
      <span class="metric-lbl">${m.label}</span>
    </div>
  `).join('');

  // Platforms
  const platBox = document.getElementById('platforms-container');
  platBox.innerHTML = data.platforms.map(p => `
    <div class="platform-tile">
      <h3 class="platform-name">${p.name}</h3>
      <div class="platform-follow">${p.followers}</div>
      <div class="platform-stat">${p.stat}</div>
    </div>
  `).join('');

  // Episodes
  const epBox = document.getElementById('episodes-container');
  epBox.innerHTML = data.episodes.map(e => `
    <div class="episode-card">
      <div class="episode-thumb">
        <img src="${e.image}" alt="${e.title}" loading="lazy">
      </div>
      <div class="episode-body">
        <span class="episode-views">${e.views}</span>
        <h4 class="episode-title">${e.title}</h4>
        <span class="episode-brand">${e.brand}</span>
      </div>
    </div>
  `).join('');

  // Partnerships
  const partBox = document.getElementById('partners-container');
  partBox.innerHTML = data.partnerships.map(pt => `
    <div class="partner-card">
      <h4 class="partner-brand">${pt.brand}</h4>
      <p class="partner-scope">${pt.scope}</p>
    </div>
  `).join('');

  // Mobile nav
  const burger = document.getElementById('burger-btn');
  const nav = document.getElementById('creator-nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadCreatorData);
