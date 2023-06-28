
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import "./App.css"
import LoginSignup from './pages/LoginSignup';
import AboutUs from './pages/AboutUs';
import InvestmentClub from './pages/InvestmentClub';
import Faq from './pages/Faq';
import DashHome from './pages/dashboard/Dashpages/DashHome';
import Profile from './pages/dashboard/Dashpages/Profile';
import Transactions from './pages/dashboard/Dashpages/Transactions';


const  App = ()=> {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faqs" element={<Faq />} />
        <Route path="investment-club" element={<InvestmentClub />} />
        <Route path="dashboard" element={<DashHome />} />
        <Route path="dashboard/profile" element={<Profile />} />
        <Route path="dashboard/transactions" element={<Transactions />} />

      </Routes>
    </div>
  );
}

export default App;