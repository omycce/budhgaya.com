const { execSync } = require('child_process');
const { existsSync, rmSync, cpSync, mkdirSync } = require('fs');
const { join } = require('path');

function run(command, options = {}) {
  execSync(command, { stdio: 'inherit', ...options });
}

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function main() {
  const serverDir = __dirname ? join(__dirname, '..') : 'server';
  const clientDir = join(serverDir, '..', 'client');
  const clientBuild = join(clientDir, 'build');
  const destBuild = join(serverDir, 'build');

  // Build client
  run('npm run build', { cwd: clientDir });

  // Replace server/build with client/build
  if (existsSync(destBuild)) {
    rmSync(destBuild, { recursive: true, force: true });
  }
  ensureDir(serverDir);
  cpSync(clientBuild, destBuild, { recursive: true });
  // Completed
}

main();


