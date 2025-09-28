import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, tags } from '../data/articles'

const Articles = ({ 
  articles, 
  onSearch, 
  onCategoryFilter, 
  onTagFilter, 
  searchTerm, 
  selectedCategory, 
  selectedTag 
}) => {
  const [showFilters, setShowFilters] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="articles" className="articles-section">
      <div className="container">
        <h2 className="section-title">最新文章</h2>
        
        {/* 搜索和筛选 */}
        <div className="article-controls">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              id="searchInput" 
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="categoryFilter">分类筛选：</label>
              <select 
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => onCategoryFilter(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id === 'all' ? '' : category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label>标签筛选：</label>
              <div className="tag-filter">
                {tags.map(tag => (
                  <span 
                    key={tag.id}
                    className={`tag ${selectedTag === (tag.id === 'all' ? '' : tag.id) ? 'active' : ''}`}
                    onClick={() => onTagFilter(tag.id === 'all' ? '' : tag.id)}
                  >
                    {tag.name} ({tag.count})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="articles-grid">
          {articles.length === 0 ? (
            <div className="no-articles">
              <i className="fas fa-search" style={{fontSize: '3rem', marginBottom: '1rem', opacity: 0.5}}></i>
              <h3>没有找到相关文章</h3>
              <p>请尝试调整搜索条件或筛选器</p>
            </div>
          ) : (
            articles.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{formatDate(article.date)}</span>
                </div>
                <h3 className="article-title">
                  <Link to={`/article/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="article-tag">{tag}</span>
                  ))}
                </div>
                <div className="article-read-time">阅读时间: {article.readTime}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Articles
