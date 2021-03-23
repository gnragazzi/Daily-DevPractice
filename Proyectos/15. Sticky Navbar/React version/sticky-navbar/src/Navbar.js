import React from 'react'

function Navbar({ isSticky }) {
  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky-nav' : ''}`}>
        <a href='#' className='nav-link active'>
          Home
        </a>
        <a href='#' className='nav-link'>
          News
        </a>
        <a href='#' className='nav-link'>
          Contact
        </a>
      </nav>
    </>
  )
}

export default Navbar
