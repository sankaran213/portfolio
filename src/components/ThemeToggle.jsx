import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        color: 'var(--accent)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'var(--transition)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'rotate(15deg) scale(1.1)';
        e.target.style.boxShadow = '0 0 15px var(--accent-glow)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'rotate(0) scale(1)';
        e.target.style.boxShadow = 'none';
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
