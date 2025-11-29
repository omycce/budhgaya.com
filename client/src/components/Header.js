/* eslint-disable unicode-bom */
import React, { useState, useEffect } from 'react';
// Link removed (unused) to satisfy eslint
import styles from './Header.module.css';
import Logo from './Logo';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // If page doesn't include a hero (dedicated pages opened in new tab),
        // show the header in 'scrolled' (solid) style so nav items are readable.
        const hasHero = !!document.querySelector('.hero');
        if (!hasHero) setScrolled(true);

        const onScroll = () => setScrolled(window.scrollY > 36);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.mainHeader} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/">
                    <div className={styles.logoWrap}>
                        <Logo size={52} />
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                          <span className={styles.logoText}>Budh<span className={styles.logoHighlight}>Gaya</span></span>
                          <span className={styles.logoDomain}>.com</span>
                        </div>
                    </div>
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
                  {['/attractions','/gallery','/about','/events','/cuisine','/explore','/faq','/travel-details'].map((path) => {
                    const labelMap = {
                      '/attractions': 'Attractions',
                      '/gallery': 'Gallery',
                      '/about': 'About',
                      '/events': 'Events',
                      '/cuisine': 'Cuisine',
                      '/explore': 'Explore',
                      '/faq': 'FAQ',
                      '/travel-details': 'Travel'
                    };
                    const isActive = window.location.pathname === path;
                    return (
                      <a
                        key={path}
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.tab} ${isActive ? styles.active : ''}`}
                      >{labelMap[path]}</a>
                    );
                  })}
                </div>
            </nav>
        </header>
    );
}

export default Header;