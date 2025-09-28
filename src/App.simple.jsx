import React from 'react'

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: '20px',
      background: 'linear-gradient(180deg, #FFE5B4 0%, #FFB4B4 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2D5A87', marginBottom: '2rem' }}>
          🎉 React App 测试成功！
        </h1>
        <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '1rem' }}>
          如果你看到这个页面，说明React应用已经成功运行了！
        </p>
        <div style={{
          background: '#4ecdc4',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          display: 'inline-block',
          margin: '1rem 0'
        }}>
          ✅ React 渲染正常
        </div>
        <p style={{ color: '#333', lineHeight: '1.6', marginTop: '2rem' }}>
          现在我们可以逐步添加更多功能来找出问题所在。
        </p>
      </div>
    </div>
  )
}

export default App
