import React from 'react'
import Navbar from '../components/Navbar'
import "./About.css"
import phone from "../images/rise-app-phone.c7dc0912.webp"
import ceo1 from "../images/ceo-1.jpg"
import ceo2 from "../images/ceo-2.jpg"
import ceo3 from "../images/ceo-3.jpg"
import ceo4 from "../images/ceo-4.jpg"
import Footer from '../components/Footer'


const AboutUs = () => {
  return (
    <div className="">
        <Navbar />
        <div className="abt-head">
            <div className="abt-txt">
            <h1 className="" style={{fontSize:"45px"}}>
            Our Mission
            </h1>
            <p className="" style={{fontSize:"20px"}} >
            Our mission at Rise is to connect our users to the best wealth creating opportunities in the world. Our goal is to help them create wealth and achieve their financial goals.
            </p>
            </div>
            <div className="abt-empty">

            </div>
        </div>
        <div className="width" style={{marginTop:"80px"}}>
            <div className="four">
                <div className="four-img">
                    <div className="img">
                        <div className="img1"></div>
                        <div className="img2"></div>
                    </div>
                    <div className="img">
                        <div className="img3"></div>
                        <div className="img4"></div>
                    </div>
                </div>
                <div className="four-img-txt">
                    <h1 style={{fontWeight:"400"}}>About Us</h1>
                    <p>The product and company known as Rise today began with an idea that sparked in 2014. We realized that due to currency shocks, high inflation rates and the impact of devaluation, most investment opportunities across emerging markets do not yield enough returns for investors to grow their wealth. This makes it difficult for people in these markets to achieve their financial goals.</p>

                    <p>To solve this problem, we built Rise as a simple way of connecting our users to dollar-denominated investments in developed markets, managed by a world class team using smart algorithms to guide our decisions, while helping our users become more financially literate.</p>
                </div>
            </div>
        </div>
        <div className="width">
        <h1 style={{fontSize:"45px", textAlign:'center', margin:"70px 0",fontWeight:"400"}}>Quick Facts</h1>
        <ul className="icons">
            <li>
            <div className="svg-border">
            <svg width="1.125em" height="1.375em" viewBox="0 0 18 22" fill="none" class="text-primary"><path clip-rule="evenodd" d="M1 1v20V1zm0 1.522C5.433.594 11.566 4.783 17 2.681l-4 4.748 4 3.892c-5.233 2.218-11.567-1.872-16 .029V2.522z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
                <p>Founded in 2019</p>
            </li>

            <li>
            <div className="svg-border">
            <svg width="1.375em" height="1.375em" viewBox="0 0 22 22" fill="none" class="text-primary"><path d="M5 3.355l1.043 1.77L5 9.082l2 1.98-.957 3.958L3.213 17M19 5.103l-3.778.659-2.074 1.415-2.074-2.074V2.881L9 1.407m2.525 8.94l3.97.248.52 2.036.959.787-1.192 1.278-.505 2.193-2.82 1.856.421-4.736-2.852-.778 1.5-2.885zM11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
                <p>200,000+ people are investing with Rise</p>
            </li>

            <li>
            <div className="svg-border">
            <svg width="1.375em" height="1.375em" viewBox="0 0 22 22" fill="none" class="text-primary"><path d="M1 21s1.818-4 5-4c2.545 0 4.218 2.561 4.785 3.584l.105.195c.073.14.11.221.11.221s1.818-4 5-4c2.545 0 4.218 2.561 4.785 3.584l.105.195c.073.14.11.221.11.221M6.999 9.382C7.845 8.272 9.205 7 11 7c1.793 0 3.152 1.271 3.998 2.379M6.025 11l.132.006a2.027 2.027 0 011.901 1.918C8.139 14.336 7.18 15.5 6 15.5c-1.185 0-2.14-1.169-2.058-2.576C4.006 11.827 4.89 11 6 11h.025zm9.97-.009L16 11c1.109 0 1.994.827 2.058 1.924.081 1.412-.878 2.576-2.058 2.576-1.185 0-2.14-1.169-2.058-2.576.063-1.088.934-1.91 2.032-1.923l.021-.01zM11 1c1.109 0 1.994.827 2.058 1.924C13.139 4.336 12.18 5.5 11 5.5c-1.185 0-2.14-1.169-2.058-2.576C9.006 1.827 9.89 1 11 1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
                <p>Team of 52</p>
            </li>

            <li>
            <div className="svg-border">
            <svg width="1.375em" height="0.875em" viewBox="0 0 22 14" fill="none" class="text-primary"><path d="M21 1l-7.997 8.015-4-4.013L1 13M21 1h-6m6 0v6" stroke="currentColor" stroke-linecap="square"></path></svg>
            </div>
                <p>Stocks portfolio: 30.19% YTD (2021)</p>
            </li>

            <li>
            <div className="svg-border">
            <svg width="1.25em" height="1.375em" viewBox="0 0 20 22" fill="none" class="text-primary"><path clip-rule="evenodd" d="M7 21H1V8l9-7 9 7v13h-6v-8H7v8z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
                <p>
Real Estate portfolio: 11.39% YTD (2021)</p>
            </li>
        </ul>
        <h1 style={{fontSize:"45px", textAlign:'center', margin:"70px 0",fontWeight:"400"}}>Meet the Team</h1>
        </div>
        <div className="width">
        <div className="teams">
            <div className="team">
                <img src={ceo1} alt="" />
                <div className="name-post">
                    <div className="name">
                        Ayotayo Badejo
                    </div>
                    <div className="post">
                        Founder & CEO
                    </div>
                </div>
            </div>

            <div className="team">
                <img src={ceo2} alt="" />
                <div className="name-post">
                    <div className="name">
                        Ayotayo Badejo
                    </div>
                    <div className="post">
                    Co-founder & CTO
                    </div>
                </div>
            </div>

            <div className="team">
                <img src={ceo3} alt="" />
                <div className="name-post">
                    <div className="name">
                        Ayotayo Badejo
                    </div>
                    <div className="post">
                    Co-founder & Head of Product
                    </div>
                </div>
            </div>

            <div className="team">
                <img src={ceo4} alt="" />
                <div className="name-post">
                    <div className="name">
                        Ayotayo Badejo
                    </div>
                    <div className="post">
                    Head of Admin & Operations
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="people">
                <p>Rise is built and maintained <br/> by these amazing people</p>
        </div>
        <div className="width">
        <div className="home-sec7" style={{marginTop:"80px"}}> 
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
       <Footer />
        </div>
    </div>
  )
}

export default AboutUs