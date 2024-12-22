import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import {footeritems} from './FooterData';

const Footer : React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'relative',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        padding: '18px 0',
        textAlign: 'center', 
        display:"flex",
        justifyContent:"space-between",
      }}
    >
      <Typography 
      variant="body2" 
      color="rgb(146, 153, 184)"
      sx={{
        paddingLeft:"10px",
      }}>
        2023 © SovWare
      </Typography>
      <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        paddingRight:"10px",
        
         }}>
        {footeritems.map((linkitem, index) => (
          <Link key={index} href={linkitem.href} 
          underline="none" 
          sx={{ 
            color: 'rgb(146, 153, 184)',
            fontSize:"15px",
            "&:hover":{
                color:"rgb(95, 99, 242)",
            }
             }}>
            {linkitem.footeritem}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
export default Footer;