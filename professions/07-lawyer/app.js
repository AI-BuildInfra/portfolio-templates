// Dynamic Legal Portfolio Hydration for Victoria Sterling, Esq.
const FALLBACK_DATA = {
  attorney: {
    name: "Victoria Sterling",
    title: "Principal Counsel & Managing Partner",
    firm: "Sterling & Associates Legal Counsel",
    jurisdiction: "New York, NY & London, UK",
    tagline: "Strategic counsel for transformative mergers, high-stakes intellectual property, and global regulatory compliance.",
    bio: "Victoria Sterling has over 18 years of legal advisory experience representing Fortune 500 corporations, private equity funds, and emerging technology ventures. She is recognized by Chambers USA and Super Lawyers as a Top Corporate Strategist.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (212) 555-8840"
  },
  metrics: [
    { val: "18+", label: "Years Bar Experience" },
    { val: "$4.5B+", label: "Aggregate M&A Value" },
    { val: "98%", label: "Case Resolution Rate" },
    { val: "Chambers", label: "Band 1 Ranked Partner" }
  ],
  admissions: [
    "New York State Bar (Appellate Division, First Department)",
    "United States District Court: Southern & Eastern Districts of NY",
    "United States Court of Appeals for the Federal Circuit",
    "Juris Doctor (J.D.), Columbia Law School, Magna Cum Laude"
  ],
  practices: [
    {
      title: "Mergers & Acquisitions",
      desc: "Structuring complex cross-border acquisitions, corporate spin-offs, and buyout transactions with comprehensive due diligence."
    },
    {
      title: "Intellectual Property Litigation",
      desc: "Aggressive representation before federal courts and the USPTO for patent infringement, trade secret theft, and trademark protection."
    },
    {
      title: "Corporate Governance & Securities",
      desc: "Advising public and private boards on SEC disclosures, shareholder activist defense, and executive compensation structuring."
    },
    {
      title: "Regulatory & Antitrust Defense",
      desc: "Navigating FTC and DOJ Hart-Scott-Rodino clearance and international regulatory compliance for market-moving combinations."
    }
  ],
  matters: [
    {
      title: "$480M Cross-Border Cloud Acquisition",
      industry: "Enterprise Software",
      role: "Lead Legal Advisor to Target",
      outcome: "Closed with complete antitrust clearance in US and EU."
    },
    {
      title: "$92M Patent Infringement Settlement",
      industry: "Biotechnology",
      role: "Chief Litigation Counsel for Plaintiff",
      outcome: "Secured historic favorable damages settlement and global licensing royalty."
    },
    {
      title: "FTC Second Request Antitrust Clearance",
      industry: "Fintech Infrastructure",
      role: "Antitrust Defense Co-Counsel",
      outcome: "Successfully defended merger without divestitures within 90 days."
    }
  ]
};

async function loadLawData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initLawSite(data);
  } catch (err) {
    console.warn("Using fallback law data:", err);
    initLawSite(FALLBACK_DATA);
  }
}

function initLawSite(data) {
  const at = data.attorney;
  document.getElementById('brand-name').textContent = at.name.toUpperCase();
  document.getElementById('hero-tagline').textContent = at.tagline;
  document.getElementById('hero-bio').textContent = at.bio;
  document.getElementById('attorney-avatar').src = at.avatar;
  document.getElementById('top-phone').textContent = at.phone;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metBox = document.getElementById('metrics-container');
  metBox.innerHTML = data.metrics.map(m => `
    <div class="metric-item">
      <span class="metric-num">${m.val}</span>
      <span class="metric-lbl">${m.label}</span>
    </div>
  `).join('');

  // Practices
  const pracBox = document.getElementById('practices-container');
  pracBox.innerHTML = data.practices.map(p => `
    <div class="practice-card">
      <h3 class="practice-title">${p.title}</h3>
      <p class="practice-desc">${p.desc}</p>
    </div>
  `).join('');

  // Matters
  const matBox = document.getElementById('matters-container');
  matBox.innerHTML = data.matters.map(m => `
    <div class="matter-card">
      <h3 class="matter-title">${m.title}</h3>
      <span class="matter-industry">${m.industry}</span>
      <p class="matter-role"><strong>Role:</strong> ${m.role}</p>
      <p class="matter-outcome"><strong>Outcome:</strong> ${m.outcome}</p>
    </div>
  `).join('');

  // Admissions
  const admBox = document.getElementById('admissions-container');
  admBox.innerHTML = data.admissions.map(a => `<li>${a}</li>`).join('');

  // Mobile nav
  const burger = document.getElementById('law-burger');
  const nav = document.getElementById('law-nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadLawData);
