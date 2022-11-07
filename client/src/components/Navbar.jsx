import React from 'react'
import {NavLink} from "react-router-dom"
import "./Styles.css"

function Navbar() {
  return (
    <div className='Navbar'>
     <nav>
      <NavLink className="navlink" to="/Home">Home</NavLink>
      <NavLink className="navlink" to="/Login">Login</NavLink>
      <NavLink className="navlink" to="/Signup">Signup</NavLink>
      <NavLink className="navlink" to="/Analytics">Signup</NavLink>
     </nav>
    </div>
  )
}

export default Navbar