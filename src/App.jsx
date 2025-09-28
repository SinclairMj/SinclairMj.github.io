import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArticleDetail from './components/ArticleDetail'
import { articlesData } from './data/articles'

function App() {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    setArticles(articlesData)
    setFilteredArticles(articlesData)
  }, [])

  useEffect(() => {
    filterArticles()
  }, [searchTerm, selectedCategory, selectedTag, articles])

  const filterArticles = () => {
    let filtered = articles.filter(article => {
      const matchesSearch = !searchTerm || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !selectedCategory || article.category === selectedCategory
      const matchesTag = !selectedTag || article.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })

    setFilteredArticles(filtered)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
  }

  const handleTagFilter = (tag) => {
    setSelectedTag(tag)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Articles 
                articles={filteredArticles}
                onSearch={handleSearch}
                onCategoryFilter={handleCategoryFilter}
                onTagFilter={handleTagFilter}
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
              />
              <Contact />
            </>
          } />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
