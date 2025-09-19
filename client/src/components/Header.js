/* eslint-disable unicode-bom */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 36);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.mainHeader} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/">
                    <span className={styles.logoText}>
                        Budh<span className={styles.logoHighlight}>Gaya</span>
                    </span>
                    <span className={styles.logoDomain}>.com</span>
                </a>

                <button
                    className={styles.mobileMenu}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="#0b1220" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className={`${styles.navLinks} ${open ? styles.open : ''}`}>
                    <a href="#top-attractions">Attractions</a>
                    <a href="#explore">Explore</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About</a>
                    <a href="#cuisine">Cuisine</a>
                    <a href="#events">Events</a>
                      <a href="#faq">FAQ</a>
                      <a href="#community">Community</a>
                    <a href="#travel-details">Travel</a>
            
                </div>
            </nav>
        </header>
    );
}

export default Header;