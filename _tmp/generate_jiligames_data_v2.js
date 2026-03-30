const fs = require('fs');

const html = fs.readFileSync('_tmp/jiligames_games.html', 'utf8');

const decode = (s) =>
  s
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

// Outer category blocks on jiligames:
// - Slot: type=3
// - Fishing: type=4
// - Table and Card: type=5
// - Bingo: type=6
// - Casino: type=8
const CATEGORY_BLOCKS = {
  3: 'slot',
  4: 'fishing',
  5: 'table',
  6: 'bingo',
  8: 'casino',
};

const colorByCategory = {
  slot: ['#1a0000', '#0a0000'],
  fishing: ['#001018', '#000810'],
  table: ['#0a0010', '#050008'],
  bingo: ['#000a1a', '#00060e'],
  casino: ['#0a0a00', '#060600'],
};

// Capture each game card in the block.
// NOTE: Some games have an empty/placeholder url for `<img class='img'>`,
// but the real thumbnail is in `<img class='introImg'>`.
const itemRe =
  /<li class="gamesBox--title"[^>]*id="game(\d+)"[\s\S]*?<img class='introImg' src="([^"]+)"[\s\S]*?<div class="subtitle">([\s\S]*?)<\/div>/g;

function extractFromBlock(blockHtml, category) {
  const out = [];
  const localRe = new RegExp(itemRe.source, 'g');
  let m;
  while ((m = localRe.exec(blockHtml)) !== null) {
    const id = Number(m[1]);
    const img = m[2];
    const name = decode(m[3].trim());
    out.push({
      id,
      name,
      category,
      img,
      rtp: 'N/A',
      volatility: 'N/A',
      maxWin: 'N/A',
      desc: '',
      color: colorByCategory[category] ?? colorByCategory.slot,
    });
  }
  return out;
}

const gameById = new Map();

for (const [codeStr, category] of Object.entries(CATEGORY_BLOCKS)) {
  const code = Number(codeStr);
  // Extract the gamesExhibit list for that category block only (ends at the first closing </ul>).
  const blockRe = new RegExp(
    `gamesExhibit__list gameTypeBlock\" type=${code}[^>]*>[\\s\\S]*?<\\/ul>`,
    'g'
  );

  let bm;
  while ((bm = blockRe.exec(html)) !== null) {
    const blockHtml = bm[0];
    const games = extractFromBlock(blockHtml, category);
    for (const g of games) {
      if (!gameById.has(g.id)) gameById.set(g.id, g);
    }
  }
}

// Fallback: if anything is missing, grab from ALL GAMES (type=1) and default to slot.
if (gameById.size < 220) {
  const allGamesCode = 1;
  const allBlockRe = new RegExp(
    `gamesExhibit__list gameTypeBlock\" type=${allGamesCode}[^>]*>[\\s\\S]*?<\\/ul>`,
    'g'
  );
  let bm;
  while ((bm = allBlockRe.exec(html)) !== null) {
    const games = extractFromBlock(bm[0], 'slot');
    for (const g of games) {
      if (!gameById.has(g.id)) gameById.set(g.id, g);
    }
  }
}

const games = Array.from(gameById.values());

fs.writeFileSync('_tmp/jiligames_games_generated.json', JSON.stringify(games, null, 2), 'utf8');
fs.writeFileSync('_tmp/jiligames_games_generated_compact.json', JSON.stringify(games), 'utf8');

console.log(`Generated ${games.length} games from category blocks`);

