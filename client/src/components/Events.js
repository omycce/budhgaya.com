/* eslint-disable unicode-bom */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import styles from './Events.module.css';
import SectionHeader from './SectionHeader';
import PageContainer from './PageContainer';

// Events data (from scraped content)
const events = [
  {
    name: "Buddha Purnima (Vesak)",
    date: "April/May (Full Moon Day)",
    description: "The most important Buddhist festival celebrating the birth, enlightenment, and parinirvana of the Buddha. Thousands of pilgrims gather for processions, chanting, meditation, and cultural performances.",
    duration: "1 day",
    significance: "Triple celebration of Buddha's birth, enlightenment, and death"
  },
  {
    name: "Tipitaka Chanting Ceremony",
    date: "Early December",
    description: "A multi-day ceremony where monks from various countries chant the entire Tipitaka (Three Baskets of Buddhist scriptures). This is one of the most significant religious events, attracting thousands of monks and lay practitioners.",
    duration: "5-7 days",
    significance: "Preservation and transmission of Buddhist scriptures"
  },
  {
    name: "Nyingma Monlam Chenmo",
    date: "January/February",
    description: "A major Tibetan prayer festival organized by the Nyingma tradition. Includes teachings, prayers for world peace, and various ceremonies. The Dalai Lama often attends and gives teachings during this period.",
    duration: "10-15 days",
    significance: "Prayers for world peace and enlightenment of all beings"
  },
  {
    name: "Buddha Mahotsav",
    date: "December",
    description: "A cultural festival celebrating Buddhist heritage with music, dance, art exhibitions, and food festivals. Features performances by artists from various Buddhist countries.",
    duration: "3-5 days",
    significance: "Cultural celebration of Buddhist traditions"
  },
  {
    name: "Magha Puja",
    date: "February (Full Moon)",
    description: "Commemorates the day when 1,250 enlightened monks spontaneously gathered to hear the Buddha preach. Celebrated with candlelight processions and meditation sessions.",
    duration: "1 day",
    significance: "Commemoration of the first Sangha gathering"
  },
  {
    name: "Asalha Puja (Dhamma Day)",
    date: "July (Full Moon)",
    description: "Marks the Buddha's first sermon (Dhammacakkappavattana Sutta) at Sarnath. Celebrated with meditation, chanting, and teachings on the Four Noble Truths.",
    duration: "1 day",
    significance: "First teaching of the Buddha"
  }
];

function Events() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/events';
  const pageUrl = 'https://budhgaya.com/events';
  const nextFestival = events[0];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Buddha Purnima',
    description: "Buddha's birth, enlightenment, and nirvana are celebrated on this most important Buddhist festival.",
    startDate: '2024-05-23',
    endDate: '2024-05-23',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Bodh Gaya',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bodh Gaya',
        addressRegion: 'Bihar',
        addressCountry: 'IN'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Bodh Gaya Temple Management Committee'
    }
  };

  const content = (
    <>
      {!isStandalonePage ? (
        <>
          <SectionHeader
            title={nextFestival.name}
            subtitle={`Next: ${nextFestival.date} — ${nextFestival.description}`}
            id="events"
            notification
          />
          <div className={styles.note} style={{padding: '0 1rem 1.2rem', color: '#555'}}>
            <p style={{margin: 0}}>
              Buddha Purnima (Vesak) is the annual celebration of the Buddha's birth,
              enlightenment and parinirvana. Dates follow the lunar calendar and usually
              fall in April–May — check local schedules when planning a visit.
            </p>
          </div>
        </>
      ) : (
        <>
          <SectionHeader
            title="Buddhist Festivals & Events"
            subtitle="Annual celebrations and ceremonies in Bodh Gaya"
            id="events"
          />
          <div style={{display: 'grid', gap: '1.5rem', marginTop: '2rem'}}>
            {events.map((event, index) => {
              const gradients = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
              ];
              const gradient = gradients[index % gradients.length];
              return (
              <div key={index} style={{
                border: '2px solid transparent',
                borderRadius: '16px',
                padding: '1.5rem',
                background: 'linear-gradient(white, white), ' + gradient,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem'}}>
                  <h3 style={{fontSize: '1.5rem', margin: 0, color: 'var(--color-dark)'}}>{event.name}</h3>
                  <span style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(0,114,206,0.1)',
                    borderRadius: '6px'
                  }}>{event.date}</span>
                </div>
                <p style={{color: '#555', marginBottom: '0.75rem', lineHeight: '1.7'}}>{event.description}</p>
                <div style={{display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#666', flexWrap: 'wrap'}}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '20px',
                    fontWeight: 600,
                    color: '#667eea'
                  }}><strong>Duration:</strong> {event.duration}</span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(118, 75, 162, 0.1)',
                    borderRadius: '20px',
                    fontWeight: 600,
                    color: '#764ba2'
                  }}><strong>Significance:</strong> {event.significance}</span>
                </div>
              </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );

  return (
    <section className={styles.eventsSection} id="events">
      {isStandalonePage && (
        <Helmet>
          <title>Buddha Purnima & Events in Bodh Gaya | Festival Calendar</title>
          <meta name="description" content="Discover Buddhist festivals and events in Bodh Gaya. Learn about Buddha Purnima (Vesak), Tipitaka chanting ceremonies, and cultural celebrations." />
          <meta name="keywords" content="Bodh Gaya events, Buddha Purnima, Vesak, Buddhist festivals, Bodh Gaya calendar, Tipitaka chanting" />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:title" content="Buddha Purnima & Events in Bodh Gaya | Festival Calendar" />
          <meta property="og:description" content="Discover Buddhist festivals and events in Bodh Gaya. Learn about Buddha Purnima and cultural celebrations." />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        content
      )}
    </section>
  );
}

export default Events;