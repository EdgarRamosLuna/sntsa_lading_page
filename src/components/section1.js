import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Section1 = () => {
  // const [animate, setAnimate] = useState(false)

  return (
    <div className="section1">
      <div className="items">
        <div className={`item animacion`}>
          <div className="title">
            <h3>Transparencia</h3>
          </div>
          <div className="content">
            <StaticImage
              src="../images/sipot.png"
              width={200}
              quality={95}
              alt=""
              placeholder="blurred"
              layout="fixed"
            />
            <StaticImage
              src="../images/inai.png"
              width={200}
              quality={95}
              alt=""
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div className="button">
            <AnchorLink to="/#transp" className="btn">
              <i className="fa-solid fa-eye fa-flip-horizontal" />
              <p>Ver mas detalles</p>
            </AnchorLink>
          </div>
        </div>
        <div className="item animacion2">
          <div className="title">
            <h3>Normatividad del S.N.T.S.A.</h3>
          </div>
          <div className="content">
            <StaticImage
              src="../images/logo2.png"
              width={200}
              quality={95}
              alt=""
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div className="button">
            <AnchorLink to="/#about" className="btn">
              <i className="fa-solid fa-eye fa-flip-horizontal" />
              <p>Ver mas detalles</p>
            </AnchorLink>
          </div>
        </div>
        <div className="item animacion3">
          <div className="title">
            <h3>Tabulador de Sueldos y Salarios 2018</h3>
          </div>
          <div className="content">
            <StaticImage
              src="../images/tabu.png"
              width={200}
              quality={95}
              alt=""
              placeholder="blurred"
              layout="fixed"
            />
          </div>
          <div className="button">
            <a
              href="https://sindicatodesalud.org.mx/wp-content/uploads/2018/07/Tabulador-2018.pdf"
              target="_blank"
              className="btn"
            >
              <i className="fa-solid fa-eye fa-flip-horizontal" />
              <p>Ver mas detalles</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
