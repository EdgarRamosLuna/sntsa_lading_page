import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useEffect, useState } from "react"
import Title from "./Title"
import "./org.css"
const OrgStructure = () => {
  const elementRef = useRef(null)
  const [active, setActive] = useState(false)
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       // console.log(entry)
        //console.log("Element is now visible!")
        setActive(true)
        // Perform any actions you want to happen when the element enters the viewport
      } else {
      //  console.log("Element is no longer visible!")
        // Perform any actions you want to happen when the element exits the viewport
      }
    })
  }
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(elementRef.current)

    return () => {
      observer.unobserve(elementRef.current)
    }
  }, [])

  return (
    <div className="page-container" ref={elementRef}>
      <div className="title-container"id="org" >
        <Title>Estructura Orgánica</Title>
      </div>
      {active === true && (
        <div className={`org-container animacion`}>
          <StaticImage
            src="../../images/org.png"
            loading="eager"
            placeholder="blurred"
            layout="fixed"
            height={600}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
      )}
    </div>
  )
}

export default OrgStructure
