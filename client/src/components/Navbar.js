import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
      <Link to="/"><h1>Yoba Tech Blog</h1></Link> 
      <nav ref={navRef}>
     
      
          <Link to="/home">Home</Link>
          <Link to="/create">New Blog</Link>
          <Link to="/log">Login/Signup</Link>
          <Link to="/">About</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar