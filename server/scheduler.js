const path = require('path');
const { execFile } = require('child_process');
const cron = require('node-cron');

function runScrape() {
  const scriptPath = path.join(__dirname, 'scripts', 'scrape-encyclopedia.js');
  const child = execFile(process.execPath, [scriptPath], { cwd: __dirname });
  child.stdout.on('data', () => {});
  child.stderr.on('data', () => {});
}

function schedule() {
  const enabled = process.env.SCRAPE_CRON !== 'off';
  if (!enabled) return;
  const expression = process.env.SCRAPE_CRON || '0 3 * * *';
  cron.schedule(expression, runScrape, { timezone: 'UTC' });
}

schedule();


