import React from 'react';
import CyberScene from './CyberScene';
import { motion } from 'framer-motion';

const Hero = () => {
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
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '1rem',
            background: 'linear-gradient(to bottom, var(--text-primary), var(--text-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
          }}
        >
          SANKARAN
        </motion.h1>

         <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: '2rem',
            color: 'transparent',
            WebkitTextStroke: '2px var(--accent)',
            fontFamily: 'var(--font-display)'
          }}
        >
          KUMAR
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.05em'
          }}>
          ARCHITECTING THE <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>FUTURE</span> OF THE WEB
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            Explore Sector
          </a>
          <a href="#experience" className="btn">
            Mission Log
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
