import React from 'react';
import SectionWrapper from './SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{
              minWidth: '60px',
              height: '60px',
              background: 'var(--gradient)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
              S
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Bachelor of Technology in Computer Science</h3>
              <p style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Sister Nivedita University | Nov 2020 - Jun 2024</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                <span>Kolkata, WB</span>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>CGPA: 8.49/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
