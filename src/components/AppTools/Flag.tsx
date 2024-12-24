import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const flags = [
  { flagimg: "/image/flag1.png", flagcountry: 'Spain' },
  { flagimg: "/image/flag2.png", flagcountry: 'France' },
  { flagimg: "/image/flag3.png", flagcountry: 'Germany' },
  { flagimg: "/image/flag4.png", flagcountry: 'Italy' } 
];

export default function Flag() {
  // Correctly placing useState inside the component
  const [selectedFlag, setSelectedFlag] = useState<string>(flags[0].flagimg);
  const [anchorFlag, setAnchorFlag] = useState<null | HTMLElement>(null);

  const handleFlagOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorFlag(event.currentTarget);
  };

  const handleFlagClose = () => {
    setAnchorFlag(null);
  };

  const handleFlagSelect = (flagimg: string) => {
    setSelectedFlag(flagimg); // Update the selected flag
    handleFlagClose(); // Close the menu
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Select Flag">
          <IconButton
            onClick={handleFlagOpen}
            disableRipple
            sx={{ p: 0, }}
          >
            <Avatar 
            alt="flag" 
            src={selectedFlag} 
            sx={{ 
              width: 23, 
              height: 23,
               }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{
            mt: "10px",
            "& .MuiMenu-paper": {
              width: "140px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 5px 20px #9299b820",
              overflow: "hidden", // Prevent overflow
            },
          }}
          anchorEl={anchorFlag}
          open={Boolean(anchorFlag)}
          onClose={handleFlagClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {/* Render menu items */}
          {flags.map((flag, index) => (
            <MenuItem
              key={index}
              onClick={() => handleFlagSelect(flag.flagimg)}
              disableRipple
              sx={{
                fontSize: "14px",
                display: "flex",
                gap: 1,
                transition: ".3s",
                paddingBottom: "1rem",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={flag.flagcountry}
                src={flag.flagimg}
                sx={{ width: "23px", height: "23px", display: "inline-flex", marginRight: 1 }}
              />
              <Typography
                textAlign="left"
                sx={{
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  lineHeight: "1.5715",
                }}
              >
                {flag.flagcountry}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
