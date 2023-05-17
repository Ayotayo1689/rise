import React, { useEffect, useState } from 'react';
import DashNav from '../dashComp/DashNav';
import Dashtopnav from '../dashComp/Dashtopnav';
import './transaction.css'
import axios from 'axios';

const Transactions = () => {
  // const key = "3af6ae9c-1b3b-4d2c-9d02-b8138a478261"
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '3af6ae9c-1b3b-4d2c-9d02-b8138a478261'
      },
      params: {
        start: 1,
        limit: 100,
        convert: 'USD'
      }
    })
      .then(response => setData(response.data.data))
      .catch(error => console.log(error))
  }, []);

  // useEffect(() => {
  //   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //     .then(response => setData(response.data))
  //     .catch(error => console.log(error))
  // }, []);
  return (
    <div className='dash'>
    <DashNav />
    <div className="dash-big">
    <Dashtopnav />
    <div className="transaction-body">
      <div className="rates">
        <div className="rate-parent">
          <div className="rate">

          </div>
          <div className="rate">
            
          </div>
          <div className="rate">
            
          </div>
        </div>
        <table className="rate-info">
       
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
          </tr>
        <tbody style={{border:'2px solid blue',width:"100%",color:"red"}}>
          {data.map(item => (
            <tr key={item.id} >
              <td style={{textAlign:"center"}}><img src={item.logo} alt={item.name} className="coin-img" /></td>
              <td style={{textAlign:"center"}}>{item.name}</td>
              <td style={{textAlign:"center"}}>{item.symbol.toUpperCase()}</td>
              <td style={{textAlign:"center"}}>${item.quote.USD.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        </table>

      </div>
      <div className="buy">

      </div>
    </div>
    </div> 
  </div>
  );
};

export default Transactions;