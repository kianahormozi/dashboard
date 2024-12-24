import React, { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {Box, IconButton, Menu, Typography, Avatar } from "@mui/material";

interface SettingItem {
  settingtitle: string;
  settingicon: string;
  settingtext: string;
}

const SettingItems: SettingItem[] = [
  { settingicon: "/image/setting1.png", settingtitle: "All Features", settingtext: "Introducing Increment subscriptions" },
  { settingicon: "/image/setting2.png", settingtitle: "Payments", settingtext: "We handle billions of dollars" },
  { settingicon: "/image/setting3.png", settingtitle: "Content Planner", settingtext: "Centralize content gathering and editing" },
  { settingicon: "/image/setting4.png", settingtitle: "Themes", settingtext: "Third-party themes that are compatible" },
  { settingicon: "/image/setting5.png", settingtitle: "Design Mockups", settingtext: "Share planning visuals with clients" },
  { settingicon: "/image/setting6.png", settingtitle: "Diagram Maker", settingtext: "Plan user flows & test scenarios" } ]

export default function Setting(): JSX.Element {
  const [anchorSetting, setAnchorSetting] = useState<null | HTMLElement>(null);

  const handleOpenSettingMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = (): void => {
    setAnchorSetting(null);
  };

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={handleOpenSettingMenu}
        sx={{ 
          padding: "0", 
          backgroundColor: "transparent !important",
         }}
      >
        <SettingsOutlinedIcon 
        sx={{ 
          color: "#6b708b",
           }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorSetting}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorSetting)}
        onClose={handleCloseSettingMenu}
        disableScrollLock
        sx={{
          "& .MuiPaper-root": {
            width: "auto",
            minWidth: "600px", 
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
            marginTop:"1rem",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "20px", 
          }}
        >
          {SettingItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                padding:"9px 18px",
                gap: "15px",
                cursor: "pointer",
                "&:hover": {
                    boxShadow:"rgba(146, 153, 184, 0.082) 0px 5px 20px",
                },
              }}
            >
              <Avatar
                src={item.settingicon}
                alt={item.settingtitle}
                sx={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#151515",
                  }}
                >
                  {item.settingtitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#6b708b",
                  }}
                >
                  {item.settingtext}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Menu>
    </>
  );
}
