import React, { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/navigationSlice';
import { useNavigate } from 'react-router-dom';
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

const drawerWidth = 250; // عرض منوی باز

// استایل‌های مربوط به حالت باز
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create(['width', 'padding'], { // برای باز شدن اهسته سایدبار
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#fdfefe',
});

// استایل‌های مربوط به حالت بسته
const closedMixin = (theme: Theme): CSSObject => ({
  width: 55, // عرض در حالت بسته
  transition: theme.transitions.create(['width', 'padding'], { // برای بسته شدن اهسته سایدبار
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#fdfefe',
});

// کامپوننت Drawer با استایل باز و بسته
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

// کامپوننت Sidebar
export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // برای هدایت به صفحه
  const [open, setOpen] = useState(true); // وضعیت باز یا بسته بودن منو
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({}); // وضعیت باز یا بسته بودن زیرمنوها

  const handleDrawerToggle = () => setOpen((prev) => !prev); // تغییر وضعیت منو

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] })); // باز و بسته کردن زیرمنو
  };

  const handleLinkClick = (segment: string) => {
    dispatch(setCurrentPage(segment)); // تغییر صفحه در Redux
    navigate(`/${segment}`); // هدایت به صفحه
  };

  return (
    <div style={{ 
      display: 'flex',
       }}>
      {/* کامپوننت هدر */}
      <Header open={open} onDrawerToggle={handleDrawerToggle} />
      {/* کامپوننت Drawer */}
      <DrawerStyled variant="permanent" open={open}>
        <List 
        sx={{ 
          paddingLeft: '.5rem', 
          paddingTop: '4rem',
           }}>
          {NAVIGATION.map((item, index) => {
            if (item.kind === 'header') {
              return (
                <ListItemButton 
                key={index} 
                sx={{ 
                  marginTop:"8px",
                   }}>
                  {open && ( // متن فقط در حالت باز نمایش داده شود
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
            }
            if (item.children) {
              const isOpen = openSubmenus[item.segment] || false;
              return (
                <React.Fragment key={index}>
                  <ListItemButton
                    disableRipple
                    onClick={() => toggleSubmenu(item.segment)}
                    sx={{ 
                      marginBottom:"4px",
                    }}
                  >
                    {/* آیکون اصلی منو */}
                    <ListItemIcon
                      sx={{
                        minWidth: 30,
                        mr: open ? 1 : 0,
                        color: 'rgb(173, 180, 210)',
                      }}
                    >
                      <item.icon />
                    </ListItemIcon>

                    {/* متن فقط در حالت باز نمایش داده شود */}
                    {open && (
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          color: 'rgb(39, 43, 65)',
                        }}
                      />
                    )}

                    {/* آیکون باز یا بسته بودن زیرمنو */}
                    {open && (
                      <span style={{ color: 'rgb(134, 142, 174)' }}>
                        {isOpen ? (
                          <KeyboardArrowDownIcon sx={{ fontSize: '20px' }} />
                        ) : (
                          <KeyboardArrowRightIcon sx={{ fontSize: '20px' }} />
                        )}
                      </span>
                    )}
                  </ListItemButton>

                  {/*نمایش زیرمنو زمانی که سایدبار و منو هردو باز شوند */}
                  <Collapse in={isOpen && open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child, childIndex) => (
                        <ListItemButton
                          disableRipple
                          key={childIndex}
                          sx={{ 
                            paddingLeft:"32px", 
                            marginBottom:"4px",
                          }}
                          onClick={() => handleLinkClick(child.segment)} // هدایت به صفحه زیرمنو
                        >
                          {/* متن زیرمنو */}
                          {open && (
                            <ListItemText
                              primary={child.title}
                              primaryTypographyProps={{
                                fontSize: '0.9rem',
                                color: 'rgb(39, 43, 65)',
                                paddingLeft:"20px",
                              }}
                            />
                          )}
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
                sx={{ mb: 0.5 }}
                onClick={() => handleLinkClick(item.segment || '')} // هدایت به صفحه
              >
                {/* آیکون منو */}
                <ListItemIcon
                  sx={{
                    minWidth: 15,
                    mr: open ? 1 : 0,
                    color: 'rgb(173, 180, 210)',
                    fontSize: '12px',
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {/* متن فقط در حالت باز */}
                {open && (
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
