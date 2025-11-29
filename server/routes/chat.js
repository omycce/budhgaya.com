const { Router } = require('express');

const router = Router();

try {
  const OpenAI = require('openai');
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  router.post('/chat', async (req, res) => {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string') return res.status(400).json({ error: 'message required' });
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a friendly travel assistant for Bodh Gaya.' },
          { role: 'user', content: message },
        ],
        max_tokens: 250,
        temperature: 0.7
      });
      const reply = response?.choices?.[0]?.message?.content?.trim() || 'Sorry, no response.';
      res.json({ reply });
    } catch (err) {
      res.status(500).json({ error: 'OpenAI request failed' });
    }
  });
} catch (err) {
  // If openai package not installed, we still want server to run.
  router.post('/chat', (req, res) => res.status(503).json({ error: 'chat disabled' }));
}

module.exports = router;


