import React from "react";

import hugoVega from "../../assets/img/Hugo_Vega.jpg";

export default function DetailCourse() {
  return (
    <div id="inf_general">
      <div className="encabezado">
        <h2>FACULTAD DE INGENIERÍA DE SISTEMAS E INFORMATICA</h2>
        <h3>Escuela Académico Profesional de Ingeniería de sistemas</h3>
        <h3 className="segundafila">
          UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
        </h3>
        <h4>
          (Universidad del Perú, <span>DECANA DE AMÉRICA</span>)
        </h4>
      </div>
      <div className="general">
        <br />
        <h5>INFORMACIÓN GENERAL</h5>
        <div className="row">
          <div className="menulateral col-12 col-md-3">
            <h6>INDICE</h6>
            <ol>
              <a href="">
                <li>Sumilla</li>
              </a>
              <a href="">
                <li>Competencia general</li>
              </a>
              <a href="">
                <li>Contenido del curso</li>
              </a>
            </ol>
          </div>
          <div className="cont_general col-md-9">
            <div className="row">
              <div className="col-lg-7">
                <p>
                  <span className="identificador">Nombre del Curso</span> :
                  TESIS II
                </p>
                <p>
                  <span className="identificador">Código de Curso</span> :
                  207008
                </p>
                <p>
                  <span className="identificador">Duración del Curso</span> : 17
                  semanas
                </p>
                <p>
                  <span className="identificador">Forma de Dictado</span> :
                  Técnico - Experimental
                </p>
                <p>
                  <span className="identificador">Horas semanales</span> :
                  Teoría: 3h - Laboratorio: 2h
                </p>
                <p>
                  <span className="identificador">Naturaleza</span> : Formación
                  profesional
                </p>
                <p>
                  <span className="identificador">Número de Créditos</span> :
                  Cuatro (04)
                </p>
                <p>
                  <span className="identificador">Pre-requisitos</span> :
                  205007-Investigación Operativa I
                </p>
                <p>
                  <span className="identificador">Semestre académico</span> :
                  2017-1
                </p>
                <p>
                  <span className="identificador">Profesor</span> : Hugo Vega
                  Huerta
                </p>
              </div>
              <div className="col-lg-5">
                <div className="center">
                  <img
                    className="img-fluid img_prof"
                    src={hugoVega}
                    alt="Profesor Hugo Vega Huerta"
                  />
                  <blockquote>
                    <i>"Dr. Hugo Vega Huerta"</i>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sumilla">
        <div className="row">
          <h5>INTEGRANTES DEL GRUPO 1</h5>
          <br />
          <div className="col-12">
            <table>
              <tr>
                <td className="pr-3">
                  <b>Alumno: </b>
                </td>
                <td className="pr-3">Wilver Roberto Sanchez Huaccho</td>
                <td className="pr-3">
                  <b>Cod: </b>
                </td>
                <td>05200057</td>
              </tr>
              <tr>
                <td>
                  <b>Alumno: </b>
                </td>
                <td>Zapata Emil Helmut</td>
                <td className="pr-3">
                  <b>Cod: </b>
                </td>
                <td>13200082</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="sumilla">
        <div className="row">
          <h5>SUMILLA</h5>
          <p>
            Esta asignatura corresponde al área de formación especializada es de
            naturaleza teórico; tiene el propósito de dar continuidad al
            proyecto iniciado en el curso requisito. Desarrollo de la solución
            propuesta. Discusión de resultados. Elaboración de conclusiones
            alineadas a los objetivos. Elaboración del artículo e informe final.
          </p>
        </div>
      </div>
      <div className="ob_general">
        <div className="row">
          <h5>COMPETENCIA GENERAL</h5>
          <p>
            Al finalizar la asignatura el estudiante estará en la capacidad de
            desarrollar trabajos de investigación aplicados en su área de
            interés, leer, elaborar y redactar artículos científicos, redactar
            coherentemente su trabajo de tesis, exponer y defender sus trabajos
            científicos ante la comunidad académica y profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
