import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Cuisine.module.css';
import SectionHeader from './SectionHeader';

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
        <SectionHeader
          icon="🍲"
          title="Cuisine"
          subtitle="Local food to try"
          id="cuisine"
        />
      <ul className={styles.cuisineList}>
        <li className={styles.cuisineItem}>
          <b>Litti Chokha</b> — a hearty local staple: wheat balls with spiced mashed vegetables
        </li>
        <li className={styles.cuisineItem}>
          <b>Thukpa & Momos</b> — Himalayan-style soups and steamed dumplings served around the station
        </li>
        <li className={styles.cuisineItem}>
          <b>Sweets & Street Food</b> — from khaja to jalebi, sugar and spice on every corner
        </li>
      </ul>
      <p style={{fontSize: '0.9rem', color: '#666', marginTop: '0.6rem'}}>
        Taste reference: <a href="https://www.tasteatlas.com/litti-chokha" target="_blank" rel="noopener noreferrer">Litti Chokha (TasteAtlas)</a>.
      </p>
    </section>
  );
}

export default Cuisine;