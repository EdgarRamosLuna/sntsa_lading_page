import React from "react"

const Document = ({ children, url }) => {
  const handleClick = () => {
    window.open(`${url}`, "_blank");
  }
  return (
    <div className="docs">
      <div className="doc-item" onClick={handleClick}>
        <div className="doc-ico">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <div className="doc-txt">{children}</div>
      </div>
    </div>
  )
}

export default Document
