import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: isScrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        padding: isScrolled ? '1rem 0' : '2rem 0',
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
          textTransform: 'uppercase'
        }}>
          SNKRN<span style={{ color: 'var(--accent)' }}>.IO</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="nav-link"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  position: 'relative'
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
            ))}
          </nav>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
