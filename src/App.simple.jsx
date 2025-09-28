import React from 'react'

const SimpleApp = () => {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333' }}>🎉 React应用正在运行！</h1>
      <p>如果你看到这个页面，说明React应用已经成功启动。</p>
      <button 
        onClick={() => alert('按钮点击成功！')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        点击测试
      </button>
    </div>
  )
}

export default SimpleApp
