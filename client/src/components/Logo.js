import React from 'react';

const Logo = ({ size = 56, title = 'Budhgaya' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
  >
    <defs>
      <linearGradient id="lg1" x1="0" x2="1">
        <stop offset="0" stopColor="#FFB347" />
        <stop offset="1" stopColor="#FF6F61" />
      </linearGradient>
      <linearGradient id="lg2" x1="0" x2="1">
        <stop offset="0" stopColor="#0072CE" />
        <stop offset="1" stopColor="#005fa8" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0b1220" floodOpacity="0.12"/>
      </filter>
    </defs>

    <g filter="url(#shadow)">
      <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#lg2)" />
      <path d="M32 14c5 0 9 4 9 9 0 3-2 6-4 8-1 1-3 3-5 5-2-2-4-4-5-5-2-2-4-5-4-8 0-5 4-9 9-9z" fill="url(#lg1)" opacity="0.98" />
      <circle cx="32" cy="30" r="2.4" fill="#fff" opacity="0.95" />
    </g>
  </svg>
);

export default Logo;
