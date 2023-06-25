
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Lock from "../images/lock.svg"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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


export default function DataBundleDetails() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (

    <div className='dash'>
    <DashNav />
    <div className="dash-big">
          <div className="title">
            <div className="head">
           Data Bundle
            </div>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search User…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>

            <div className="wallet-details">
               <h2>Transaction Details</h2>
               <div className="data">
                <div className="data-info">
                Service Description:
                </div>
                <div className="data-label">
                9mobile Bundle
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Sender Name:
                </div>
                <div className="data-label">
                John Peters
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Beneficiary Number:
                </div>
                <div className="data-label">
                08075832455
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Amount:
                </div>
                <div className="data-label">
                300,000.00
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Status:
                </div>
                <div className="data-label">
                Completed
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Date:
                </div>
                <div className="data-label">
                12 April, 2023  05:44:45 AM
                </div>
               </div>
               <div className="data">
                <div className="data-info">
                Reference:
                </div>
                <div className="data-label">
                Ulego-WOYZOFSKQCGGGBVJWKK
                </div>
               </div>


            </div>



          </div>
    </div> 












    
  );
}
