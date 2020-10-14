import React, { useEffect, useState } from "react";
import dataSilabo from "./data";
import VisitsCounterCountry from "../VisitsCounterCountry";

import "./index.css";
import { spreadFormatJson } from "../../utils/spreadFormat";

const otherGroups = [
  {
    name: "Grupo 3",
    linkPage: "https://proytesis2hugovega-fisiunmsm-2020.blogspot.com/",
    members: ["JAIME RAMON RIOS ZEGARRA", "DENNIS SIXTO CAMPOS ROJAS"],
  },
];

export default function DetailSilabo() {
  const [users, setUsers] = useState([]);
  const handleOpenTabResource = (link) => {
    window && window.open(link);
  };

  useEffect(() => {
    const resultExcel = fetch(
      "https://spreadsheets.google.com/feeds/cells/1szzvbUxOPv-ROTDKOWM1xf_ZR260uPw9SdoVnqiC1FU/1/public/full?alt=json",
      { method: "get", contentType: "application/json" }
    );

    resultExcel
      .then((r) => r.json())
      .then((resu) => {
        const spreadFormat = spreadFormatJson(resu.feed);
        setUsers(spreadFormat);
      });
  }, []);

  console.log({ users });
  return (
    <div>
      <div className="row">
        <section className="col-8">
          <h5>CONTENIDO DEL PROCESO DE TITULACIÓN 2020</h5>
          <hr />
          {users.map((user) => (
            <div key={user.idUsuario} className="dataUser__container">
              <div>
                <h3>
                  <strong>
                    {user.info[0].name} {user.info[0].lastname}
                  </strong>
                </h3>
              </div>
              <div>
                <h4>
                  <span className="badge badge-info">Asesor</span>{" "}
                  {user.info[0].thesisAdviser}
                </h4>
              </div>
              <div className="table__container">
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th className="col1">SEMANA</th>
                      <th className="col2">PROCESO</th>
                      <th className="col3">DOCUMENTO</th>
                      <th className="col3">OBSERVACIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.table.map((data, index) => (
                      <tr key={index}>
                        <th className="col1">{data.date}</th>
                        <td className="col2">
                          <p>{data.processInformation}</p>
                        </td>
                        <td className="col3">
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => handleOpenTabResource(data.url)}
                          >
                            Ver archivo
                          </button>
                        </td>
                        <td className="col3">{data.observation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
        <aside className="col-4">
          <h5 className="text-center">TESISTAS</h5>

          {users.map((user) => (
            <div className="card" key={user.idUsuario}>
              <img
                className="card-img-top"
                src={user.info[0].urlPersonal}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {user.info[0].name} {user.info[0].lastname}
                </h5>
                <p className="card-text">{user.info[0].thesisName}</p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          ))}

          <div className="card text-white bg-info mb-3">
            <div className="card-header color1">
              <strong>PROCEDIMIENTO PARA REGISTRAR EL PLAN DE TESIS</strong>
            </div>
            <div className="card-body">
              <ul className="marginLeft-16">
                <li>
                  Solicitar "inscripción del Proyecto de Tesis de Pregrado" por
                  el MAT (http://tramiteonline.unmsm.edu.pe/sgdfd/mat/, con su
                  correo institucional, adjuntando los requisitos (activación de
                  correo: generacorreo.rtsm@unmsm.edu.pe)
                </li>
                <li>
                  La escuela deriva el Plan de Tesis a un jurado para su
                  aprobación
                </li>
                <li>
                  La Escuela designará formalmente al asesor de tesis, con quien
                  elaborará su tesis hasta contar con su visto bueno
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3">
            <div className="card-header color2">
              <strong>REQUISITOS PARA REGISTRAR EL PLAN DE TESIS</strong>
            </div>
            <div className="card-body">
              <ul className="marginLeft-16">
                <li>Copia del grado de bachiller</li>
                <li>
                  Recibo de pago a la cuenta 210210 S/ 5.00 (BANCO PICHINCHA).
                </li>
                <li>
                  PLAN DE TESIS en el formato proporcionado por la Escuela,
                  Incluir nombre del asesor quien debe revisar y firmar el
                  formato
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <VisitsCounterCountry />
        </aside>
      </div>
    </div>
  );
}
