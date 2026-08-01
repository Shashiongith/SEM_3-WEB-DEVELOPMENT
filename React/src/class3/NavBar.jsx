import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id='navbar'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/list'><li>Product List</li></Link>
    </div>
  )
}

export default NavBar