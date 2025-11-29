import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import PageContainer from './PageContainer';
import SectionHeader from './SectionHeader';

// Books data (from scraped content)
const books = [
  {
    title: 'Bodh Gaya: The Site of Enlightenment',
    author: 'Frederick M. Asher',
    description: 'A comprehensive guide to the history, architecture, and significance of Bodh Gaya, including detailed information about the Mahabodhi Temple and surrounding sites.',
    category: 'History & Architecture'
  },
  {
    title: 'The Buddha and His Dhamma',
    author: 'B.R. Ambedkar',
    description: 'A detailed exposition of Buddhist philosophy and teachings, written by one of India\'s most important social reformers.',
    category: 'Buddhist Philosophy'
  },
  {
    title: 'Old Path White Clouds: Walking in the Footsteps of the Buddha',
    author: 'Thich Nhat Hanh',
    description: 'A beautiful narrative of the Buddha\'s life, from his birth to his enlightenment and teaching years, written by the renowned Vietnamese Zen master.',
    category: 'Buddhist Biography'
  },
  {
    title: 'What the Buddha Taught',
    author: 'Walpola Rahula',
    description: 'A clear and concise introduction to the fundamental teachings of Buddhism, perfect for beginners and those seeking to understand core Buddhist concepts.',
    category: 'Buddhist Teachings'
  },
  {
    title: 'The Heart of the Buddha\'s Teaching',
    author: 'Thich Nhat Hanh',
    description: 'An accessible guide to the core teachings of Buddhism, including the Four Noble Truths, the Eightfold Path, and mindfulness practices.',
    category: 'Buddhist Teachings'
  },
  {
    title: 'Buddhism: A Very Short Introduction',
    author: 'Damien Keown',
    description: 'A concise overview of Buddhism, its history, teachings, and practices, ideal for those new to the subject.',
    category: 'Introduction to Buddhism'
  },
  {
    title: 'The Art of Living: Vipassana Meditation',
    author: 'William Hart',
    description: 'An introduction to Vipassana meditation as taught by S.N. Goenka, with practical guidance for meditation practice.',
    category: 'Meditation'
  },
  {
    title: 'Lonely Planet India',
    author: 'Various',
    description: 'Comprehensive travel guide including detailed information about Bodh Gaya, Bihar, and surrounding Buddhist sites.',
    category: 'Travel Guide'
  },
  {
    title: 'Bihar: The Land of Enlightenment',
    author: 'Various',
    description: 'A guide to the Buddhist circuit in Bihar, covering Bodh Gaya, Rajgir, Nalanda, and other important sites.',
    category: 'Travel Guide'
  }
];

function Books() {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/books';
  const pageUrl = 'https://budhgaya.com/books';

  const content = (
    <>
      <SectionHeader
        title="Books & Reading"
        subtitle="Recommended reading for Bodh Gaya, Buddhism, and travel guides"
        id="books"
      />
      <p style={{color: '#555', marginBottom: '2rem', lineHeight: '1.7', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem'}}>
        Discover guides and reading lists for Bodh Gaya, Buddhism, and travel in Bihar. 
        These books offer insights into Buddhist philosophy, the history of Bodh Gaya, 
        meditation practices, and travel information.
      </p>
      <div style={{display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
        {books.map((book, index) => {
          const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
          }}>
            <div style={{
              fontSize: '0.875rem',
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>{book.category}</div>
            <h3 style={{fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: 'var(--color-dark)'}}>{book.title}</h3>
            <p style={{fontSize: '0.9375rem', color: '#666', margin: '0 0 0.75rem 0', fontStyle: 'italic'}}>by {book.author}</p>
            <p style={{color: '#555', lineHeight: '1.7', margin: 0, fontSize: '0.9375rem'}}>{book.description}</p>
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
          <title>Books About Bodh Gaya & Buddhism | Reading Guide</title>
          <meta name="description" content="Discover recommended books about Bodh Gaya, Buddhist philosophy, meditation, and travel guides. Essential reading for pilgrims and visitors." />
          <meta name="keywords" content="Bodh Gaya books, Buddhist books, meditation books, Bodh Gaya travel guides, Buddhist philosophy" />
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

export default Books;

