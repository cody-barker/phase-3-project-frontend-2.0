import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/addafarm">Add a Farm</NavLink>
        </nav>
    )
}

export default NavBar