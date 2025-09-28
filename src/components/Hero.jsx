import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          你好，我是 <span className="highlight">Bilir</span>
        </h1>
        <p className="hero-subtitle">
          欢迎来到我的个人空间，这里记录着我的学习历程和思考
        </p>
        <div className="hero-buttons">
          <a href="#articles" className="btn btn-primary">
            查看文章
          </a>
          <a href="#about" className="btn btn-secondary">
            了解更多
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
