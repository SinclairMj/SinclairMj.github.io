import React from 'react'

const Contact = () => {
  return (
    <div className="page-content">
      <div className="content-card">
        <h1 className="page-title">Contact Me</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Get In Touch
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            I'm always interested in hearing from fellow developers, potential collaborators, or anyone who wants to discuss technology, share ideas, or just say hello!
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem', 
          marginTop: '2rem' 
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem',
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fas fa-envelope" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b6b' }}></i>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Email</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Send me an email anytime</p>
            <a href="mailto:your-email@example.com" style={{ color: '#ff6b6b', textDecoration: 'none', fontWeight: '500' }}>
              your-email@example.com
            </a>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem',
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fab fa-github" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b6b' }}></i>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>GitHub</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Check out my projects and contributions</p>
            <a href="https://github.com/SinclairMj" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b', textDecoration: 'none', fontWeight: '500' }}>
              @SinclairMj
            </a>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem',
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fab fa-linkedin" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b6b' }}></i>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>LinkedIn</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Connect with me professionally</p>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b', textDecoration: 'none', fontWeight: '500' }}>
              LinkedIn Profile
            </a>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem',
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fab fa-twitter" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b6b' }}></i>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Twitter</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Follow me for tech updates</p>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b6b', textDecoration: 'none', fontWeight: '500' }}>
              @your-handle
            </a>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
            Response Time
          </h2>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '1rem' }}>
            I typically respond to emails within 24-48 hours. For urgent matters, feel free to reach out through multiple channels.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
