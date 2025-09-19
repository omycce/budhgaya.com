import React, { useEffect, useState } from 'react';
import styles from './RotatingWords.module.css';

// Simple rotating words component: cycles through words with fade/slide animation.
export default function RotatingWords({ words = [], interval = 2500 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const t = setInterval(() => setIndex(i => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words, interval]);

  if (!words || words.length === 0) return null;

  return (
    <span className={styles.rotator} aria-live="polite">
      {words.map((w, i) => (
        <span
          key={i}
          className={`${styles.word} ${i === index ? styles.active : ''}`}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
