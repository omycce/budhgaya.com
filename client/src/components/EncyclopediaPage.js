import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './EncyclopediaPage.module.css';

export default function EncyclopediaPage() {
  const { i18n } = useTranslation();

  const changeLang = (lng) => i18n.changeLanguage(lng);

  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <h1>Encyclopedia — Bodh Gaya & Buddhism</h1>
        <div className={styles.lang}>
          <label htmlFor="lang-select">Language:</label>
          <select id="lang-select" onChange={(e) => changeLang(e.target.value)} defaultValue={i18n.language || 'en'}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>

      <article className={styles.container}>
        <section>
          <h2>Introduction — Bodh Gaya</h2>
          <p>
            Bodh Gaya (also spelled Buddh Gaya) is a town in southwestern Bihar, India, situated near the Phalgu River.
            It is the internationally revered site where Siddhartha Gautama attained enlightenment under the Bodhi Tree. The
            Mahabodhi Temple complex marks the location and is a UNESCO World Heritage Site.
          </p>
        </section>

        <section>
          <h3>Mahabodhi Temple and the site</h3>
          <p>
            The Mahabodhi Temple stands at the center of a sacred landscape that includes the Bodhi Tree, votive stupas, and
            a museum protecting archaeological finds. The present temple core dates to medieval periods with later restorations.
          </p>
        </section>

        <section>
          <h3>Buddhism — Overview</h3>
          <p>
            Buddhism developed from teachings ascribed to the Buddha in northern India. Core elements include the Four Noble
            Truths, the Eightfold Path, karma, rebirth, and the goal of liberation (nirvana). Major traditions include Theravada,
            Mahayana, and Vajrayana.
          </p>
        </section>

        <section>
          <h3>Historical development</h3>
          <p>
            From royal patronage (notably Ashoka in the 3rd century BCE) and through trade networks, Buddhism spread across
            Asia. The Indian subcontinent's Pala and Gupta eras were important for Buddhist learning and artistic achievement.
          </p>
        </section>

        <section>
          <h3>Practices, festivals & pilgrimage</h3>
          <p>
            Major celebrations include Buddha Purnima (Vesak), Tipitaka chanting ceremonies, and other international pilgrim gatherings.
            Visitors should plan morning visits, respect dress codes and photography rules inside shrine areas.
          </p>
        </section>

        <section>
          <h3>Images & Media</h3>
          <div className={styles.images}>
            <img src="/assets/images/mahabodhi-temple.jpg" alt="Mahabodhi Temple" loading="lazy" />
            <img src="/assets/images/bodhi-tree.jpg" alt="Bodhi Tree" loading="lazy" />
            <img src="/assets/images/bodh-gaya.jpg" alt="Bodh Gaya panorama" loading="lazy" />
          </div>
        </section>

        <section>
          <h3>Quizzes & Activities</h3>
          <ul>
            <li>Guess the City by Its River — geography quiz</li>
            <li>Discover India — identify monuments by state</li>
            <li>Buddhist art quiz — match sculpture to period</li>
          </ul>
        </section>

        <section>
          <h3>References & Further Reading</h3>
          <ol>
            <li>UNESCO World Heritage listing — Mahabodhi Temple Complex</li>
            <li>Introductory surveys on Buddhist history and archaeology of Bodh Gaya</li>
            <li>Local museum catalogues and scholarly articles</li>
          </ol>
        </section>
      </article>
    </div>
  );
}
