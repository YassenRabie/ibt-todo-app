import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/calendar" className="link">Calendar</Link>
         </div>
      </nav>
   )
}

export default Navbar
