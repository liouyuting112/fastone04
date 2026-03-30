const fs = require('fs');

const html = fs.readFileSync('_tmp/jiligames_games.html', 'utf8');

const re =
  /<li class="gamesBox--title"[^>]*id="game(\d+)"[^>]*>[\s\S]*?<img class='introImg' src="([^"]+)"[\s\S]*?<div class="subtitle">([\s\S]*?)<\/div>/g;

const decode = (s) =>
  s
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

let m;
let games = [];
while ((m = re.exec(html)) !== null) {
  const id = Number(m[1]);
  if (!games.find((g) => g.id === id)) {
    const block = m[0];
    const typeMatch = block.match(/type="([^"]*)"/);
    const typeRaw = typeMatch ? typeMatch[1].trim() : '';
    const img = m[2];
    const name = decode(m[3].trim());
    games.push({ id, typeRaw, name, img });
    if (games.length >= 10) break;
  }
}

console.log(games.slice(0, 5));

