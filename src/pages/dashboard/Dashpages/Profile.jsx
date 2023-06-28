import { PhotoCamera } from '@mui/icons-material'
import { Box, Button,  Modal, TextField} from '@mui/material'
import React, { useState } from 'react'
import DashNav from '../dashComp/DashNav'
import pic from "./images/profile-icon.jpg"
import AddCardIcon from '@mui/icons-material/AddCard';
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../dashComp/Card'
import './transaction.css'

const Profile = () => {


  const loggedIn = localStorage.getItem("userData")
  const userData = JSON.parse(loggedIn)

  const [cardSucess, setCardSucess] = useState(false)

  const [cardErr, setCardErr] = useState(false)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [formData, setFormData] = useState({
    cardNo: '',
    firstName: '',
    lastName: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    address: '',
  });




  const handleClick = () => {
    axios.post(`https://bit-stock-api.vercel.app/users/${userData.id}/cards`, formData)
      .then(function (response) {
      console.log(response)
        if (response) {
          setCardSucess(true)
          setTimeout(() => {
            setCardSucess(false);
          }, 3000);
          setTimeout(() => {
           localStorage.removeItem('userData')
           navigate('/login');
          }, 5000);
        }
      
        // console.log(response.data);
      })
      .catch(function (error) {
        if (error) {
          setCardErr(true)
          setTimeout(() => {
            setCardErr(false);
          }, 3000);
        }
      });
      handleClose2();
  };


  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };


  const navigate = useNavigate();

  // const [userCard, setuserCard] = useState(false)
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, []);




  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:"5px"
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign:"center",
    
  };
 


  return (
    <div className='dash'>
      {
      cardSucess ? 
      <div className="reg-modal">
        Card registered 
      </div>
      :
      <div style={{display:"none"}} className="reg-modal">

      </div>
      }
      <DashNav />
      {
      cardErr ? 
      <div className="reg-modal-err">
        failed to register card 
      </div>
      :
      <div style={{display:"none"}} className="reg-modal">

      </div>
      }
      <div className="dash-big dash-big-flex">
       <div className="profile-box" >
        <div className="profile-info-box">
        <div className="profile-info">
          <div className="label">First name :</div>
          <div className="info">{userData.firstName}</div>
        </div>
        <div className="profile-info">
          <div className="label">Last Name :</div>
          <div className="info">{userData.lastName}</div>
        </div>
        <div className="profile-info">
          <div className="label">Email :</div>
          <div className="info">{userData.email}</div>
        </div>
        <div className="profile-info">
          <div className="label">Phone No :</div>
          <div className="info">{userData.phoneNo}</div>
        </div>
        <div className="profile-info">
          <div className="label">Ssn :</div>
          <div className="info">{userData.ssn}</div>
        </div>
        {/* <div className="profile-info">
          <div className="label">State :</div>
          <div className="info">{userData.state}</div>
        </div>
        <div className="profile-info">
          <div className="label">House No :</div>
          <div className="info">{userData.houseNo}</div>
        </div> */}
         <button onClick={handleOpen} className="edit-user">
          Edit profile
        </button>
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
       <Box sx={style}
      component="form"
      noValidate
      autoComplete="off">
      {/* <div> */}

      Action not available 
        {/* <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        /> */}
        
      {/* </div> */}
    </Box>
      </Modal>

       
        </div>
        <div className="profile-pic-container">
          <div className="pic">
          <img src={pic} alt="" className="profile-pic" />
           <Button variant="contained" component="label" sx={{width:"fit-content",marginLeft:"50px",background:"#026156",fontWeight:"500",fontSize:"18px"}}>
            Upload
            <input hidden accept="image/*" type="file" /> <PhotoCamera />
          </Button>
          </div>
          <div className="card">
            <Card />
            <button onClick={handleOpen2} className="edit-card">
          Add Card <AddCardIcon/>
        </button>
        <Modal
        keepMounted
        open={open2}
        onClose={handleClose2}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
>
  <Box sx={style2}
      component="form"
      noValidate
      autoComplete="off">
      <div style={{display:"flex",flexDirection:"column",gap:'20px'}}>

 

        {/* <TextField
          id="cardNumber"
          label="Card Number"
          variant="outlined"
          type="number"
          value={formData.cardNumber}
          onChange={handleChange}
        /> */}

        <TextField
          id="cardNo"
          label="Card Number"
          variant="outlined"
          required
          type="number"
          value={formData.cardNo}
          onChange={handleChange}
        />


        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
        />
         <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
        />
        <div className="card-flex" style={{display:"flex",gap:"15px"}}>
         <TextField
          id="expMonth"
          label="Exp Month"
          variant="outlined"
          type="number"
          value={formData.expMonth}
          onChange={handleChange}
        />

        <TextField
          id="expYear"
          label="Exp Year"
          variant="outlined"
          type="number"
          value={formData.expYear}
          onChange={handleChange}
        /> 

        <TextField
          id="cvv"
          label="CVV"
          variant="outlined"
          type="number"
          value={formData.cvv}
          onChange={handleChange}
        />

        </div>
        
       
       <TextField
        id="address"
        label="Address"
        variant="outlined"
        value={formData.address}
        onChange={handleChange}
      />
        
      </div>
      <button type="button" className="edit-card" onClick={handleClick}>
          Add Card <AddCardIcon/>
        </button>
       
    </Box>
</Modal> 
       
          </div>
        </div>
       </div>
       
      </div> 
    </div>
  )
}

export default Profile



