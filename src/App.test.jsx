import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.test'
import Home from './pages/Home.test'
import About from './pages/About.test'
import Contact from './pages/Contact.test'
import Blog from './pages/Blog.test'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
