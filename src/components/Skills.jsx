import React from 'react';
import SectionWrapper from './SectionWrapper';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Node.js", "React", "Express", "TypeORM", "Django", "Redis", "Git", "PowerBI"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Jenkins", "Openshift", "Helm", "Jira"]
    },
    {
      title: "ML & Data",
      skills: ["Pandas", "NumPy", "PyTorch", "TensorFlow", "OpenCV"]
    }
  ];

  return (
    <SectionWrapper id="skills" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card">
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '0.5rem'
              }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    transition: 'var(--transition)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
