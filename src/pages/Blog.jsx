import React from 'react'

const Blog = () => {
  const articles = [
    {
      id: 'development-log',
      title: '开发记录与问题解决日志',
      excerpt: '记录项目开发过程中的所有问题、解决方案和技术演进，包括GitHub Pages部署、React框架迁移、性能优化等关键问题的解决过程。',
      date: 'Jan 28, 2024',
      readTime: '15 min read',
      tags: ['开发记录', '问题解决', '技术总结']
    },
    {
      id: 'javascript-async',
      title: 'JavaScript Asynchronous Programming Deep Dive',
      excerpt: 'An in-depth exploration of JavaScript\'s asynchronous programming patterns, including Promises, async/await, and their practical applications in modern web development.',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      tags: ['JavaScript', 'Async', 'Programming']
    },
    {
      id: 'python-data-analysis',
      title: 'Python Data Analysis Beginner\'s Guide',
      excerpt: 'Learn Python data analysis from scratch, covering pandas, numpy, and other essential libraries with practical examples and real-world case studies.',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      tags: ['Python', 'Data Analysis', 'Tutorial']
    },
    {
      id: 'algorithm-learning',
      title: 'Algorithm Learning Insights',
      excerpt: 'Sharing my journey in algorithm learning, including effective study methods, problem-solving techniques, and common algorithm patterns.',
      date: 'Jan 5, 2024',
      readTime: '6 min read',
      tags: ['Algorithms', 'Learning', 'Problem Solving']
    },
    {
      id: 'web-development-best-practices',
      title: 'Web Development Best Practices',
      excerpt: 'Essential best practices for modern web development, covering code organization, performance optimization, security considerations, and more.',
      date: 'Jan 1, 2024',
      readTime: '10 min read',
      tags: ['Web Development', 'Best Practices', 'Performance']
    }
  ]

  const handleArticleClick = (articleId) => {
    if (articleId === 'development-log') {
      // 打开开发记录页面
      window.open('/DEVELOPMENT_LOG.md', '_blank')
    } else {
      alert(`Article: ${articleId} - Coming soon!`)
    }
  }

  return (
    <div className="page-content">
      <div className="content-card">
        <h1 className="page-title">Blog</h1>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
            Welcome to my blog! Here I share my thoughts on technology, programming, and life. Feel free to explore and engage with the content.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {articles.map(article => (
            <div 
              key={article.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => handleArticleClick(article.id)}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333' }}>
                {article.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                {article.excerpt}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                fontSize: '0.9rem', 
                color: '#888',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-calendar"></i>
                  <span>{article.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-clock"></i>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    style={{
                      background: index % 3 === 0 ? 'rgba(255, 107, 107, 0.2)' : 
                                 index % 3 === 1 ? 'rgba(78, 205, 196, 0.2)' : 
                                 'rgba(255, 193, 7, 0.2)',
                      color: index % 3 === 0 ? '#ff6b6b' : 
                             index % 3 === 1 ? '#4ecdc4' : 
                             '#ffc107',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
