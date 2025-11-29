const { Router } = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();
const CONTACT_FILE = path.join(__dirname, '..', 'data', 'contacts.json');

function ensureContactFile() {
  const dir = path.dirname(CONTACT_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(CONTACT_FILE)) fs.writeFileSync(CONTACT_FILE, '[]', 'utf8');
}

router.post('/contact', (req, res) => {
  try {
    ensureContactFile();
    const raw = fs.readFileSync(CONTACT_FILE, 'utf8');
    const items = JSON.parse(raw);
    const entry = {
      id: Date.now().toString(36),
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      createdAt: new Date().toISOString(),
    };
    items.push(entry);
    fs.writeFileSync(CONTACT_FILE, JSON.stringify(items, null, 2), 'utf8');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'failed to write contact' });
  }
});

module.exports = router;


