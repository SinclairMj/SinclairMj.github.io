import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <div className="navigation">
      <div className="home-button">
        <Link to="/" className="glass-button">
          <img src="/SinclairMj.github.io/img/icons/android-chrome-192x192.png" alt="MoltinSite icon" className="icon" />
          <span>MoltinSite</span>
        </Link>
      </div>
      <nav className="nav-buttons">
        <Link 
          to="/about" 
          className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
        <Link 
          to="/blog" 
          className={`nav-button ${location.pathname === '/blog' ? 'active' : ''}`}
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
