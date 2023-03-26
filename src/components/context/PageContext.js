import React, { createContext, useEffect, useState } from "react"
import { useRef } from "react"

// Crea un contexto
export const PageContext = createContext()

// Crea un componente que provee el contexto
export const PageProvider = ({ children }) => {
  const [value, setValue] = useState("Valor inicial")
  const [activeM, setActiveM] = useState("home")
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]
  const [active, setActive] = useState(false)
  const [mActive, setMActive] = useState(1)
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //console.log(entry.target.id)
        const actualId = entry.target.id
        //  console.log(actualId)
        /*if(entry.intersectionRatio >= 0.8){
            setMActive(5)
        }*/
        switch (actualId) {
          case "home":
            setMActive(1)
            break
          case "about":
            setMActive(2)
            break
          case "docs":
            setMActive(3)
            break
          case "transp":
            setMActive(4)
            break
          case "org":
            setMActive(5)
            setActive(true)
            break
          case "priv":
            setMActive(6)
            break
          case "contact":
            setMActive(7)
            break

          default:
            break
        }
      } else {
        //   console.log("Element is no longer visible!")
      }
    })
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-150px 0px -633px 0px",
      //threshold:
    }

    const observer = new IntersectionObserver(callback, options)

    for (let i = 0; i < refs.length; i++) {
      observer.observe(refs[i].current)
    }
    return () => {
      for (let i = 0; i < refs.length; i++) {
        observer.unobserve(refs[i].current)
      }
    }
  }, [refs])
  //const [active, setActive] = useState(false)
  return (
    <PageContext.Provider
      value={{
        value,
        setValue,
        refs,
        active,
        setActive,
        activeM,
        mActive,
        setMActive,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
