import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
const HeaderComponent = () => {
  //   console.log(menu);
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Get the menu element
    const menu = document.querySelector("#menu")

    // Get the initial offset position of the menu
    const stickyOffset = menu.offsetTop + menu.offsetHeight

    const handleScroll = () => {
      // Check if the user has scrolled past the offset position
      if (window.pageYOffset >= stickyOffset) {
        // Add the sticky class to the menu
        setSticky(true)
      } else {
        // Remove the sticky class from the menu
        if (window.pageYOffset === 0) {
          setSticky(false)
          setMActive(1)
        }
      }
    }

    // Attach the onscroll event to the window object
    window.addEventListener("scroll", handleScroll)

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const [mActive, setMActive] = useState(1)
  return (
    <header id="inicio">
      <div className="menu-container">
        <nav id="menu" className={`menu ${isSticky ? "sticky" : ""}`}>
          <div className={`logo logo${isSticky ? "-sticky" : "-nosticky"}`}>
            <div className="logo-container">
              <Link to="/">
                <StaticImage
                  src="../images/logo2.png"
                  loading="eager"
                  placeholder="blurred"
                  layout="fixed"
                  width={125}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  style={{ marginBottom: `var(--space-3)` }}
                />
              </Link>
            </div>
          </div>
          <ul className="menu-items">
            <li className={`${mActive === 1 && 'active-menu'}`} onClick={() => setMActive(1)}>
              <AnchorLink to="/#inicio">Inicio</AnchorLink>
            </li>
            <li className={`${mActive === 2 && 'active-menu'}`} onClick={() => setMActive(2)}>
              <AnchorLink to="/#team">Quienes Somos</AnchorLink>
            </li>
            <li className={`${mActive === 3 && 'active-menu'}`} onClick={() => setMActive(3)}>
              <Link to="/">Documentos Básicos</Link>
            </li>
            <li className={`${mActive === 4 && 'active-menu'}`} onClick={() => setMActive(4)}>
              <Link to="/">Transparencia</Link>
            </li>
            <li className={`${mActive === 5 && 'active-menu'}`} onClick={() => setMActive(5)}>
              <Link to="/">Estructura Orgánica</Link>
            </li>
            <li className={`${mActive === 6 && 'active-menu'}`} onClick={() => setMActive(6)}>
              <Link to="/">Aviso de Privacidad</Link>
            </li>
            <li className={`${mActive === 7 && 'active-menu'}`} onClick={() => setMActive(7)}>
              <Link to="/">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
