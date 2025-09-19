import React from 'react';
import { Helmet } from 'react-helmet'; // Add this import
import styles from './FAQ.module.css';

function FAQ() {
  return (
    <div className={styles.faqSection} id="faq">
      <Helmet>
        <title>Frequently Asked Questions | Bodh Gaya Tourism</title>
        <meta
          name="description"
          content="Get answers to common questions about visiting Bodh Gaya. Learn about safety, best times to visit, and food options."
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Bodh Gaya safe for tourists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Bodh Gaya is generally safe, but take standard precautions with your belongings."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best time to visit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "October to March for pleasant weather and festivals."
                }
              },
              {
                "@type": "Question",
                "name": "Are there vegetarian food options?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, there are many vegetarian and vegan options available."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <ul className={styles.faqList}>
        <li className={styles.faqItem}>
          <div className={styles.question}>Is Bodh Gaya safe for tourists?</div>
          <div className={styles.answer}>
            Yes, Bodh Gaya is generally safe, but take standard precautions with your belongings.
          </div>
        </li>
          <li className={styles.faqItem}>
            <div className={styles.question}>Do I need a permit to enter the Mahabodhi Temple?</div>
            <div className={styles.answer}>
              No special permit is usually required for tourists to visit the public areas of the Mahabodhi complex, but rules for photography and dress codes should be followed. For large groups or special ceremonies consult the temple authorities.
            </div>
          </li>
          <li className={styles.faqItem}>
            <div className={styles.question}>Is Bodh Gaya wheelchair accessible?</div>
            <div className={styles.answer}>
              Parts of the Mahabodhi complex have step-free access, but some older pathways and temple grounds can be uneven. Contact hotels or the management committee for up-to-date accessibility advice.
            </div>
          </li>
          <li className={styles.faqItem}>
            <div className={styles.question}>What local etiquette should visitors follow?</div>
            <div className={styles.answer}>
              Dress modestly, remove shoes where requested, ask before photographing people in prayer, and be quiet around meditation areas.
            </div>
          </li>
        <li className={styles.faqItem}>
          <div className={styles.question}>What is the best time to visit?</div>
          <div className={styles.answer}>
            October to March for pleasant weather and festivals.
          </div>
        </li>
        <li className={styles.faqItem}>
          <div className={styles.question}>Are there vegetarian food options?</div>
          <div className={styles.answer}>
            Yes, there are many vegetarian and vegan options available.
          </div>
        </li>
      </ul>
    </div>
  );
}

function Cuisine() {
  return (
    <section className="cuisine-section" id="cuisine">
      <Helmet>
        <title>Local Cuisine of Bodh Gaya | Must-Try Food in Bodh Gaya</title>
        <meta
          name="description"
          content="Discover the best local cuisine in Bodh Gaya. Try Litti Chokha, Momos, Samosas, and more when you visit Bodh Gaya."
        />
        <meta
          name="keywords"
          content="Bodh Gaya, local cuisine, food, Litti Chokha, Momos, Samosas, Thukpa, sweets"
        />
      </Helmet>
      <h2>Local Cuisine to Try in Bodh Gaya</h2>
      <ul>
        <li><b>Litti Chokha:</b> Roasted wheat balls stuffed with spiced gram flour, served with mashed vegetables.</li>
        <li><b>Momos:</b> Tibetan-style dumplings, popular in local markets.</li>
        <li><b>Samosas & Sweets:</b> Try fresh samosas and local sweets like peda and jalebi.</li>
        <li><b>Thukpa:</b> A hearty noodle soup, perfect for cool evenings.</li>
      </ul>
    </section>
  );
}

export { Cuisine };
export default FAQ;