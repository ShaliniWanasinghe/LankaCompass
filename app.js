// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ===== DESTINATION FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const destCards = document.querySelectorAll('.dest-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    destCards.forEach(card => {
      const cat = card.dataset.category;
      if (filter === 'all' || cat === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== FYK TABS =====
const fykTabs = document.querySelectorAll('.fyk-tab');
const fykPanels = document.querySelectorAll('.fyk-panel');

fykTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    fykTabs.forEach(t => t.classList.remove('active'));
    fykPanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const targetId = 'fyk-panel-' + tab.dataset.tab;
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});

// ===== DESTINATION MODAL DATA =====
const destData = {
  sigiriya: {
    name: 'Sigiriya Lion Rock',
    img: 'sigiriya_rock_1784522913894.png',
    category: 'Heritage · UNESCO World Heritage',
    intro: 'One of Sri Lanka\'s most iconic landmarks, Sigiriya is an ancient rock fortress and palace ruin rising 200m above the surrounding jungle. Built by King Kashyapa in the 5th century AD, it features stunning frescoes, landscaped gardens, and panoramic views.',
    details: [
      { icon: '📍', label: 'Location', value: 'Dambulla, Central Province' },
      { icon: '⏱️', label: 'Time Required', value: 'Half day (4–5 hours)' },
      { icon: '💰', label: 'Entry Fee', value: 'USD 30 (~ LKR 4,500) for foreigners' },
      { icon: '📶', label: 'Mobile Signal', value: '4G available (Dialog & Mobitel best)' },
      { icon: '🚰', label: 'Drinking Water', value: 'Buy bottled water at entrance — bring 1L minimum' },
      { icon: '🚻', label: 'Toilets', value: 'Available at base. Free with entry ticket.' },
      { icon: '🕐', label: 'Best Time', value: 'Open 7 AM – 5:30 PM. Go early morning to avoid crowds and heat.' },
    ],
    dressCode: 'No formal dress code. Wear comfortable, closed shoes (there are 1,200+ steps). Light, breathable clothing recommended.',
    tip: '⚠️ Beware: Some unofficial guides at the entrance may charge high fees. Official guides can be hired at the ticket counter.',
    nearbyFood: 'Several restaurants near the entrance serve rice & curry for LKR 300–500. Avoid overpriced tourist traps on the main road.'
  },
  ella: {
    name: 'Ella & The Odyssey Train',
    img: 'ella_train_1784522895792.png',
    category: 'Nature · Train Journey',
    intro: 'The Colombo–Ella train journey is frequently ranked among the world\'s most scenic rail journeys. Passing through misty mountain peaks, tea plantations, and jungle waterfalls, the 7-hour ride is an experience in itself. Ella is a small mountain town known for its hiking trails, Nine Arches Bridge, and Ella Rock.',
    details: [
      { icon: '📍', label: 'Location', value: 'Uva Province, Sri Lanka' },
      { icon: '⏱️', label: 'Train Duration', value: '~7 hours (Colombo Fort → Ella)' },
      { icon: '💰', label: 'Train Fare', value: 'LKR 110 (3rd Class) to LKR 1,000 (1st Class)' },
      { icon: '📶', label: 'Signal During Journey', value: 'Moderate — drops in mountain tunnels' },
      { icon: '🪑', label: 'Best Views Seat', value: '⭐ RIGHT side of the train (Colombo → Ella direction)' },
      { icon: '🎫', label: 'Ticket Booking', value: 'railwayticket.expogroup.lk (official) or station counter' },
    ],
    dressCode: 'Comfortable casual clothing. Bring a light jacket for the mountains as it can get cool.',
    tip: '🚨 SCAM ALERT: Multiple websites falsely claim the LEFT side has the best views and charge extra for seat selection. This is FALSE. The scenic views are on the RIGHT side. Never pay more than the official fare shown on the government website.',
    nearbyFood: 'Ella has great cafés and restaurants. The Ella Spice Garden and Dream Café are popular for rice & curry at LKR 400–800. Nine Arches views can be enjoyed with a tea from roadside stalls for LKR 50.'
  },
  kandy: {
    name: 'Temple of the Tooth – Kandy',
    img: 'kandy_temple_1784522927450.png',
    category: 'Heritage · Sacred Buddhist Site',
    intro: 'The Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) is one of the most venerated Buddhist sites in Sri Lanka and the world. Built inside the former royal palace complex beside Kandy Lake, it houses the relic of the tooth of the Buddha, a sacred artifact of immense cultural significance.',
    details: [
      { icon: '📍', label: 'Location', value: 'Kandy, Central Province' },
      { icon: '⏱️', label: 'Time Required', value: '2–3 hours (including Kandy Lake walk)' },
      { icon: '💰', label: 'Entry Fee', value: 'LKR 1,500 for foreigners (includes museum)' },
      { icon: '📶', label: 'Mobile Signal', value: 'Excellent 4G in Kandy city' },
      { icon: '🕐', label: 'Opening Hours', value: '6:00 AM – 8:00 PM daily' },
      { icon: '🎭', label: 'Puja Times', value: '6:30 AM, 9:30 AM, 6:30 PM (free to attend if inside)' },
    ],
    dressCode: '🛕 STRICT DRESS CODE: Cover shoulders and knees for all genders. No shorts, sleeveless tops, or revealing clothing. Sarongs available at entrance for LKR 50. Shoes must be removed before entering. Hats off inside.',
    tip: 'Visit during Puja ceremony (6:30 AM or 6:30 PM) for the most authentic spiritual experience. The Perahera Festival in July/August is spectacular but extremely crowded.',
    nearbyFood: 'Devon Restaurant and The Empire Café near the temple are popular tourist spots. Expect LKR 500–1,200 per meal. Kandy market has delicious street food.'
  },
  mirissa: {
    name: 'Mirissa Beach',
    img: 'mirissa_beach_1784522947085.png',
    category: 'Beach · Whale Watching',
    intro: 'Mirissa is a stunning crescent-shaped beach on Sri Lanka\'s southern coast, known for its crystalline turquoise waters, coconut palm-lined shore, and world-class whale watching. Blue whales, the largest creatures on earth, are regularly spotted here from November to April.',
    details: [
      { icon: '📍', label: 'Location', value: 'Matara District, Southern Province' },
      { icon: '⏱️', label: 'Ideal Duration', value: 'Full day or overnight stay' },
      { icon: '💰', label: 'Beach Entry', value: 'Free! Whale watching boats: LKR 3,500–5,000/person' },
      { icon: '📶', label: 'Mobile Signal', value: 'Good in Mirissa town. Weaker on the water.' },
      { icon: '🐋', label: 'Whale Watching Season', value: 'November – April (best: December–March)' },
      { icon: '🌊', label: 'Swimming', value: 'Safe near centre of beach. Follow safety flags.' },
    ],
    dressCode: 'Swimwear acceptable on the beach. When walking into town, cover up with a sarong or shorts and t-shirt. Topless sunbathing is not culturally acceptable.',
    tip: '💡 Book whale watching boats at certified SLTDA operators only. Many boats overcrowd and some captains harass whales. Look for eco-certified operators. Start early (5 AM departure) for best whale sightings.',
    nearbyFood: 'The beach has many fresh seafood restaurants. Budget: LKR 600–1,500 per meal. The Mirissa Hills restaurant has stunning views. Fresh king coconut from vendors on the beach: LKR 80.'
  },
  galle: {
    name: 'Galle Fort',
    img: 'galle_fort_1784522959122.png',
    category: 'Heritage · Colonial Architecture',
    intro: 'Galle Fort is a fortified old city originally built by the Portuguese in 1588 and later extensively fortified by the Dutch in the 17th century. A UNESCO World Heritage Site, it\'s now a vibrant blend of colonial architecture, boutique hotels, art galleries, charming restaurants, and the iconic lighthouse overlooking the Indian Ocean.',
    details: [
      { icon: '📍', label: 'Location', value: 'Galle, Southern Province' },
      { icon: '⏱️', label: 'Time Required', value: 'Half day (3–5 hours strolling)' },
      { icon: '💰', label: 'Entry Fee', value: 'Free — open at all times' },
      { icon: '📶', label: 'Mobile Signal', value: 'Excellent 4G in Galle Fort' },
      { icon: '🌅', label: 'Best Time', value: 'Sunset at the fort walls — spectacular ocean views' },
      { icon: '🛍️', label: 'Shopping', value: 'Unique boutiques, art, gems — always negotiate prices' },
    ],
    dressCode: 'Casual clothing is fine in the fort. Modesty is appreciated in the nearby town. Comfortable sandals are ideal for cobblestone streets.',
    tip: '💡 The fort walls are walkable in about 45 minutes and offer the best views. Visit the Dutch Reformed Church (1754) and the National Museum inside the fort. Avoid tuk-tuk tours inside the fort — it\'s better explored on foot.',
    nearbyFood: 'Galle Fort has some of Sri Lanka\'s best dining. The Fort Bazaar, Serendipity Arts Café, and Black Fort offer excellent food at LKR 1,000–3,000 per meal. Cheap local eats just outside the fort walls for LKR 200–400.'
  },
  yala: {
    name: 'Yala National Park',
    img: null,
    emoji: '🐆',
    category: 'Wildlife · Safari',
    intro: 'Yala National Park is Sri Lanka\'s most famous wildlife reserve, home to the world\'s highest density of wild leopards per square kilometre. The park spans diverse ecosystems — open grasslands, wetlands, and dense jungle — supporting elephants, crocodiles, sloth bears, spotted deer, peacocks, and hundreds of bird species.',
    details: [
      { icon: '📍', label: 'Location', value: 'Hambantota District, Southern/Uva Province' },
      { icon: '⏱️', label: 'Safari Duration', value: 'Half day (3–4 hours) or full day' },
      { icon: '💰', label: 'Entry + Jeep', value: 'USD 35 entry + LKR 5,000–10,000 for jeep rental' },
      { icon: '📶', label: 'Mobile Signal', value: 'Very limited inside the park. Download offline maps.' },
      { icon: '🦁', label: 'Best Wildlife Time', value: 'Early morning (5:30–9 AM) or late afternoon (3:30–6:30 PM)' },
      { icon: '🌿', label: 'Best Season', value: 'Feb–July (dry season, animals near watering holes)' },
    ],
    dressCode: '🌿 Wear neutral/earth tone clothing (khaki, green, brown). Avoid bright colours that can disturb animals. Closed shoes mandatory. No standing in the vehicle during safari.',
    tip: '💡 Book a reputable jeep driver through your hotel. Avoid drivers who promise "guaranteed leopard sighting" as they may stress the animals. Morning safaris are more productive. Bring binoculars!',
    nearbyFood: 'Bring a packed lunch as food facilities inside are very limited. The towns of Tissamaharama nearby have good local restaurants for LKR 300–600 per meal.'
  }
};

function openDestModal(key) {
  const data = destData[key];
  if (!data) return;

  const modal = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  let imgHtml = '';
  if (data.img) {
    imgHtml = `<img src="${data.img}" alt="${data.name}" style="width:100%;height:220px;object-fit:cover;border-radius:16px;margin-bottom:20px;" />`;
  } else {
    imgHtml = `<div style="width:100%;height:160px;background:linear-gradient(135deg,#1a472a,#2d6a4f);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:4rem;margin-bottom:20px;">${data.emoji}</div>`;
  }

  const detailsHtml = data.details.map(d => `
    <div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
      <span style="font-size:1.1rem;flex-shrink:0;">${d.icon}</span>
      <div>
        <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.5px;color:#6E7681;font-weight:700;margin-bottom:2px;">${d.label}</div>
        <div style="font-size:0.9rem;color:#F0F6FC;">${d.value}</div>
      </div>
    </div>
  `).join('');

  const tipClass = data.tip.includes('🚨') ? 'danger' : 'info';
  const tipBg = tipClass === 'danger' ? 'rgba(230,57,70,0.08)' : 'rgba(46,196,182,0.07)';
  const tipBorder = tipClass === 'danger' ? 'rgba(230,57,70,0.25)' : 'rgba(46,196,182,0.2)';
  const tipColor = tipClass === 'danger' ? '#ff8a93' : '#8BDBDB';

  content.innerHTML = `
    ${imgHtml}
    <div style="margin-bottom:8px;display:inline-block;padding:4px 12px;background:rgba(232,160,32,0.12);border:1px solid rgba(232,160,32,0.25);border-radius:100px;font-size:0.75rem;font-weight:700;color:#E8A020;text-transform:uppercase;letter-spacing:0.8px;">${data.category}</div>
    <h2 style="font-size:1.6rem;font-weight:800;margin-bottom:12px;color:#F0F6FC;">${data.name}</h2>
    <p style="font-size:0.92rem;color:#8B949E;line-height:1.7;margin-bottom:24px;">${data.intro}</p>
    
    <h3 style="font-size:1rem;font-weight:700;margin-bottom:8px;color:#F0F6FC;">📋 Key Details</h3>
    <div style="background:#161B22;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:8px 16px;margin-bottom:20px;">${detailsHtml}</div>
    
    <div style="padding:14px 16px;background:rgba(67,97,238,0.08);border:1px solid rgba(67,97,238,0.2);border-radius:10px;font-size:0.85rem;color:#a0b0ff;line-height:1.5;margin-bottom:14px;">
      <strong>👕 Dress Code:</strong> ${data.dressCode}
    </div>
    
    <div style="padding:14px 16px;background:${tipBg};border:1px solid ${tipBorder};border-radius:10px;font-size:0.85rem;color:${tipColor};line-height:1.5;margin-bottom:14px;">
      ${data.tip}
    </div>
    
    <div style="padding:14px 16px;background:rgba(45,198,83,0.06);border:1px solid rgba(45,198,83,0.15);border-radius:10px;font-size:0.85rem;color:#8B949E;line-height:1.5;">
      <strong style="color:#2DC653;">🍽️ Food Nearby:</strong> ${data.nearbyFood}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== Q&A SUBMIT =====
let qaCount = 0;
function submitQuestion() {
  const nameInput = document.getElementById('qa-name-input');
  const catSelect = document.getElementById('qa-category-select');
  const questionInput = document.getElementById('qa-question-input');

  const question = questionInput.value.trim();
  if (!question) {
    questionInput.style.borderColor = '#E63946';
    questionInput.placeholder = 'Please enter your question!';
    setTimeout(() => {
      questionInput.style.borderColor = '';
      questionInput.placeholder = 'Ask anything about travelling in Sri Lanka...';
    }, 2000);
    return;
  }

  const name = nameInput.value.trim() || 'Anonymous Traveller';
  const category = catSelect.value || 'other';
  const catLabels = {
    transport: 'Transport', accommodation: 'Accommodation', food: 'Food & Water',
    safety: 'Safety & Scams', connectivity: 'Mobile & WiFi', cultural: 'Culture & Dress', other: 'General'
  };

  qaCount++;
  const newItem = document.createElement('div');
  newItem.className = 'qa-item unanswered';
  newItem.id = `qa-user-${qaCount}`;
  newItem.innerHTML = `
    <div class="qa-question">
      <span class="qa-icon">❓</span>
      <div>
        <strong>${escapeHtml(question)}</strong>
        <div class="qa-meta">
          <span class="qa-category">${catLabels[category]}</span>
          <span class="qa-user">${escapeHtml(name)}</span>
          <span class="qa-user">· Just now</span>
        </div>
      </div>
    </div>
    <div class="qa-pending">
      <span>⏳</span> <em>Thank you! Your question has been submitted. Our team will respond within 24 hours.</em>
    </div>
  `;

  const dynamicList = document.getElementById('qa-dynamic-list');
  dynamicList.prepend(newItem);

  // Clear form
  nameInput.value = '';
  catSelect.value = '';
  questionInput.value = '';

  // Success flash
  const btn = document.getElementById('qa-submit-btn');
  btn.textContent = '✅ Submitted!';
  btn.style.background = 'linear-gradient(135deg, #2DC653, #1A9990)';
  setTimeout(() => {
    btn.textContent = 'Submit Question';
    btn.style.background = '';
  }, 3000);

  // Scroll to the new question
  newItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SCROLL REVEAL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe cards after DOM loads
window.addEventListener('load', () => {
  const animatables = document.querySelectorAll(
    '.dest-card, .route-card, .transport-card, .scam-card, .provider-card, .wifi-item, .toilet-card, .dress-card, .emergency-card, .qa-item'
  );
  animatables.forEach((el, i) => {
    el.classList.add('fade-in-up');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
});

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinksList.forEach(link => {
    link.style.color = '';
    link.style.background = '';
    const href = link.getAttribute('href').replace('#', '');
    if (href === current) {
      link.style.color = '#E8A020';
      link.style.background = 'rgba(232,160,32,0.08)';
    }
  });
});

// ===== SMOOTH HOVER PARALLAX ON HERO =====
const heroImg = document.querySelector('.hero-img');
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
  heroImg.style.transform = `scale(1.04) translate(${x}px, ${y}px)`;
});

document.querySelector('.hero').addEventListener('mouseleave', () => {
  heroImg.style.transform = '';
});

console.log('%c🦁 Lanka Compass', 'color:#E8A020;font-size:1.5rem;font-weight:bold;');
console.log('%cOne Digital Platform for Sri Lanka Tourism', 'color:#2EC4B6;font-size:0.9rem;');
