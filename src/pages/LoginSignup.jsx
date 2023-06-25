import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Logsign.css"
import eyeOpen from "../images/eyeOpen.png"
import eyeClose from "../images/eyeClose.png"
import Logo from "../images/logo.svg"
import axios from 'axios'


const LoginSignup = () => {

//     history.pushState(null, null, document.URL);
// window.addEventListener("popstate", function () {
//   history.pushState(null, null, document.URL);
// });

    const navigate = useNavigate();

    const [logError, setLogError] = useState(false)


  
    const [password, setpassword] = useState(true)
    const openpassword =()=>{
        setpassword(!password)
    }

  

      const [formDataLogin, setFormDataLogin] = useState({
        email: '',
        password: ''
      });

     

      const handleChangeLogin = (e) => {
        setFormDataLogin({ ...formDataLogin, [e.target.name]: e.target.value });
      };

      const closeErr = () => {
        setLogError(false);
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
        navigate('/dashboard');
        // try {
        //   const response = await axios.post('https://bit-stock-api.vercel.app/login', {
        //     email: formDataLogin.email,
        //     password: formDataLogin.password
        //   });
      
        //   // localStorage.setItem('userData', JSON.stringify(response.data));
        
        // } catch (error) {
        //   setLogError(true)
        // }
      };




  return (
    <div className='sign-log'>
        <div className="error" style={logError ? {}: {display:"none"}}>
            <div className="error-box">
                An error occurred lease try again
                <button onClick={closeErr}>ok</button>
            </div>
        </div>
        

        <div className="login">
          <img src={Logo} alt="" />
                <h1>Welcome back</h1>
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
                {/* <Link>I forgot my password</Link> */}
                {/* <p>Don't have an account? <span onClick={openSignup}>Sign up</span></p> */}
            </div>
          

            
       
    </div>
  )
}

export default LoginSignup