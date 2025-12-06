import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';
import HackerText from './HackerText';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#footer' },
  ];

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { delay: 0.1, type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: isScrolled ? 'rgba(3, 7, 18, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          letterSpacing: '0.1em',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          zIndex: 1002,
          display: 'flex',
          alignItems: 'center',
          gap: '0.2rem'
        }}>
          <HackerText text="SNKRN" />
          <span style={{ color: 'var(--accent)' }}>.IO</span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <MagneticWrapper key={link.name}>
                <a 
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    display: 'block',
                    padding: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent)';
                    e.target.style.textShadow = '0 0 10px var(--accent-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.textShadow = 'none';
                  }}
                >
                  {link.name}
                </a>
              </MagneticWrapper>
            ))}
          </nav>
          
          <MagneticWrapper>
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </MagneticWrapper>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ zIndex: 1002, display: 'none' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--text-primary)', marginLeft: '1rem' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '300px',
                background: 'var(--bg-secondary)',
                zIndex: 1001,
                borderLeft: '1px solid var(--border)',
                padding: '6rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
              }}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                   <HackerText text={link.name} />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
