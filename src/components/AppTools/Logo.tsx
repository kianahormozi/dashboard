import React, { useState } from 'react';
import Box from '@mui/material/Box';

export default function Logo() {
  return (
    <>
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'left',
                paddingLeft: '1.5rem',
            }}
            >
            <img
                src="/image/logo-dashboard.svg"
                alt="Logo"
                style={{ 
                  height: '24px', 
                  width: 'auto',
                 }}
            />
        </Box>
    </>
  )
}
