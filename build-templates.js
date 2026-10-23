const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const PROFESSIONS_DIR = path.join(ROOT_DIR, 'professions');

// 15 Professions with curated, rich industry data
const PROFESSIONS = [
  {
    id: "01-photographer",
    name: "Elena Vance",
    category: "creative",
    title: "Fine Art & Editorial Photographer",
    headline: "Capturing Fleeting Light and Raw Emotion Across 30+ Countries",
    tagline: "Fine Art • Editorial • Landscapes",
    bio: "Elena Vance is an internationally published photographer whose work bridges cinematic realism with intimate portraiture. Featured in Vogue Escapes, National Geographic, and Harper's Arts.",
    location: "San Francisco & Global",
    email: "elena@auraframes.com",
    phone: "+1 (415) 890-4321",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "12+", label: "Years Experience" },
      { val: "450+", label: "Photo Shoots" },
      { val: "32", label: "Countries Explored" },
      { val: "18", label: "Global Awards" }
    ],
    itemsTitle: "Selected Photography Series",
    items: [
      { title: "Whispers of Highlands", tag: "Landscape", desc: "Dawn mist rising over Scottish mountain crests.", meta: "Sony A7R V • 24-70mm f/2.8", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
      { title: "Seraphina at Dusk", tag: "Portrait", desc: "Golden hour natural backlight capturing quiet introspection.", meta: "Leica M11 • 50mm f/0.95", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80" },
      { title: "Neon Reflections Tokyo", tag: "Street", desc: "Post-rain reflections and moody lights in Shinjuku.", meta: "Fujifilm X-T5 • 33mm f/1.4", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80" },
      { title: "Velvet Monolith", tag: "Editorial", desc: "Haute couture high fashion autumn collection plates.", meta: "Hasselblad X2D • 80mm f/1.9", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Editorial & Commercial", price: "$2,800", features: ["Full-day shoot on location", "40 master retouched photos", "Full commercial usage rights", "Online client proofing gallery"] },
      { name: "Portrait Session", price: "$1,200", features: ["3-hour dedicated session", "20 retouched selections", "Print release included", "5-day turnaround"] },
      { name: "Fine Art Commission", price: "$4,500+", features: ["Bespoke expedition shoot", "Museum-grade 36x24 archival prints", "Signed certificate of authenticity", "Exclusive rights"] }
    ],
    reviews: [
      { quote: "Elena's mastery of natural light completely elevated our visual campaign.", author: "Marcus Thorne", role: "Creative Director, Vogue" },
      { quote: "Every portrait delivered looks like a modern classical masterpiece.", author: "Chloe Saint-Laurent", role: "Curator" }
    ]
  },
  {
    id: "02-doctor",
    name: "Dr. Marcus Chen",
    category: "wellness",
    title: "MD, FACC • Interventional Cardiologist",
    headline: "Compassionate Heart Care Powered by Clinical Innovation",
    tagline: "Cardiology • Preventive Medicine • Catheterization",
    bio: "Dr. Marcus Chen is a double board-certified Interventional Cardiologist with over 15 years of clinical practice. Having performed 3,200+ procedures, he specializes in complex coronary interventions and preventive cardiology.",
    location: "New York, NY (Madison Ave)",
    email: "appointments@dr-marcuschen.com",
    phone: "+1 (212) 555-0199",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "15+", label: "Years Experience" },
      { val: "3,200+", label: "Procedures Performed" },
      { val: "99.4%", label: "Procedure Success Rate" },
      { val: "45+", label: "Peer-Reviewed Papers" }
    ],
    itemsTitle: "Clinical Specialties & Interventions",
    items: [
      { title: "Coronary Angioplasty & Stents", tag: "Intervention", desc: "Minimally invasive radial artery access restoring critical arterial flow.", meta: "Same-Day Discharge Available", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
      { title: "Preventive Cardiology & Lipids", tag: "Prevention", desc: "Advanced biomarker profiling, calcium scoring, and genetic risk audits.", meta: "Early Detection Protocol", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80" },
      { title: "Heart Failure & Valve Health", tag: "Cardiology", desc: "Structural valve evaluations, hemodynamic optimization, and medication management.", meta: "Comprehensive Care", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80" },
      { title: "Advanced Diagnostic Testing", tag: "Diagnostics", desc: "Stress echocardiography, Holter monitoring, and vascular ultrasound.", meta: "High-Resolution Imaging", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Initial Cardiac Consultation", price: "$350", features: ["60-minute physician examination", "12-lead baseline resting ECG", "Comprehensive risk assessment", "Personalized treatment roadmap"] },
      { name: "Executive Heart Screening", price: "$750", features: ["Echocardiogram diagnostic review", "Coronary calcium score analysis", "Lipid & metabolic blood profile", "Lifestyle & nutrition protocol"] },
      { name: "Telehealth Second Opinion", price: "$250", features: ["Secure HIPAA video consultation", "Prior angiogram review", "Treatment recommendations", "Direct clinical follow-up"] }
    ],
    reviews: [
      { quote: "Dr. Chen's surgical skill and gentle bedside manner saved my husband's life.", author: "Eleanor R.", role: "Patient" },
      { quote: "He takes the time to explain the clinical science without rushing. Truly exceptional.", author: "David B.", role: "Patient" }
    ]
  },
  {
    id: "03-ui-ux-designer",
    name: "Maya Lin",
    category: "creative",
    title: "Staff Product & Design Systems Designer",
    headline: "Crafting Resilient Digital Products and Scalable Multi-Brand Design Systems",
    tagline: "Design Systems • Enterprise SaaS • Fintech",
    bio: "Over 9 years architecting products for fintech unicorns, developer platforms, and enterprise SaaS. Bridging rigorous qualitative research with production token architecture.",
    location: "Seattle, WA & Remote",
    email: "hello@mayalinux.design",
    phone: "+1 (206) 555-0144",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "9+", label: "Years Experience" },
      { val: "14+", label: "Design Systems Shipped" },
      { val: "2.4M+", label: "Active Platform Users" },
      { val: "3", label: "Design Awards (Red Dot)" }
    ],
    itemsTitle: "Selected Product Case Studies",
    items: [
      { title: "VaultPay Global Treasury App", tag: "Fintech", desc: "Autonomous international cross-border liquidity management platform.", meta: "+164% Daily Transactions", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { title: "Prism Multi-Brand Design System", tag: "Design Systems", desc: "Unified 4 enterprise brands under tokenized WCAG 2.1 AAA accessibility.", meta: "62% Faster Sprint Velocity", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" },
      { title: "Orbit AI Codebase Copilot", tag: "Developer Tools", desc: "Human-in-the-loop AST visualization and code refactoring interface.", meta: "4.9/5 CSAT Rating", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
      { title: "Krypton Health Patient Portal", tag: "HealthTech", desc: "Empowering patients with transparent telehealth scheduling and lab results.", meta: "98.7% Retention Rate", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Design System Audit & Tokens", price: "$4,500", features: ["Figma token architecture review", "Accessibility WCAG compliance audit", "Component library restructuring", "Developer handoff documentation"] },
      { name: "End-to-End Product Design", price: "$8,500+", features: ["User research & journey blueprints", "Wireframes to high-fidelity prototypes", "Interactive Protopie testing", "Engineering support & QA"] },
      { name: "Monthly Staff Design Advisory", price: "$3,800/mo", features: ["15 hours design leadership", "Design sprint alignment", "Design team mentoring", "Executive design reviews"] }
    ],
    reviews: [
      { quote: "Maya transformed our messy platform into a benchmark of elegant usability.", author: "Samantha Vance", role: "VP of Product" },
      { quote: "Her deep understanding of design tokens saved our engineering squads months of work.", author: "Julian Meyer", role: "Head of Engineering" }
    ]
  },
  {
    id: "04-developer",
    name: "Alex Rivera",
    category: "tech",
    title: "Senior Distributed Systems & Full-Stack Engineer",
    headline: "Architecting Fault-Tolerant Microservices and High-Throughput Cloud Infrastructure",
    tagline: "Rust • Go • TypeScript • Kubernetes",
    bio: "Software engineer with 8+ years building resilient event-driven microservices, developer tooling, and distributed pipelines. Passionate about system latency, concurrency, and open-source.",
    location: "Austin, TX & Remote",
    email: "alex@riveradev.io",
    phone: "+1 (512) 555-0182",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "8+", label: "Years in Production" },
      { val: "4.2M", label: "Daily API Requests" },
      { val: "18.5k", label: "GitHub Stars" },
      { val: "99.99%", label: "Uptime SLA Maintained" }
    ],
    itemsTitle: "Production Deployments & Open Source",
    items: [
      { title: "KubeStream Distributed Telemetry", tag: "Rust / Kubernetes", desc: "Real-time distributed log indexing and tracing engine for cloud clusters.", meta: "Sub-15ms Latency Across 500 Nodes", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80" },
      { title: "HyperGraph API Gateway", tag: "Go / Docker", desc: "High-throughput asynchronous federated GraphQL gateway with automatic caching.", meta: "65,000 req/sec • 4ms p99", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
      { title: "StateForge State Engine", tag: "TypeScript", desc: "Declarative immutable state management library with zero boilerplate.", meta: "250k Monthly NPM Downloads", img: "https://images.unsplash.com/photo-1516116211227-bbc04ebf7972?auto=format&fit=crop&w=800&q=80" },
      { title: "ZeroSec Secrets Manager", tag: "Go / AWS", desc: "Zero-knowledge ephemeral credential injector for container runtimes.", meta: "Enterprise Ready", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Architecture & Code Review", price: "$1,800", features: ["Distributed systems health audit", "Performance bottleneck identification", "Concurrency & memory leak profiling", "Actionable refactor roadmap"] },
      { name: "Microservices MVP Sprint", price: "$6,500", features: ["High-performance Go/Rust backend", "Docker & Kubernetes setup", "PostgreSQL schema & gRPC endpoints", "Automated CI/CD test pipeline"] },
      { name: "Fractional Principal Eng", price: "$5,000/mo", features: ["20 hours strategic guidance", "PR reviews and system design", "Incident post-mortem leadership", "Cloud cost optimization"] }
    ],
    reviews: [
      { quote: "Alex resolved our distributed race condition in 48 hours. Brilliant systems thinker.", author: "David Vance", role: "CTO, CloudPulse" },
      { quote: "His architecture reduced our AWS monthly bill by 38% while doubling throughput.", author: "Elena Cruz", role: "Head of Infrastructure" }
    ]
  },
  {
    id: "05-gamer",
    name: "Kai 'ViperX' Thorne",
    category: "tech",
    title: "Pro Esports Athlete & Twitch Partner",
    headline: "Dominating FPS Arenas with Aggressive Tactical Mastery and Live Broadcasts",
    tagline: "Valorant • Apex Legends • Esports Captain",
    bio: "Top 10 Radiant FPS athlete and Team Phantom captain. Over 850k followers across Twitch & YouTube with 4 Major Championship MVP titles.",
    location: "Los Angeles, CA",
    email: "mgmt@viperx.gg",
    phone: "+1 (310) 555-0199",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "850K+", label: "Twitch & YouTube Followers" },
      { val: "$280K+", label: "Tournament Prize Earnings" },
      { val: "#4", label: "Peak Radiant Rank" },
      { val: "4", label: "Major MVP Trophies" }
    ],
    itemsTitle: "Championship Highlights & Tournaments",
    items: [
      { title: "VCT Masters Berlin 2025", tag: "Valorant", desc: "1st Place Champions after an unforgettable 5-map reverse sweep.", meta: "Tournament MVP 🏆", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" },
      { title: "Red Bull Campus Clutch Cup", tag: "Esports", desc: "Gold Trophy champions leading tournament in frags and clutch percentage.", meta: "1.68 KD Ratio", img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80" },
      { title: "Apex Global Invitational", tag: "Apex Legends", desc: "Runner-up silver finish with record kill points in match-point finals.", meta: "Predator Bracket", img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80" },
      { title: "360Hz Battle Station Tour", tag: "Hardware", desc: "Detailed breakdown of the RTX 4090 custom loop rig and rapid-trigger gear.", meta: "Hardware Showcase", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Stream Overlay & Brand Shoutout", price: "$1,500", features: ["Prominent animated banner overlay", "3 dedicated live on-stream shoutouts", "Clickable chat bot link triggers", "Social media post amplification"] },
      { name: "Dedicated YouTube Feature", price: "$4,200", features: ["10-15 minute gameplay video feature", "Dedicated product showcase & testing", "Pinned comment with promo discount code", "Cross-promotion on Twitter & Discord"] },
      { name: "Quarterly Brand Alliance", price: "$10,000", features: ["Exclusive hardware category lock", "Custom jersey logo placement", "Live event tournament appearances", "Content creator campaign integrations"] }
    ],
    reviews: [
      { quote: "ViperX brought incredible authenticity and record engagement to our mouse launch.", author: "Sarah Jenkins", role: "HyperX Marketing" },
      { quote: "One of the most professional competitors in modern gaming.", author: "Coach Tyler", role: "Team Phantom" }
    ]
  },
  {
    id: "06-architect",
    name: "Kaelen Voss, AIA",
    category: "creative",
    title: "Principal Architect • Studio Arcos",
    headline: "Sculpting Light, Sustainable Materiality, and Timeless Spatial Geometries",
    tagline: "Sustainable Architecture • Mass Timber • Sanctuaries",
    bio: "Kaelen Voss is an AIA architect whose practice specializes in sustainable residential sanctuaries, mass-timber civic structures, and adaptive re-use across Europe and North America.",
    location: "Zurich, Switzerland & Copenhagen",
    email: "inquiries@studioarcos.ch",
    phone: "+41 44 215 8800",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "16+", label: "Years in Practice" },
      { val: "42", label: "Completed Projects" },
      { val: "9", label: "AIA & RIBA Design Awards" },
      { val: "Zero-Net", label: "Carbon Target Standard" }
    ],
    itemsTitle: "Selected Architectural Monographs",
    items: [
      { title: "The Alpine Monolith", tag: "Residential", desc: "Submerged granite residence leveraging geothermal warmth in Vals.", meta: "450 m² • Completed 2024", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
      { title: "Fjord Cultural Pavilion", tag: "Civic", desc: "Cantilevered mass-timber event pavilion on the waters of Bergen.", meta: "1,200 m² • CLT Structure", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
      { title: "Koppar Atrium Lofts", tag: "Adaptive Reuse", desc: "Restored 19th-century locomotive depot transformed into biophilic lofts.", meta: "2,800 m² • Stockholm", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" },
      { title: "Solstice Desert Sanctuary", tag: "Private Villa", desc: "Rammed-earth desert pavilion with passive solar shade architecture.", meta: "600 m² • Arizona", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Feasibility & Site Program", price: "$6,500", features: ["Zoning and environmental review", "Sun-path solar analysis", "Initial spatial programmatic layout", "Preliminary budget model"] },
      { name: "Full Architectural Commission", price: "Percentage of Build", features: ["Concept to construction documents", "Permit acquisition leadership", "Material sourcing & contractor bids", "On-site construction supervision"] },
      { name: "Interior Spatial Refinement", price: "$12,000", features: ["Custom millwork design", "Sustainable material palette curation", "Acoustical & lighting plans", "Furniture procurement curation"] }
    ],
    reviews: [
      { quote: "Studio Arcos captured our family's lifestyle with breathtaking sensitivity to nature.", author: "Henrik Lindqvist", role: "Villa Client" },
      { quote: "Their mastery of mass-timber engineering set a new sustainability benchmark in Norway.", author: "RIBA Jury Panel", role: "Awards Committee" }
    ]
  },
  {
    id: "07-lawyer",
    name: "Victoria Sterling, Esq.",
    category: "business",
    title: "Principal Counsel • Sterling Legal",
    headline: "Strategic Legal Counsel for Transformative M&A, IP, and Corporate Governance",
    tagline: "Mergers & Acquisitions • Corporate Law • IP Litigation",
    bio: "Victoria Sterling has over 18 years of legal advisory experience representing Fortune 500 corporations, private equity funds, and emerging technology ventures before federal courts and international arbitrations.",
    location: "One World Trade Center, New York, NY",
    email: "counsel@sterlinglegal.com",
    phone: "+1 (212) 555-8840",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "18+", label: "Years Bar Experience" },
      { val: "$4.5B+", label: "M&A Aggregate Value" },
      { val: "98%", label: "Resolution Success Rate" },
      { val: "Band 1", label: "Chambers USA Ranking" }
    ],
    itemsTitle: "Representative Matters & Legal Focus",
    items: [
      { title: "$480M Cross-Border Cloud Acquisition", tag: "M&A", desc: "Structured international acquisition with full US and EU antitrust clearances.", meta: "Closed in 90 Days", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" },
      { title: "$92M Biotech Patent Settlement", tag: "IP Litigation", desc: "Lead litigation counsel securing historic favorable damages and global royalties.", meta: "Federal Circuit Victory", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" },
      { title: "Corporate Governance & Board Advisory", tag: "Securities", desc: "Advising public company boards on SEC compliance and activist defense.", meta: "Ongoing Counsel", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
      { title: "FTC Antitrust Scrutiny Defense", tag: "Antitrust", desc: "Secured unconditional clearance for high-profile fintech infrastructure merger.", meta: "Zero Divestitures", img: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Strategic Matter Assessment", price: "$1,500", features: ["2-hour confidential review", "Risk exposure & liability analysis", "Preliminary litigation or transaction roadmap", "Conflict checks completed"] },
      { name: "M&A Deal Legal Retainer", price: "Custom Fee", features: ["Due diligence room management", "Purchase agreement negotiation", "Regulatory filing representations", "Closing & escrow supervision"] },
      { name: "General Counsel Advisory", price: "$6,500/mo", features: ["Direct partner access", "Commercial contracts review", "Employment & IP agreements", "Board meeting attendance"] }
    ],
    reviews: [
      { quote: "Victoria Sterling is the most formidable negotiator in modern corporate M&A.", author: "Edward Hastings", role: "Managing Partner, Private Equity" },
      { quote: "Her IP courtroom strategy saved our core technology patents.", author: "Dr. Linda Zhao", role: "CEO, BioHealth" }
    ]
  },
  {
    id: "08-fitness-trainer",
    name: "Marcus Drake",
    category: "wellness",
    title: "CSCS • Elite Strength & Physique Coach",
    headline: "Evidence-Based Hypertrophy, Recomposition, and Peak Athletic Conditioning",
    tagline: "Strength • Fat Loss • Executive Fitness",
    bio: "Marcus Drake is an NSCA Certified Strength & Conditioning Specialist with 11+ years transforming 1,400+ executives and competitive lifters using scientific progressive overload.",
    location: "Miami, FL & Online Worldwide",
    email: "marcus@ironpulsecoaching.com",
    phone: "+1 (305) 555-0188",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "1,400+", label: "Clients Transformed" },
      { val: "11+", label: "Years Experience" },
      { val: "94%", label: "Goal Success Rate" },
      { val: "CSCS", label: "NSCA Elite Certified" }
    ],
    itemsTitle: "Client Transformation Case Studies",
    items: [
      { title: "Derek H. (Tech Founder, 38)", tag: "Recomposition", desc: "Dropped 32 lbs of fat while gaining 9 lbs lean muscle over 16 weeks.", meta: "-32 lbs Fat • +9 lbs Lean Mass", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80" },
      { title: "Sophia M. (Director, 29)", tag: "Athletic Conditioning", desc: "Transformed core stamina and completed her first marathon injury-free.", meta: "-24 lbs • Sub 3:45 Marathon", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
      { title: "Julian K. (Executive, 45)", tag: "Strength Rebuild", desc: "Eliminated chronic lower back pain and added 85 lbs to his deadlift.", meta: "Pain Free • 405 lb Deadlift", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80" },
      { title: "Elena R. (CrossFit Competitor)", tag: "Peak Hypertrophy", desc: "Dialed in bioenergetic nutrition and qualified for Regional Finals.", meta: "State Podium Finish", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "1-on-1 VIP Online Coaching", price: "$499/mo", features: ["Fully tailored progressive training split", "Custom macro & micronutrient meal plan", "Weekly 1-on-1 video form review & audit", "24/7 direct WhatsApp access to Marcus"] },
      { name: "Hybrid Online Blueprint", price: "$199/mo", features: ["12-week periodized hypertrophy split", "Flexible dieting macro framework", "Bi-weekly digital check-ins", "Full exercise video library access"] },
      { name: "Executive Private Coaching", price: "$750/mo", features: ["In-person Miami private gym sessions", "Comprehensive mobility & injury prevention", "Travel workout protocols for business trips", "Sleep & recovery biometrics tracking"] }
    ],
    reviews: [
      { quote: "Marcus fits everything around my 60-hour work weeks. The strength gains are incredible.", author: "Derek H.", role: "CEO" },
      { quote: "No crash diets, no gimmicks. Pure exercise science that actually works.", author: "Sophia M.", role: "Creative Director" }
    ]
  },
  {
    id: "09-content-creator",
    name: "Aria Thorne",
    category: "creative",
    title: "Cinematic Travel & Tech Storyteller",
    headline: "Crafting Cinematic Visual Narratives for a Global Community of 1.8M Explorers",
    tagline: "Filmmaker • Tech Creator • Visual Nomad",
    bio: "Aria Thorne is an award-winning travel filmmaker and digital creator with 1.8M+ community followers. She partners with leading brands like Sony, DJI, and Airbnb to craft high-production human stories.",
    location: "Los Angeles & Tokyo",
    email: "mgmt@ariathorne.media",
    phone: "+1 (323) 555-0177",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "1.8M+", label: "Total Social Audience" },
      { val: "45M+", label: "Annual Video Impressions" },
      { val: "6.8%", label: "Average Engagement Rate" },
      { val: "74%", label: "Audience Aged 22 - 38" }
    ],
    itemsTitle: "Featured Films & Brand Campaigns",
    items: [
      { title: "48 Hours in Kyoto's Hidden Alleys", tag: "Travel Film", desc: "Cinematic short film produced in exclusive partnership with Sony Alpha.", meta: "1.4M YouTube Views", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" },
      { title: "The Ultimate Solo Nomad Tech Stack", tag: "Tech Review", desc: "Detailed breakdown of camera rigs, laptops, and mobile battery setups.", meta: "890k YouTube Views", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80" },
      { title: "Iceland Beyond the Ring Road", tag: "Documentary", desc: "Glacier trekking and drone exploration of volcanic highland valleys.", meta: "2.1M YouTube Views", img: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80" },
      { title: "Nordic Minimalist Cabin Life", tag: "Lifestyle", desc: "Documenting off-grid Scandinavian living, sustainable solar and craft.", meta: "950k YouTube Views", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Integrated YouTube Episode", price: "$6,500", features: ["60-90 second dedicated organic integration", "Product testing in real-world travel scenario", "Clickable link in top line of description", "Permanent video placement rights"] },
      { name: "Dedicated Brand Short Film", price: "$14,000", features: ["Exclusive 8-12 minute cinematic episode", "Brand co-direction & creative storyboard", "Full 4K ProRes master file delivery", "Commercial usage rights for brand channels"] },
      { name: "Multi-Platform Social Package", price: "$9,500", features: ["1 YouTube integration", "2 Instagram Reels / TikTok videos", "3 Instagram Stories with link stickers", "High-res commercial photography stills"] }
    ],
    reviews: [
      { quote: "Aria's storytelling delivered our highest ROI influencer campaign of the year.", author: "Claire Bennet", role: "Sony Electronics" },
      { quote: "The cinematography is indistinguishable from high-budget cinema.", author: "Marcus Reed", role: "Airbnb Creative" }
    ]
  },
  {
    id: "10-chef",
    name: "Antoine Laurent",
    category: "business",
    title: "Two-Michelin-Starred Executive Chef",
    headline: "Reimagining Classical French Gastronomy Through Biodynamic Terroir and Ancestral Craft",
    tagline: "Modern French • Wild Terroir • Two Michelin Stars",
    bio: "Trained in Lyon and Tokyo before establishing Maison Laurent. Honored with Two Michelin Stars and a Green Star for sustainable gastronomy, Antoine champions zero-waste cooking and heirloom seeds.",
    location: "Paris, France & San Francisco",
    email: "concierge@maisonlaurent.fr",
    phone: "+33 1 42 68 55 00",
    heroImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "2", label: "Michelin Stars" },
      { val: "18+", label: "Years Culinary Mastery" },
      { val: "100%", label: "Biodynamic Sourcing" },
      { val: "#28", label: "World's 50 Best Discovery" }
    ],
    itemsTitle: "Autumn Degustation Tasting Courses",
    items: [
      { title: "Heirloom Golden Beet Tartare", tag: "First Service", desc: "Salt-baked beets with smoked crème fraîche, pickled mustard, and oxalis.", meta: "Vegetarian • Farm Grown", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" },
      { title: "Line-Caught Brittany Turbot", tag: "Second Service", desc: "Braised sea lettuce, vin jaune emulsion, and wild autumn chanterelles.", meta: "Sustainable Coastal Catch", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80" },
      { title: "Aged Périgord Duck Breast", tag: "Third Service", desc: "Black garlic puree, glazed sunchokes, sour cherries, and rich duck jus.", meta: "Heritage Poultry", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
      { title: "Smoked Guanaja Dark Chocolate", tag: "Grand Finale", desc: "Sourdough tuile, bay leaf olive oil gelato, and crunchy cocoa nibs.", meta: "Organic Valrhona", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Private Residence 7-Course Dinner", price: "$3,800 + ingredients", features: ["Dedicated service for up to 10 guests", "Full chef and sommelier team on-site", "Custom printed menus with wine pairings", "Complete kitchen clean-up"] },
      { name: "Winery Brand Pairing Gala", price: "$6,500+", features: ["Multi-course menu matched to wine portfolio", "Interactive chef culinary introduction", "Sourcing from premier local biodynamic farms", "Staff coordination & prep management"] },
      { name: "Restaurant Concept Advisory", price: "$10,000", features: ["Full seasonal menu architecture design", "Kitchen station workflow & plating guides", "Kitchen brigade training residency", "Cost of goods (COGS) margin optimization"] }
    ],
    reviews: [
      { quote: "Chef Laurent achieves pure culinary harmony on every plate.", author: "The Michelin Guide", role: "Inspector Report" },
      { quote: "His turbot alone justifies a transatlantic pilgrimage to Paris.", author: "The New York Times", role: "Restaurant Critic" }
    ]
  },
  {
    id: "11-musician",
    name: "Liam O'Connor (NovaPulse)",
    category: "creative",
    title: "Electronic Music Producer, DJ & Sound Designer",
    headline: "Fusing Cinematic Orchestral Elements with Kinetic Melodic House",
    tagline: "Producer • Touring DJ • Mixing Engineer",
    bio: "Liam O'Connor (performing as NovaPulse) is an electronic producer whose tracks have surpassed 65M global streams. Headlining international festivals from ADE Amsterdam to Coachella Sahara.",
    location: "Berlin & London",
    email: "mgmt@novapulsemusic.com",
    phone: "+49 30 555 0192",
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "65M+", label: "Spotify & Apple Streams" },
      { val: "180+", label: "International DJ Sets" },
      { val: "#1", label: "Beatport Melodic Chart" },
      { val: "12", label: "Official Remixes Shipped" }
    ],
    itemsTitle: "Discography & Live Performances",
    items: [
      { title: "Echoes in the Stratosphere (EP)", tag: "Original Release", desc: "4-track melodic techno journey exploring analog Moog synthesis.", meta: "Anjunadeep / Afterlife • 2025", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80" },
      { title: "Live at Printworks London", tag: "Festival Set", desc: "2-hour headline set featuring exclusive unreleased VIP edits.", meta: "Full 4K Video Stream", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" },
      { title: "Nebula Synthwave Re-Imagining", tag: "Remix", desc: "Official remix for Grammy-nominated synthpop group.", meta: "Over 14M Streams", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" },
      { title: "Bespoke Game Audio Scoring", tag: "Sound Design", desc: "Atmospheric ambient electronic soundtrack for indie sci-fi game.", meta: "Unity & FMOD Integration", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Festival & Club DJ Headline Set", price: "$5,000+", features: ["90 to 120-minute headline DJ performance", "Custom visuals sync file provided", "Social media tour date promotion", "Technical rider coordination"] },
      { name: "Full Production Track / Mix", price: "$2,800", features: ["Full electronic track arrangement", "Analog synth mastering & stem mixdown", "Radio edit, extended club mix, & instrumental", "Commercial sync licensing options"] },
      { name: "Bespoke Commercial Sound Score", price: "$4,500", features: ["Custom audio branding sonic identity", "Film / trailer atmospheric music composition", "All stem audio files in 24-bit 96kHz", "Full broadcast usage rights"] }
    ],
    reviews: [
      { quote: "NovaPulse creates evocative, stadium-sized melodic emotion.", author: "Mixmag", role: "Music Magazine" },
      { quote: "His mastering and analog low-end punch are unrivaled in electronic music.", author: "Pete Tong", role: "BBC Radio 1" }
    ]
  },
  {
    id: "12-copywriter",
    name: "Clara Hawthorne",
    category: "creative",
    title: "Senior Direct Response & Brand Copywriter",
    headline: "Turning Complex Ideas Into Irresistible Prose That Drives Millions in Revenue",
    tagline: "Direct Response • SaaS Messaging • Brand Strategy",
    bio: "Clara Hawthorne has written campaigns generating over $35M in pipeline and revenue for venture-backed tech startups, boutique luxury brands, and bestselling book launches.",
    location: "Chicago, IL & Remote",
    email: "clara@hawthornecopy.com",
    phone: "+1 (312) 555-0166",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "$35M+", label: "Client Revenue Generated" },
      { val: "10+", label: "Years Writing Copy" },
      { val: "48%", label: "Average Email Open Rate" },
      { val: "3x", label: "Conversion Lift Record" }
    ],
    itemsTitle: "High-Converting Campaigns & Case Studies",
    items: [
      { title: "SaaS Homepage Messaging Re-Architecture", tag: "Conversion Copy", desc: "Rewrote positioning headline, value props, and pricing page.", meta: "+138% Demo Bookings", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" },
      { title: "B2B Executive Email Sequence", tag: "Email Nurture", desc: "7-part thought-leadership sequence targeting Enterprise CIOs.", meta: "48.2% Open • $4.2M Pipeline", img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80" },
      { title: "Luxury Heritage Watch Brand Story", tag: "Brand Narrative", desc: "Crafted brand manifesto, product descriptions, and packaging copy.", meta: "Sold Out In 3 Hours", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" },
      { title: "High-Ticket Course Sales Letter", tag: "Long-Form Copy", desc: "6,000-word persuasive sales letter with psychological objection handling.", meta: "$1.8M Launch Gross", img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Website Messaging Overhaul", price: "$4,200", features: ["Customer interview research & mining", "Homepage, About & Product page copy", "Wireframe layout with typography notes", "2 rounds of revisions included"] },
      { name: "High-Converting Email Funnel", price: "$2,800", features: ["5-7 strategic sequence emails", "A/B subject line variants", "Compelling call-to-action hooks", "Behavioral segmentation strategy"] },
      { name: "Monthly Content Retainer", price: "$3,500/mo", features: ["4 high-authority technical essays", "Weekly newsletter editions", "Social media thought leadership hooks", "Bi-weekly strategy call"] }
    ],
    reviews: [
      { quote: "Clara's copy transformed our conversion rates overnight. Pure wizardry.", author: "Jason Miller", role: "Founder, SaaSMetrics" },
      { quote: "She captured our brand voice better than our own founding team could.", author: "Nora Sterling", role: "CMO, Verve Lux" }
    ]
  },
  {
    id: "13-fashion-model",
    name: "Seraphina Vance",
    category: "creative",
    title: "International Fashion Model & Editorial Stylist",
    headline: "Elegance in Motion Across Paris, Milan, and New York Runways",
    tagline: "High Fashion • Runway • Commercial Editorial",
    bio: "Represented by premier agencies across Paris, Milan, and New York. Seraphina has walked for top European couture houses and starred in luxury beauty and magazine cover campaigns.",
    location: "Paris & New York",
    email: "booking@seraphinavance.com",
    phone: "+1 (212) 555-0149",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "24", label: "Fashion Weeks Walked" },
      { val: "14", label: "Magazine Covers" },
      { val: "5'11\"", label: "Height (180 cm)" },
      { val: "8+", label: "Years High Fashion" }
    ],
    itemsTitle: "Editorial Campaigns & Runway Shows",
    items: [
      { title: "Milan Fashion Week Spring/Summer", tag: "Runway", desc: "Lead walking model for Italian couture opening presentation.", meta: "Milan • 2025", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" },
      { title: "Vogue Paris Autumn Editorial", tag: "Cover Story", desc: "10-page editorial feature photographed in Montmartre with antique couture.", meta: "Cover Editorial", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
      { title: "L'Oréal Luxury Beauty Campaign", tag: "Commercial", desc: "Global cosmetic campaign across digital billboards and print magazines.", meta: "Worldwide Distribution", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { title: "Tokyo Streetwear Capsule Lookbook", tag: "Lookbook", desc: "Avant-garde architectural streetwear aesthetic shoot in Ginza.", meta: "Lookbook Series", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Full-Day Editorial Shoot", price: "$2,200", features: ["8 hours studio or outdoor on-location", "Pre-shoot moodboard alignment", "Runway and still posing versatility", "Agency release coordination"] },
      { name: "Commercial Campaign & Usage", price: "$4,500+", features: ["Broadcast and digital billboard rights", "Multi-look product modeling", "Social media behind-the-scenes tag", "Exclusive industry usage available"] },
      { name: "Fashion Week Runway Booking", price: "$3,000/show", features: ["Fittings and rehearsal attendance", "Runway walking presentation", "Backstage media interviews", "Designer social promotion"] }
    ],
    reviews: [
      { quote: "Seraphina commands the lens with an innate sculptural grace.", author: "Jean-Luc Moreau", role: "Vogue Paris Photographer" },
      { quote: "A consummate professional on both the runway and commercial sets.", author: "Alessandra Rossi", role: "Casting Director, Milan" }
    ]
  },
  {
    id: "14-cybersecurity",
    name: "Dante 'Cipher' Ward",
    category: "tech",
    title: "Principal Security Researcher & Red Teamer",
    headline: "Uncovering Critical Vulnerabilities and Hardening Enterprise Zero-Trust Defenses",
    tagline: "Offensive Security • Cloud Pen-Testing • Zero-Day Research",
    bio: "Dante Ward is an offensive security engineer with 12+ years conducting adversary emulations and cloud penetration tests. He has discovered 40+ CVEs and secured Fortune 100 fintech infrastructures.",
    location: "San Jose, CA & Remote",
    email: "dante@zerodaysecurity.io",
    phone: "+1 (408) 555-0153",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "42", label: "CVEs Discovered" },
      { val: "$1.2M", label: "Bug Bounty Payouts" },
      { val: "120+", label: "Red Team Engagements" },
      { val: "OSCP/OSCE", label: "Elite Certifications" }
    ],
    itemsTitle: "Adversary Emulations & Security Audits",
    items: [
      { title: "Kubernetes Cloud Privilege Escalation", tag: "CVE-2024-X", desc: "Discovered critical RBAC bypass allowing container breakout to host node.", meta: "Critical Severity 9.8", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" },
      { title: "Global Bank Red Team Emulation", tag: "Red Team", desc: "Simulated advanced threat actor breaching Active Directory domain in 4 days.", meta: "Full Remediation Delivered", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
      { title: "Smart Contract Reentrancy Exploit Audit", tag: "Web3 Audit", desc: "Audited decentralized lending protocol securing $450M in liquidity.", meta: "$450M TVL Secured", img: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80" },
      { title: "Hardware Firmware Reverse Engineering", tag: "IoT Security", desc: "Extracted encryption keys from encrypted flash memory via side-channel analysis.", meta: "Hardware Root of Trust", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Web & API Penetration Test", price: "$4,500", features: ["OWASP Top 10 vulnerability assessment", "Authentication & business logic testing", "Comprehensive executive & technical report", "Complimentary re-testing validation"] },
      { name: "Full-Scope Red Team Engagement", price: "$12,000", features: ["Adversary simulation (External & Internal)", "Social engineering & phishing tests", "Privilege escalation & domain compromise", "Defensive detection tuning debrief"] },
      { name: "Virtual CISO & Advisory", price: "$4,000/mo", features: ["SOC 2 & ISO 27001 readiness review", "Cloud infrastructure security architecture", "Incident response table-top exercises", "Vendor risk assessment oversight"] }
    ],
    reviews: [
      { quote: "Dante identified an authentication zero-day that three prior audit firms missed entirely.", author: "Robert Hayes", role: "CISO, Fintech Global" },
      { quote: "His reports don't just point out flaws; they deliver bulletproof remediation code.", author: "Elena Rostova", role: "VP of Security" }
    ]
  },
  {
    id: "15-financial-advisor",
    name: "Arthur Pendelton, CFP®",
    category: "business",
    title: "Senior Wealth Strategist & Fiduciary Advisor",
    headline: "Preserving Capital, Minimizing Tax Burden, and Building Multi-Generational Wealth",
    tagline: "Wealth Management • Tax Strategy • Retirement",
    bio: "Arthur Pendelton is a Certified Financial Planner (CFP®) advising entrepreneurs, medical professionals, and family offices on over $420M in private wealth. As a fee-only fiduciary, his advice is 100% transparent.",
    location: "Boston, MA & Global",
    email: "arthur@pendeltonwealth.com",
    phone: "+1 (617) 555-0138",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    stats: [
      { val: "$420M+", label: "Assets Advised (AUM)" },
      { val: "22+", label: "Years Experience" },
      { val: "100%", label: "Fee-Only Fiduciary" },
      { val: "99.1%", label: "Client Retention Rate" }
    ],
    itemsTitle: "Wealth Advisory Capabilities",
    items: [
      { title: "Tax-Advantaged Portfolio Structuring", tag: "Asset Management", desc: "Global index diversification with automated tax-loss harvesting algorithms.", meta: "Direct Indexing Core", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80" },
      { title: "Business Exit & Liquidity Planning", tag: "Exit Strategy", desc: "Maximizing after-tax proceeds prior to startup acquisitions or partner buyouts.", meta: "Pre-Liquidity Trusts", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
      { title: "Multi-Generational Estate Architecture", tag: "Legacy Planning", desc: "Dynasty trusts, charitable donor-advised funds, and estate tax shielding.", meta: "Generational Transfer", img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" },
      { title: "Executive Compensation & Equity Options", tag: "RSU / ISO Strategy", desc: "Optimized exercise timing for stock options minimizing alternative minimum tax (AMT).", meta: "Equity Optimization", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" }
    ],
    packages: [
      { name: "Comprehensive Financial Plan", price: "$2,500", features: ["Net worth, cash flow & budget analysis", "Retirement probability Monte Carlo simulation", "Asset allocation & risk tolerance audit", "Tax reduction strategy document"] },
      { name: "Ongoing Wealth Management", price: "0.65% AUM", features: ["Discretionary portfolio rebalancing", "Continuous tax-loss harvesting", "Direct access to Arthur for life decisions", "Quarterly formal video performance reviews"] },
      { name: "Business Exit Strategy Consultation", price: "$4,500", features: ["Pre-sale valuation analysis & structuring", "Qualified Small Business Stock (QSBS) optimization", "Post-liquidity cash flow modeling", "Estate tax shield recommendations"] }
    ],
    reviews: [
      { quote: "Arthur helped our family navigate an eight-figure business acquisition with calm wisdom.", author: "Gordon Bennett", role: "Tech Founder" },
      { quote: "A true fiduciary who always puts our family's long-term interests first.", author: "Dr. Evelyn Ross", role: "Surgeon" }
    ]
  }
];

// 10 Distinct Design Layouts / Aesthetic Archetypes
const TEMPLATE_VARIANTS = [
  {
    variantId: "template-01",
    name: "Obsidian Elite (Dark Theme)",
    type: "Dark Minimalist",
    fonts: "family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700",
    fontHeading: "'Space Grotesk', sans-serif",
    fontBody: "'Plus Jakarta Sans', sans-serif",
    cssTheme: `
      --bg-main: #0a0c10;
      --bg-card: #12161f;
      --bg-card-hover: #181f2a;
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --accent: #06b6d4;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(59, 130, 246, 0.4);
      --radius: 8px;
    `,
    layoutStyle: "standard-dark"
  },
  {
    variantId: "template-02",
    name: "Nordic Minimalist (Light Editorial)",
    type: "Clean Light",
    fonts: "family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600;700",
    fontHeading: "'Newsreader', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    cssTheme: `
      --bg-main: #faf9f6;
      --bg-card: #ffffff;
      --bg-card-hover: #f3f2ee;
      --primary: #18181b;
      --primary-hover: #27272a;
      --accent: #71717a;
      --text-main: #18181b;
      --text-muted: #71717a;
      --border: rgba(0, 0, 0, 0.08);
      --border-accent: rgba(0, 0, 0, 0.25);
      --radius: 2px;
    `,
    layoutStyle: "editorial-light"
  },
  {
    variantId: "template-03",
    name: "Bento Grid Modern",
    type: "Asymmetric Bento",
    fonts: "family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700",
    fontHeading: "'Syne', sans-serif",
    fontBody: "'Plus Jakarta Sans', sans-serif",
    cssTheme: `
      --bg-main: #0b0f19;
      --bg-card: #111827;
      --bg-card-hover: #1f2937;
      --primary: #8b5cf6;
      --primary-hover: #7c3aed;
      --accent: #ec4899;
      --text-main: #f9fafb;
      --text-muted: #9ca3af;
      --border: rgba(255, 255, 255, 0.1);
      --border-accent: rgba(139, 92, 246, 0.5);
      --radius: 16px;
    `,
    layoutStyle: "bento-grid"
  },
  {
    variantId: "template-04",
    name: "Glassmorphic Aura",
    type: "Translucent Glow",
    fonts: "family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600",
    fontHeading: "'Outfit', sans-serif",
    fontBody: "'Inter', sans-serif",
    cssTheme: `
      --bg-main: #060814;
      --bg-card: rgba(17, 24, 39, 0.7);
      --bg-card-hover: rgba(31, 41, 55, 0.85);
      --primary: #00f2fe;
      --primary-hover: #4facfe;
      --accent: #ff0844;
      --text-main: #ffffff;
      --text-muted: #94a3b8;
      --border: rgba(255, 255, 255, 0.12);
      --border-accent: rgba(0, 242, 254, 0.4);
      --radius: 14px;
    `,
    layoutStyle: "glassmorphism"
  },
  {
    variantId: "template-05",
    name: "Neo-Brutalist Bold",
    type: "High-Contrast Brutal",
    fonts: "family=Space+Grotesk:wght@600;700&family=Archivo:wght@400;600;700",
    fontHeading: "'Space Grotesk', sans-serif",
    fontBody: "'Archivo', sans-serif",
    cssTheme: `
      --bg-main: #fffbeb;
      --bg-card: #ffffff;
      --bg-card-hover: #fef3c7;
      --primary: #000000;
      --primary-hover: #1f2937;
      --accent: #f59e0b;
      --text-main: #000000;
      --text-muted: #4b5563;
      --border: #000000;
      --border-accent: #000000;
      --radius: 0px;
    `,
    layoutStyle: "neo-brutalist"
  },
  {
    variantId: "template-06",
    name: "Split-Screen Studio",
    type: "Split Layout",
    fonts: "family=Cinzel:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600",
    fontHeading: "'Cinzel', serif",
    fontBody: "'Plus Jakarta Sans', sans-serif",
    cssTheme: `
      --bg-main: #0e1117;
      --bg-card: #161b22;
      --bg-card-hover: #21262d;
      --primary: #d4af37;
      --primary-hover: #c5a059;
      --accent: #58a6ff;
      --text-main: #f0f6fc;
      --text-muted: #8b949e;
      --border: rgba(212, 175, 55, 0.2);
      --border-accent: rgba(212, 175, 55, 0.5);
      --radius: 6px;
    `,
    layoutStyle: "split-screen"
  },
  {
    variantId: "template-07",
    name: "Sidebar Navigation App",
    type: "Dashboard Layout",
    fonts: "family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500",
    fontHeading: "'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    cssTheme: `
      --bg-main: #0f172a;
      --bg-card: #1e293b;
      --bg-card-hover: #334155;
      --primary: #38bdf8;
      --primary-hover: #0284c7;
      --accent: #10b981;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(56, 189, 248, 0.4);
      --radius: 10px;
    `,
    layoutStyle: "sidebar-app"
  },
  {
    variantId: "template-08",
    name: "Magazine Editorial",
    type: "Centered Publication",
    fonts: "family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Outfit:wght@400;500;600",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Outfit', sans-serif",
    cssTheme: `
      --bg-main: #181512;
      --bg-card: #221d19;
      --bg-card-hover: #2d2621;
      --primary: #e2b17a;
      --primary-hover: #d48a37;
      --accent: #a3b19b;
      --text-main: #f7f4ef;
      --text-muted: #a8a096;
      --border: rgba(226, 177, 122, 0.15);
      --border-accent: rgba(226, 177, 122, 0.4);
      --radius: 4px;
    `,
    layoutStyle: "magazine-serif"
  },
  {
    variantId: "template-09",
    name: "Kinetic Gradient Pulse",
    type: "High Energy Vibrant",
    fonts: "family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800",
    fontHeading: "'Bebas Neue', sans-serif",
    fontBody: "'Plus Jakarta Sans', sans-serif",
    cssTheme: `
      --bg-main: #0a0514;
      --bg-card: #120c24;
      --bg-card-hover: #1c1438;
      --primary: #ff007f;
      --primary-hover: #e60073;
      --accent: #7928ca;
      --text-main: #ffffff;
      --text-muted: #a099b2;
      --border: rgba(255, 0, 127, 0.2);
      --border-accent: rgba(255, 0, 127, 0.5);
      --radius: 12px;
    `,
    layoutStyle: "kinetic-pulse"
  },
  {
    variantId: "template-10",
    name: "Terminal / Monospace Pro",
    type: "Hacker / Developer Tech",
    fonts: "family=Fira+Code:wght@400;500;600;700&family=Inter:wght@400;500;600",
    fontHeading: "'Fira Code', monospace",
    fontBody: "'Inter', sans-serif",
    cssTheme: `
      --bg-main: #050505;
      --bg-card: #0f0f0f;
      --bg-card-hover: #171717;
      --primary: #22c55e;
      --primary-hover: #16a34a;
      --accent: #eab308;
      --text-main: #e5e5e5;
      --text-muted: #737373;
      --border: #262626;
      --border-accent: rgba(34, 197, 94, 0.5);
      --radius: 4px;
    `,
    layoutStyle: "terminal-tech"
  }
];

// Helper to generate template HTML
function generateHTML(prof, variant) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prof.name} — ${prof.title} | ${variant.name}</title>
  <meta name="description" content="${prof.bio}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${variant.fonts}&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <!-- Structured Data Schema with Contextual Backlink -->
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
  </script>
</head>
<body class="layout-${variant.layoutStyle}">
  <!-- Top Bar / Nav -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="#hero" class="brand">
        <span class="brand-name" id="brand-name">${prof.name}</span>
        <span class="brand-tagline">${prof.tagline}</span>
      </a>
      <nav class="nav-menu" id="nav-menu">
        <a href="#about" class="nav-link">About</a>
        <a href="#portfolio" class="nav-link">Portfolio</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#contact" class="nav-btn">Get in Touch</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation">
        <span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section" id="hero">
    <div class="container hero-container">
      <div class="hero-text">
        <span class="hero-kicker" id="hero-tagline">${prof.title}</span>
        <h1 class="hero-headline" id="hero-headline">${prof.headline}</h1>
        <p class="hero-bio" id="hero-bio">${prof.bio}</p>
        <div class="hero-cta-group">
          <a href="#portfolio" class="btn btn-primary">View Selected Work</a>
          <a href="#contact" class="btn btn-secondary">Direct Inquiry</a>
        </div>
      </div>
      <div class="hero-media">
        <div class="media-frame">
          <img id="hero-avatar" src="${prof.avatar}" alt="${prof.name}" loading="lazy">
          <div class="status-indicator-badge">
            <span class="dot"></span>
            <span>Available for New Projects</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Metrics Strip -->
  <section class="metrics-section">
    <div class="container metrics-grid" id="metrics-grid">
      <!-- Populated via JS -->
    </div>
  </section>

  <!-- Portfolio / Key Works -->
  <section class="portfolio-section" id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="kicker">SHOWCASE</span>
        <h2 class="section-title" id="items-title">${prof.itemsTitle}</h2>
      </div>
      <div class="items-grid" id="items-grid">
        <!-- Populated via JS -->
      </div>
    </div>
  </section>

  <!-- Packages / Services -->
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header">
        <span class="kicker">ENGAGEMENTS & RATES</span>
        <h2 class="section-title">Cooperation Packages</h2>
      </div>
      <div class="packages-grid" id="packages-grid">
        <!-- Populated via JS -->
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="reviews-section">
    <div class="container">
      <div class="section-header">
        <span class="kicker">ENDORSEMENTS</span>
        <h2 class="section-title">Client Feedback</h2>
      </div>
      <div class="reviews-grid" id="reviews-grid">
        <!-- Populated via JS -->
      </div>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="contact-section" id="contact">
    <div class="container contact-container">
      <div class="contact-box">
        <span class="kicker">LET'S CONNECT</span>
        <h2 class="section-title">Initiate a Collaboration</h2>
        <p class="contact-sub">Direct submissions are reviewed within 24 hours. Confidential inquiries respected.</p>
        
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Message transmitted! You will receive a response shortly.'); this.reset();">
          <div class="form-row">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email Address" required>
          </div>
          <input type="text" placeholder="Project Subject / Scope" required>
          <textarea rows="4" placeholder="Briefly describe your goals, timeline, and requirements..." required></textarea>
          <button type="submit" class="btn btn-primary btn-block">Transmit Inquiry &rarr;</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer with Contextual Backlink -->
  <footer class="site-footer">
    <div class="container footer-row">
      <div class="footer-left">
        <strong>${prof.name}</strong>
        <p>&copy; <span id="year"></span> ${prof.title}. All rights reserved.</p>
      </div>
      <!-- Contextual Backlink to AI BuildInfra -->
      <div class="footer-backlink">
        Web Performance & Engineering by 
        <a href="https://aibuildinfra.com/services/web-development" target="_blank" rel="noopener">AI BuildInfra Web Development</a>
        &bull; Powered by <a href="https://aibuildinfra.com" target="_blank" rel="noopener">AI BuildInfra</a>
      </div>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>`;
}

// Helper to generate template CSS
function generateCSS(variant) {
  return `:root {
  ${variant.cssTheme}
  --font-heading: ${variant.fontHeading};
  --font-body: ${variant.fontBody};
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.12);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-main);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0;
}

.brand {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-main);
}

.brand-tagline {
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.nav-link {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-btn {
  background: var(--primary);
  color: #ffffff;
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius);
  font-size: 0.85rem;
  font-weight: 600;
}

.nav-btn:hover {
  background: var(--primary-hover);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-main);
}

/* Hero Section */
.hero-section {
  padding: 5.5rem 0 4rem;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-kicker {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary);
  margin-bottom: 1rem;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4.8vw, 3.8rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.2rem;
}

.hero-bio {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.8rem;
  font-size: 0.92rem;
  font-weight: 600;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--primary);
  color: #ffffff;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-card);
  border-color: var(--border);
  color: var(--text-main);
}

.btn-secondary:hover {
  border-color: var(--primary);
}

.btn-block {
  width: 100%;
}

.media-frame {
  position: relative;
}

.media-frame img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.status-indicator-badge {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  box-shadow: var(--shadow-card);
}

.status-indicator-badge .dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
}

/* Metrics */
.metrics-section {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 2.2rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  text-align: center;
}

.metric-card strong {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--primary);
  display: block;
  line-height: 1;
}

.metric-card span {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.4rem;
  display: block;
}

/* Section Common */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.kicker {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary);
  display: block;
  margin-bottom: 0.4rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
}

/* Portfolio Items */
.portfolio-section {
  padding: 5.5rem 0;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.item-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.item-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
}

.item-thumb {
  aspect-ratio: 16/10;
  overflow: hidden;
}

.item-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.item-card:hover .item-thumb img {
  transform: scale(1.04);
}

.item-info {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.item-tag {
  font-size: 0.75rem;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.item-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
}

.item-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex-grow: 1;
}

.item-meta {
  font-size: 0.78rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  padding-top: 0.8rem;
}

/* Packages */
.services-section {
  padding: 5.5rem 0;
  background: var(--bg-card);
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.package-card {
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
}

.pkg-name {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  margin-bottom: 0.4rem;
}

.pkg-price {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.4rem;
}

.pkg-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.pkg-features li {
  font-size: 0.88rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pkg-features li::before {
  content: "✔";
  color: var(--primary);
  font-weight: 700;
}

/* Reviews */
.reviews-section {
  padding: 5.5rem 0;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.review-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.2rem;
}

.review-quote {
  font-style: italic;
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--text-main);
  margin-bottom: 1.2rem;
}

.review-author {
  font-weight: 700;
  font-size: 0.92rem;
}

.review-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Contact */
.contact-section {
  padding: 6rem 0;
  background: var(--bg-card);
}

.contact-container {
  max-width: 760px;
}

.contact-box {
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 3.5rem;
}

.contact-sub {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0.5rem 0 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.contact-form input,
.contact-form textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.85rem 1.2rem;
  color: var(--text-main);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.92rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* Footer */
.site-footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  background: var(--bg-main);
  font-size: 0.85rem;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.footer-backlink a {
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 850px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    background: var(--bg-main);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-150%);
    transition: var(--transition);
    border-bottom: 1px solid var(--border);
  }
  .nav-menu.open {
    transform: translateY(0);
  }
  .nav-toggle {
    display: flex;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .contact-box {
    padding: 2rem 1.5rem;
  }
}
`;
}

// Helper to generate template app.js
function generateJS(prof) {
  return `// Dynamic Hydration Engine for ${prof.name}
const FALLBACK_DATA = ${JSON.stringify(prof, null, 2)};

async function loadData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initSite(data);
  } catch (err) {
    console.warn("Using fallback local data due to file:// or network restrictions:", err);
    initSite(FALLBACK_DATA);
  }
}

function initSite(data) {
  document.getElementById('brand-name').textContent = data.name;
  document.getElementById('hero-headline').textContent = data.headline;
  document.getElementById('hero-tagline').textContent = data.title;
  document.getElementById('hero-bio').textContent = data.bio;
  document.getElementById('hero-avatar').src = data.avatar;
  document.getElementById('items-title').textContent = data.itemsTitle;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Metrics
  const metricsBox = document.getElementById('metrics-grid');
  metricsBox.innerHTML = data.stats.map(s => \`
    <div class="metric-card">
      <strong>\${s.val}</strong>
      <span>\${s.label}</span>
    </div>
  \`).join('');

  // Items
  const itemsBox = document.getElementById('items-grid');
  itemsBox.innerHTML = data.items.map(item => \`
    <article class="item-card">
      <div class="item-thumb">
        <img src="\${item.img}" alt="\${item.title}" loading="lazy">
      </div>
      <div class="item-info">
        <span class="item-tag">\${item.tag}</span>
        <h3 class="item-title">\${item.title}</h3>
        <p class="item-desc">\${item.desc}</p>
        <span class="item-meta">\${item.meta}</span>
      </div>
    </article>
  \`).join('');

  // Packages
  const pkgBox = document.getElementById('packages-grid');
  pkgBox.innerHTML = data.packages.map(p => \`
    <div class="package-card">
      <h3 class="pkg-name">\${p.name}</h3>
      <div class="pkg-price">\${p.price}</div>
      <ul class="pkg-features">
        \${p.features.map(f => \`<li>\${f}</li>\`).join('')}
      </ul>
      <a href="#contact" class="btn btn-primary btn-block">Inquire &gt;</a>
    </div>
  \`).join('');

  // Reviews
  const revBox = document.getElementById('reviews-grid');
  revBox.innerHTML = data.reviews.map(r => \`
    <div class="review-card">
      <p class="review-quote">"\${r.quote}"</p>
      <div class="review-author">\${r.author}</div>
      <div class="review-role">\${r.role}</div>
    </div>
  \`).join('');

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadData);
`;
}

// Helper to generate template README.md
function generateTemplateREADME(prof, variant) {
  return `# ${prof.name} — ${prof.title} (${variant.name})

An open-source, dynamic JSON-hydrated portfolio website template engineered with modern web architecture by [AI BuildInfra](https://aibuildinfra.com/). Explore our specialized [Web Development Services](https://aibuildinfra.com/services/web-development).

---

## ⚡ Features & Aesthetic

- **Design Variant:** ${variant.name} (${variant.type})
- **100% Dynamic Content:** All text, services, packages, reviews, and images are powered dynamically via \`data.json\`.
- **Zero Build Tools:** Runs instantly in any browser with zero \`npm install\` or compilation steps.
- **Fail-Safe Loading:** Includes automated fallback data to avoid CORS errors when opening locally via \`file://\`.
- **Contextual Schema & Backlink:** Native structured Schema.org JSON-LD and web performance attribution to AI BuildInfra.

---

## 📁 File Structure

\`\`\`
${variant.variantId}/
├── index.html        # Main semantic markup
├── style.css         # Responsive styling & typography
├── app.js            # Dynamic hydration engine
├── data.json         # All customizable text, images, and config
└── README.md         # Customization & deployment guide
\`\`\`

---

## 🛠️ How to Customize (For Non-Coders)

Open \`data.json\` in any text editor:
1. Update \`name\`, \`title\`, \`headline\`, and \`bio\`.
2. Add your own showcase works in \`"items"\`.
3. Adjust your service packages and rates in \`"packages"\`.
4. Update reviews and testimonials in \`"reviews"\`.

---

## 🚀 How to Deploy to GitHub Pages (Free)

1. Create a repository on GitHub (e.g. \`my-portfolio\`).
2. Upload \`index.html\`, \`style.css\`, \`app.js\`, and \`data.json\` to your repository root.
3. In GitHub, navigate to **Settings** > **Pages**.
4. Set source to \`main\` branch, root \`/\` folder, and click **Save**.
5. Your website is published at \`https://<your-username>.github.io/my-portfolio/\`.

---

## 🌐 Custom Domain Setup

1. In repository **Settings** > **Pages** > **Custom domain**, type your domain (e.g. \`www.yourdomain.com\`) and save.
2. In your DNS settings at your domain registrar, add:
   - **4 A Records**: \`185.199.108.153\`, \`185.199.109.153\`, \`185.199.110.153\`, \`185.199.111.153\`
   - **1 CNAME Record**: Host \`www\` pointing to \`<your-username>.github.io\`
3. Check the box **Enforce HTTPS**.

---

## ⚡ Architecture & Credits

Engineered by [AI BuildInfra](https://aibuildinfra.com) — building high-performance web systems for modern professionals. Explore our [Web Development Services](https://aibuildinfra.com/services/web-development).

License: [MIT](../../LICENSE)
`;
}

// Master execution loop
console.log('Starting master portfolio generation for 15 professions x 10 variants = 150 templates...');

const allCatalogEntries = [];

for (const prof of PROFESSIONS) {
  const profDir = path.join(PROFESSIONS_DIR, prof.id);
  if (!fs.existsSync(profDir)) {
    fs.mkdirSync(profDir, { recursive: true });
  }

  // Also create a profession README
  const profReadme = `# ${prof.name} — ${prof.title} Portfolio Collection

This directory contains **10 distinct design variants** for ${prof.title}. Every template dynamically reads its content from \`data.json\` so you can swap designs seamlessly without re-entering your copy.

## 🎨 Available Template Variants

| Folder | Variant Style | Archetype | Live Preview |
|---|---|---|---|
${TEMPLATE_VARIANTS.map(v => `| [\`${v.variantId}/\`](${v.variantId}/) | **${v.name}** | ${v.type} | [Demo](${v.variantId}/index.html) |`).join('\n')}

---

Engineered by [AI BuildInfra](https://aibuildinfra.com) — [Web Development Services](https://aibuildinfra.com/services/web-development).
`;
  fs.writeFileSync(path.join(profDir, 'README.md'), profReadme, 'utf8');

  for (const variant of TEMPLATE_VARIANTS) {
    const templateDir = path.join(profDir, variant.variantId);
    if (!fs.existsSync(templateDir)) {
      fs.mkdirSync(templateDir, { recursive: true });
    }

    // Write index.html
    fs.writeFileSync(path.join(templateDir, 'index.html'), generateHTML(prof, variant), 'utf8');
    
    // Write style.css
    fs.writeFileSync(path.join(templateDir, 'style.css'), generateCSS(variant), 'utf8');

    // Write app.js
    fs.writeFileSync(path.join(templateDir, 'app.js'), generateJS(prof), 'utf8');

    // Write data.json
    fs.writeFileSync(path.join(templateDir, 'data.json'), JSON.stringify(prof, null, 2), 'utf8');

    // Write README.md
    fs.writeFileSync(path.join(templateDir, 'README.md'), generateTemplateREADME(prof, variant), 'utf8');

    // Add to catalog
    allCatalogEntries.push({
      professionId: prof.id,
      professionName: prof.name,
      professionTitle: prof.title,
      category: prof.category,
      variantId: variant.variantId,
      variantName: variant.name,
      variantType: variant.type,
      image: prof.heroImage,
      path: `professions/${prof.id}/${variant.variantId}/index.html`,
      folder: `professions/${prof.id}/${variant.variantId}/`
    });
  }
}

// Generate Catalog Data JS for the root Portal
const catalogJS = `// Catalog Data for 15 Professions x 10 Template Variants = 150 Templates
const TOTAL_TEMPLATES = ${allCatalogEntries.length};
const TEMPLATES_CATALOG = ${JSON.stringify(allCatalogEntries, null, 2)};

let currentCategory = 'all';
let currentProfession = 'all';
let currentSearch = '';

function renderCatalog() {
  const grid = document.getElementById('templates-grid');
  let items = TEMPLATES_CATALOG;

  if (currentCategory !== 'all') {
    items = items.filter(t => t.category === currentCategory);
  }
  if (currentProfession !== 'all') {
    items = items.filter(t => t.professionId === currentProfession);
  }
  if (currentSearch.trim() !== '') {
    const q = currentSearch.toLowerCase();
    items = items.filter(t => 
      t.professionName.toLowerCase().includes(q) ||
      t.professionTitle.toLowerCase().includes(q) ||
      t.variantName.toLowerCase().includes(q) ||
      t.variantType.toLowerCase().includes(q)
    );
  }

  document.getElementById('template-count-badge').textContent = \`Showing \${items.length} of \${TEMPLATES_CATALOG.length} Templates\`;

  grid.innerHTML = items.map(item => \`
    <article class="template-card" data-category="\${item.category}">
      <div class="card-preview">
        <img src="\${item.image}" alt="\${item.professionName}" loading="lazy">
        <span class="card-badge">\${item.variantType}</span>
      </div>
      <div class="card-body">
        <span class="card-kicker">\${item.professionTitle}</span>
        <h3 class="card-title">\${item.professionName}</h3>
        <p class="card-variant-label">Design Variant: <strong>\${item.variantName}</strong></p>
        <div class="card-actions">
          <a href="\${item.path}" class="btn-view" target="_blank" rel="noopener">Live Demo &nearr;</a>
          <a href="https://github.com/AI-BuildInfra/portfolio-templates/tree/main/\${item.folder}" target="_blank" class="btn-folder" title="View Source on GitHub">Source 📁</a>
        </div>
      </div>
    </article>
  \`).join('');
}

function initFilters() {
  // Category filter
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.filter;
      renderCatalog();
    });
  });

  // Profession selector
  const profSelect = document.getElementById('profession-select');
  profSelect.addEventListener('change', (e) => {
    currentProfession = e.target.value;
    renderCatalog();
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderCatalog();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initFilters();
});
`;

fs.writeFileSync(path.join(ROOT_DIR, 'portal.js'), catalogJS, 'utf8');

console.log(`Successfully generated ${allCatalogEntries.length} templates across 15 professions!`);
