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
// import card from "./images/curved14.jpg"

const Profile = () => {
  const navigate = useNavigate();

  // const [userCard, setuserCard] = useState(false)
  const [cardData, setCardData] = useState(null);



  const loggedIn = localStorage.getItem("userData")
  const userData = JSON.parse(loggedIn)

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  return (
    <div className='dash'>
      <DashNav />
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
        <TextField
          // required
          id="outlined-required"
          label="card number"
          defaultValue=""
        />
        <TextField
          // required
          id="outlined-required"
          label="First name"
          defaultValue=""
        />
        <TextField
          // required
          id="outlined-required"
          label="Last name"
          defaultValue=""
        />
        <div className="card-flex" style={{display:"flex",gap:"15px"}}>
        <TextField
          // required
          id="outlined-required"
          label="Exp month"
          defaultValue=""
        />

        <TextField
          // required
          id="outlined-required"
          label="Exp year"
          defaultValue=""
        />  

        <TextField
          // required
          id="outlined-required"
          label="CVV"
          defaultValue=""
        />

        </div>
        
        {/* <TextField
          // required
          id="outlined-required"
          label="CVV"
          defaultValue=""
        /> */}
        <TextField
          // required
          id="outlined-required"
          label="Address"
          defaultValue=""
        />
        
      </div>
      <button className="edit-card">
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



