/* ============================================================
   Fastone.com — App JS
   ============================================================ */const GAME_IMG_MAP = {
  'Boxing King':   'game_boxing_king_1774251853523.png',
  'Candy Baby':    'game_candy_baby_1774252195365.png',
  'Dragon Fortune':'game_dragon_fortune_1774251963477.png',
  'Fortune Gems':  'game_fortune_gems_1774251982967.png',
  'Golden Empire': 'game_golden_empire_1774251833480.png',
  'Jungle King':   'game_jungle_king_1774252144286.png',
  'Mega Fishing':  'game_mega_fishing_1774251881646.png',
  'Night City':    'game_night_city_1774251919169.png',
  'ROMA X 10000':  'game_romax_1774251816243.png',
  'Super Ace':     'game_super_ace_1774252003529.png',
  'Super Ace 2 Stack':'game_super_ace_1774252003529.png',
  'ZEUS':          'game_zeus_1774251901492.png'
};

function getGameImg(name) {
  const f = GAME_IMG_MAP[name];
  if (f) return `images/${f}`;
  
  // High-quality generative fallbacks for missing assets
  const game = GAMES.find(g => g.name === name);
  if (game) {
    const cat = game.category.toLowerCase();
    if (cat === 'slot') return 'images/fallback_slot.png';
    if (cat === 'fishing') return 'images/fallback_fishing.png';
    if (cat === 'table') return 'images/fallback_table.png';
    if (cat === 'bingo') return 'images/fallback_bingo.png';
    if (cat === 'casino') return 'images/fallback_casino.png';
  }
  return null;
}

/* ── Game Data (55+ games) ──────────────────────── */
const GAMES = [
  // === SLOT (35+) ===
  { id: 1,  name: 'Roma X 10000',      category: 'slot',    rtp: '96.71%', volatility: 'High',   maxWin: '10,000x', desc: 'Ancient Rome meets modern slots. Cascading reels and free spin multipliers that can reach 10,000x your bet.', color: ['#1a0000','#3a0000'] },
  { id: 2,  name: 'Golden Empire',     category: 'slot',    rtp: '96.80%', volatility: 'High',   maxWin: '5,000x',  desc: 'Enter the golden realm. An Asian-themed slot with expanding wilds and a golden multiplier meter.', color: ['#1a0800','#2a1000'] },
  { id: 3,  name: 'Super Ace',         category: 'slot',    rtp: '97.10%', volatility: 'Medium', maxWin: '3,000x',  desc: 'Classic card-themed slot with a powerful ace feature — matching aces unlock the grand jackpot bonus.', color: ['#0a0a1a','#0f0f2a'] },
  { id: 4,  name: 'Boxing King',       category: 'slot',    rtp: '96.50%', volatility: 'High',   maxWin: '8,000x',  desc: 'Step into the ring with this action-packed slot. Free spins with sticky wilds and knock-out multipliers.', color: ['#100010','#200020'] },
  { id: 5,  name: 'Fortune Gems',      category: 'slot',    rtp: '96.90%', volatility: 'Medium', maxWin: '2,500x',  desc: 'Sparkling gems cascade across 5x3 reels. Auto-hold feature keeps the best symbols for re-spins.', color: ['#001a10','#002a18'] },
  { id: 6,  name: 'Jungle King',       category: 'slot',    rtp: '96.30%', volatility: 'High',   maxWin: '6,000x',  desc: 'Rule the jungle with stacked wilds and expanding reels. Random jackpot triggered on any spin.', color: ['#0a1a00','#122800'] },
  { id: 7,  name: 'Night City',        category: 'slot',    rtp: '96.75%', volatility: 'High',   maxWin: '7,500x',  desc: 'Cyberpunk-themed slot set in neon-lit streets. Scatter pays + free spin respins with multiplier trail.', color: ['#00001a','#00002a'] },
  { id: 8,  name: 'ZEUS',              category: 'slot',    rtp: '96.60%', volatility: 'High',   maxWin: '5,500x',  desc: 'Mount Olympus pays huge. Lightning bolt wilds strike multiple positions on every free spin.', color: ['#101800','#182400'] },
  { id: 9,  name: 'Candy Baby',        category: 'slot',    rtp: '97.00%', volatility: 'Low',    maxWin: '1,500x',  desc: 'Sweet and simple — match colourful candies for frequent wins. A beginner-friendly hit for casual players.', color: ['#180010','#240018'] },
  { id: 10, name: 'Money Coming',      category: 'slot',    rtp: '96.85%', volatility: 'Medium', maxWin: '3,500x',  desc: 'Cash is coming! Coin scatter triggers cash rain free spins with locked multiplier wilds.', color: ['#001810','#002818'] },
  { id: 11, name: '777 Deluxe',        category: 'slot',    rtp: '97.20%', volatility: 'Low',    maxWin: '1,000x',  desc: 'Classic fruit machine reimagined. Triple 7s on the payline unlock the deluxe jackpot bonus.', color: ['#1a0a00','#2a1400'] },
  { id: 12, name: 'Safari King',       category: 'slot',    rtp: '96.40%', volatility: 'High',   maxWin: '8,000x',  desc: 'Track the big five across the savanna. Wild lion symbol expands vertically for mega wins.', color: ['#1a1000','#2a1800'] },
  { id: 13, name: 'Charge Buffalo',    category: 'slot',    rtp: '96.65%', volatility: 'High',   maxWin: '6,500x',  desc: 'The herd is charging. Holds & wins mechanic with electric wilds and linking jackpot prizes.', color: ['#100a00','#1e1200'] },
  { id: 14, name: 'Ali Baba',          category: 'slot',    rtp: '96.55%', volatility: 'High',   maxWin: '7,000x',  desc: 'Open sesame to riches. Arabian nights theme with portal wilds and expanding treasure maps.', color: ['#1a0008','#280010'] },
  { id: 15, name: 'War of Dragon',     category: 'slot',    rtp: '96.80%', volatility: 'High',   maxWin: '9,000x',  desc: 'Dragon battle rages across 6 reels. Clash of dragons triggers massive win multipliers.', color: ['#1a0000','#2a0000'] },
  { id: 16, name: 'RomaX',            category: 'slot',    rtp: '96.70%', volatility: 'High',   maxWin: '10,000x', desc: 'Next evolution of the Roma series. Turbo reels and upgraded cascading mechanics for epic wins.', color: ['#180008','#260010'] },
  { id: 17, name: 'King Arthur',       category: 'slot',    rtp: '96.45%', volatility: 'Medium', maxWin: '4,000x',  desc: 'Camelot calls. Epic medieval slot with sword-in-stone bonus and round table free spins.', color: ['#0a0a18','#101020'] },
  { id: 18, name: 'Sin City',          category: 'slot',    rtp: '96.60%', volatility: 'High',   maxWin: '7,000x',  desc: 'Vegas never sleeps. Neon-drenched slot with progressive jackpots and free spin multipliers.', color: ['#180a00','#261200'] },
  { id: 19, name: 'Mayan Gems',        category: 'slot',    rtp: '96.30%', volatility: 'Medium', maxWin: '3,000x',  desc: 'Aztec temple treasures. Symbol lock re-spin feature with progressive gem multipliers.', color: ['#001010','#001818'] },
  { id: 20, name: 'Dragon Tiger Luck', category: 'slot',    rtp: '96.50%', volatility: 'High',   maxWin: '5,000x',  desc: 'Battle of beasts on the reels. Dragon vs tiger scatter triggers instant cash prizes.', color: ['#1a0000','#2e0000'] },
  { id: 21, name: 'Fruit Paradise',    category: 'slot',    rtp: '97.10%', volatility: 'Low',    maxWin: '2,000x',  desc: 'Tropical fruit bonanza. Simple 3x3 layout with nudge wilds and free spin clusters.', color: ['#1a1000','#281800'] },
  { id: 22, name: 'Highway Fortune',   category: 'slot',    rtp: '96.75%', volatility: 'High',   maxWin: '6,000x',  desc: 'Hit the road to riches. Wild highway scatter triggers the road trip bonus round.', color: ['#080810','#101018'] },
  { id: 23, name: 'Phoenix Rises',     category: 'slot',    rtp: '96.90%', volatility: 'High',   maxWin: '8,500x',  desc: 'Born from the ashes. Phoenix wild multiplies wins and respawns with each free spin.', color: ['#1a0800','#280e00'] },
  { id: 24, name: 'Lucky Coin',        category: 'slot',    rtp: '97.00%', volatility: 'Medium', maxWin: '2,500x',  desc: 'Coin-drop mechanic on 5 reels. Lucky coin feature randomly adds wilds and multipliers.', color: ['#100a00','#1e1000'] },
  { id: 25, name: 'Pirate Queen',      category: 'slot',    rtp: '96.40%', volatility: 'High',   maxWin: '7,500x',  desc: 'She rules the seas. Map scatter triggers treasure hunt bonus with crew-member multipliers.', color: ['#000a18','#000e22'] },
  { id: 26, name: 'Wild West Gold',    category: 'slot',    rtp: '96.55%', volatility: 'High',   maxWin: '9,000x',  desc: 'Ride into the sunset. Sheriff wild badge collects and awards multiplied free spins.', color: ['#1a1000','#241800'] },
  { id: 27, name: 'Genie Blast',       category: 'slot',    rtp: '96.65%', volatility: 'Medium', maxWin: '4,500x',  desc: 'Lamp wishes come true. Genie wild expands and triggers a bonus wish multiplier feature.', color: ['#08001a','#100028'] },
  { id: 28, name: 'Ice Wolf',          category: 'slot',    rtp: '96.30%', volatility: 'High',   maxWin: '6,500x',  desc: 'Arctic predator hunts for wins. Freeze reel mechanic locks wolf wilds in place for 3 spins.', color: ['#000a10','#000e18'] },
  { id: 29, name: 'Samurai Swords',    category: 'slot',    rtp: '96.85%', volatility: 'High',   maxWin: '8,000x',  desc: 'Japanese warrior honour. Katana slash splits symbols and doubles win values.', color: ['#100010','#1e0018'] },
  { id: 30, name: 'Crystal Cavern',    category: 'slot',    rtp: '97.05%', volatility: 'Medium', maxWin: '3,500x',  desc: 'Deep underground riches. Crystal cluster pays trigger gem storm free spin bonus.', color: ['#001018','#001820'] },
  { id: 31, name: 'Monkey King',       category: 'slot',    rtp: '96.60%', volatility: 'High',   maxWin: '5,500x',  desc: 'Journey to the west for riches. Staff wild scatters wins across entire reels.', color: ['#0a1000','#121800'] },
  { id: 32, name: 'Volcano Riches',    category: 'slot',    rtp: '96.45%', volatility: 'High',   maxWin: '7,000x',  desc: 'Eruption of wins. Lava wild flows across reels during volcanic free spin mode.', color: ['#1a0400','#280800'] },
  { id: 33, name: 'Space Odyssey',     category: 'slot',    rtp: '96.75%', volatility: 'High',   maxWin: '9,500x',  desc: 'Outer space adventure. Black hole wild collapses adjacent symbols into multiplied wins.', color: ['#000010','#00001e'] },
  { id: 34, name: 'Tiger Warrior',     category: 'slot',    rtp: '96.50%', volatility: 'High',   maxWin: '6,000x',  desc: 'The tiger strikes. Claw scatter shreds the reels and activates warrior rage free spins.', color: ['#1a0a00','#281400'] },
  { id: 35, name: 'Diamond Strike',    category: 'slot',    rtp: '97.15%', volatility: 'Medium', maxWin: '2,800x',  desc: 'Diamonds are forever. Hold & win mechanic fills the grid with diamond cash symbols.', color: ['#080818','#0e0e24'] },

  // === FISHING (5) ===
  { id: 36, name: 'Mega Fishing',      category: 'fishing', rtp: '96.90%', volatility: 'Medium', maxWin: '800x',    desc: 'Cast your line for massive fish prizes. Boss fish battles trigger jackpot explosions.', color: ['#001018','#001a22'] },
  { id: 37, name: 'Dragon Fortune',    category: 'fishing', rtp: '96.70%', volatility: 'High',   maxWin: '1,200x',  desc: 'Hunt the sea dragon for legendary rewards. Dragon appearance multiplies all fish values.', color: ['#100010','#1a0018'] },
  { id: 38, name: 'Jackpot Fishing',   category: 'fishing', rtp: '96.50%', volatility: 'High',   maxWin: '2,000x',  desc: 'Four progressive jackpots hidden in the deep. Special bombs uncover jackpot fish.', color: ['#001810','#002018'] },
  { id: 39, name: 'Circus Jackpot',    category: 'fishing', rtp: '96.80%', volatility: 'Medium', maxWin: '1,000x',  desc: 'Carnival meets fishing — shoot clown fish for surprise multipliers and jackpot prizes.', color: ['#1a0a08','#281210'] },
  { id: 40, name: 'Fortune Zombie',    category: 'fishing', rtp: '96.40%', volatility: 'High',   maxWin: '1,500x',  desc: 'Undead fish bring buried treasure. Special silver bullets deal massive zombie fish damage.', color: ['#080a08','#101410'] },

  // === TABLE (3+) ===
  { id: 41, name: 'Speed Baccarat',    category: 'table',   rtp: '98.94%', volatility: 'Low',    maxWin: '8x',      desc: 'Lightning-fast baccarat rounds completed in under 30 seconds. Classic rules, streamlined for online play.', color: ['#0a0010','#10001a'] },
  { id: 42, name: 'Color Game',        category: 'table',   rtp: '97.22%', volatility: 'Medium', maxWin: '3x',      desc: 'Filipino carnival classic. Pick your colour, roll the dice, multiply your wins up to 3x for triple matches.', color: ['#0a0a00','#141400'] },
  { id: 43, name: 'Jhandi Munda',      category: 'table',   rtp: '97.50%', volatility: 'Medium', maxWin: '6x',      desc: 'Traditional South Asian dice game. Bet on symbols, roll six dice, win up to 6x for six-of-a-kind.', color: ['#100008','#1a0010'] },
  { id: 44, name: 'Dragon Tiger',      category: 'table',   rtp: '96.72%', volatility: 'Low',    maxWin: '1x',      desc: 'Pure card battle — Dragon vs Tiger. Simple two-card showdown with side bet options.', color: ['#1a0000','#280000'] },

  // === BINGO (5) ===
  { id: 45, name: 'Lucky Bingo',       category: 'bingo',   rtp: '96.00%', volatility: 'Medium', maxWin: '500x',    desc: 'Classic 75-ball bingo with turbo mode and bonus ball multipliers for accelerated jackpots.', color: ['#000a18','#001020'] },
  { id: 46, name: 'Fortune Gems Scratch', category: 'bingo', rtp: '95.80%', volatility: 'Low',  maxWin: '2,000x',  desc: 'Scratch card meets bingo. Match gem patterns across the grid to reveal instant cash prizes.', color: ['#001010','#001818'] },
  { id: 47, name: 'Boxing Extravaganza', category: 'bingo', rtp: '96.20%', volatility: 'High',  maxWin: '1,000x',  desc: 'Match boxing gloves and champions in this action-packed bingo variant with bonus rounds.', color: ['#100010','#1a0018'] },
  { id: 48, name: 'Go For Champion',   category: 'bingo',   rtp: '96.10%', volatility: 'Medium', maxWin: '750x',    desc: 'Sports-themed bingo showdown. Complete the champion card for mega jackpot payouts.', color: ['#0a1000','#121800'] },
  { id: 49, name: 'Bingo Adventure',   category: 'bingo',   rtp: '95.90%', volatility: 'Medium', maxWin: '600x',    desc: 'Go on a bingo quest across 5 adventure stages. Each stage unlocks bigger prize multipliers.', color: ['#001018','#001820'] },

  // === CASINO (5) ===
  { id: 50, name: 'PLINKO',            category: 'casino',  rtp: '97.00%', volatility: 'High',   maxWin: '10,000x', desc: 'Drop the ball, multiply the thrill. Choose from 1x to 1000x risk levels in our custom plinko board.', color: ['#0a0018','#10001e'] },
  { id: 51, name: 'Crash Touchdown',   category: 'casino',  rtp: '97.00%', volatility: 'High',   maxWin: 'Unlimited', desc: 'Football crash game — cash out before the tackle! Multiplier grows until the defensive line hits.', color: ['#001a00','#002200'] },
  { id: 52, name: 'Keno',              category: 'casino',  rtp: '95.00%', volatility: 'Medium', maxWin: '10,000x', desc: 'Pick 1 to 10 numbers and watch the draw. Paytable scales with the number of picks and hits.', color: ['#180800','#201000'] },
  { id: 53, name: 'Drop Ball',         category: 'casino',  rtp: '97.00%', volatility: 'High',   maxWin: '5,000x',  desc: 'Pachinko-inspired drop ball with RNG slot reveal at the bottom. Multiple balls for combo wins.', color: ['#001018','#001820'] },
  { id: 54, name: 'Cricket War',       category: 'casino',  rtp: '97.22%', volatility: 'Low',    maxWin: '2x',      desc: 'Cricket-themed card battle. Bet on the home or away team, cricket over wins the match.', color: ['#0a1000','#121800'] },
  { id: 55, name: 'Wheel of Fortune',  category: 'casino',  rtp: '96.50%', volatility: 'Medium', maxWin: '200x',    desc: 'Spin the big wheel for instant cash prizes. VIP wheel available with higher multiplier segments.', color: ['#100808','#180e0e'] },
];

/* Category colours for CSS gradient backgrounds */
const CAT_COLORS = {
  slot:    ['#1a0000', '#0a0000'],
  fishing: ['#001018', '#000810'],
  table:   ['#0a0010', '#050008'],
  bingo:   ['#000a1a', '#00060e'],
  casino:  ['#0a0a00', '#060600'],
};

/* ── Render Functions ───────────────────────────── */

function createGameCard(game, extraClass = '') {
  const [c1, c2] = game.color;
  const imgSrc = getGameImg(game.name);
  const thumb = imgSrc
    ? `<img src="${imgSrc}" alt="${game.name}" class="game-card__img">`
    : `<div class="game-card__bg" style="background:linear-gradient(145deg,${c1},${c2})"><div class="game-card__label">${game.name}</div></div>`;
  return `
    <div class="game-card ${extraClass}" data-id="${game.id}" tabindex="0" role="button" aria-label="Open ${game.name}">
      <div class="game-card__thumb">
        ${thumb}
        <div class="game-card__overlay">
          <div class="game-card__name">${game.name}</div>
          <button class="game-card__play" aria-label="Play ${game.name}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            Play
          </button>
        </div>
      </div>
    </div>`;
}

/* ── Modal ──────────────────────────────────────── */

let modalOverlay = null;

function openModal(gameId) {
  const game = GAMES.find(g => g.id === parseInt(gameId));
  if (!game) return;
  const [c1, c2] = game.color;

  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `<div class="modal" role="dialog" aria-modal="true"></div>`;
    document.body.appendChild(modalOverlay);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  const catLabel = game.category.charAt(0).toUpperCase() + game.category.slice(1);
  const mImg = getGameImg(game.name);
  const mThumb = mImg
    ? `<img src="${mImg}" alt="${game.name}" style="width:100%;height:100%;object-fit:cover;display:block;">`
    : game.name;
  const mThumbStyle = mImg ? '' : `style="background:linear-gradient(145deg,${c1},${c2})"`;
  modalOverlay.querySelector('.modal').innerHTML = `
    <div class="modal__thumb" ${mThumbStyle}>${mThumb}</div>
    <div class="modal__body">
      <div class="modal__header">
        <h2 class="modal__name">${game.name}</h2>
        <button class="modal__close" aria-label="Close modal" onclick="closeModal()">&#10005;</button>
      </div>
      <span class="modal__cat">${catLabel}</span>
      <p class="modal__desc">${game.desc}</p>
      <div class="modal__specs">
        <div class="modal__spec">
          <div class="modal__spec-label">RTP</div>
          <div class="modal__spec-val">${game.rtp}</div>
        </div>
        <div class="modal__spec">
          <div class="modal__spec-label">Volatility</div>
          <div class="modal__spec-val">${game.volatility}</div>
        </div>
        <div class="modal__spec">
          <div class="modal__spec-label">Max Win</div>
          <div class="modal__spec-val">${game.maxWin}</div>
        </div>
      </div>
      <button class="btn btn--red modal__play" onclick="alert('Demo launch initialized!')">&#9654; Play Demo</button>
    </div>`;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Expose card click delegation ───────────────── */
function bindCardClicks(container) {
  container.addEventListener('click', e => {
    const card = e.target.closest('.game-card');
    if (card) openModal(card.dataset.id);
  });
  container.addEventListener('keydown', e => {
    const card = e.target.closest('.game-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openModal(card.dataset.id); }
  });
}

/* ── Stats Counter ──────────────────────────────── */

function animateCounter(el, target, suffix) {
  const start = performance.now();
  const duration = 1800;
  const isFloat = target % 1 !== 0;

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const current = eased * target;
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isFloat ? target.toFixed(1) : target;
  }
  requestAnimationFrame(step);
}

function initStats() {
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll('[data-count]');
  let animated = false;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      counters.forEach(el => {
        const target = parseFloat(el.dataset.count);
        animateCounter(el, target, el.dataset.suffix || '');
      });
    }
  }, { threshold: 0.3 });

  obs.observe(statsSection);
}

/* ── Scroll Reveal ──────────────────────────────── */

function initScrollReveal() {
  const els = document.querySelectorAll('.rv');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
}

/* ── Language Switcher ──────────────────────────── */

function initLang() {
  document.querySelectorAll('.lang-switcher').forEach(group => {
    group.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
      });
    });
  });
}

/* ── Nav Mobile ─────────────────────────────────── */

function initMobileNav() {
  const burger = document.querySelector('.nav__burger');
  const nav    = document.querySelector('.nav');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (!burger || !mobileMenu || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('nav--open', open);
    mobileMenu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', e => {
    e.stopPropagation();
    setOpen(!mobileMenu.classList.contains('open'));
  });

  // Close when any nav link is tapped
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (mobileMenu.classList.contains('open') && !nav.contains(e.target)) {
      setOpen(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setOpen(false);
  });
}

/* ── Horizontal Scroll Buttons ──────────────────── */

function initScrollBtns() {
  document.querySelectorAll('.games-scroll-wrap').forEach(wrap => {
    const track = wrap.querySelector('.games-track');
    const prev  = wrap.querySelector('.scroll-btn.prev');
    const next  = wrap.querySelector('.scroll-btn.next');
    if (!track) return;
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -480, behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left:  480, behavior: 'smooth' }));
  });
}

/* ── Tab Filter (games.html) ────────────────────── */

function initTabs() {
  const tabContainer  = document.querySelector('.tabs');
  const grid          = document.getElementById('games-grid');
  const searchInput   = document.getElementById('games-search');
  if (!tabContainer || !grid) return;

  let activeFilter = 'all';

  // Stamp counts onto each tab button
  tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
    const cat   = btn.dataset.tab;
    const count = cat === 'all' ? GAMES.length : GAMES.filter(g => g.category === cat).length;
    btn.dataset.count = count;
  });

  function renderGames(filter, query) {
    let list = filter === 'all' ? GAMES : GAMES.filter(g => g.category === filter);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(g => g.name.toLowerCase().includes(q));
    }
    if (!list.length) {
      const term = query || filter;
      grid.innerHTML = `<div class="games-empty">No games match "<strong>${term}</strong>"</div>`;
    } else {
      grid.innerHTML = list.map(g => createGameCard(g)).join('');
      bindCardClicks(grid);
    }
  }

  renderGames('all', '');

  tabContainer.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    tabContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.tab;
    if (searchInput) searchInput.value = '';
    renderGames(activeFilter, '');
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderGames(activeFilter, searchInput.value.trim());
    });
    // Clear search on × button
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        renderGames(activeFilter, '');
      }
    });
  }
}

/* ── Homepage Game Showcase ─────────────────────── */

function initShowcase() {
  const track = document.getElementById('showcase-track');
  if (!track) return;

  const featured = GAMES.filter(g => g.category === 'slot').slice(0, 12);
  track.innerHTML = featured.map(g => createGameCard(g)).join('');
  bindCardClicks(track);
}

/* ── Contact Form ───────────────────────────────── */

function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Our team will contact you within 24 hours.');
    form.reset();
  });
}

function initHero() {
  const bg = document.querySelector('.hero__bg');
  if (bg) bg.style.backgroundImage = 'url(images/game_hero_bg_1774252126888.png)';
}

/* ── Init ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initStats();
  initScrollReveal();
  initLang();
  initMobileNav();
  initScrollBtns();
  initTabs();
  initShowcase();
  initForm();
});
