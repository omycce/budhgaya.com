import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Cuisine.module.css';

function Cuisine() {
  return (
    <section className={styles.cuisineSection} id="cuisine">
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
      <h2 className={styles.cuisineTitle}>Local Cuisine to Try in Bodh Gaya</h2>
      <ul className={styles.cuisineList}>
        <li className={styles.cuisineItem}>
          <b>Litti Chokha</b>
          <p>Roasted wheat balls stuffed with spiced gram flour, served with mashed vegetables.</p>
        </li>
        <li className={styles.cuisineItem}>
          <b>Momos</b>
          <p>Tibetan-style dumplings, popular in local markets.</p>
        </li>
        <li className={styles.cuisineItem}>
          <b>Samosas & Sweets</b>
          <p>Try fresh samosas and local sweets like peda and jalebi.</p>
        </li>
        <li className={styles.cuisineItem}>
          <b>Thukpa</b>
          <p>A hearty noodle soup, perfect for cool evenings.</p>
        </li>
      </ul>
    </section>
  );
}

export default Cuisine;