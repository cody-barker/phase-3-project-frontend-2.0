import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">Crop Table</NavLink>
            <NavLink to="/farmtable">Farm Table</NavLink>
            <NavLink to="/add">Add a Farm or Bed</NavLink>
            <NavLink to="/updateafarm">Update a Farm</NavLink>
        </nav>
    )
}

export default NavBar