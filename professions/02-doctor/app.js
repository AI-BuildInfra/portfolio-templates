// Dynamic Portfolio Hydration for Dr. Marcus Chen Medical Practice
const FALLBACK_DATA = {
  doctor: {
    name: "Dr. Marcus Chen",
    degrees: "MD, FACC, FSCAI",
    specialty: "Interventional Cardiologist & Preventive Heart Specialist",
    clinicName: "Metropolitan Heart & Vascular Institute",
    hospitalAffiliation: "Johns Hopkins Medicine & Mount Sinai Hospital",
    tagline: "Combining compassionate patient-centered care with cutting-edge minimally invasive cardiovascular innovations.",
    bio: "Dr. Marcus Chen is a double board-certified Interventional Cardiologist with over 15 years of clinical practice. Having performed more than 3,200 successful cardiovascular catheterizations, Dr. Chen specializes in complex coronary interventions, preventive cardiology, and structural heart therapies.",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (212) 555-0199",
    emergencyPhone: "911 / (212) 555-0911",
    email: "appointments@dr-marcuschen.com",
    address: "645 Madison Avenue, Suite 1200, New York, NY 10022"
  },
  metrics: [
    { val: "15+", label: "Years Clinical Practice" },
    { val: "3,200+", label: "Procedures Performed" },
    { val: "99.4%", label: "Procedure Success Rate" },
    { val: "45+", label: "Peer-Reviewed Papers" }
  ],
  credentials: [
    "Board Certified in Internal Medicine & Cardiovascular Disease (ABIM)",
    "Subspecialty Certified in Interventional Cardiology",
    "Fellow, American College of Cardiology (FACC)",
    "Fellow, Society for Cardiovascular Angiography and Interventions (FSCAI)",
    "Residency & Fellowship: Johns Hopkins Hospital & Mount Sinai"
  ],
  specialties: [
    {
      icon: "heart",
      title: "Coronary Angioplasty & Stenting",
      desc: "Minimally invasive radial artery catheterizations for restoring vital arterial blood flow with rapid recovery times."
    },
    {
      icon: "shield",
      title: "Preventive Cardiology & Lipidology",
      desc: "Advanced biomarker screening, coronary calcium scoring, and genetic risk assessment for cardiovascular disease prevention."
    },
    {
      icon: "activity",
      title: "Heart Failure & Valve Disease",
      desc: "State-of-the-art medical management, structural valve evaluations, and personalized hemodynamic optimization."
    },
    {
      icon: "pulse",
      title: "Comprehensive Diagnostic Testing",
      desc: "High-resolution echocardiograms, nuclear stress tests, continuous Holter monitoring, and carotid ultrasound."
    }
  ],
  officeHours: [
    { day: "Monday - Thursday", hours: "8:00 AM - 5:30 PM", status: "Available" },
    { day: "Friday", hours: "8:00 AM - 3:00 PM", status: "Available" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM", status: "Urgent Care Only" },
    { day: "Sunday", hours: "Closed", status: "On-Call Emergency" }
  ],
  patientReviews: [
    {
      quote: "Dr. Chen saved my husband's life during an unexpected arterial blockage. His calm bedside manner and surgical mastery gave our family peace during our scariest moment.",
      patient: "Eleanor R., Manhattan",
      condition: "Coronary Stent Patient"
    },
    {
      quote: "Finding a cardiologist who actually listens and explains the diagnostic science without rushing is rare. Dr. Chen is truly one of a kind in New York.",
      patient: "David B., Brooklyn",
      condition: "Preventive Heart Care Patient"
    }
  ],
  faqs: [
    {
      q: "Which health insurance networks do you accept?",
      a: "We participate with Medicare and most major commercial insurances including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Oxford."
    },
    {
      q: "What should I bring to my initial consultation?",
      a: "Please bring a government-issued photo ID, your insurance cards, a list of current medications with dosages, and prior cardiac diagnostic records."
    },
    {
      q: "Do you offer virtual telemedicine consultations?",
      a: "Yes, we provide secure HIPAA-compliant telehealth follow-ups for established patients and non-emergency initial diagnostic reviews."
    }
  ]
};

async function loadDoctorData() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error('Cannot load data.json');
    const data = await res.json();
    initDoctorSite(data);
  } catch (err) {
    console.warn("Using fallback medical data:", err);
    initDoctorSite(FALLBACK_DATA);
  }
}

function initDoctorSite(data) {
  const doc = data.doctor;
  document.getElementById('brand-title').textContent = doc.name;
  document.getElementById('brand-degrees').textContent = doc.degrees;
  document.getElementById('hero-name').textContent = `${doc.name}, ${doc.degrees}`;
  document.getElementById('hero-bio').textContent = doc.bio;
  document.getElementById('doctor-img').src = doc.avatar;
  document.getElementById('emergency-phone').textContent = doc.emergencyPhone;
  document.getElementById('clinic-address').textContent = doc.address;
  document.getElementById('clinic-affiliations').textContent = doc.hospitalAffiliation;
  document.getElementById('clinic-phone').textContent = doc.phone;
  document.getElementById('clinic-email').textContent = doc.email;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Credentials
  const creds = document.getElementById('hero-credentials');
  creds.innerHTML = data.credentials.map(c => `<div class="cred-bullet">${c}</div>`).join('');

  // Metrics
  const metricsBox = document.getElementById('metrics-container');
  metricsBox.innerHTML = data.metrics.map(m => `
    <div class="metric-item">
      <span class="metric-num">${m.val}</span>
      <span class="metric-lbl">${m.label}</span>
    </div>
  `).join('');

  // Specialties
  const specBox = document.getElementById('specialties-container');
  specBox.innerHTML = data.specialties.map(s => `
    <div class="specialty-card">
      <div style="font-size:2rem">🩺</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  // Hours
  const hoursBody = document.getElementById('hours-body');
  hoursBody.innerHTML = data.officeHours.map(h => `
    <tr>
      <td><strong>${h.day}</strong></td>
      <td>${h.hours}</td>
      <td><span style="color:#00a8cc;font-weight:600">${h.status}</span></td>
    </tr>
  `).join('');

  // Reviews
  const reviewsBox = document.getElementById('reviews-container');
  reviewsBox.innerHTML = data.patientReviews.map(r => `
    <div class="review-card">
      <p class="review-text">"${r.quote}"</p>
      <div class="review-author">${r.patient}</div>
      <div class="review-tag">${r.condition}</div>
    </div>
  `).join('');

  // FAQs
  const faqBox = document.getElementById('faqs-container');
  faqBox.innerHTML = data.faqs.map(f => `
    <div class="faq-item">
      <div class="faq-question">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>
  `).join('');

  // FAQ Accordion click handler
  faqBox.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqBox.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', loadDoctorData);
