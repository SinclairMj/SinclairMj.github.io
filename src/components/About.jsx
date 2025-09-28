import React from 'react'

const About = () => {
  const skills = [
    'JavaScript', 'Python', 'Web开发', '数据分析', '机器学习'
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              我是一名热爱学习和分享的开发者，专注于技术研究和知识积累。
              在这里，我会记录我的学习心得、技术探索和思考感悟，希望能够与大家分享交流。
            </p>
            <div className="skills">
              <h3>技能标签</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
