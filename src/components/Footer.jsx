import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bilir</h3>
            <p>个人网站，记录学习历程和思考感悟</p>
          </div>
          
          <div className="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#about">关于我</a></li>
              <li><a href="#articles">文章</a></li>
              <li><a href="#contact">联系</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>技术栈</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Web开发</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>联系方式</h4>
            <ul>
              <li>
                <a href="mailto:your-email@example.com">
                  <i className="fas fa-envelope"></i>
                  邮箱
                </a>
              </li>
              <li>
                <a href="https://github.com/SinclairMj" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Bilir. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
