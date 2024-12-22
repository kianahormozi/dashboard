import React from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import {socialItems } from './SocialMediaOverviewsData';

const SocialMediaOverviews: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        fontSize: "14px",
        padding: "20px 0",
        marginTop:"20px",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          margin: 0,
          fontWeight: "600",
          fontSize: "16px",
          paddingBottom: "15px",
          paddingLeft:"20px",
          paddingRight:"20px",
          color: "#272b41",
        }}
      >
        Social Media Overview
      </Typography>

      <Divider sx={{ marginBottom: "15px" }} />

      {/* Social Media Items */}
      <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px", // فاصله بین ایتم ها
            paddingLeft:"20px",
            paddingRight:"20px",
        }}
      >
        {socialItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection:"column",
              textAlign:"center",
              alignItems: "center",
              gap: "15px",
              borderRadius: "10px",
              padding: "20px 0px",
              flex: "1 1 calc(30% - 20px)", // 3 ایتم در هر ردیف
            }}
          >
            {/* Social Media Icon */}
            <Avatar
              sx={{
                background: item.socialbackground,
                color: "#fff",
                width: "50px",
                height: "50px",
                borderRadius:"8px",
              }}
            >
              <item.socialicon />
            </Avatar>

            {/* Text and Number */}
            <Box>
              <Typography
                sx={{ fontWeight: "700", fontSize: "18px", color: "#272b41" }}
              >
                {item.iconnumber}
              </Typography>
              <Typography sx={{ color: "#6b708b", fontSize: "14px" }}>
                {item.icontext}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default SocialMediaOverviews;