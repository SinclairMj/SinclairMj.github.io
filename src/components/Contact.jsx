import React from 'react'

const Contact = () => {
  const contactLinks = [
    {
      icon: 'fas fa-envelope',
      text: '邮箱联系',
      href: 'mailto:your-email@example.com'
    },
    {
      icon: 'fab fa-github',
      text: 'GitHub',
      href: 'https://github.com/SinclairMj'
    },
    {
      icon: 'fab fa-linkedin',
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile'
    },
    {
      icon: 'fab fa-twitter',
      text: 'Twitter',
      href: 'https://twitter.com/your-handle'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        <div className="contact-content">
          <p>如果您有任何问题或建议，欢迎与我联系</p>
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
