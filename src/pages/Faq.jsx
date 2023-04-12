import React from 'react'
import SimpleAccordion from '../components/AccodionFirst'
import AccordionSec from '../components/AccodionSec'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./faq.css"

const Faq = () => {
  return (
    <div>
        <Navbar />
        <div className="got">
            <h1>Got Questions?</h1>
            <p>Answers and advice from the Rise Vest Team</p>
        </div>
        <div className="width">
            <SimpleAccordion />
            <h1 style={{color:'#08b69c',fontSize:'40px',fontWeight:"500",margin:'60px 0'}}>Rise Wallet</h1>
            <AccordionSec />
            <div className="got-more">
                <h2 style={{fontWeight:"400",fontSize:"30px"}}>Got more questions ?</h2>
                <div className="join" style={{color:"white"}}>Find Answers here</div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Faq