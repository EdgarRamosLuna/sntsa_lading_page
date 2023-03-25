import React from "react"

const Title = ({ children }) => {
  return (
    <div>
      <div className="titleCont">
        <h1>{children}</h1>
      </div>
      <div className="titleSquare" />
    </div>
  )
}

export default Title
