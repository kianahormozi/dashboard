import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Header from './Header'; // Add your Header component

import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
  Layers as LayersIcon,
  KeyboardArrowRightOutlined as KeyboardArrowRightIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownIcon,
  Segment,
} from '@mui/icons-material'; 

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:  '#fdfefe', //رنگ سایدبار وقتی بازه
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,

  },
  backgroundColor: '#fdfefe', // رنگ سایدبار وقتی بسته اس
});

const DrawerStyled = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    children: [
      { segment: 'dashboard/social-media', title: 'Social Media', icon: <DescriptionIcon /> },
      { segment: 'dashboard/finance', title: 'Finance', icon: <DescriptionIcon /> },
    ],
  },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      { segment: 'dashboard/sales', title: 'Sales', icon: <DescriptionIcon /> },
      { segment: 'dashboard/traffic', title: 'Traffic', icon: <DescriptionIcon /> },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Header
          open={open}
          onDrawerToggle={handleDrawerToggle}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode((prev) => !prev)}
        />
        <DrawerStyled variant="permanent" open={open}>
          <List sx={{ paddingLeft: '.5rem' , paddingTop:'4rem' }}>
            {NAVIGATION.map((item, index) => {
              if (item.kind === 'header') {
                return (
                  <ListItemButton key={index} sx={{ mt: 1 }}>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                      sx={{ color:"rgb(146, 153, 184)" }}
                    />
                  </ListItemButton>
                );
              }
              if (item.children) {
                const isOpen = openSubmenus[item.segment] || false;
                return (
                  <React.Fragment key={index}>
                    <ListItemButton onClick={() => toggleSubmenu(item.segment)} sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{  minWidth: 30, mr: 1 , color:'rgb(173, 180, 210)' }}> 
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} primaryTypographyProps={{ fontSize: '0.9rem'  }} />
                      {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                    </ListItemButton>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child, childIndex) => (
                          <ListItemButton key={childIndex} sx={{ pl: 4, mb: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 15, mr: 1 ,color:'rgb(173, 180, 210)' , fontSize:"12px"}}>
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText primary={child.title} primaryTypographyProps={{ fontSize: '0.8rem' , color:'rgb(39, 43, 65)'}} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }
              return (
                <ListItemButton key={index} sx={{ mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 15, mr: 1 ,color:'rgb(173, 180, 210)' , fontSize:"12px"}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} primaryTypographyProps={{ fontSize: '0.9rem' , color:' rgb(39, 43, 65)'}} />
                </ListItemButton>
              );
            })}
          </List>
        </DrawerStyled>
      </div>
    </ThemeProvider>
  );
}