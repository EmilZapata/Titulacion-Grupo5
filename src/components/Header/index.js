import React from "react";
import logoUnmsm from "../../assets/img/UNMSM_logo.png";
import tesis2 from "../../assets/img/tesis2.png";
import "./index.css";

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
          <h1 className="title__tesis">TITULACIÓN POR TESIS 2020</h1>
          <h3 className="subTitle__tesis">PARA OPTAR EL TÍTULO PROFESIONAL DE INGENIERO DE SISTEMAS</h3>
        </div>
      </div>
    </header>
  );
}
