import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

// Trip itineraries (from scraped content)
const trips = [
  {
    title: 'Weekend Getaway (2 Days)',
    duration: '2 days',
    description: 'A quick spiritual retreat to experience the essence of Bodh Gaya',
    itinerary: [
      {
        day: 1,
        activities: [
          'Morning: Arrive in Bodh Gaya, check into accommodation',
          'Visit Mahabodhi Temple and meditate under the Bodhi Tree',
          'Explore the Great Buddha Statue and surrounding gardens',
          'Evening: Attend prayer ceremony at the temple',
          'Dinner at a local restaurant (try Litti Chokha)'
        ]
      },
      {
        day: 2,
        activities: [
          'Early morning: Meditation session at the temple',
          'Visit Thai and Japanese monasteries',
          'Explore Tibetan monasteries and markets',
          'Afternoon: Visit Archaeological Museum',
          'Departure'
        ]
      }
    ],
    bestFor: 'First-time visitors, spiritual seekers'
  },
  {
    title: 'Spiritual Journey (3 Days)',
    duration: '3 days',
    description: 'A deeper exploration of Bodh Gaya\'s spiritual and cultural heritage',
    itinerary: [
      {
        day: 1,
        activities: [
          'Arrival and temple visit',
          'Meditation session under the Bodhi Tree',
          'Explore international monasteries (Thai, Japanese, Tibetan)',
          'Evening prayers and cultural program'
        ]
      },
      {
        day: 2,
        activities: [
          'Early morning circumambulation of the temple',
          'Visit Sujata Kuti across the river',
          'Explore Dungeshwari Hill (Prag Bodhi caves)',
          'Afternoon: Museum visit and shopping in local markets',
          'Evening: Attend meditation retreat or teachings'
        ]
      },
      {
        day: 3,
        activities: [
          'Sunrise meditation at the temple',
          'Visit remaining monasteries (Bhutanese, Burmese, Chinese)',
          'Explore local cuisine and street food',
          'Evening: Final temple visit and departure'
        ]
      }
    ],
    bestFor: 'Pilgrims, meditation practitioners, cultural enthusiasts'
  },
  {
    title: 'Buddhist Circuit (7 Days)',
    duration: '7 days',
    description: 'Complete Buddhist pilgrimage covering Bodh Gaya, Rajgir, Nalanda, and Patna',
    itinerary: [
      {
        day: 1,
        activities: [
          'Arrive in Bodh Gaya',
          'Visit Mahabodhi Temple and Bodhi Tree',
          'Explore Great Buddha Statue',
          'Evening meditation'
        ]
      },
      {
        day: 2,
        activities: [
          'Full day in Bodh Gaya: All monasteries, Sujata Kuti, Dungeshwari Hill',
          'Cultural programs and teachings'
        ]
      },
      {
        day: 3,
        activities: [
          'Travel to Rajgir (1-2 hours)',
          'Visit Gridhakuta Hill (Vulture\'s Peak)',
          'Explore ancient ruins and hot springs',
          'Vishwa Shanti Stupa (Peace Pagoda)'
        ]
      },
      {
        day: 4,
        activities: [
          'Travel to Nalanda (30 minutes from Rajgir)',
          'Explore Nalanda University ruins (UNESCO site)',
          'Visit Nalanda Archaeological Museum',
          'Return to Rajgir or Bodh Gaya'
        ]
      },
      {
        day: 5,
        activities: [
          'Travel to Patna',
          'Visit Patna Museum (houses Buddha relics)',
          'Explore historical sites in Patna',
          'Overnight in Patna'
        ]
      },
      {
        day: 6,
        activities: [
          'Return to Bodh Gaya',
          'Deep meditation and reflection',
          'Final temple visits',
          'Cultural activities'
        ]
      },
      {
        day: 7,
        activities: [
          'Morning prayers and meditation',
          'Final shopping and exploration',
          'Departure'
        ]
      }
    ],
    bestFor: 'Comprehensive pilgrimage, history enthusiasts, extended spiritual retreat'
  }
];

function Trips() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/trips';
  const pageUrl = 'https://budhgaya.com/trips';

  const content = (
    <>
      <SectionHeader
        title="Trip Itineraries"
        subtitle="Plan your journey with sample itineraries for different durations"
        id="trips"
      />
      <p style={{color: '#555', marginBottom: '2rem', lineHeight: '1.7', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem'}}>
        Plan your journey with sample itineraries, seasonal advice, and booking tips. 
        Choose from weekend getaways to extended pilgrimages covering the entire Buddhist circuit.
      </p>
      <div style={{display: 'grid', gap: '2rem'}}>
        {trips.map((trip, index) => {
          const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
          ];
          const gradient = gradients[index % gradients.length];
          return (
          <div key={index} style={{
            border: '2px solid transparent',
            borderRadius: '20px',
            padding: '2rem',
            background: 'linear-gradient(white, white), ' + gradient,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.18)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem'}}>
              <div>
                <h3 style={{fontSize: '1.75rem', margin: '0 0 0.5rem 0', color: 'var(--color-dark)'}}>{trip.title}</h3>
                <p style={{color: '#666', margin: 0, fontSize: '0.9375rem'}}>{trip.description}</p>
              </div>
              <span style={{
                fontSize: '0.875rem',
                color: '#fff',
                fontWeight: 700,
                padding: '0.5rem 1.25rem',
                background: gradient,
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>{trip.duration}</span>
            </div>
            <p style={{fontSize: '0.875rem', color: '#666', marginBottom: '1.5rem'}}>
              <strong>Best for:</strong> {trip.bestFor}
            </p>
            <div style={{display: 'grid', gap: '1rem'}}>
              {trip.itinerary.map((day, dayIndex) => {
                const dayBg = 'linear-gradient(to right, ' + gradient.replace('135deg, ', '').replace(' 100%)', ', rgba(255,255,255,0.05) 100%)');
                return (
                <div key={dayIndex} style={{
                  borderLeft: '4px solid',
                  borderImage: gradient + ' 1',
                  paddingLeft: '1rem',
                  marginBottom: '1rem',
                  background: dayBg
        }}>
                  <h4 style={{fontSize: '1.125rem', margin: '0 0 0.75rem 0', color: 'var(--color-dark)'}}>
                    Day {day.day}
                  </h4>
                  <ul style={{margin: 0, paddingLeft: '1.25rem', color: '#555', lineHeight: '1.8'}}>
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} style={{marginBottom: '0.5rem'}}>{activity}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
            </div>
          </div>
          );
        })}
      </div>
    </>
  );

  return (
    <>
      {isStandalonePage && (
        <Helmet>
          <title>Bodh Gaya Trip Itineraries | Travel Plans & Guides</title>
          <meta name="description" content="Plan your journey to Bodh Gaya with sample itineraries for 2-day, 3-day, and 7-day trips. Includes the complete Buddhist circuit covering Rajgir, Nalanda, and Patna." />
          <meta name="keywords" content="Bodh Gaya itinerary, Bodh Gaya travel plan, Buddhist circuit, Bodh Gaya trip guide" />
          <link rel="canonical" href={pageUrl} />
        </Helmet>
      )}
      {isStandalonePage ? (
        <PageContainer>
          {content}
        </PageContainer>
      ) : (
        <div style={{padding: '4rem 2rem'}}>
          {content}
        </div>
      )}
    </>
  );
}

export default Trips;

