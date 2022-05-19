import React, { useState } from "react";
import Logo from './Images/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <div className="navbar">
        <a href="/" className="logo">
            <img src={Logo} alt='logo'/>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={32}/>) : (<FaBars size={28}/>)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
                <a href='/'>Home</a>
            </li>
            <li className="nav-items">
                <a href='/'>About</a>
            </li>
            <li className="nav-items">
                <a href='/'>Contact</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
