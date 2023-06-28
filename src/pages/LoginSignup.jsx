import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Logsign.css"
import eyeOpen from "../images/eyeOpen.png"
import eyeClose from "../images/eyeClose.png"
import axios from 'axios'


const LoginSignup = () => {

//     history.pushState(null, null, document.URL);
// window.addEventListener("popstate", function () {
//   history.pushState(null, null, document.URL);
// });

    const navigate = useNavigate();

    const [logError, setLogError] = useState(false)


    const [signup, setSignup] = useState(false)
    const openSignup =()=>{
        setSignup(!signup)
    }
    const [password, setpassword] = useState(true)
    const openpassword =()=>{
        setpassword(!password)
    }

    const [formDataSignUp, setFormDataSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        ssn: '',
        password: ''
      });

      const [formDataLogin, setFormDataLogin] = useState({
        email: '',
        password: ''
      });

      const handleChangeSignUp = (e) => {
        setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
      };

      const handleChangeLogin = (e) => {
        setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
      };

      const closeErr = () => {
        setLogError(false);
      };

    const handleSignUp = async () => {

        try {
          const response = await axios.post('https://bit-stock-api.vercel.app/users', {
            firstName: formDataSignUp.firstName,
            lastName: formDataSignUp.lastName,
            email: formDataSignUp.email,
            phoneNo: formDataSignUp.phoneNo,
            ssn: formDataSignUp.ssn,
            password: formDataSignUp.password
          });
      
          localStorage.setItem('userId', JSON.stringify(response.data.id));
          navigate('/dashboard');
    
        } catch (error) {
          setLogError(true)
        }
      };

      




    //   axios.get(`https://bit-stock-api.vercel.app/users/${userData.id}/cards/${userData.cardId}`)
    //   .then(function (response) {
    //     // Handle success
    //     setCardData(response.data);
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // Handle error
    //     console.error(error);
    //   });





    //   try {

    //     const loggedIn = localStorage.getItem("userData")
    //     const userData = JSON.parse(loggedIn)


    //     const response =  axios.get(`https://bit-stock-api.vercel.app/users/${userData.id}/cards/${userData.cardId}`)
    //      localStorage.setItem('cardData', JSON.stringify(response.data.id));
    //      console.log("no error")
    //   } catch (error) {
    //     setLogError(true)
    //   }
    // };


      const handleLogin = async () => {
        try {
          const response = await axios.post('https://bit-stock-api.vercel.app/login', {
            email: formDataLogin.email,
            password: formDataLogin.password
          });
      
          localStorage.setItem('userData', JSON.stringify(response.data));
          navigate('/dashboard');
        } catch (error) {
          setLogError(true)
        }
      };




  return (
    <div className='sign-log'>
        <div className="error" style={logError ? {}: {display:"none"}}>
            <div className="error-box">
                An error occurred lease try again
                <button onClick={closeErr}>ok</button>
            </div>
        </div>
        <div className="log-txt">
            <div className="logo" style={{color:"white",fontSize:"45px"}}>
                Logo
            </div>
            <h1>Dollar investments that help you grow</h1>
        </div>
        <div className="log-sign-page">
            {signup ? <div className="login" style={{paddingBottom:"20px"}}> 
                <h1>Create your account</h1>
                <p className="first-p">
                Let's get you registered for your dollar-denominated investment portfolio.</p>
                <div className="flexx">

                <input type="text"
                name="firstName"
                value={formDataSignUp.firstName}
                onChange={handleChangeSignUp}
                placeholder="First Name"/>

                <input
                type="text"
                name="lastName"
                value={formDataSignUp.lastName}
                onChange={handleChangeSignUp}
                placeholder="Last Name"/>

                </div>
                <div className="flexx">
                    <input
                    type="email"
                    name="email"
                    value={formDataSignUp.email}
                    onChange={handleChangeSignUp}
                    placeholder="Email"
                />  

                    <input
                    type="tel"
                    name="phoneNo"
                    value={formDataSignUp.phoneNo}
                    onChange={handleChangeSignUp}
                    placeholder="Phone Number"
                />
                </div>
                    <input
                    type="number"
                    name="ssn"
                    value={formDataSignUp.ssn}
                    onChange={handleChangeSignUp}
                    placeholder="SSN"
                />    
                <div className="password">
                <input 
                type={password? "password": "text"}
                placeholder='Password...' 
                className='input' 
                name="password"
                value={formDataSignUp.password}
                onChange={handleChangeSignUp}

                /><div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                </div>
                <button onClick={handleSignUp}>Sign Up</button>
                {/* <p>I forgot my password</p> */}
                <p>Already have an account? <span onClick={openSignup}>Login</span></p>
            </div> :  <div className="login">
                <h1>Welcome back</h1>
                <p className="first-p">
                Let's get you logged in to get back to building your dollar-denominated investment portfolio.</p>
                <input
                 type="email"
                 name="email"
                 value={formDataLogin.email}
                 onChange={handleChangeLogin}
                 placeholder="Email"/>
                <div className="password">
                <input type={password? "password": "text"}
                 placeholder='Password...' 
                 name="password"
                 value={formDataLogin.password}
                 onChange={handleChangeLogin}
                className='input'/>
                <div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                </div>
                 <button onClick={handleLogin}>Login</button>
                <Link>I forgot my password</Link>
                <p>Don't have an account? <span onClick={openSignup}>Sign up</span></p>
            </div>}

            
        </div>
       
    </div>
  )
}

export default LoginSignup