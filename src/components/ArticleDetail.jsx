import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'

const ArticleDetail = ({ articles }) => {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>文章未找到</h1>
        <p>抱歉，您访问的文章不存在。</p>
        <Link to="/" className="btn btn-primary">返回首页</Link>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderMarkdown = (content) => {
    return { __html: marked(content) }
  }

  return (
    <div className="article-detail">
      <div className="container">
        <div className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{formatDate(article.date)}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="article-content">
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={renderMarkdown(article.content)}
          />
        </div>
        
        <div className="article-footer">
          <Link to="/" className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            返回文章列表
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
