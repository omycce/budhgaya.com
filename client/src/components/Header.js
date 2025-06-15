import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.mainHeader}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/">
                    <span className={styles.logoText}>
                        Budh<span className={styles.logoHighlight}>Gaya</span>
                    </span>
                    <span className={styles.logoDomain}>.com</span>
                    <span className={styles.logoTagline}>Land of Enlightenment</span>
                </a>
                <div className={styles.navLinks}>
                    <a href="#top-attractions">Attractions</a>
                    <a href="#explore">Explore</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About</a>
                    <a href="#cuisine">Cuisine</a>
                    <a href="#events">Events</a>
                    <a href="#faq">FAQ</a>
                    <a href="#travel-details">Travel Info</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;