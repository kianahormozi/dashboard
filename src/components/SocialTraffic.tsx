import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type DataRow = {
  socialNetwork: string;
  users: number;
  newUsers: number;
  sessions: number;
  bounceRate: string;
  pagesPerSession: number;
  avgSessionDuration: string;
};

const weekData: DataRow[] = [
  { socialNetwork: 'Facebook', users: 3397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
  { socialNetwork: 'Twitter', users: 2397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
  { socialNetwork: 'LinkedIn', users: 1397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
  { socialNetwork: 'YouTube', users: 4397, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
  { socialNetwork: 'Pinterest', users: 597, newUsers: 422, sessions: 2584, bounceRate: '30.35%', pagesPerSession: 2.5, avgSessionDuration: '00:01:05' },
];

const monthData = [...weekData.map(row => ({ ...row, users: row.users + 1000 }))];
const yearData = [...weekData.map(row => ({ ...row, users: row.users + 2000 }))];

const columns: { id: keyof DataRow; label: string; align?: 'right' }[] = [
  { id: 'socialNetwork', label: 'Social Network' },
  { id: 'users', label: 'Users', align: 'right' },
  { id: 'newUsers', label: 'New Users', align: 'right' },
  { id: 'sessions', label: 'Sessions', align: 'right' },
  { id: 'bounceRate', label: 'Bounce Rate', align: 'right' },
  { id: 'pagesPerSession', label: 'Pages / Session', align: 'right' },
  { id: 'avgSessionDuration', label: 'Avg. Session Duration', align: 'right' },
];

const SocialTraffic: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('week');
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (option: '2 years' | '3 years' | '4 years' | null) => {
    setMenuAnchor(null);
  };

  const getData = (): DataRow[] => {
    switch (timeframe) {
      case 'week':
        return weekData;
      case 'month':
        return monthData;
      case 'year':
        return yearData;
      default:
        return weekData;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginTop: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '16px',
            color: '#272b41',
          }}
        >
          Social Traffic Metrics
        </Typography>

        <Box 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            }}>
          <Button
            onClick={() => setTimeframe('week')}
            sx={{
              backgroundColor: timeframe === 'week' ? '#5f63f2' : 'transparent',
              color: timeframe === 'week' ? '#fff' : '#272b41',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'none',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: '#5f63f2',
                color: '#fff',
              },
            }}
          >
            Week
          </Button>
          <Button
            onClick={() => setTimeframe('month')}
            sx={{
              backgroundColor: timeframe === 'month' ? '#5f63f2' : 'transparent',
              color: timeframe === 'month' ? '#fff' : '#272b41',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'none',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: '#5f63f2',
                color: '#fff',
              },
            }}
          >
            Month
          </Button>
          <Button
            onClick={() => setTimeframe('year')}
            sx={{
              backgroundColor: timeframe === 'year' ? '#5f63f2' : 'transparent',
              color: timeframe === 'year' ? '#fff' : '#272b41',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'none',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: '#5f63f2',
                color: '#fff',
              },
            }}
          >
            Year
          </Button>

          {/* Ellipsis Menu */}
          <IconButton onClick={handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => handleMenuClose(null)}
          >
            <MenuItem onClick={() => handleMenuClose('2 years')}>2 Years</MenuItem>
            <MenuItem onClick={() => handleMenuClose('3 years')}>3 Years</MenuItem>
            <MenuItem onClick={() => handleMenuClose('4 years')}>4 Years</MenuItem>
          </Menu>
        </Box>
      </Box>
        <Box 
        sx={{
            backgroundColor:"#f8f9fb",
        }}>
            <Box 
            sx={{
                display:"flex",
                justifyContent:"space-around",
                padding:"15px 0",
            }}>
                <Typography >
                Acquisition
                </Typography>
                <Typography>
                Behavior
                </Typography>
            </Box>
        </Box>

      {/* Table Section */}
      <TableContainer >
        <Table 
        sx={{ 
            minWidth: 650 ,
            boxShadow:"none",
            padding: '20px',
        }} 
            aria-label="social traffic table"
            >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
          sx={{
            boxShadow:"none",
            
          }}>
            {getData().map((row) => (
              <TableRow key={row.socialNetwork}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align || 'left'}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SocialTraffic;
