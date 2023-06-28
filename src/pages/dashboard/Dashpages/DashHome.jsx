import React from 'react';
import DashNav from '../dashComp/DashNav';
import Dashtopnav from '../dashComp/Dashtopnav';
import "./DashApp.css";
import PieChartWithTooltip from '../../../components/PieChart';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid,  Tooltip} from "recharts";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '../dashComp/Card';



const DashHome = () => {

  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("userData")

  useEffect(() => {
    if(!loggedIn){
    navigate('/login')

  }else{
    console.log(loggedIn);
  }
  }, []);



  

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
              30
            </div>
            <div className="box-title"><PersonIcon/>User</div>
          </div>
          <div className="user-box">
            <div className="user-num">
              30k
            </div>
            <div className="box-title"><AccountBalanceWalletIcon/>Balance</div>
          </div>
          <div className="user-box">
            <div className="user-num">
              20k
            </div>
            <div className="box-title"><LocalAtmIcon/>Withdrawable</div>
          </div>
          <div className="user-box">
            <div className="user-num">
              30
            </div>
            <div className="box-title">User</div>
          </div>
        </div>
        <div className="parent-box">
          <div className="text-box">
            <ResponsiveContainer width="100%" aspect={1.5} >
            <LineChart data={UserData} height={500}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={"preserveStartEnd"} />
              <YAxis  height={500}/>
              <Tooltip contentStyle={{background:"rgb(43, 228, 213)"}} />
              <Line type="monotone" dataKey="student" stroke='red' activeDot={{ r: 8}}/>
              <Line type="monotone" dataKey="fees" stroke='green' activeDot={{ r: 8}} />
            </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-box">
           <PieChartWithTooltip />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default DashHome