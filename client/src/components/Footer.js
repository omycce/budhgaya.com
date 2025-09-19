import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

function Footer() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
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
            <li><a href="/attractions" target="_blank" rel="noopener noreferrer">Top Attractions</a></li>
            <li><a href="/explore" target="_blank" rel="noopener noreferrer">Plan Your Trip</a></li>
            <li><a href="/cuisine" target="_blank" rel="noopener noreferrer">Cuisine</a></li>
            <li><a href="/gallery" target="_blank" rel="noopener noreferrer">Gallery</a></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4>Resources</h4>
          <ul>
            <li><a href="/travel-details" target="_blank" rel="noopener noreferrer">Travel Information</a></li>
            <li><a href="/events" target="_blank" rel="noopener noreferrer">Events</a></li>
            <li><a href="/faq" target="_blank" rel="noopener noreferrer">FAQ</a></li>
            <li><a href="/encyclopedia.html" target="_blank" rel="noopener">Encyclopedia</a></li>
            <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
          </ul>
        </div>

        <div className={styles.newsletterCol}>
          <h4>Subscribe</h4>
          <p>Join our newsletter for travel tips, festival updates, and local guides.</p>
          <form className={styles.subscribeForm} onSubmit={e => e.preventDefault()}>
            <input className={styles.subscribeInput} type="email" placeholder="Enter your email" aria-label="Subscribe email" />
            <button className={styles.subscribeButton} type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>&copy; {new Date().getFullYear()} Budhgaya.com</div>
        <div className={styles.bottomRight}>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
          <select
            className={styles.langSelect}
            value={lang}
            aria-label="Select language"
            onChange={e => {
              setLang(e.target.value);
              i18n.changeLanguage(e.target.value);
              // Add lang param to URL and reload
              const url = new URL(window.location.href);
              url.searchParams.set('lang', e.target.value);
              window.location.href = url.toString();
            }}
            style={{marginLeft: 18, borderRadius: 6, padding: '0.3em 0.7em', fontWeight: 600, fontSize: '1em', border: '1px solid #ddd', background: '#fff', color: '#222'}}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;