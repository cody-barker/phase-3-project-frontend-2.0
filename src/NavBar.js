import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">View Farms</NavLink>
            <NavLink to="/addafarm">Add a Farm</NavLink>
        </nav>
    )
}

export default NavBar