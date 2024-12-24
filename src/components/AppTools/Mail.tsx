import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface Message {
  id: number;
  image: string;
  sender: string;
  message: string;
  time: string;
  messageCount: number;
}

const messages: Message[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/40", // Replace with your image URL
    sender: "Software",
    message: "Lorem ipsum dolor amet consectetur.",
    time: "3 hrs ago",
    messageCount: 3,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/40", // Replace with your image URL
    sender: "Marketing",
    message: "Lorem ipsum dolor sit amet, lorem.",
    time: "5 hrs ago",
    messageCount: 2,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/40", // Replace with your image URL
    sender: "Design",
    message: "A new design is ready to review.",
    time: "Yesterday",
    messageCount: 1,
  },
];

const MessageMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Icon with Badge */}
      <IconButton
        size="large"
        color="inherit"
        sx={ { 
          padding: "0", 
          backgroundColor: "transparent" ,
        } }
        onClick={handleMenuOpen}
      >
        <Badge
              color="success"
              variant="dot"
              invisible={invisible}
              anchorOrigin={{ 
                vertical: "top", 
                horizontal: "right" 
              }}
              
              sx={{
                "& .MuiBadge-dot": {
                  marginTop: "-5px",
                  right: "50%",
                },
              }}
            >
              <MailOutlineIcon 
              sx={ {
                color:"#6b708b",
              } }

               />
            </Badge>
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: "auto", // عرض  برای باکس پیام‌ها
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,.15)",
            padding: "10px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#151515",
            marginBottom: "10px",
            backgroundColor:"#f4f5f7",
            borderRadius:"6px",
            textAlign:"center",
            padding:"18px",
          }}
        >
          <Box 
          sx={{
            display:"inline-flex",
            gap:".5rem",
          }}>
            Notifications 
            <Box sx={ { 
              display: "inline-flex", 
              alignItems: "center", 
              marginLeft: "10px" ,
              }
            }
            >
              <Badge
                badgeContent={messages.reduce((total, msg) => total + msg.messageCount, 0)}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#20c997", 
                    color: "white",          
                    borderRadius: "50%",     
                    width: "24px",           
                    height: "24px",          
                    display: "flex",        
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",    
                    fontWeight: "600",      
                  },
                }}
              />
            </Box>
          </Box>
        </Typography>   

        {/* Message List */}
        {messages.map((msg) => (
          <Box key={msg.id} sx={{width:"350px"}}>
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: "15px",
              }}
            >
              {/* Avatar */}
              <Avatar src={msg.image} alt={msg.sender} />

              {/* Sender and Message */}
              <Box 
              sx={ { 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" , 
                width:"280px",
                } }
                >
                {/* Sender and Message Count in one line */}
                <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  paddingBottom:"9px",
                  } }
                  >
                  <Typography variant="body1" 
                  sx={ { 
                    fontSize:"14px",
                    }}
                    >
                    {msg.sender}
                  </Typography>
                  <Typography 
                  variant="caption" 
                  sx={ { 
                    color: "#20c997" , 
                    fontSize:"12px" ,
                    }}
                    >
                    {msg.time}
                  </Typography>
                  
                </Box>

                {/* Message and Time in one line */}
                <Box 
                sx={ { 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center" 
                  }}
                  >
                  <Typography
                    variant="body2"
                    sx={ {
                      color: "#6b708b",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize:"14px",
                    }}
                  >
                    {msg.message}
                  </Typography>
                  <Badge
                    badgeContent={msg.messageCount}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#20c997",
                        fontSize: "10px",
                        height: "18px",
                        minWidth: "18px",
                        borderRadius: "50%",
                      },
                    }}
                  />
                </Box>
              </Box>
            </MenuItem>
          </Box>
        ))}

        {/* Footer */}
        <Typography
          sx={{
            fontSize: "12px",
            color: "#6b708b",
            textAlign: "center",
            marginTop: "10px",
            cursor: "pointer",
            "&:hover": {
              color: "#5f63f2",
            },
          }}
        >
          See all messages
        </Typography>
      </Menu>
    </Box>
  );
};

export default MessageMenu;
