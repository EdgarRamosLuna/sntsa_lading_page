import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useEffect, useState, useContext } from "react"
import Title from "./Title"
import "./org.css"
import { PageContext } from "../context/PageContext"
const OrgStructure = () => {
  const elementRef = useRef(null)
  
  /*const callback = (entries, observer) => {
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
*/
const { refs, active } = useContext(PageContext)
  return (
    <div className="page-container">
      <div className="title-container"id="org" ref={refs[4]}>
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
