import React from 'react';
import Navbar from "../components/Navbar"
import "./Home.css"
import phone from "../images/rise-app-phone.c7dc0912.webp"
import img1 from "../images/arm.8cab85c6.png"
import img2 from "../images/western-union.e354fcb4.png"
import img3 from "../images/techstars.07536835.png"
import img4 from "../images/ventures-platform.b4ebf517.png"
import img5 from "../images/invest-in-dollars.726b66ca.svg"
import img6 from "../images/whats-best-for-you.4863f121.svg"
import img7 from "../images/set-goals.3e8a5231.svg"
import img8 from "../images/we-remember-for-you.998f7ca0.svg"
import { Link } from 'react-router-dom';
import stocks from "../images/stocks-icon.dee030b1.webp"
import estate from "../images/real-estate-icon.382d8df1.webp"
import fixed from "../images/fixed-income-icon.14b9f14d.webp"
import wealth from "../images/build-wealth-phone.b70d50a3.webp"
import test1 from "../images/testimonial-one.53081735.png"
import test2 from "../images/testimonial-two.72f1cdb5.png"
import test3 from "../images/testimonial-three.70574415.png"
import rise from "../images/rise-community.bac1270e.webp"
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="Home">
       <Navbar />
       <div className="home-head">
        <div className="home-first">
            <h1 className="first-head">
              Dollar investments  that help you grow
            </h1>
            <p className="first-p">
            We put your money in high quality assets that help you build wealth and achieve your financial goals.
            </p>
            <div className="first-btns">
                <Link to="/Login"><button className='btn1'> Login </button></Link>
                <Link to="/Login"><button className='btn2'> Sign Up </button></Link>
            </div>
        </div>
        <img src={phone} alt="" className="first-img" />
       </div>
       <div className="width">
       <div className="companies">
            <img src={img1} alt="" className='img1' />
            <img src={img2} alt="" className='img2' />
            <img src={img3} alt="" className='img3' />
            <img src={img4} alt="" className='img4' />
       </div>
       </div>
       <div className="home-sec1">
       <div className="home-sec">
       <h1 className="home-sec1-h1">
        Invest your money in dollars
        </h1>
        <p className="first-p">
        By holding your investments in a stable currency, your money grows more over time and retains its value better.
        </p>
        <Link className='sec-link'>
            Start investing now
        </Link>
       </div>
       <img src={img5} alt="aly" className="img5" />
       </div>
       
       <div className="home-sec2">
       <div className="home-sec">
       <h1 className="home-sec1-h1">
       Choose what's best for you
        </h1>
        <p className="first-p">
        Unlike other platforms, Bitstock lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.
        </p>
        <Link className='sec-link'>
            Start investing now
        </Link>
       </div>
       <img src={img6} alt="aly" className="img5" />
       </div>

       <div className="home-sec1">
       <div className="home-sec">
       <h1 className="home-sec1-h1">
       Set goals and reach them
        </h1>
        <p className="first-p">
        You can invest towards a goal on Bitstock--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.
        </p>
        <Link className='sec-link'>
            Start investing now
        </Link>
       </div>
       <img src={img7} alt="aly" className="img5" />
       </div>

       <div className="home-sec2">
       <div className="home-sec">
       <h1 className="home-sec1-h1">
       We remember so you dont have to
        </h1>
        <p className="first-p">
        Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Bitstock will automatically fund your investment, on schedule.
        </p>
        <Link className='sec-link'>
            Start investing now
        </Link>
       </div>
       <img src={img8} alt="aly" className="img5" />
       </div>
<div className="width">
    <h1 className="asset" style={{fontSize:'40px',textAlign:'center',marginTop:'80px'}}>
            Asset Classes
       </h1>
       <p className="first-p" style={{textAlign:'center',margin:'20px 0 50px  0'}}>
            It’s your money, choose where you invest it
       </p>
       <div className="sec2">
        <div className="sec2-pt sec2-pt1">
            <img src={stocks} alt="" className="stocks" />
            <div className="sec-body">
            <h1 className="asset" style={{fontSize:'30px',textAlign:'center',margin:'60px 0 15px 0'}}>
            Stocks
       </h1>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       We help you ,invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Historical Returns:</span>14% Per Annum
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Risk Level:</span>High
       </p>
       <Link className='sec-link'>
            Learn how Stocks works
        </Link>

            </div>

        </div>
        <div className="sec2-pt sec2-pt2">
            <img src={estate} alt="" className="stocks" />
            <div className="sec-body">
            <h1 className="asset" style={{fontSize:'30px',textAlign:'center',margin:'60px 0 15px 0'}}>
            Real Estate
       </h1>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Historical Returns:</span>14% Per Annum
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Risk Level:</span>Medium
       </p>
       <Link className='sec-link'>
            Learn how Real Estate works
        </Link>
            </div>

        </div>
        <div className="sec2-pt sec2-pt3">
            <img src={fixed} alt="" className="stocks" />
            <div className="sec-body">
                <h1 className="asset" style={{fontSize:'30px',textAlign:'center',margin:'60px 0 15px 0'}}>
                Fixed Income
       </h1>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Historical Returns:</span>10% Per Annum
       </p>
       <p className="first-p" style={{textAlign:'center',fontSize:'17px'}}>
       <span className='grey'>Risk Level:</span>Low
       </p>
       <Link className='sec-link'>
            Learn how Fixed Income works
        </Link>
            </div>

        </div>
       </div>
</div>
       
       <div className="sec3">
        <img src={wealth} alt="" />
       <div className="home-sec3 ">
       <h1 className="home-sec1-h1">
       Save for your future
        </h1>
        <p className="first-p">
        With Bitstock, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
        </p>
        <button className='buttons'>Start Saving</button>
       </div>

       </div>
       <div className="home-sec4">
       <div className="home-sec4p">
       <h1 className="home-sec1-h1" style={{textAlign:"center"}}>
       What comfort do you have?
        </h1>
        <p className="sec4-p">
        We have a professional engagement through a trusteeship agreement with Meristem Trustees Limited, who oversees investments on behalf of users and members of Bitstock Cooperative Multipurpose Society Ltd. All assets are also held in regulated third parties in the relevant jurisdictions.
        </p>
       </div>
       </div>
       <div className="home-sec5p" style={{margin:"80px 0"}}>
       <h1 className="home-sec1-h1" style={{textAlign:"center", color:"#15b4a9",marginBottom:'20px'}}>
       From The People Who Use Bitstock
        </h1>
        <p className="sec4-p" style={{maxWidth:"500px",textAlign:"center",margin:"0 auto"}}>
        Our mission at Bitstock is to empower more people just like you to achieve your personal financial goals.
        </p>
        </div>
        <div className="testimonies">
            <div className="testimony">
                <div className="test-p">
                Like everyone, I want to be protected from currency fluctuations and Bitstock helps me with that. The fixed income and real estate asset classes are my preferred things about Bitstock. I 💚 seeing how my returns perform on a daily basis. It demonstrates safety and also puts me at a lower risk of losing money!
                </div>
                <div className="test-info">
                    <img src={test1} alt="" className="test" />
                    <div className="name">Babajide</div>
                </div>
            </div>
            <div className="testimony">
                <div className="test-p">
                I chose Bitstock because of its leadership, wealth of knowledge and the people who support them. I invest with Bitstock in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.
                </div>
                <div className="test-info">
                    <img src={test2} alt="" className="test" />
                    <div className="name">Jesse</div>
                </div>
            </div>
            <div className="testimony">
                <div className="test-p">
                
I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Bitstock who are skilled and knowledgeable.
                </div>
                <div className="test-info">
                    <img src={test3} alt="" className="test" />
                    <div className="name">Lade</div>
                </div>
            </div>
        </div>
        <div className="home-sec6">
       <div className="home-sec" style={{alignItems:'center'}}>
       <h1 className="home-sec1-h1">
       Choose what's best for you
        </h1>
        <p className="first-p">
        Unlike other platforms, Bitstock lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.
        </p>
        <button className='join'>
           Join our commumity
        </button>
       </div>
       <img src={rise} alt="aly" className="rise" />
       </div>
       <div className="home-sec7">
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
       <img src={phone} alt="aly" className="phone" />
       </div>
       <div className="width">
        <Footer />
       </div>
       
    </div>
  )
}

export default Home