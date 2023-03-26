import React from "react"

const Title = ({ children, color }) => {
  return (
    <div>
      <div className="titleCont">
        <h1>{children}</h1>
      </div>
      <div
        className="titleSquare"
        style={{ background: `${color !== "" ? color : ""}` }}
      />
    </div>
  )
}

export default Title
