import React, { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/navigationSlice';
import { useNavigate } from 'react-router-dom';  // وارد کردن useNavigate برای هدایت به صفحه‌ها
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Header from '../Header/Header'; 
import { NAVIGATION } from './SidebarData';
import {
  KeyboardArrowRightOutlined as KeyboardArrowRightIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownIcon,
} from '@mui/icons-material'; 

const drawerWidth = 250; //عرض سایدبار

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#fdfefe',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 40,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: '#fdfefe',
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


export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // تعریف navigate برای هدایت
  const [open, setOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLinkClick = (segment: string) => {
    dispatch(setCurrentPage(segment));  // تغییر وضعیت صفحه در Redux
    navigate(`/${segment}`);  // هدایت به مسیر مورد نظر
  };

  return (

      <div 
      style={{ 
        display: 'flex',
         }}>
        <Header
          open={open}
          onDrawerToggle={handleDrawerToggle}
        />
        <DrawerStyled variant="permanent" open={open}>
          <List sx={{ paddingLeft: '.5rem', paddingTop: '4rem' }}>
            {NAVIGATION.map((item, index) => {
              if (item.kind === 'header') {
                return (
                  <ListItemButton 
                  key={index} 
                  sx={{ 
                    mt: 1,
                     }}>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                      sx={{ 
                        color: 'rgb(146, 153, 184)',
                       }}
                    />
                  </ListItemButton>
                );
              }
              if (item.children) {
                const isOpen = openSubmenus[item.segment] || false;
                return (
                  <React.Fragment key={index}>
                    <ListItemButton
                      disableRipple
                      onClick={() => toggleSubmenu(item.segment)}
                      sx={{ 
                        mb: 0.5,
                       }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 30,
                          mr: 1,
                          color: 'rgb(173, 180, 210)',
                        }}
                      >
                        <item.icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <span
                      style={{
                        color:"rgb(134, 142, 174)",

                      }}>
                      {isOpen ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
                      ) : (
                        <KeyboardArrowRightIcon sx={{ fontSize: '20px' }} />
                      )}
                      </span>
                    </ListItemButton>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child, childIndex) => (
                          <ListItemButton
                            disableRipple
                            key={childIndex}
                            sx={{ pl: 4, mb: 0.5 }}
                            onClick={() => handleLinkClick(child.segment)} // هدایت به صفحه‌ی زیرمنو
                          >

                            <ListItemText
                              primary={child.title}
                              primaryTypographyProps={{
                                fontSize: '0.8rem',
                                color: 'rgb(39, 43, 65)',
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
              }
              return (
                <ListItemButton
                  key={index}
                  sx={{ 
                    mb: 0.5,
                   }}
                  onClick={() => handleLinkClick(item.segment || '')} // هدایت به صفحه
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 15,
                      mr: open ? 1 : 0, // فاصله در حالت باز یا بسته
                      color: 'rgb(173, 180, 210)',
                      fontSize: '12px',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && ( // فقط در حالت باز نمایش داده شود
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    color: 'rgb(39, 43, 65)',
                  }}
                />
                )}
                </ListItemButton>
              );
            })}
          </List>
        </DrawerStyled>
      </div>
  );
}
