import React from 'react';
import SectionWrapper from './SectionWrapper';

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer",
      company: "Tata Consultancy Services (TCS)",
      period: "Apr 2025 - Present",
      location: "Bangalore, India",
      description: [
        "Developed scalable backend services using Node.js, TypeScript, and TypeORM.",
        "Designed and optimized RESTful APIs, improving response times by 30%.",
        "Implemented secure authentication and RBAC using JWT middleware.",
        "Managed containerized micro-services using Docker and Jenkins CI/CD.",
        "Optimized PostgreSQL/MySQL queries reducing latency."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "BridgeIT App",
      period: "Feb 2025 - Apr 2025",
      location: "Bangalore, India",
      description: [
        "Built high-volume RESTful APIs for onboarding and chat modules, serving 2K+ users.",
        "Implemented token-based authentication using JWT.",
        "Refactored data access layers in PostgreSQL/MongoDB to support 99.9% availability."
      ]
    },
    {
      role: "Intern",
      company: "Flipkart Launchpad",
      period: "Oct 2023 - Dec 2023",
      location: "Kalyani, WB",
      description: [
        "Streamlined logistics workflows by analyzing operational datasets.",
        "Optimized issue response workflows, improving satisfaction rates by 15%."
      ]
    }
  ];

  return (
    <SectionWrapper id="experience" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '3rem',
              position: 'relative'
            }}>
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '24px',
                  bottom: '-3rem',
                  width: '2px',
                  background: 'var(--border)'
                }}></div>
              )}
              
              {/* Dot */}
              <div style={{
                minWidth: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--accent)',
                marginTop: '5px',
                boxShadow: '0 0 10px var(--accent-glow)'
              }}></div>
              
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.period}</span>
                </div>
                
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  {exp.company} <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>| {exp.location}</span>
                </h4>
                
                <ul style={{ color: 'var(--text-secondary)', listStyle: 'disc', paddingLeft: '1.5rem' }}>
                    {exp.description.map((item, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
