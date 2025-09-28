import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          color: '#2D5A87',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          <span>🏠</span>
          <span>MoltinSite</span>
        </Link>
      </div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link 
          to="/about" 
          style={{
            textDecoration: 'none',
            color: location.pathname === '/about' ? '#4ecdc4' : '#2D5A87',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: location.pathname === '/about' ? 'rgba(78, 205, 196, 0.2)' : 'transparent'
          }}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          style={{
            textDecoration: 'none',
            color: location.pathname === '/contact' ? '#4ecdc4' : '#2D5A87',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: location.pathname === '/contact' ? 'rgba(78, 205, 196, 0.2)' : 'transparent'
          }}
        >
          Contact
        </Link>
        <Link 
          to="/blog" 
          style={{
            textDecoration: 'none',
            color: location.pathname === '/blog' ? '#4ecdc4' : '#2D5A87',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            background: location.pathname === '/blog' ? 'rgba(78, 205, 196, 0.2)' : 'transparent'
          }}
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
