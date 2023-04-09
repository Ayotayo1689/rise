
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import "./App.css"
import LoginSignup from './pages/LoginSignup';
import AboutUs from './pages/AboutUs';
import InvestmentClub from './pages/InvestmentClub';


const  App = ()=> {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="investment-club" element={<InvestmentClub />} />
      </Routes>
    </div>
  );
}

export default App;