const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

// Create transporter for Gmail
// Default Gmail address: omycce@gmail.com
// You'll need to set GMAIL_APP_PASSWORD environment variable
const gmailUser = process.env.GMAIL_USER || 'omycce@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if Gmail app password is configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail app password not configured');
      return res.status(500).json({ error: 'Email service not configured. Please set GMAIL_APP_PASSWORD environment variable.' });
    }

    // Send email to Gmail
    const mailOptions = {
      from: gmailUser,
      to: gmailUser, // Send to your Gmail address
      subject: 'New Email Subscription - Bodh Gaya Website',
      text: `A new email subscription was received:\n\nEmail: ${email.trim()}\n\nTimestamp: ${new Date().toISOString()}`,
      html: `
        <h2>New Email Subscription</h2>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email subscription received successfully' 
    });
  } catch (err) {
    console.error('Error sending email:', err);
    const errorMessage = err.message || 'Failed to process subscription';
    res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
});

module.exports = router;

