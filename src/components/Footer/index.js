import React from "react";

export default function Footer() {
  return (
    <footer className="footer-page">
      <div className="container  navbar navbar-inverse bg-inverse">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <nav>
              <ul className="list-unstyled">
                <h5>LA FACULTAD</h5>
                <li>
                  <a href="/sistemas">EP Ingeniería de Sistemas</a>
                </li>
                <li>
                  <a href="/software">EP Ingeniería de Software</a>
                </li>
                <li>
                  <a href="/posgrado">Posgrado</a>
                </li>
                <li>
                  <a href="/ceups">CERSEU</a>
                </li>
                <li>
                  <a href="/unidad/occa">OCCA</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-xs-12 col-sm-4">
            <nav>
              <ul className="list-unstyled">
                <h5>SERVICIOS UNIVERSITARIOS</h5>
                <li>
                  <a
                    target="_blank"
                    href="http://sisbib.unmsm.edu.pe"
                    rel="noopener noreferrer"
                  >
                    Sistema de Bibliotecas
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://unmsm.edu.pe/occaa"
                    rel="noopener noreferrer"
                  >
                    Calidad Académica OCCA
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://ccsm-unmsm.edu.pe"
                    rel="noopener noreferrer"
                  >
                    Centro Cultural
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://clinica.unmsm.edu.pe"
                    rel="noopener noreferrer"
                  >
                    Clínica Universitaria
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://ogbu.unmsm.edu.pe"
                    rel="noopener noreferrer"
                  >
                    Bolsa de trabajo
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-xs-12 col-sm-4">
            <nav>
              <ul className="list-unstyled">
                <h5>SERVICIOS AL ESTUDIANTE</h5>
                <li>
                  <a href="/unidad/unayoe">UNAYOE</a>
                </li>
                <li>
                  <a href="/unidad/bienstar">Unidad de Bienestar</a>
                </li>
                <li>
                  <a href="/bolsa-de-trabajo">Bolsa de Trabajo</a>
                </li>
                <li>
                  <a href="/biblioteca">Biblioteca</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ubicacion">
            <address className="text-left">
              <p>
                <i className="fa fa-home"></i> Ciudad Universitaria - Av. Germán
                Amézaga
              </p>
              <p>
                <i className="fa fa-phone"></i> Teléfono: 619 - 7000 Anexo 3632
              </p>
              <p>
                <a href="mailto:informatica.fisi@unmsm.edu.pe">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                  informatica.fisi@unmsm.edu.pe
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
