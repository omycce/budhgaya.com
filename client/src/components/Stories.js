import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Stories.module.css';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

function Stories() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/stories';
  const pageUrl = 'https://budhgaya.com/stories';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''
  const [errorMessage, setErrorMessage] = useState('');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Bodh Gaya Stories & Travel Tips',
    description: 'Local insights, traveler tips and seasonal advice for visiting Bodh Gaya',
    url: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Budhgaya',
      url: 'https://budhgaya.com'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setErrorMessage('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        const errorMsg = data.error || 'Unknown error occurred';
        console.error('Subscription error:', errorMsg);
        setStatus('error');
        setErrorMessage(errorMsg);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setErrorMessage('Unable to connect to server. Please check if the server is running.');
    }
  };

  const content = (
    <>
      <SectionHeader
        title="Stories & Travel Tips"
        subtitle="Local insights, traveler tips and seasonal advice to plan better"
        id="stories"
      />
        
        {/* Email Subscription Form */}
        <div className={styles.emailForm}>
          <h3>Stay Updated</h3>
          <p>Enter your email to receive travel tips and updates about Bodh Gaya.</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Subscribe
            </button>
          </form>
          {status === 'success' && (
            <p className={styles.successMessage}>Thank you! Your email has been received.</p>
          )}
          {status === 'error' && (
            <p className={styles.errorMessage}>
              {errorMessage || 'Something went wrong. Please try again.'}
            </p>
          )}
        </div>
        <article className={styles.card} style={{marginBottom: 24}}>
          <h3>Buddha Purnima: The best things to do in Bodh Gaya</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 12}}>
            <img src="/assets/images/mahabodhi-temple.jpg" alt="Mahabodhi Temple Complex" loading="lazy" style={{width: '100%', borderRadius: 12}} />
            <p>
              Spirituality, learning, and a lively food scene converge during Buddha Purnima when Bodh Gaya welcomes
              thousands of pilgrims and visitors. Expect ceremonial processions, chanting, and seasonal cafes serving
              Tibetan, Thai, Burmese and local Bihari dishes.
            </p>
            <h4>What to see</h4>
            <ul>
              <li><strong>Mahabodhi Temple Complex</strong>: Gupta-era brick temple, circumambulation paths, meditation areas, and the sacred Bodhi Tree (5am–9pm; lockers available; cameras with ticket).</li>
              <li><strong>Great Buddha Statue</strong>: 80-foot sandstone statue set in a serene garden (7am–5:30pm).</li>
              <li><strong>Sujata Stupa</strong>: Brick stupa across the river in Bakraur (6am–5pm).</li>
            </ul>
            <img src="/assets/images/buddha-statue.jpg" alt="Great Buddha Statue" loading="lazy" style={{width: '100%', borderRadius: 12}} />
            <h4>Monastery trail</h4>
            <p>
              Explore international monasteries around the temple: Thai Buddhagaya (1956), minimalist Indosan Nipponji Japanese
              temple, ornate Tibetan shrines like Gaden Phelgayling and Karma Tharjay, Royal Bhutan Monastery, Burmese Vihara (1936),
              Chinese and Vietnamese temples, and the contemporary Metta Buddharam.
            </p>
            <h4>Bodh Gaya essentials</h4>
            <ul>
              <li><strong>Best time</strong>: October–March.</li>
              <li><strong>Getting there</strong>: Fly to Gaya International Airport; road from Patna (~3h); train to Gaya Jn (~17 km).</li>
              <li><strong>Getting around</strong>: EVs near Mahabodhi (~₹300/half-day). Car needed for Sujata Stupa.</li>
            </ul>
            <h4>Festivals</h4>
            <p>
              On Buddha Purnima, dawn processions start at the Great Buddha Statue and culminate under the Bodhi Tree. From October–February,
              visiting monk groups lead chants; Tipitaka chanting typically runs in early December. Look out for Buddha Mahotsav and Dalai Lama discourses.
            </p>
            <h4>Where to eat</h4>
            <p>
              Winter brings pop-up cafes and classics: Sujata Restaurant, Nirvana Café, Tibet Om Café, Loyag Rooftop, Fujia Green, Mohammad Restaurant,
              Bodhi Brews & Restro, The French Oven, Be Happy Café; street-side <em>litti chokha</em> and kulhad chai abound.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12}}>
              <img src="/assets/images/bodhi-tree.jpg" alt="Bodhi Tree" loading="lazy" style={{width: '100%', borderRadius: 12}} />
              <img src="/assets/images/bodh-gaya.jpg" alt="Bodh Gaya panorama" loading="lazy" style={{width: '100%', borderRadius: 12}} />
            </div>
          </div>
        </article>
        <div className={styles.grid}>
          {[
            { title: 'Off-season Bodh Gaya', desc: 'Why visiting between monsoon and winter can be peaceful and rewarding.', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
            { title: 'Festival Calendar', desc: 'Anchor your trip around chanting ceremonies and Buddha Purnima processions.', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
            { title: 'What to Pack', desc: 'Modest clothing for temples, a scarf, and comfortable sandals go a long way.', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }
          ].map((item, index) => (
            <article key={index} className={styles.card} style={{
              border: '2px solid transparent',
              background: 'linear-gradient(white, white), ' + item.gradient,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}>
              <h3 style={{
                background: item.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
    </>
  );

  return (
    <section id="stories" className={styles.stories}>
      {isStandalonePage && (
        <Helmet>
          <title>Stories & Travel Tips for Bodh Gaya | Travel Guide & Insights</title>
          <meta name="description" content="Get local insights, traveler tips, and seasonal advice for visiting Bodh Gaya. Learn about Buddha Purnima, festivals, and what to see and do." />
          <meta name="keywords" content="Bodh Gaya travel tips, Bodh Gaya stories, Buddha Purnima guide, Bodh Gaya travel advice, pilgrimage tips" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Stories & Travel Tips for Bodh Gaya | Travel Guide" />
          <meta property="og:description" content="Get local insights, traveler tips, and seasonal advice for visiting Bodh Gaya." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          <div className={styles.wrapper}>
            {content}
          </div>
        </PageContainer>
      ) : (
        <div className={styles.wrapper}>
          {content}
        </div>
      )}
    </section>
  );
}

export default Stories;