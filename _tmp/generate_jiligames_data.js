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

// Extract list items:
//  - <li class="gamesBox--title" ... id="game637" ... type="1|3|...">
//  - <img class='introImg' src="...png|jpg">
//  - <div class="subtitle">GAME NAME</div>
const itemRe =
  /<li class="gamesBox--title"[^>]*id="game(\d+)"[^>]*>[\s\S]*?<img class='introImg' src="([^"]+)"[\s\S]*?<div class="subtitle">([\s\S]*?)<\/div>/g;

const typeToCategory = (typeNum) => {
  if (typeNum === 1) return 'slot';
  if (typeNum === 3) return 'fishing';
  if (typeNum === 2) return 'table';
  if (typeNum === 6) return 'bingo';
  if (typeNum === 7) return 'casino';
  return 'slot';
};

const colorByCategory = {
  slot: ['#1a0000', '#0a0000'],
  fishing: ['#001018', '#000810'],
  table: ['#0a0010', '#050008'],
  bingo: ['#000a1a', '#00060e'],
  casino: ['#0a0a00', '#060600'],
};

let m;
const gameById = new Map();

while ((m = itemRe.exec(html)) !== null) {
  const id = Number(m[1]);
  const liBlock = m[0];
  const typeMatch = liBlock.match(/type="([^"]*)"/);
  const typeRaw = typeMatch ? typeMatch[1].trim() : '';
  const typeNum = typeRaw ? parseInt(typeRaw, 10) : null;

  const img = m[2];
  const name = decode(m[3].trim());
  const category = typeToCategory(typeNum);

  const confidence = typeNum === null ? 0 : 1;
  const next = {
    id,
    name,
    category,
    img,
    rtp: 'N/A',
    volatility: 'N/A',
    maxWin: 'N/A',
    desc: '',
    color: colorByCategory[category] ?? colorByCategory.slot,
    _confidence: confidence,
    _typeNum: typeNum,
  };

  const prev = gameById.get(id);
  if (!prev) {
    gameById.set(id, next);
    continue;
  }

  // Prefer occurrence with valid (non-empty) type attribute.
  if (next._confidence > prev._confidence) {
    gameById.set(id, next);
  }
}

const games = Array.from(gameById.values()).map(({ _confidence, _typeNum, ...rest }) => rest);

fs.writeFileSync('_tmp/jiligames_games_generated.json', JSON.stringify(games, null, 2), 'utf8');
fs.writeFileSync('_tmp/jiligames_games_generated_compact.json', JSON.stringify(games), 'utf8');
console.log(`Generated ${games.length} games`);

