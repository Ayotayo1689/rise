import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            LOGO
        </div>
        <div className="nav">
            <div className="navlink">Home</div>
            <div className="navlink">Products</div>
            <div className="navlink">Investment Club</div>
            <div className="navlink">About Us</div>
            <div className="navlink">FAQs</div>
            <div className="navlink">Blog</div>
            <div className="navlink">Login</div>
            <button className='buttons'>Sign Up</button>
        </div>
        <div className="ham">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>
  )
}

export default Navbar