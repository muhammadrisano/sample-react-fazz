import React from 'react'
import './btn.css'

function Button({title, onClick, color}) {
  return (
    <div>
      <button className={`btn ${color ? color : ''} `} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
