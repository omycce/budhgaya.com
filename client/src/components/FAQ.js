import React from 'react';
import styles from './FAQ.module.css';

function FAQ() {
  return (
    <div className={styles.faqSection} id="faq">
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <ul className={styles.faqList}>
        <li className={styles.faqItem}>
          <div className={styles.question}>Is Bodh Gaya safe for tourists?</div>
          <div className={styles.answer}>
            Yes, Bodh Gaya is generally safe, but take standard precautions with your belongings.
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