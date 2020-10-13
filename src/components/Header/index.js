import React from "react";

import logoUnmsm from "../../assets/img/UNMSM_logo.png";
import tesis2 from "../../assets/img/tesis2.png";

export default function Header() {
  return (
    <header className="banner_superior">
      <div className="banner-sup">
        <div className="img-unmsm">
          <img className="escudo" src={logoUnmsm} alt="unmsm" />
        </div>
        <div className="img-ia">
          <img className="int_art" src={tesis2} alt="Int. Artificial" />
        </div>
        <div className="intermedio">
          <h1>TESIS II</h1>
        </div>
      </div>
      <nav className="navbar navbar-toggleable-sm  navbar-inverse bg-inverse fondo-menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.unmsm.edu.pe/"
          className="navbar-brand unmsm-letra"
        >
          UNMSM
        </a>
        <ul className="nav navbar-nav ">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fa fa-globe" aria-hidden="true"></i> INICIO
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1uzA8vpMpSH5YKC_jk6W-xTfkVJjmP5Wr/view?usp=sharing"
              className="nav-link"
            >
              <i className="fa fa-download" aria-hidden="true"></i> SILABO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
