import React from 'react'
import './input.css'

function Input({ label, type, name, onChange, placeholder}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} onChange={onChange} className="form-control" placeholder={placeholder}/>
    </div>
  )
}

export default Input
