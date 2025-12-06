import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "PlanIt",
      category: "Full Stack",
      description: "A multi-user travel planning app with modular backend architecture. Implemented efficient data management and cloud deployment for high availability.",
      tech: ["Express", "React", "Node.js", "MySQL", "Apache"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Microservices Auth",
      category: "Backend",
      description: "Secure authentication service with RBAC and JWT, deployed using Docker and Kubernetes. (Based on professional work)",
      tech: ["Node.js", "TypeScript", "Docker", "Redis"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Inventory Dashboard",
      category: "Data/ML",
      description: "Data visualization dashboard for inventory management using Python data stack.",
      tech: ["Python", "Pandas", "Matplotlib", "React"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Chat API",
      category: "Backend",
      description: "High-volume real-time chat API handling concurrent connections.",
      tech: ["Node.js", "Socket.io", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const categories = ["All", "Full Stack", "Backend", "Data/ML"];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects" style={{ padding: '8rem 0' }}>
      <div className="container">
        <h2 className="section-title">Deployed Modules</h2>
        
        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '5rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '2px', // Tech square
                background: filter === cat ? 'var(--accent)' : 'transparent',
                color: filter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: '1px solid var(--accent)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                boxShadow: filter === cat ? '0 0 20px var(--accent-glow)' : 'none'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card" 
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))`,
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '3rem',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-display)'
                }}>
                  {project.title.substring(0, 2).toUpperCase()}
                </div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                    {project.title}
                </h3>
                <span style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--accent)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    marginBottom: '1rem',
                    display: 'block'
                }}>
                    // {project.category}
                </span>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1, fontSize: '1rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      background: 'rgba(255,255,255,0.03)'
                    }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
