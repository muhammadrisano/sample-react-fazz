import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
