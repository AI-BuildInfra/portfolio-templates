// Dynamic Portfolio Hydration for Kai 'ViperX' Thorne Esports Portfolio
const FALLBACK_DATA = {
  gamer: {
    gamertag: "ViperX",
    realName: "Kai Thorne",
    team: "Team Phantom Esports",
    role: "Entry Fragger & Team Captain",
    game: "Valorant & Apex Legends",
    tagline: "Top 10 Radiant FPS Athlete & Content Creator bringing aggressive tactical play and high-energy broadcasts.",
    isLive: true,
    liveGame: "Valorant Champions Tour Ranked",
    streamUrl: "https://twitch.tv"
  },
  stats: [
    { val: "850K+", label: "Twitch & YouTube Followers" },
    { val: "$280K+", label: "Tournament Prize Earnings" },
    { val: "#4", label: "Global Radiant Peak Rank" },
    { val: "4", label: "Major MVP Trophies" }
  ],
  socials: [
    { platform: "Twitch", url: "https://twitch.tv", handle: "ViperX" },
    { platform: "YouTube", url: "https://youtube.com", handle: "ViperXClips" },
    { platform: "Twitter", url: "https://twitter.com", handle: "@KaiViperX" },
    { platform: "Discord", url: "https://discord.gg", handle: "ViperNest" }
  ],
  trophies: [
    {
      tournament: "VCT Masters Berlin 2025",
      placement: "1st Place Champions 🏆",
      prize: "$100,000",
      award: "Tournament Finals MVP"
    },
    {
      tournament: "Red Bull Campus Clutch World Cup",
      placement: "1st Place Champions 🏆",
      prize: "$45,000",
      award: "Highest K/D Ratio (1.68)"
    },
    {
      tournament: "Apex Global Series Invitational",
      placement: "Runner-Up 🥈",
      prize: "$30,000",
      award: "Apex Predator Fragger"
    }
  ],
  setup: [
    { category: "Gaming Rig", specs: ["Intel Core i9-14900KS", "NVIDIA RTX 4090 24GB", "64GB DDR5 7200MHz", "Custom Liquid Loop"] },
    { category: "Display", specs: ["ASUS ROG Swift OLED 360Hz", "0.03ms G-to-G Response", "27-inch 1440p QHD"] },
    { category: "Peripherals", specs: ["Wooting 60HE Rapid Trigger Keyboard", "Razer DeathAdder V3 Pro (800 DPI)", "Artisan Zero Soft Mousepad", "Sennheiser HD660S2 + Shure SM7B"] }
  ],
  schedule: [
    { day: "Monday & Tuesday", time: "5:00 PM - 11:00 PM EST", activity: "Radiant Ranked Solo Queue & Pro Scrims" },
    { day: "Thursday", time: "6:00 PM - 12:00 AM EST", activity: "Community Tournaments & Viewer Matches" },
    { day: "Friday & Saturday", time: "4:00 PM - Late Night", activity: "Championship Watch Parties & High Stakes Wagers" },
    { day: "Sunday", time: "Off Air", activity: "VOD Review & Aim Lab Regimen" }
  ],
  sponsors: ["HyperX", "Red Bull Gaming", "Secretlab Chairs", "Logitech G"]
};

async function loadGamerData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initGamerSite(data);
  } catch (err) {
    console.warn("Using fallback gamer data:", err);
    initGamerSite(FALLBACK_DATA);
  }
}

function initGamerSite(data) {
  const g = data.gamer;
  document.getElementById('brand-tag').textContent = g.gamertag;
  document.getElementById('brand-team').textContent = `// ${g.team.toUpperCase()}`;
  document.getElementById('gamer-title').textContent = `${g.realName.toUpperCase()} "${g.gamertag}"`;
  document.getElementById('gamer-tagline').textContent = g.tagline;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Live status
  const liveLabel = document.getElementById('live-label');
  const streamTopic = document.getElementById('stream-topic');
  const watchLink = document.getElementById('watch-link');

  if (g.isLive) {
    liveLabel.textContent = "🔴 LIVE ON TWITCH";
    streamTopic.textContent = `Playing: ${g.liveGame}`;
  } else {
    liveLabel.textContent = "⚪ OFFLINE (VODs Available)";
    streamTopic.textContent = `Next Stream: Check Weekly Radar`;
  }
  watchLink.href = g.streamUrl;

  // Socials
  const socialBox = document.getElementById('social-channels');
  socialBox.innerHTML = data.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" class="social-chip">${s.platform}: ${s.handle}</a>
  `).join('');

  // Stats
  const statsBox = document.getElementById('stats-container');
  statsBox.innerHTML = data.stats.map(s => `
    <div class="stat-item">
      <span class="stat-num">${s.val}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  // Trophies
  const trophyBox = document.getElementById('trophy-container');
  trophyBox.innerHTML = data.trophies.map(t => `
    <div class="trophy-card">
      <div class="trophy-placement">${t.placement}</div>
      <h3 class="trophy-name">${t.tournament}</h3>
      <div class="trophy-meta">
        <span>Award: ${t.award}</span>
        <span class="prize-pool">${t.prize}</span>
      </div>
    </div>
  `).join('');

  // Rig
  const rigBox = document.getElementById('rig-container');
  rigBox.innerHTML = data.setup.map(r => `
    <div class="rig-card">
      <h3 class="rig-cat">${r.category}</h3>
      <ul class="rig-specs">
        ${r.specs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Schedule
  const schedBox = document.getElementById('schedule-container');
  schedBox.innerHTML = data.schedule.map(sc => `
    <div class="schedule-item">
      <div class="schedule-day">${sc.day}</div>
      <div class="schedule-time">${sc.time}</div>
      <div class="schedule-activity">${sc.activity}</div>
    </div>
  `).join('');

  // Sponsors
  const sponsorTags = document.getElementById('sponsor-tags');
  sponsorTags.innerHTML = data.sponsors.map(sp => `
    <span class="sponsor-chip">${sp}</span>
  `).join('');

  // Mobile nav
  const burger = document.getElementById('burger-btn');
  const nav = document.getElementById('cyber-nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadGamerData);
