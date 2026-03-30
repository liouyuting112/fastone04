const fs = require('fs');

const html = fs.readFileSync('_tmp/jiligames_games.html', 'utf8');

const CATEGORY_BLOCKS = { 3: 'slot', 4: 'fishing', 5: 'table', 6: 'bingo', 8: 'casino' };

// We only need id occurrences; capture intro name from subtitle so we can sample.
const itemRe =
  /<li class="gamesBox--title"[^>]*id="game(\d+)"[\s\S]*?<img class='img' src="[^"]+"[\s\S]*?<div class="subtitle">([\s\S]*?)<\/div>/g;

const map = new Map(); // id -> Set(categories)

for (const [codeStr, category] of Object.entries(CATEGORY_BLOCKS)) {
  const code = Number(codeStr);
  const blockRe = new RegExp(`gamesExhibit__list gameTypeBlock" type=${code}[^>]*>[\\s\\S]*?<\\/ul>`, 'g');
  let bm;
  while ((bm = blockRe.exec(html)) !== null) {
    const blockHtml = bm[0];
    const localRe = new RegExp(itemRe.source, 'g');
    let m;
    while ((m = localRe.exec(blockHtml)) !== null) {
      const id = Number(m[1]);
      const name = (m[2] || '').trim();
      if (!map.has(id)) map.set(id, { cats: new Set(), name });
      map.get(id).cats.add(category);
      if (!map.get(id).name) map.get(id).name = name;
    }
  }
}

let multi = 0;
const sample = [];
for (const [id, v] of map.entries()) {
  if (v.cats.size > 1) {
    multi++;
    if (sample.length < 10) sample.push({ id, name: v.name, cats: [...v.cats] });
  }
}

console.log('multi-category ids:', multi);
console.log(sample);

