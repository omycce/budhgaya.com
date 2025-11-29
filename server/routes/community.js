const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();
const COMMUNITY_FILE = path.join(__dirname, '..', 'data', 'community.json');

function ensureDataDir() {
  const dir = path.dirname(COMMUNITY_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(COMMUNITY_FILE)) fs.writeFileSync(COMMUNITY_FILE, '[]', 'utf8');
}

router.get('/community', (req, res) => {
  try {
    ensureDataDir();
    const raw = fs.readFileSync(COMMUNITY_FILE, 'utf8');
    const items = JSON.parse(raw).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'failed to read data' });
  }
});

router.post('/community', (req, res) => {
  try {
    ensureDataDir();
    const raw = fs.readFileSync(COMMUNITY_FILE, 'utf8');
    const items = JSON.parse(raw);
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const entry = {
      id,
      author: req.body.author || 'Anonymous',
      text: req.body.text || '',
      createdAt: new Date().toISOString(),
    };
    items.push(entry);
    fs.writeFileSync(COMMUNITY_FILE, JSON.stringify(items, null, 2), 'utf8');
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: 'failed to write data' });
  }
});

module.exports = router;


