import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect } from 'react'

const Card = ({children, image, title}) => {

    const logo = image
    
  return (
    <div className='card-item'>
        <div className='card-container'>
            <div className='card-title'>
                <h1>{title}</h1>
            </div>
            <div className='card-img'>
                {image}
            </div>
            <div className='card-text'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Card