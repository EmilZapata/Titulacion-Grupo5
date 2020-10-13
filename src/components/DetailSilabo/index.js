import React from "react";
import dataSilabo from "./data";
import VisitsCounterCountry from "../VisitsCounterCountry";

import "./index.css";

const otherGroups = [
  {
    name: "Grupo 3",
    linkPage: "https://proytesis2hugovega-fisiunmsm-2020.blogspot.com/",
    members: ["JAIME RAMON RIOS ZEGARRA", "DENNIS SIXTO CAMPOS ROJAS"],
  },
];

export default function DetailSilabo() {
  const handleGroupLink = (link) => {
    window && window.open(link);
  };
  return (
    <div id="silabo">
      <div className="row">
        <section className="col-10">
          <h5>CONTENIDO DEL CURSO</h5>
          <div className="desarrollo-tabla">
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="col1">Semana</th>
                  <th className="col2">Tema</th>
                  <th className="col3">Entregable</th>
                  <th className="col3">Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {dataSilabo.map((data, index) => (
                  <tr key={index}>
                    <th className="col1">{data.semana}</th>
                    <td className="col2">
                      <h6 className="titulo-clase">{data.title}</h6>
                      <p>{data.description}</p>
                    </td>
                    <td className="col3">
                      {data.link && (
                        <>
                          <a
                            target="_blank"
                            href={data.link[0]}
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fa fa-file-powerpoint-o"
                              aria-hidden="true"
                            ></i>
                            <span>Emil Zapata</span>
                          </a>
                          <br />
                          <a
                            target="_blank"
                            href={data.link[1]}
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fa fa-file-powerpoint-o"
                              aria-hidden="true"
                            ></i>
                            <span>Wilver Sanchez</span>
                          </a>
                        </>
                      )}
                    </td>
                    <td className="col3">{data.observaciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h5>EXTRA</h5>
          <div className="desarrollo-tabla">
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="col2">Tema</th>
                  <th className="col3">Entregable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col1">Presentación frente a jurado.</td>
                  <td className="col2">
                    <a href="https://drive.google.com/file/d/1UT04eEBuiAd9OeqwPt_wKDPZZwyp-pE8/view?usp=sharing">
                      Emil Zapata
                    </a>
                    <br />
                    <a href="https://drive.google.com/drive/folders/1es2WIAlQNUilZT24vMRVlEhjNxuU9WzO?usp=sharing">
                      Wilver Roberto Sanchez
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="col1">Artículo.</td>
                  <td className="col2">
                    <a href="https://drive.google.com/drive/folders/1YFbLPK8dKlITKFYlYRt_inr5OlDbMGf1?usp=sharing">
                      Emil Zapata
                    </a>
                    <br />
                    <a href="https://drive.google.com/drive/folders/1YFbLPK8dKlITKFYlYRt_inr5OlDbMGf1?usp=sharing">
                      Wilver Roberto Sanchez
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="col1">Formato de inscripción tesis.</td>
                  <td className="col2">
                    <a href="https://drive.google.com/drive/folders/1s-vueVBhsRc1B1nl7to5d9FawIUPlUxU?usp=sharing">
                      Emil Zapata
                    </a>
                    <br />
                    <a href="https://drive.google.com/drive/folders/1s-vueVBhsRc1B1nl7to5d9FawIUPlUxU?usp=sharing">
                      Wilver Roberto Sanchez
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="col1">Video exposición.</td>
                  <td className="col2">
                    <a href="https://drive.google.com/drive/folders/1aIbXuIrs0-qQjMcDX5KYyEUDc2pFUJ5F?usp=sharing">
                      Emil Zapata
                    </a>
                    <br />
                    <a href="https://drive.google.com/drive/folders/1aIbXuIrs0-qQjMcDX5KYyEUDc2pFUJ5F?usp=sharing">
                      Wilver Roberto Sanchez
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <aside className="col-2">
          <h5>Otros grupos</h5>

          {otherGroups.map((group, index) => (
            <div
              className="border border-primary link-group"
              key={index}
              onClick={() => handleGroupLink(group.linkPage)}
            >
              <h3>{group.name}</h3>
              <hr />
              <ul>
                {group.members.map((member, index2) => (
                  <li key={index2}>{member}</li>
                ))}
              </ul>
            </div>
          ))}

          <VisitsCounterCountry />
        </aside>
      </div>
    </div>
  );
}
