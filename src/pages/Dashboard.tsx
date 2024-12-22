import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CalendarButton from '../components/Button/Calendarbutton';
import ExportButton from '../components/Button/Exportbutton';
import ShareButton from '../components/Button/Sharebutton';
import AddButton from '../components/Button/Addbutton';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [headerText, setHeaderText] = useState('داشبورد'); // متن پیش‌فرض هدر

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        backgroundColor: '#f4f5f7',
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f4f5f7',
          width: '100%',
        }}
      >
        <Box
          sx={{
            flex: '1 0 auto',
            padding: 3,
            marginTop: '4rem',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <Stack direction="row" spacing={2}>
              <CalendarButton />
              <ExportButton />
              <ShareButton />
              <AddButton />
            </Stack>
            <Typography
              sx={{
                margin: 0,
                fontWeight: '500',
                fontSize: '2rem',
                paddingRight: '.5rem',
              }}
            >
              {headerText}
            </Typography>
          </Box>

          {/* Main Content */}
          <Box sx={{ mt: 3 }}>
          <Outlet context={{ setHeaderText }} />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}

export default Dashboard;
