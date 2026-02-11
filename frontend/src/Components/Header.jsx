import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <img className="LOGO" src='logo.avif'></img>
      <nav className='nav-menu'>
        <a href="/" className='nav-link'>Home</a>
        <a href="/menu" className='nav-link'>Menu</a>
        <a href="/about" className='nav-link'>About us</a>
        <a href="/contact" className='nav-link'>Contact us</a>
      </nav>
      <div className='empty-space'>{/* This div balances the layout */}</div>
    </header>
  )
}

export default Header