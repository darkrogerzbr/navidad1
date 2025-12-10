import { Link, Route, Routes } from "react-router-dom";
import Gastronomia from "./gastronomia";
import Danzas from "./danzas";
import Historia from "./historia";
import Acerca from "./acerca";
import './App.css';

function App() {
  return (
  <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Gastronomia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/danzas">Danzas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/historia">Historia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/acerca">Acerca</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Gastronomia />} />
        <Route path="/danzas" element={<Danzas />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </>
  );
}

export default App;
