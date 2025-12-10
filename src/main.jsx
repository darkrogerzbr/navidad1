import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/navidad1'>
  <App>
    <Routes>
        <Route path="/" element={<Gastronomia></Gastronomia>}></Route>
        <Route path="/danzas" element={<Danzas></Danzas>}></Route>
        <Route path="/historia" element={<Historia></Historia>}></Route>
        <Route path="/acerca" element={<Acerca></Acerca>}></Route>
      </Routes>
  </App>
  
  
  
  </BrowserRouter>,
)
