import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="menu-container">
      <div className="menu">
        <div className="logo">
          <StaticImage
            src="../images/logo2.png"
            loading="eager"
            width={64}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Quienes Somos</Link>
          </li>
          <li>
            <Link to="/">Documentos Básicos</Link>
          </li>
          <li>
            <Link to="/">Transparencia</Link>
          </li>
          <li>
            <Link to="/">Estructura Orgánica</Link>
          </li>
          <li>
            <Link to="/">Aviso de Privacidad</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
