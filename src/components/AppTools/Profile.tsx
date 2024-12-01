import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface Setting {
  usertitle: string;
  usericon: JSX.Element;
}

const settings: Setting[] = [
  { usertitle: "Profile", usericon: <Person2OutlinedIcon /> },
  { usertitle: "Setting", usericon: <SettingsOutlinedIcon /> },
  { usertitle: "Billing", usericon: <AttachMoneyOutlinedIcon /> },
  { usertitle: "Activity", usericon: <PeopleAltOutlinedIcon /> },
  { usertitle: "Help", usericon: <NotificationsOutlinedIcon /> },
];

export default function Profile(): JSX.Element {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
              onClick={handleOpenUserMenu} 
              sx={ { 
                p: 0 , 
                } }>
                <Avatar 
                alt="User Avatar" 
                src="/image/profile.png" 
                sx={ { 
                  width: 30, 
                  height: 30,
                  } } 
                  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "10px",
                "& .MuiPaper-root": {
                  width: "250px", // عرض مناسب
                  height:"auto",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                  overflow: "hidden", // جلوگیری از گسترش منو
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock
            >
              {/* اطلاعات کاربر */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 25px",
                  backgroundColor:"rgb(244, 245, 247)",
                  borderRadius:"8px",
                  marginBottom:"12px"
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="/image/profile.png"
                  sx={ { 
                    width: 50, 
                    height: 50 
                  } }
                />
                <Box 
                sx={ { 
                  marginLeft: "10px",
                   } }>
                  <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: "bold" 
                    }
                    }>
                    John Doe
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    johndoe@example.com
                  </Typography>
                </Box>
              </Box>

              {/* آیتم‌های منو */}
              {settings.map((setting,index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseUserMenu}
                  disableRipple 
                  sx={{
                    fontSize: "14px",
                    display:"flex",
                    gap:1,
                    transition:".2s",
                    paddingBottom:"1rem",
                    alignItems: 'center',
                    "&:hover": {
                      color:"rgb(95, 99, 242)",
                      paddingLeft:"25px",
                      backgroundColor:"transparent"
                    },
                  }}
                >
                  <Typography 
                  textAlign="left" 
                  sx={ {
                    fontSize:"14px" , 
                    display:"inline-flex" , 
                    alignItems:"center" , 
                    color:"rgb(146, 153, 184)"  ,  
                    lineHeight:'1.5715',
                    } }>
                  {setting.usericon}
                  </Typography>
                  <Typography 
                  textAlign="left" 
                  sx={ {
                    fontSize:"14px" , 
                    display:"inline-flex" , 
                    alignItems:"center" , 
                    color:"rgb(146, 153, 184)",  
                    lineHeight:'1.5715',
                    } }>
                    {setting.usertitle}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
    </>
  )
}
