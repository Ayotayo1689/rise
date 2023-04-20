import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Logsign.css"
import eyeOpen from "../images/eyeOpen.png"
import eyeClose from "../images/eyeClose.png"

const LoginSignup = () => {
    const [signup, setSignup] = useState(false)
    const openSignup =()=>{
        setSignup(!signup)
    }
    const [password, setpassword] = useState(true)
    const openpassword =()=>{
        setpassword(!password)
    }
  return (
    <div className='sign-log'>
        <div className="log-txt">
            <div className="logo" style={{color:"white",fontSize:"45px"}}>
                Logo
            </div>
            <h1>Dollar investments that help you grow</h1>
        </div>
        <div className="log-sign-page">
            {signup ? <div className="login">
                <h1>Create your account</h1>
                <p className="first-p">
                Let's get you logged in to get back to building your dollar-denominated investment portfolio.</p>
                <input type="text" placeholder='Enter email...' />
                <div className="password">
                <input type={password? "password": "text"} placeholder='Password...' className='input'/><div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                </div>
                <button>Sign Up</button>
                {/* <p>I forgot my password</p> */}
                <p>Already have an account? <span onClick={openSignup}>Login</span></p>
            </div> :  <div className="login">
                <h1>Welcome back</h1>
                <p className="first-p">
                Let's get you logged in to get back to building your dollar-denominated investment portfolio.</p>
                <input type="text" placeholder='Enter email...' />
                <div className="password">
                <input type={password? "password": "text"} placeholder='Password...' className='input'/><div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                </div>
                 <Link className="btnLink" to="/dashboard"><button>Login</button></Link>
                <Link>I forgot my password</Link>
                <p>Don't have an account? <span onClick={openSignup}>Sign up</span></p>
            </div>}

            
        </div>
       
    </div>
  )
}

export default LoginSignup