import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { PageContext } from "../context/PageContext"
import "./cont.css"
import Title from "./Title"
const Transp = () => {
    const { refs } = useContext(PageContext)
  return (
    <div className="" >
      <div className="page-container">
        <div className="title-container" id="transp" ref={refs[3]}>
          <Title>Transparencia</Title>
        </div>
        
          <div className="items2">
            <div className={`item animacion`}>
              <div className="title">
                <h3>Sistema de Portales de Obligaciones de Transparencia</h3>
              </div>
              <div className="content">
                <StaticImage
                  src="../../images/sipot.png"
                  height={150}
                  quality={95}
                  alt=""
                  placeholder="blurred"
                  layout="fixed"
                />
              </div>
              <div className="button">
                <a href="https://www.gob.mx/sspc/acciones-y-programas/sistema-de-portales-de-obligaciones-de-transparencia-sipot-194241" target="_blank" rel="noreferrer" className="btn">
                  <i className="fa-solid fa-eye fa-flip-horizontal" />
                  <p>Ver mas detalles</p>
                </a>
              </div>
            </div>
            <div className="item animacion2">
              <div className="title">
                <h3>INAI <br/>&nbsp;</h3>
              </div>
              <div className="content">
                <StaticImage
                  src="../../images/inai.png"
                  height={150}
                  quality={95}
                  alt=""
                  placeholder="blurred"
                  layout="fixed"
                />
              </div>
              <div className="button">
                <a href="http://www.inai.org.mx/" target="_blank" rel="noreferrer" className="btn">
                  <i className="fa-solid fa-eye fa-flip-horizontal" />
                  <p>Ver mas detalles</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Transp
