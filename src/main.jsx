import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Historia from './historia'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/navidad1'>
  <App>
  </App>
  
  </BrowserRouter>,
)
