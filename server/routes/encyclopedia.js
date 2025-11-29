const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/encyclopedia', (_req, res) => {
  const dataPath = path.join(__dirname, '..', 'data', 'encyclopedia.json');
  if (!fs.existsSync(dataPath)) {
    return res.status(503).json({ error: 'Content not generated yet' });
  }
  try {
    const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.json(json);
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

router.get('/encyclopedia/highlights', (_req, res) => {
  const dataPath = path.join(__dirname, '..', 'data', 'encyclopedia.json');
  if (!fs.existsSync(dataPath)) {
    return res.status(503).json({ error: 'Content not generated yet' });
  }
  try {
    const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.json({ updatedAt: json.updatedAt, highlights: json.highlights });
  } catch (e) {
    res.status(500).json({ error: 'Failed to read highlights' });
  }
});

module.exports = router;


