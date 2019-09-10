import React from 'react'
import './navbar.css'
import logo from '../../../assets/logo.png'

const NavBar = () => {
  return (
    <nav>
      <nav className="navbar">
        <div className="dropdown">
          <img
            alt="menu"
            className="menu"
            src="https://www.malavasig.it/WP/wp-content/uploads/2017/09/mobile_menu.png"
          />
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/guides">Guide</a>
            <a href="/places">Places</a>
            <a href="/arabic-words">Arabic Words</a>
          </div>
        </div>
        <img alt="logo" src={logo} className="logo" />
        <h1>HEBRON MUST-SEE</h1>
      </nav>
    </nav>
  )
}

export default NavBar