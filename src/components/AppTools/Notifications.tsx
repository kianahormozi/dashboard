import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  notificationicon : JSX.Element;
}

const notifications: NotificationItem[] = [
  { id: 1, message: "James sent you a message", time: "5 hours ago" , notificationicon: <SendOutlinedIcon />},
  { id: 2, message: "Lisa commented on your post", time: "3 hours ago" , notificationicon: <SendOutlinedIcon /> },
  { id: 3, message: "New friend request from John", time: "2 hours ago" , notificationicon: <GroupAddOutlinedIcon /> },
  { id: 4, message: "Anna liked your photo", time: "1 hour ago" , notificationicon: <ThumbUpOutlinedIcon /> },
  { id: 5, message: "Mark shared your post", time: "30 minutes ago" , notificationicon: <SendOutlinedIcon />},
];

const Notifications: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

const [invisible, setInvisible] = React.useState(false);

const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        sx={ { 
          padding: "0", 
          backgroundColor: "transparent !important" 
          }
        }
        onClick={handleOpenMenu}
      >
        <Badge
              color="success"
              variant="dot"
              invisible={invisible}
              anchorOrigin={ { 
                vertical: "top", 
                horizontal: "right" 
                }
              }
              sx={{
                "& .MuiBadge-dot": {
                  marginTop: "-5px",
                  right: "50%",
                },
              }}
            >
              <NotificationsOutlinedIcon 
              sx={ { color:"#6b708b" } } />
            </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
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
            width: "320px",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
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
                badgeContent={notifications.length}
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
        {notifications.map((notification, index) =>
          index < 3 ? ( // نمایش فقط 3 مورد 
            <MenuItem
              key={notification.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap:"1rem",
                padding: "13px 10px",
                "&:last-of-type": {
                  borderBottom: "none",
                },
              }}
            >
              <Box>
              <Typography
                sx={ { 
                  fontSize: "7px",
                  fontWeight: "bold",
                  color: "rgb(255, 105, 165)",
                  backgroundColor: "rgba(255, 105, 165, 0.082)",
                  display: "inline-flex", // To keep the icon aligned in a circle
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px", // Adds space around the icon
                  borderRadius: "50%", // Makes it circular
                  "& .MuiSvgIcon-root": {
                    width: "18px",
                    height: "18px",
                  },
                }
              }
              >
                {notification.notificationicon}
              </Typography>
              </Box>

              <Box >
              <Typography
                sx={ { 
                  fontSize: "14px", 
                  fontWeight: "bold", 
                  color: "rgb(90, 95, 125)" , 
                  paddingBottom:".4rem"
                  }
                }
              >
                {notification.message}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "rgb(173, 180, 210)" }}>
                {notification.time}
              </Typography>
              </Box>
            </MenuItem>
          ) : null
        )}

        {/* قسمت فوتر */}
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
          onClick={() => {
            handleCloseMenu();

            console.log("Redirect to all notifications");
          }}
        >
          See all incoming activity
        </Typography>
      </Menu>
    </Box>
  );
};

export default Notifications;