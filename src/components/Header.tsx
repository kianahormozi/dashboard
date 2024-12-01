import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Flag from './AppTools/Flag';
import Profile from './AppTools/Profile';
import Mail from './AppTools/Mail';
import Notifications from './AppTools/Notifications';
import Logo from './AppTools/Logo';
import Search from './AppTools/Search';
import Setting from './AppTools/Setting';
import Help from './AppTools/Help';

const settings = [
  {usertitle :'Profile', usericon:<Person2OutlinedIcon /> },
  { usertitle :'Setting', usericon: <SettingsOutlinedIcon />},
  {usertitle : 'Billing', usericon: < AttachMoneyOutlinedIcon />},
  { usertitle :'Activity', usericon: < PeopleAltOutlinedIcon />},
  { usertitle :'Help', usericon:<NotificationsOutlinedIcon />}
];


interface HeaderProps {
  open: boolean;
  onDrawerToggle: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#ffff',
  color: theme.palette.text.primary,
  boxShadow: '0 4px 6px rgba(170, 163, 163, 0.1)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Header: React.FC<HeaderProps> = ({
  open,
  onDrawerToggle,
  darkMode,
  onDarkModeToggle,
}) => {
 
  return (
    <AppBarStyled position="fixed">
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2, // Spacing between items
        }}
      >
        {/* Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerToggle}
          edge="start"
          sx={{
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s ease-in-out",
            paddingLeft: "1rem",
            "&:hover":{
              backgroundColor:"transparent",
            }
          }}
        >
          <MenuOpenIcon />
        </IconButton>

        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <Search />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2, 
          paddingRight: ".7rem",
        }}
      >
        {/* Notifications */}
        <Mail />
        <Notifications />
        <Setting />
        <Help />

        {/* Flag Menu */}
        <Flag />

        {/* User Menu */}
        <Profile />
      </Box>
    </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
