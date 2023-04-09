import React from 'react'
import Navbar from '../components/Navbar'
import phone from "../images/about.png"
import test1 from "../images/testimonial-one.53081735.png"
import test2 from "../images/testimonial-two.72f1cdb5.png"
import test3 from "../images/testimonial-three.70574415.png"
import Footer from '../components/Footer'
import phonefoot from "../images/rise-app-phone.c7dc0912.webp"


const InvestmentClub = () => {
  return (
    <div>
        <Navbar />
        <div className="width">
            <div className="home-head" style={{marginBottom:"20px"}}>
        <div className="home-first">
            <h1 className="first-head" style={{color:'black',fontSize:"45px"}}>
            Join the Rise Telegram Community
            </h1>
            <p className="first-p">
            The telegram group was built because Rise understands that the journey to building wealth does not have to be lonely, and when you have questions on wealth building and accumulation, you don’t have to look far. The Rise investment club and its community are there to educate you on your investment questions.
            </p>
            <button className='join' style={{color:"white", fontWeight:"600"}}>
           Join the commumity
        </button>
        </div>
        <img src={phone} alt="" className="about-img" />
       </div> 
       <h1 className="home-sec1-h1" style={{textAlign:"center",marginBottom:'20px'}}>
       What our community offers
        </h1>
        <div className="about-teal">
            <div className="teal-img">

            </div>
            <div className="teal-txt">
                <h2>Teal Gang Investment Fridays</h2>
                <p>Investing is about money management and we know it can be a bit complex, so on Fridays, we break down investment terms in relatable tones so you can understand how investment works.</p>
            </div>
        </div>
        <h1 className="home-sec1-h1" style={{textAlign:"center",margin:'80px 0'}}>
        Hear From our Members
        </h1>
        <div className="testimonies">
            <div className="testimony">
                <div className="test-p">
                The telegram community has helped me in my wealth-growth journey. I have been able to increase my knowledge and net worth as a result of the quality information I receive from the group. Between The TGIF sessions, the Sunday school class book review and the conversations between members of the telegram group, you can't remain the same!
                </div>
                <div className="test-info">
                    <img src={test1} alt="" className="test" />
                    <div className="name">Babajide</div>
                </div>
            </div>
            <div className="testimony">
                <div className="test-p">
                For me, the Rise Telegram Community serves as a great platform to soak up lots of invaluable information about finance, investments, savings, stock market, real estate and everything in between. I think there are members of the community that never sleep!
                </div>
                <div className="test-info">
                    <img src={test2} alt="" className="test" />
                    <div className="name">Jesse</div>
                </div>
            </div>
            <div className="testimony">
                <div className="test-p">
                A highlight for me as a Risevest user is the telegram group. Over here nobody is left behind when it comes to financial literacy, understanding the app and services provided by the risevest team.
                </div>
                <div className="test-info">
                    <img src={test3} alt="" className="test" />
                    <div className="name">Lade</div>
                </div>
            </div>
        </div>
        <div className="home-sec7" style={{marginTop:"100px"}}>
       <div className="home-sec home-sec-pos">
       <h1 className="">
       Join our 200,000+ users investing and setting long term goals!
        </h1>
        <p className="first-p">
        Dollar investments that help you grow
        </p>
        <div className="first-btns">
                <button className='btn1'> Login </button>
                <button className='btn2'> Sign Up </button>
            </div>
       </div>
       <img src={phonefoot} alt="aly" className="phone" />
       </div>
       <Footer />
        
        </div>
       
    </div>
  )
}

export default InvestmentClub;