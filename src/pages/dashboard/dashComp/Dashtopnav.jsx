import React from 'react';
import "../Dashpages/DashApp.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '@mui/material/Button';
import {IconButton, Badge, Menu, MenuItem} from '@mui/material'


 

const Dashtopnav = () => {

   const [anchorEl, setAnchorEl] = React.useState(null);
   const [anchorE2, setAnchorE2] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
      };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
      };

    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

  return (
    <div className="Dashtopnav">
        <div className="nav-username">
            Hello, Ayotayo
        </div>
        <div>
        <IconButton  sx={{ width: 'auto', height: 'auto', padding: 0, margin: 0 }}  onClick={handleClick2}>
            <ArrowDropDownIcon sx={{ height: 40,width: 40, padding: 0, margin: 0 }}/>
        </IconButton>
        <Menu
        anchorEl={anchorE2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        id="dropdown-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorE2)}
        onClose={handleClose2}
      >
        <MenuItem onClick={handleClose2}>Option 1</MenuItem>
        <MenuItem onClick={handleClose2}>Option 2</MenuItem>
        <MenuItem onClick={handleClose2}>Option 3</MenuItem>
      </Menu>




<IconButton aria-label={notificationsLabel(100)} onClick={handleClick}>
      <Badge badgeContent={6} color="error" >
        <NotificationsNoneIcon />
      </Badge>
</IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        id="dropdown-menu"
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
        </div>
        
    </div>
  );
};

export default Dashtopnav;
