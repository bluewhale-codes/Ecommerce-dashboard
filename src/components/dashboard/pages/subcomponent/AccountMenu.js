import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ChatIcon from '@mui/icons-material/Chat';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            
            <div onClick={handleClick} className='profile-link'>
                <div className='profile_img'>
                    <img src='https://themesbrand.com/velzon/html/saas/assets/images/users/avatar-1.jpg'/>
                </div> 
                <div className='profile-name'>
                    <p>Vishal shakya</p>
                    <p>admin</p>
                </div>
            </div>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
           <ListItemIcon><Avatar/></ListItemIcon> <Link to='/admin/profile'>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon><ChatIcon/></ListItemIcon> Messages
          </MenuItem>
          <MenuItem onClick={handleClose}>
           <ListItemIcon><DashboardIcon /></ListItemIcon> Analysis
          </MenuItem>
          <MenuItem onClick={handleClose}>
           <ListItemIcon><DashboardIcon /></ListItemIcon> Manage Your Site
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <HelpIcon />
            </ListItemIcon>
             Help
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountBalanceWalletIcon fontSize="small" />
            </ListItemIcon>
             Balance
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LockIcon fontSize="small" />
            </ListItemIcon>
            Lock Screen
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
}

export default AccountMenu