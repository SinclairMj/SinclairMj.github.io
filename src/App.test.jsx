import React from 'react'
import { createRoot } from 'react-dom/client'

// 简单的测试组件
const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>测试页面</h1>
      <p>如果你看到这个页面，说明React应用正在正常工作！</p>
      <button onClick={() => alert('按钮点击成功！')}>
        点击测试
      </button>
    </div>
  )
}

// 渲染测试组件
const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<TestApp />)
}
