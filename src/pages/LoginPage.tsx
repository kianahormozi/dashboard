import React from "react";
import { Grid, Avatar, Typography, Box, Link } from "@mui/material";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Grid
      container
      spacing={0} // حذف فاصله‌ها
      sx={{
        height: "100%",
      }}
    >
      <Grid
        sm={12}
        md={4}
        sx={{
          position: "relative",
          backgroundImage: "url(/image/dashboard-bg2.png)", // بک‌گراند
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flex: "0 0 37.5%",
          maxWidth: "37.5%",
        }}
      >
        <Typography
        sx={{
          fontSize:"28px",
          fontWeight:"600",
          lineHeight:"38px",
          padding:"90px 50px 30px 50px",
        }}>
        StrikingDash React 
        <br />
        Web Application
        </Typography>
        <Avatar
        alt="login-background"
        src="/image/dashboard-bg3.png"
        sx={{
          position: "absolute", 
          bottom:"0",
          left: "40%", 
          transform: "translateX(-50%)", 
          width: "80%", 
          height: "auto",
        }}
         />
          {/* تصویر بالای بک‌گراند */}
        <Avatar
          alt="login-img"
          src="/image/dashboard.png"
          sx={{
            position: "absolute", 
            top:"30%",
            left: "65%", 
            transform: "translateX(-50%)", 
            width: "500px", 
            height: "auto",
          }}
        />
      </Grid>
      <Grid
      sm={12}
      md={8}
      sx={{
        padding:"25px",
      }}
      >
          <Typography
          sx={{
            color:"rgb(90, 95, 125)",
            fontWeight:"500",
            textAlign:"right",
            fontSize:"14px",
          }}>
             Don’t have an account? 
             <Link
             sx={{
              textDecoration:"none",
              color:"#1890ff",
              transition:"color .3s",
              paddingLeft:"4px",

             }}>
                sign up now
             </Link>
          </Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
