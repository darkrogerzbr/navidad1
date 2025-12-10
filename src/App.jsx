import { HashRouter, Link, Route, Routes } from "react-router-dom"
import Gastronomia from "./gastronomia"
import Danzas from "./danzas"
import Historia from "./historia"
import Acerca from "./acerca"
import './App.css'
function App() {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
          <a className="nav-link active" href="/">Gastronomia</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/danzas">Danzas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/historia">Historia</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/acerca">Acerca</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
          


      
      <Routes>
        <Route path="/" element={<Gastronomia></Gastronomia>}></Route>
        <Route path="/danzas" element={<Danzas></Danzas>}></Route>
        <Route path="/historia" element={<Historia></Historia>}></Route>
        <Route path="/acerca" element={<Acerca></Acerca>}></Route>
      </Routes>
      
    </>
  )
}

export default App
