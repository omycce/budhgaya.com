import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './FAQ.module.css';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

function FAQ() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/faq';
  const pageUrl = 'https://budhgaya.com/faq';

  const structuredData = {
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
        "name": "Do I need a permit to enter the Mahabodhi Temple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No special permit is usually required for tourists to visit the public areas of the Mahabodhi complex, but rules for photography and dress codes should be followed. For large groups or special ceremonies consult the temple authorities."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bodh Gaya wheelchair accessible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parts of the Mahabodhi complex have step-free access, but some older pathways and temple grounds can be uneven. Contact hotels or the management committee for up-to-date accessibility advice."
        }
      },
      {
        "@type": "Question",
        "name": "What local etiquette should visitors follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dress modestly, remove shoes where requested, ask before photographing people in prayer, and be quiet around meditation areas."
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
  };

  const content = (
    <>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about visiting Bodh Gaya"
        id="faq"
      />
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
    </>
  );

  return (
    <div className={styles.faqSection} id="faq">
      {isStandalonePage && (
        <Helmet>
          <title>Frequently Asked Questions | Bodh Gaya Tourism</title>
          <meta
            name="description"
            content="Get answers to common questions about visiting Bodh Gaya. Learn about safety, best times to visit, and food options."
          />
          <link rel="canonical" href={pageUrl} />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        <div style={{padding: '4rem 2rem', maxWidth: 1200, margin: '0 auto'}}>
          {content}
        </div>
      )}
    </div>
  );
}

export default FAQ;