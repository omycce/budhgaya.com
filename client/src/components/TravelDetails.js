import React from 'react';
import { Helmet } from "react-helmet";
import styles from './TravelDetails.module.css';

function TravelDetails() {
  return (
    <>
      <Helmet>
        <title>Travel Details - Your Website</title>
        <meta name="description" content="Detailed information about travel destinations." />
      </Helmet>
      <div className={styles.travelDetails} id="travel-details">
        <h2 className={styles.sectionTitle}>Plan Your Budh Gaya Trip</h2>
        <ul className={styles.travelList}>
          <li className={styles.travelItem}>
            <div className={styles.itemTitle}>Best Time to Visit</div>
            October to March for cool, pleasant weather and lively festivals.
          </li>
          <li className={styles.travelItem}>
            <div className={styles.itemTitle}>Getting There</div>
            The nearest airport is Gaya (12km); Gaya Junction is the main railhead.
          </li>
          <li className={styles.travelItem}>
            <div className={styles.itemTitle}>Where to Stay</div>
            Choose from guesthouses, monastery stays, budget hotels, and mid-range options.
          </li>
          <li className={styles.travelItem}>
            <div className={styles.itemTitle}>Local Transport</div>
            Auto-rickshaws and cycle-rickshaws are common for short distances.
          </li>
        </ul>
      </div>
    </>
  );
}

export default TravelDetails;