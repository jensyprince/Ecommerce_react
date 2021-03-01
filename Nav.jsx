import React from 'react'
import {NavLink} from 'react-router-dom'
import prince from '../../assets/images/prince.jpg'

const Nav = () => {
    return (
        <nav>
            <div class="navbar">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/products">Shoes</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <img className="Logo" src={prince} alt="logo" />
            </div>
        </nav>
    )
}

export default Nav