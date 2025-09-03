import React, { useState } from 'react';
import styles from './Encyclopedia.module.css';

const tabs = [
  { id: 'bodhgaya', label: 'Bodh Gaya' },
  { id: 'buddhism', label: 'Buddhism' },
  { id: 'images', label: 'Images' },
  { id: 'quizzes', label: 'Quizzes' },
  { id: 'references', label: 'References' }
];

export default function Encyclopedia() {
  const [active, setActive] = useState('bodhgaya');

  return (
    <section id="encyclopedia" className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h2>Encyclopedia</h2>
        <p className={styles.lead}>Curated reference content about Bodh Gaya and Buddhism.</p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Encyclopedia tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`${styles.tab} ${active === t.id ? styles.active : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.panel} role="tabpanel">
        {active === 'bodhgaya' && (
          <article>
            <h3>Bodh Gaya — Introduction</h3>
            <p>
              Bodh Gaya is a town in southwestern Bihar, India, internationally revered as the place where
              Siddhartha Gautama is said to have attained enlightenment under the Bodhi Tree. The Mahabodhi Temple complex
              occupies the spot and is a designated UNESCO World Heritage site.
            </p>
            <h4>Key points</h4>
            <ul>
              <li>Mahabodhi Temple: main monument, central tower ~54 m tall.</li>
              <li>Bodhi Tree: historic sacred pipal tree on the site of the Buddha's enlightenment.</li>
              <li>Major pilgrimage site for Buddhist traditions worldwide.</li>
            </ul>
            <h4>Quick guide</h4>
            <p>
              Plan visits early morning for quieter atmosphere. Respect temple dress codes and local customs.
              Nearby Bodh Gaya offers small museums, guided tours, and multiple international monasteries.
            </p>
          </article>
        )}

        {active === 'buddhism' && (
          <article>
            <h3>About Buddhism (summary)</h3>
            <p>
              Buddhism developed from the teachings of the Buddha (Sanskrit: "Awakened One") in northern India around
              the mid-1st millennium BCE. It spread across Asia and influenced religious, social, and cultural life in many
              countries. Core concepts include the Four Noble Truths, the Eightfold Path, karma, and the goal of liberation (nirvana).
            </p>
            <h4>Major traditions</h4>
            <ul>
              <li>Theravada — found in Sri Lanka and Southeast Asia.</li>
              <li>Mahayana — widespread in East Asia with diverse schools like Zen and Pure Land.</li>
              <li>Vajrayana — tantric traditions prominent in Tibet and Himalayan regions.</li>
            </ul>
          </article>
        )}

        {active === 'images' && (
          <div className={styles.imagesGrid}>
            <img src="/assets/images/mahabodhi-temple.jpg" alt="Mahabodhi Temple" />
            <img src="/assets/images/bodhi-tree.jpg" alt="Bodhi Tree" />
            <img src="/assets/images/bodh-gaya.jpg" alt="Bodh Gaya panorama" />
          </div>
        )}

        {active === 'quizzes' && (
          <div>
            <h3>Quizzes & Activities</h3>
            <p>Try a quick geography quiz or explore themed quizzes about Buddhist art and architecture.</p>
            <ul>
              <li>Guess the City by Its River</li>
              <li>Explore India — identify monuments and states</li>
            </ul>
          </div>
        )}

        {active === 'references' && (
          <div>
            <h3>References & Further Reading</h3>
            <p>Selected sources and suggested readings for deeper research on Bodh Gaya and Buddhism.</p>
            <ol>
              <li>World Heritage listing — Mahabodhi Temple Complex</li>
              <li>Introductory works on Buddhist history and practice</li>
              <li>Local archaeological reports and museum catalogues</li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
