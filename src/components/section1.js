import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { Section1S } from "./Styles"

const Section1 = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
      
    
      setTimeout(() =>{
        setAnimate(true);
      }, 500)
    }, [])
    
  return (
    <Section1S>
      <div className="items">
        <div className={`item animacion`}>
          <div className="title">
            <h3>Transparencia</h3>
          </div>
          <div className="content">
            <img src="../images/sipot.png" alt="" />
            <img src="../images/inai.png" alt="" />
          </div>
          <div className="button">
            <button className="btn"><i className="fa-solid fa-eye fa-flip-horizontal" /> <p>Ver mas detalles</p></button>
          </div>
        </div>
        <div className="item animacion">
          <div className="title">
            <h3>Normatividad del S.N.T.S.A.</h3>
          </div>
          <div className="content">
            <img src="../images/logo2.png" alt="" />
          </div>
          <div className="button">
          <button className="btn"><i className="fa-solid fa-eye fa-flip-horizontal" /> <p>Ver mas detalles</p></button>
          </div>
        </div>
        <div className="item animacion">
          <div className="title">
            <h3>Tabulador de Sueldos y Salarios 2018</h3>
          </div>
          <div className="content">
            <img src="../images/tabu.png" style={{width:200}} alt="" />
          </div>
          <div className="button">
          <button className="btn"><i className="fa-solid fa-eye fa-flip-horizontal" /> <p>Ver mas detalles</p></button>
          </div>
        </div>
      </div>
    </Section1S>
  )
}

export default Section1
