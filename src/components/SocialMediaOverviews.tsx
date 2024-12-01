import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Box, Divider, Typography } from '@mui/material';

interface SocialItem {
  socialicon: JSX.Element;
  socialbackground: string;
  icontext: string;
  iconnumber: string;
}

const socialItems: SocialItem[] = [
  {
    socialicon: <FacebookOutlinedIcon />,
    socialbackground: "rgb(35, 102, 184)",
    icontext: "Likes",
    iconnumber: "5,461",
  },
  {
    socialicon: <TwitterIcon />,
    socialbackground: "rgb(0, 171, 228)",
    icontext: "Followers",
    iconnumber: "5,461",
  },
  {
    socialicon: <InstagramIcon />,
    socialbackground:
      "linear-gradient(to top, rgb(255, 193, 7) 0%, rgb(244, 67, 54) 31%, rgb(156, 39, 176) 65%, rgb(156, 39, 176) 100%)",
    icontext: "Followers",
    iconnumber: "5,461",
  },
  {
    socialicon: <YouTubeIcon />,
    socialbackground: "rgb(227, 34, 18)",
    icontext: "Subscribers",
    iconnumber: "5,461",
  },
  {
    socialicon: <PinterestIcon />,
    socialbackground: "rgb(227, 34, 18)",
    icontext: "Subscribers",
    iconnumber: "5,461",
  },
  {
    socialicon: <LinkedInIcon />,
    socialbackground: "rgb(0, 124, 188)",
    icontext: "Followers",
    iconnumber: "5,461",
  },
];

export default function SocialMediaOverviews() {
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
              {item.socialicon}
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
