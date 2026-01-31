// ── Animal Spirit Types ──
const TYPES = [
  {
    id: 'tiger', emoji: '🐯',
    name: 'Tiger Spirit', nameKo: '호랑이상 (虎相)',
    desc: 'A natural-born leader radiating powerful energy. You command attention the moment you walk into a room.',
    eyeDesc: 'Sharp, intense gaze → Strong willpower',
    noseDesc: 'Prominent bridge → Ambition & drive',
    lipDesc: 'Firm, defined lips → Decisiveness',
    faceDesc: 'Angular jawline → Leadership presence',
    pros: ['Incredible leadership skills', 'Fearless decision-maker', 'Inspires loyalty in others'],
    cons: ['Can be overly dominant', 'Stubborn when challenged', 'Struggles to show vulnerability'],
    match: 'Deer Spirit', matchEmoji: '🦌',
    color: '#e85d3a'
  },
  {
    id: 'fox', emoji: '🦊',
    name: 'Fox Spirit', nameKo: '여우상 (狐相)',
    desc: 'Magnetic charm meets sharp intuition. You see through people effortlessly and always know the right thing to say.',
    eyeDesc: 'Upturned, alluring eyes → Natural magnetism',
    noseDesc: 'Delicate, refined → Keen perception',
    lipDesc: 'Curved smile → Persuasive communication',
    faceDesc: 'Oval, balanced face → Adaptability',
    pros: ['Extremely perceptive', 'Effortless social charm', 'Quick-witted & adaptable'],
    cons: ['May overthink motives', 'Guarded with true feelings', 'Can seem mysterious to others'],
    match: 'Crane Spirit', matchEmoji: '🏵️',
    color: '#f59e42'
  },
  {
    id: 'magpie', emoji: '🐦',
    name: 'Magpie Spirit', nameKo: '까치상 (鵲相)',
    desc: 'The ultimate connector! Your bright energy and quick wit make you the life of every gathering.',
    eyeDesc: 'Bright, sparkling eyes → Curiosity & joy',
    noseDesc: 'Soft, rounded → Approachable warmth',
    lipDesc: 'Wide, expressive smile → Gift of gab',
    faceDesc: 'Heart-shaped face → Youthful energy',
    pros: ['Incredible networking ability', 'Brings joy wherever you go', 'Excellent communicator'],
    cons: ['Easily distracted by new things', 'May spread energy too thin', 'Dislikes being alone'],
    match: 'Turtle Spirit', matchEmoji: '🐢',
    color: '#4a9fe5'
  },
  {
    id: 'crane', emoji: '🏵️',
    name: 'Crane Spirit', nameKo: '학상 (鶴相)',
    desc: 'Calm wisdom radiates from you. You see the bigger picture while others get lost in details.',
    eyeDesc: 'Calm, steady gaze → Inner peace',
    noseDesc: 'Straight, balanced → Focus & clarity',
    lipDesc: 'Thin, upturned corners → Quiet wisdom',
    faceDesc: 'Elongated, refined face → Elegance',
    pros: ['Exceptional analytical mind', 'Emotionally stable', 'Naturally wise beyond years'],
    cons: ['Overthinks before acting', 'Hard to read emotionally', 'May seem distant'],
    match: 'Fox Spirit', matchEmoji: '🦊',
    color: '#7c6fb0'
  },
  {
    id: 'turtle', emoji: '🐢',
    name: 'Turtle Spirit', nameKo: '거북상 (龜相)',
    desc: 'The rock everyone relies on. Your steady, dependable nature builds empires that last forever.',
    eyeDesc: 'Warm, trustworthy eyes → Reliability',
    noseDesc: 'Broad, grounded → Stability',
    lipDesc: 'Full, gentle lips → Kindness',
    faceDesc: 'Round, sturdy face → Endurance',
    pros: ['Unshakeable loyalty', 'Patient & persistent', 'Builds lasting foundations'],
    cons: ['Resistant to change', 'Can be overly cautious', 'Slow to open up'],
    match: 'Magpie Spirit', matchEmoji: '🐦',
    color: '#2a9d6e'
  },
  {
    id: 'rabbit', emoji: '🐰',
    name: 'Rabbit Spirit', nameKo: '토끼상 (兔相)',
    desc: 'Pure-hearted and deeply sensitive. You feel everything intensely and your empathy touches everyone around you.',
    eyeDesc: 'Large, gentle eyes → Deep empathy',
    noseDesc: 'Small, soft → Innocence',
    lipDesc: 'Soft, rosy lips → Tenderness',
    faceDesc: 'Soft, rounded features → Approachability',
    pros: ['Deeply empathetic', 'Creative & imaginative', 'Brings comfort to others'],
    cons: ['Takes criticism personally', 'Can be indecisive', 'Needs frequent reassurance'],
    match: 'Tiger Spirit', matchEmoji: '🐯',
    color: '#e88dba'
  },
  {
    id: 'dragon', emoji: '🐉',
    name: 'Dragon Spirit', nameKo: '용상 (龍相)',
    desc: 'Unstoppable ambition meets raw talent. You were born to achieve greatness and nothing can stand in your way.',
    eyeDesc: 'Piercing, focused eyes → Determination',
    noseDesc: 'Strong, high bridge → Authority',
    lipDesc: 'Bold, defined lips → Commanding voice',
    faceDesc: 'Strong bone structure → Power',
    pros: ['Limitless ambition', 'Natural authority', 'Achieves extraordinary goals'],
    cons: ['Workaholic tendencies', 'Impatient with slowness', 'High expectations of others'],
    match: 'Phoenix Spirit', matchEmoji: '🔥',
    color: '#c9363a'
  },
  {
    id: 'deer', emoji: '🦌',
    name: 'Deer Spirit', nameKo: '사슴상 (鹿相)',
    desc: 'Gentle grace meets quiet strength. You have a calming aura that makes everyone feel safe and understood.',
    eyeDesc: 'Soft, doe-like eyes → Compassion',
    noseDesc: 'Gentle slope → Harmony',
    lipDesc: 'Natural, relaxed lips → Authenticity',
    faceDesc: 'Oval, graceful face → Natural beauty',
    pros: ['Deeply compassionate', 'Creates harmony everywhere', 'Quietly strong'],
    cons: ['Avoids confrontation', 'May neglect own needs', 'Too trusting at times'],
    match: 'Tiger Spirit', matchEmoji: '🐯',
    color: '#b08d57'
  },
  {
    id: 'phoenix', emoji: '🔥',
    name: 'Phoenix Spirit', nameKo: '봉황상 (鳳凰相)',
    desc: 'A true creative soul blazing with artistic fire. You transform everything you touch into something beautiful.',
    eyeDesc: 'Dreamy, expressive eyes → Artistic vision',
    noseDesc: 'Unique, distinctive → Originality',
    lipDesc: 'Expressive, dynamic lips → Passion',
    faceDesc: 'Distinctive features → Unforgettable presence',
    pros: ['Boundless creativity', 'Transforms adversity into art', 'Uniquely inspiring'],
    cons: ['Emotionally intense', 'Struggles with routine', 'Perfectionistic tendencies'],
    match: 'Dragon Spirit', matchEmoji: '🐉',
    color: '#d4542a'
  }
];

const ANALYSIS_STEPS = [
  'Detecting face shape...',
  'Analyzing eye features...',
  'Reading nose structure...',
  'Examining lip curvature...',
  'Calculating facial proportions...',
  'Matching animal spirit...',
  'Generating your reading...'
];

// ── State ──
let uploadedImageData = null;

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewArea = document.getElementById('previewArea');
  const previewImg = document.getElementById('previewImg');
  const retakeBtn = document.getElementById('retakeBtn');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const retryBtn = document.getElementById('retryBtn');
  const shareBtn = document.getElementById('shareBtn');

  // Upload click
  uploadArea.addEventListener('click', () => fileInput.click());

  // Drag & drop
  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener('change', e => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });

  retakeBtn.addEventListener('click', () => {
    uploadedImageData = null;
    fileInput.value = '';
    previewArea.style.display = 'none';
    uploadArea.style.display = '';
    analyzeBtn.disabled = true;
  });

  analyzeBtn.addEventListener('click', startAnalysis);
  retryBtn.addEventListener('click', () => {
    uploadedImageData = null;
    fileInput.value = '';
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('uploadArea').style.display = '';
    analyzeBtn.disabled = true;
    showScreen('uploadScreen');
  });

  shareBtn.addEventListener('click', shareResult);

  function handleFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      uploadedImageData = e.target.result;
      previewImg.src = uploadedImageData;
      uploadArea.style.display = 'none';
      previewArea.style.display = 'flex';
      analyzeBtn.disabled = false;
    };
    reader.readAsDataURL(file);
  }
});

// ── Screens ──
function showScreen(id) {
  ['uploadScreen', 'analyzingScreen', 'resultScreen'].forEach(s => {
    document.getElementById(s).style.display = s === id ? '' : 'none';
  });
}

// ── Hash from image for consistent results ──
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < Math.min(str.length, 5000); i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// ── Analysis ──
function startAnalysis() {
  showScreen('analyzingScreen');
  document.getElementById('scanImg').src = uploadedImageData;

  const fill = document.getElementById('progressFill');
  const detail = document.getElementById('analyzingDetail');
  let step = 0;

  fill.style.width = '0%';

  const interval = setInterval(() => {
    step++;
    const pct = Math.min((step / ANALYSIS_STEPS.length) * 100, 100);
    fill.style.width = pct + '%';
    detail.textContent = ANALYSIS_STEPS[Math.min(step, ANALYSIS_STEPS.length - 1)];

    if (step >= ANALYSIS_STEPS.length) {
      clearInterval(interval);
      setTimeout(() => showResult(), 400);
    }
  }, 500);
}

// ── Result ──
function showResult() {
  const hash = simpleHash(uploadedImageData);
  const type = TYPES[hash % TYPES.length];

  // Secondary random values from hash
  const luckNum = (hash % 9) + 1;
  const luckColor = ['Gold', 'Crimson', 'Azure', 'Emerald', 'Violet', 'Silver', 'Amber', 'Rose', 'Indigo'][hash % 9];
  const pct = 70 + (hash % 25);

  const html = `
    <div class="result-card">
      <div class="result-photo-wrap">
        <img src="${uploadedImageData}" class="result-photo" />
      </div>

      <div class="result-type-badge" style="background:${type.color}">
        <span class="result-emoji">${type.emoji}</span>
        <h2 class="result-type-name">${type.name}</h2>
        <p class="result-type-ko">${type.nameKo}</p>
      </div>

      <p class="result-desc">${type.desc}</p>

      <div class="result-section">
        <h3>🔍 Face Feature Analysis</h3>
        <ul class="feature-list">
          <li><strong>Eyes:</strong> ${type.eyeDesc}</li>
          <li><strong>Nose:</strong> ${type.noseDesc}</li>
          <li><strong>Lips:</strong> ${type.lipDesc}</li>
          <li><strong>Face Shape:</strong> ${type.faceDesc}</li>
        </ul>
      </div>

      <div class="result-section">
        <h3>✨ Strengths</h3>
        <ul class="tag-list pros">${type.pros.map(p => `<li>✔ ${p}</li>`).join('')}</ul>
      </div>

      <div class="result-section">
        <h3>💭 Watch Out For</h3>
        <ul class="tag-list cons">${type.cons.map(c => `<li>✖ ${c}</li>`).join('')}</ul>
      </div>

      <div class="result-section match-section" style="border-color:${type.color}">
        <h3>💕 Best Match</h3>
        <p class="match-text">${type.matchEmoji} Your ideal partner is <strong>${type.match}</strong></p>
      </div>

      <div class="result-section fortune-section">
        <h3>🎯 Today's Fortune</h3>
        <p>Lucky number: <strong>${luckNum}</strong></p>
        <p>Lucky color: <strong>${luckColor}</strong></p>
        <div class="fortune-bar-wrap">
          <div class="fortune-bar" style="width:${pct}%;background:${type.color}">${pct}%</div>
        </div>
        <p class="fortune-label">Overall Luck Score</p>
      </div>

      <p class="result-disclaimer">🎭 This is for entertainment purposes only!</p>
    </div>
  `;

  document.getElementById('resultContent').innerHTML = html;
  showScreen('resultScreen');

  // Store for sharing
  window._lastResult = type;
}

// ── Share ──
function shareResult() {
  const type = window._lastResult;
  const text = `I got "${type.name}" ${type.emoji} on AI Face Reading! ${type.desc}\n\nTry it yourself!`;

  if (navigator.share) {
    navigator.share({ title: 'AI Face Reading Result', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('shareBtn');
      btn.textContent = 'Copied! ✅';
      setTimeout(() => btn.textContent = 'Share Result 📤', 2000);
    });
  }
}
