import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Flag from '../AppTools/Flag';
import Profile from '../AppTools/Profile';
import Mail from '../AppTools/Mail';
import Notifications from '../AppTools/Notifications';
import Logo from '../AppTools/Logo';
import Search from '../AppTools/Search';
import Setting from '../AppTools/Setting';
import Help from '../AppTools/Help';

interface HeaderProps {
  open: boolean;
  onDrawerToggle: () => void;
}
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#ffff',
  color:'#272b41',
  boxShadow: '0 4px 6px rgba(170, 163, 163, 0.1)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Header: React.FC<HeaderProps> = ({
  open,
  onDrawerToggle,
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
          aria-label="open drawer"
          onClick={onDrawerToggle}
          edge="start"
          sx={{
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            color:"rgb(173, 180, 210)",
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
