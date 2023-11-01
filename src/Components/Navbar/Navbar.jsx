import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {

    const [menu,setMenu] = useState("accueil")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p>Alves de puga</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("accueil")}}><Link style={{ textDecoration: 'none'}} to='/'>Accueil</Link>{menu==="accueil"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("guitares")}}><Link style={{ textDecoration: 'none'}} to='/guitares'>Guitares</Link>{menu==="guitares"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("divers")}}><Link style={{ textDecoration: 'none'}} to='/divers'>Divers</Link>{menu==="divers"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("apropos")}}><Link style={{ textDecoration: 'none'}} to='/apropos'>A propos</Link>{menu==="apropos"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("revendeur")}}><Link style={{ textDecoration: 'none'}} to='/revendeur'>Revendeur</Link>{menu==="revendeur"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
        </ul>
    </div>
  )
}
