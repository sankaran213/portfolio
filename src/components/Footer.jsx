import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Let's Work Together</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Interested in building scalable, production-grade systems? I'm currently open for new opportunities.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a href="mailto:thehellrocker666@gmail.com" className="btn btn-primary">
            Email Me
          </a>
          <a href="https://linkedin.com/in/sankaran-kumar" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            LinkedIn
          </a>
          <a href="https://github.com/sankaran213" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            GitHub
          </a>
        </div>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>Bengaluru, Karnataka 560103 | +91-8340758875</p>
          <p style={{ marginTop: '1rem' }}>&copy; {new Date().getFullYear()} Sankaran Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
