import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { PageContext } from "../context/PageContext"
import "./cont.css"
import Map from "./Map"
import MapGoogle from "./Map"
import Title from "./Title"
const Contact = () => {
  const { refs, setMActive, setActive } = useContext(PageContext)
  const place = {
    name: "SNTSA",
    description: "Sindicato Nacional de Trabajadores de la Secretaría de Salud",
    lat: 19.432608,
    lng: -99.133209,
    zoom: 18,
  }
  const handleAcitve = () => {
    setMActive(5)
    setTimeout(() => {
      setActive(true)
    }, 1000)
  }
  return (
    <>
      <div className="page2" id="contact" ref={refs[6]}>
        <div className="page-container">
          <div className="title-container">
            <Title color="#7d242b">
              <span style={{ color: "#2e2e30" }}>Contacto</span>
            </Title>
          </div>
          <div className="contact-info">
            <div className="info-item">
              <span>
                Teléfono: <a href="tel:50808000">50808000</a> ext.{" "}
                <a href="tel:55274">55274</a> y <a href="tel:55275">55275</a>
              </span>
            </div>
            <div className="info-item">
              <span>
                Email:{" "}
                <a href="mailto:transparencia@sindicatodesalud.org.mx">
                  transparencia@sindicatodesalud.org.mx
                </a>
              </span>
            </div>
          </div>
          <div className="map">
            <Map
              lat={19.420900380506993}
              lng={-99.1655750846574}
              place={place}
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="page-container">
          <div className="footer-container">
            <div className="footer-item">
              <div className="logo-footer">
                <StaticImage
                  src="../../images/logo2.png"
                  loading="eager"
                  placeholder="blurred"
                  layout="fixed"
                  width={125}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  style={{ marginBottom: `var(--space-3)` }}
                />
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-item-title"><h4>Enlaces</h4></div>
              <ul className="footer-menu-items">
                <li onClick={() => setMActive(1)}>
                  <AnchorLink to="/#home">Inicio</AnchorLink>
                </li>
                <li onClick={() => setMActive(2)}>
                  <AnchorLink to="/#about">Quienes Somos</AnchorLink>
                </li>
                <li onClick={() => setMActive(3)}>
                  <AnchorLink to="/#docs">Documentos Básicos</AnchorLink>
                </li>
                <li onClick={() => setMActive(4)}>
                  <AnchorLink to="/#transp">Transparencia</AnchorLink>
                </li>
                <li onClick={handleAcitve}>
                  <AnchorLink to="/#org">Estructura Orgánica</AnchorLink>
                </li>
                <li onClick={() => setMActive(6)}>
                  <AnchorLink to="/#priv">Aviso de Privacidad</AnchorLink>
                </li>
                <li onClick={() => setMActive(7)}>
                  <AnchorLink to="/#contact">Contacto</AnchorLink>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <div className="footer-item-title"><h4>Siguenos en</h4></div>
              <div className="footer-item-text">
                <div className="footer-social">
                  <ul>
                    <li>
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact
