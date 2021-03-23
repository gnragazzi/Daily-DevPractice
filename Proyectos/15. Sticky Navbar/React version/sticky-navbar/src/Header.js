import React from 'react'
import Navbar from './Navbar'

function Header({ isSticky }) {
  return (
    <header>
      <div className='hero'>
        <h1>Scroll Down</h1>
        <h4>Scroll down to see the sticky effect.</h4>
      </div>
      <Navbar isSticky={isSticky} />
    </header>
  )
}

export default Header
