import React from "react"
import Title from "./Title"
import "./docuements.css"
import Document from "./Document"
const documentsInfo = [
  {
    title: "Estatuto General",
    link:'/'
  },
  {
    title: "Condiciones Generales de Trabajo",
    link:'http://dgrh.salud.gob.mx/Normatividad/CondicionesGeneralesdeTrabajo2016.pdf'
  },
  {
    title: "Reglamento de Procedimientos Electorales del SNTSA",
    link:'https://drive.google.com/file/d/0B6K44FkqN7Z8RU8tbHlBZEg1V0E/view'
  },
  {
    title: "Reglamento de Fondo de Auxilio por Defunción",
    link:'https://www.scribd.com/document/330897833/Reglamento-Fondo-de-Auxilio-de-Defuncion'
  },
  {
    title: "Reglamento de Becas",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-BECAS-DE-LA-SS.pdf'
  },
  {
    title: "Reglamento de Asistencia",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-ASISTENCIA-DE-LA-SS.pdf'
  },
  {
    title: "Reglamento de Capacitación",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-CAPACITACION-DE-LA-SS.pdf'
  },
  {
    title: "Reglamento de Escalafón",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-ESCALAFON-DE-LA-SS.pdf'
  },
  
  {
    title: "Reglamento de Productividad",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-PRODUCTIVIDAD-DE-LA-SS.pdf'
  },
  {
    title: "Reglamento de Seguridad e Higiene",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-SEGURIDAD-E-HIGIENE-DE-LA-SS.pdf'
  },
  {
    title: "Reglamento de Vestuario y Equipo",
    link:'http://dgrh.salud.gob.mx/Normatividad/REGLAMENTO-DE-VESTUARIO-Y-EQUIPO-DE-LA-SS.pdf'
  },
  {
    title: "Manual para prevenir riesgos y otorgamientos de derechos adicionales",
    link:'http://dgrh.salud.gob.mx/Normatividad/MANUAL-PARA-PREVENIR-RIESGOS-Y-OTORGAMIENTO--DERECHOS-ADICIONALES-DE-LA-SS.pdf'
  },

  
]
const Documents = () => {
  return (
    <div className="page" id="docs">
      <div className="page-container items-center">
        <div className="title-container" >
          <Title>Documentos Basicos</Title>
        </div>
        <div className="docs-container">
          {documentsInfo.map((doc, i) => {
            return <Document key={i} url={doc.link}>{doc.title}</Document>
          })}
        </div>
      </div>
    </div>
  )
}

export default Documents
