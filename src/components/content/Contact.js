import React, { useContext } from 'react'
import { PageContext } from '../context/PageContext'
import "./cont.css"
import Title from './Title'
const Contact = () => {
    const { refs } = useContext(PageContext)
  return (
    <div className="page2" id="contact" ref={refs[6]}>
      <div className="page-container">
        <div className="title-container" >
          <Title>Contacto</Title>
        </div>
        
      </div>
    </div>
  )
}

export default Contact