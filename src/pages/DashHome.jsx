import React from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import "./DashApp.css";
import PieChartWithTooltip from '../components/PieChart';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid,  Tooltip} from "recharts";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom'
import axios from 'axios';



const DashHome = () => {
  const [coinData, setCoinData] = useState([]);

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

  // const navigate = useNavigate();

  // const loggedIn = localStorage.getItem("userData")

  // useEffect(() => {
  //   if(!loggedIn){
  //   navigate('/login')

  // }else{
  //   console.log(loggedIn);
  // }
  // }, []);



  

  const UserData = [
    {
      name: "python",
      student: 13,
      fees: 10,
    },
    {
      name: "javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "php",
      student: 5,
      fees: 10,
    },
    {
      name: "java",
      student: 10,
      fees: 7,
    },
    {
      name: "c#",
      student: 9,
      fees: 4,
    },
    {
      name: "c++",
      student: 10,
      fees: 8,
    },
  ];


  return ( 
    <div className='dash'>
      <DashNav />
      {/* <div className="" style={{display:"none"}}>
        <Card />
      </div> */}
      <div className="dash-big">
        <Dashtopnav />
        <div className="parent-box">
          <div className="user-box">
            <div className="user-num">
            Total Wallets
            </div>
            <div className="box-title">10,000</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Book Balance
            </div>
            <div className="box-title">100,000,000</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Available Balance
            </div>
            <div className="box-title">100,000,000</div>
          </div>
          <div className="user-box">
            <div className="user-num">
            Total Pool Balance
            </div>
            <div className="box-title">100,000,000</div>
          </div>
        </div>
        <div className="parent-box">
          <div className="text-box">
            <ResponsiveContainer width="100%" aspect={2.9} >
            <LineChart data={UserData} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis  height={300}/>
              <Tooltip contentStyle={{background:"rgb(43, 228, 213)"}} />
              <Line type="monotone" dataKey="student" stroke='red' activeDot={{ r: 8}}/>
              <Line type="monotone" dataKey="fees" stroke='green' activeDot={{ r: 8}} />
            </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-box-pie">
            <div className="pie-amount">
              <div className="circle">
                <div className="small">Total savings</div>
                <div className="amount">
                  100,000,000
                </div>
              </div>
            </div>
           <PieChartWithTooltip />
          </div>
        </div>

          <div className="title">
            <div className="head">
            Transactions
            </div>
            <Link className="view-all" to={"/dashboard/transactions"}>View all</Link>
          </div>
          <table  border="0" width="100%" style={{background:'#fff',borderRadius:"10px", paddingTop:"0"}}>
  <tr>
   <td>
    <div class="table-data">
     <table width="100%" style={{ border:"0px",borderCollapse:"collapse",textAlign:"start"}}>
     <tr  style={{background:'#D6FFFD', height:"40px", border:"none",borderCollapse:"collapse"}}> 
          <th style={{background:'#D6FFFD', border:"none",borderCollapse:"collapse",textAlign:"start", padding:"20px"}} >Logo</th>
          <th style={{textAlign:"start", padding:"20px"}}>Name</th>
          <th style={{textAlign:"start", padding:"20px"}}>Symbol</th>
          <th style={{textAlign:"start", padding:"20px"}}>Price</th>
     </tr>
        {coinData.slice(0,6).map(coin => (
          <tr key={coin.id} className="coin">
              <td style={{paddingLeft:"20px"}}><img src={coin.image} alt={coin.symbol} className="coin-img" /></td>
              <td style={{paddingLeft:"20px"}}>{coin.name}</td>
              <td style={{paddingLeft:"20px"}}>{coin.symbol}</td>
              <td style={{paddingLeft:"20px"}}>{coin.current_price}</td>
            </tr>
          ))}
      
      </table>
     </div>
    </td>
   </tr>
 </table>

      </div>
        
    </div>
  )
}

export default DashHome