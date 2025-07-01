const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for emails (replace with a database in production)
const emailList = [];

// API endpoint to handle subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log('Incoming request:', req.body); // Log incoming request
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  emailList.push(email);
  console.log('Subscribed emails:', emailList);
  res.status(200).json({ message: 'Subscription successful' });
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   });