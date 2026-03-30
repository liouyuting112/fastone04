const fs = require('fs');
const path = require('path');

const WORKDIR = process.cwd();
const appJsPath = path.join(WORKDIR, 'app.js');
const gamesJsonPath = path.join(WORKDIR, '_tmp', 'jiligames_games_generated_compact.json');

const app = fs.readFileSync(appJsPath, 'utf8');
const gamesJson = fs.readFileSync(gamesJsonPath, 'utf8').trim(); // JSON array string

const marker = '/* ── Game Data (55+ games) ──────────────────────── */';
const markerIdx = app.indexOf(marker);
if (markerIdx === -1) throw new Error('Cannot find GAMES marker in app.js');

let out = app;

// Replace the whole GAMES array
const gamesStart = out.indexOf('const GAMES = [');
if (gamesStart === -1) throw new Error('Cannot find GAMES array start');

const gamesEnd = out.indexOf('];', gamesStart);
if (gamesEnd === -1) throw new Error('Cannot find GAMES array end');

const gamesEndIdx = gamesEnd + 2; // include "];"
const newGames = `const GAMES = ${gamesJson};`;

out = out.slice(0, gamesStart) + newGames + out.slice(gamesEndIdx);

fs.writeFileSync(appJsPath, out, 'utf8');
console.log('app.js updated from jiligames data');

