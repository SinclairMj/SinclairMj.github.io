import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.minimal.jsx'
// import './css/index.css'

// 检查根元素是否存在
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
} else {
  console.log('Root element found, rendering app...')
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
