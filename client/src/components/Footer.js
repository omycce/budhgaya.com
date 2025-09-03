import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <h3 className={styles.brand}>Budhgaya</h3>
          <p className={styles.brandTag}>Bodh Gaya travel guides, events, and culture.</p>
          <div className={styles.socialSmall}>
            <a href="https://www.facebook.com/btmcbodhgaya" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="http://twitter.com/mahabodhitemple" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="http://instagram.com/mahabodhitempleoffice" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h4>Explore</h4>
          <ul>
            <li><a href="#top-attractions">Top Attractions</a></li>
            <li><a href="#explore">Plan Your Trip</a></li>
            <li><a href="#cuisine">Cuisine</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4>Resources</h4>
          <ul>
            <li><a href="#travel-details">Travel Information</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="/encyclopedia.html" target="_blank" rel="noopener">Encyclopedia</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
          </ul>
        </div>

        <div className={styles.newsletterCol}>
          <h4>Subscribe</h4>
          <p>Get travel tips and events delivered weekly.</p>
          <form className={styles.subscribeForm} onSubmit={e => e.preventDefault()}>
            <input className={styles.subscribeInput} type="email" placeholder="Enter your email" aria-label="Subscribe email" />
            <button className={styles.subscribeButton} type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>&copy; {new Date().getFullYear()} Budhgaya.com</div>
        <div className={styles.bottomRight}>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;