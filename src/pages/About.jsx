import React from 'react'

const About = () => {
  return (
    <div className="page-content">
      <div className="content-card">
        <h1 className="page-title">About Me</h1>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img 
            src="/img/avatars/Bilir.png" 
            alt="Bilir" 
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Personal Introduction
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            I am a passionate developer who loves learning and sharing knowledge. I focus on technology research and knowledge accumulation, constantly exploring new technical fields in this rapidly evolving world.
          </p>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            I believe in the power of technology to change the world, and I hope to contribute to the tech community through my efforts. Here, I will record my learning insights, technical explorations, and thoughts, hoping to share and exchange with everyone.
          </p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Technical Skills
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            Through years of learning and practice, I have accumulated rich technical experience covering multiple technical fields:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {['JavaScript', 'Python', 'Web Development', 'Data Analysis', 'Machine Learning', 'Algorithms', 'React', 'Node.js'].map(skill => (
              <span 
                key={skill}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: '#333',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Learning Philosophy
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            I firmly believe that learning is a continuous process. Technology updates and iterates quickly, and only by maintaining learning can we keep up with the pace of the times. I like to learn new technologies through practice, consolidate knowledge through sharing, and broaden my horizons through communication.
          </p>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            On this personal website, I will regularly update my learning notes, technical articles, and project experiences, hoping to help more technology enthusiasts.
          </p>
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Contact Me
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            If you are interested in my articles or projects, or have any technical questions you would like to discuss, please feel free to contact me through the following ways:
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a 
              href="mailto:your-email@example.com" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/SinclairMj" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: '#333',
                textDecoration: 'none',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
