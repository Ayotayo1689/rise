import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-side">
      <div className="navbar">
        <div className="logo">
            LOGO
        </div>
        <div className="nav">
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            <Link to="/Login" className="navlink">Login</Link >
            <button className='buttons'>Sign Up</button>
        </div>
        <div className="ham">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>
    <div className="side-bar">

    </div>
    </div>
  )
}

export default Navbar