import React from 'react';
import CyberScene from './CyberScene';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const { displayText } = useTypewriter("SANKARAN KUMAR", 100, 1000);
  const { displayText: subText } = useTypewriter("ARCHITECTING THE FUTURE OF THE WEB", 50, 2500);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <CyberScene />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           style={{
             display: 'inline-flex',
             alignItems: 'center',
             gap: '0.5rem',
             padding: '0.5rem 1.5rem',
             borderRadius: '4px',
             background: 'rgba(6, 182, 212, 0.1)',
             border: '1px solid var(--accent)',
             color: 'var(--accent)',
             fontFamily: 'var(--font-display)',
             textTransform: 'uppercase',
             letterSpacing: '0.1em',
             marginBottom: '2rem'
           }}
        >
          <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent)' }}></span>
          System Online
        </motion.div>
        
        {/* Main Title Wrapper to prevent layout shift */}
        <div style={{ minHeight: 'clamp(3.5rem, 8vw, 7rem)', marginBottom: '1rem' }}>
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 1,
              background: 'linear-gradient(to bottom, var(--text-primary), var(--text-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
              margin: 0
            }}
          >
            {displayText}<span className="blink-cursor">_</span>
          </h1>
        </div>
        
        <div style={{ minHeight: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '3rem' }}>
           <h2
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.05em',
              margin: 0
            }}>
            {subText}
          </h2>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 4 }} // Wait for typing
           style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn btn-primary">
            Explore Sector
          </a>
          <a href="#experience" className="btn">
            Mission Log
          </a>
        </motion.div>
      </div>
      
      <style>{`
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
