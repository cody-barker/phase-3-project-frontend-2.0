import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">View Farms</NavLink>
            <NavLink to="/add">Add a Farm or Bed</NavLink>
            <NavLink to="/update">Update a Farm or Bed</NavLink>
            <NavLink to="/remove">Remove a Farm</NavLink>
        </nav>
    )
}

export default NavBar