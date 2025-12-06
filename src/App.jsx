import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { SoundProvider } from './components/SoundContext';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <SoundProvider>
      <div className="App">
        <CustomCursor />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </SoundProvider>
  );
}

export default App;
