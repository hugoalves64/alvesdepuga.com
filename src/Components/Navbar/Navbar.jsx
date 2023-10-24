import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p>Alves de puga</p>
        </div>

    </div>
  )
}
