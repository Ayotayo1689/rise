import React, { useEffect, useState } from 'react';
import DashNav from '../dashComp/DashNav';
import Dashtopnav from '../dashComp/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.4px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const Transactions = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [coinData, setCoinData] = useState([]);
    const [rate, setrate] = useState();
    const [Usd, setUsd] = useState(0);
    const [copy, setCopy] = useState('Copy');
    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    const [confirmed, setConfirmed] = useState(false);
    const [Done, setDone] = useState(false);

  const doneBtn = () => {
    setDone(true);
    
  };
    useEffect(() => {
      const fetchCoinData = async () => {
        try {
          const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
          );
          setCoinData(response.data);
        } catch (error) {
          console.error('Error fetching coin data:', error);
        }
      };
  
      fetchCoinData();
    }, []);



    
    const btcRate = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin'
        );
        setrate(response.data.market_data.current_price.usd);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    btcRate();
const Percentage = (1 / rate)
const FeePercentage = (Usd / 100)
const Total = (parseInt(Usd) + parseInt(FeePercentage))
const walletAddress = 'mvmb5sevxMHAQRwCnr6dyJZxjQ9nhz43AD'

 



   
   const math =(event)=>{
 
    setUsd(event.target.value)
 
   }

    const handleCopyToClipboard = () => {
      const text = walletAddress;
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopy('Copied')
        })
        .catch((error) => {
          console.error('Error copying text to clipboard:', error);
        });
    };

   

    const childModal =()=>{
      handleClose();   
      setConfirmed(true); 
    }
   if (confirmed == true){

    const dateString = new Date();
    // const date = new Date();
    dateString.setDate(dateString.getDate() + 7);
    const date = new Date(dateString);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dayss = String(date.getDate()).padStart(2, "0");
    const hours = "23";
    const minutes = "59";
    const seconds = "59";
    
    const formattedDate = `${year}-${month}-${dayss}T${hours}:${minutes}:${seconds}`;
    const dueDate = formattedDate;

    console.log(dueDate);





    
// Set the target countdown date and time
const countdownDate = new Date(dueDate).getTime();
// console.log(cou);
// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
setDay(days);
setHour(hours);
setMinute(minutes);
setSecond(seconds);



  if (distance < 0) {
    clearInterval(countdown);
    setDay("0");
    setHour("00");
    setMinute("00");
    setSecond("00");
  }
}, 1000);

   }
// console.log(new Date());








// const confirmBtn =()=>{
//  setConfirmed(true)
// }




  return (
    <div className='dash'>
    <DashNav />
    <div className="dash-big">
    <Dashtopnav />
    <div className="transaction-body">
      <div className="rates">
        <div className="rate-parent">
          <div className="rate">
              {day}<div className="rate-title">Days</div>
          </div>
          <div className="rate">
             {hour}<div className="rate-title">Hours</div>
          </div>
          <div className="rate rate-sec" >
            <div className="" style={{display:"flex",justifyContent:'center',alignItems:"baseline"}}>
            {minute} <div className="rate-title">Mins</div> 
            </div>
            <div className="" style={{display:"flex",justifyContent:'center',alignItems:"baseline"}}>
            {second} <div className="rate-title"> Sec</div>
            </div>
          </div>
        </div>

        <table cellspacing="1" cellpadding="0" border="0" width="100%" style={{background:'#b4fcfca9',padding:"10px 0",borderRadius:"10px"}}>
  <tr>
   <td>
    <table cellspacing="1" cellpadding="1"  width="100%" style={{paddingBottom:'20px'}}>
     <tr> 
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
     </tr>
    </table>
  </td>
   </tr>
  <tr>
   <td>
    <div class="table-data">
     <table cellspacing="0" cellpadding="1" width="100%">
        {coinData.map(coin => (
          <tr key={coin.id} className="coin">
              <td style={{textAlign:"center"}}><img src={coin.image} alt={coin.symbol} className="coin-img" /></td>
              <td style={{textAlign:"center"}}>{coin.name}</td>
              <td style={{textAlign:"center"}}>{coin.symbol}</td>
              <td style={{textAlign:"center"}}>{coin.current_price}</td>
            </tr>
          ))}
      
      </table>
     </div>
    </td>
   </tr>
 </table>

      </div>
      <div className="buy">
        <h3 className="buy-head">
          Quick Invest
          {/* <button onClick={confirmBtn}> confirm</button> */}
        </h3>
        <div className="buy-body">
          <div className="but-input">
            <p>Amount USD</p>
            <input type="number"  onChange={math} />
          </div>
          <div className="but-input">
            <p>Amount Coin</p>
            <input type="number" readOnly value={Percentage*Usd} />
          </div>
          <div className="but-input">
            <p>Fee (1%)</p>
            <input type="number" readOnly value={FeePercentage} />
          </div>
          <div className="but-input">
            <p>Total</p>
            <input type="number" readOnly value={Total}/>
          </div>
          <div>
            {Usd < 300 ? <Button disabled variant="contained" endIcon={<SendIcon />} sx={{width:'fit-content'}}>
          Invest
      </Button> : <Button onClick={handleOpen} variant="contained" endIcon={<SendIcon />} sx={{width:'fit-content'}}>
          Invest
      </Button>}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            { Done ? <div className="get-back">Your transaction will be confirmed within 24 hours
          <span style={{fontSize:'20px',fontWeight:"500"}}>$ {Total}</span>
          <span style={{fontSize:'20px',fontWeight:"500"}}>Btc {Percentage*Usd}</span>
          <Button variant="contained"  open={open}
        onClick={childModal} style={{marginTop:'30px'}}>
              OK
            </Button>
          </div> :  <div className="box">
          <div className="but-input">
            <h3>Wallet Address</h3>
            <div className="walletAdd">
            <input type="text" readOnly value={walletAddress} style={{textAlign:"left",paddingLeft:'20px'}}/>
            <Button variant="contained" endIcon={<ContentCopyIcon />} onClick={handleCopyToClipboard}>
              {copy}
            </Button>
            </div>
          </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You are to make a payment of <span style={{fontSize:'20px',fontWeight:"500"}}>${Total}</span> <br /><br />
              Please click Done only when the transaction is complete 
            </Typography>
            <Button variant="contained"  open={open}
        onClick={doneBtn} style={{marginTop:'30px'}}>
              Done
            </Button>
          </div> }
         
          
          </Box>
        </Fade>
      </Modal>
    </div>
        </div>
      </div>
    </div>
    </div> 
  </div>
  );
};

export default Transactions;