import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';

// تعریف استایل منو
const StyledMenu = styled(function (props: any) {
  return (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  );
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginLeft:'5rem',
    marginTop: '5px',
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
    // اضافه کردن مثلث سفید در بالای منو
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -5,
      right: 10,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: '8px solid white',
    },
  },
}));

// تعریف کامپوننت اصلی با استفاده از تابع ساده
function ExportButton() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  function handleMenuOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  // لیست گزینه‌های منو
  const menuItems = [
    { icon: <EditIcon />, text: 'PDF' },
    { icon: <FileCopyIcon />, text: 'Google Sheets' },
    { icon: <ArchiveIcon />, text: 'Excel' },
    { icon: <ArchiveIcon />, text: 'CSV' },
  ];

  return (
    <>
      {/* دکمه اصلی */}
      <Button
        variant="outlined"
        startIcon={
          <FileDownloadOutlinedIcon
            sx={{
              color: 'rgb(95, 99, 242)',
              marginRight: '1px',
              width: '15px',
              height: '15px',
            }}
          />
        }
        onClick={handleMenuOpen}
        disableRipple
        sx={{
          backgroundColor: '#FFFF',
          color: '#5a5f7d ',
          borderRadius: '8px',
          borderColor: 'transparent',
          textTransform: 'none',
          fontSize: '14px',
          padding: '8px 17px',
          height: '40px',
          lineHeight: '1.5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            color: '#5f63f2', 
          },
        }}
      >
        Export
      </Button>

      {/* منو */}
      <StyledMenu
        id="export-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem 
          key={index} 
          onClick={handleMenuClose} 
          disableRipple 
          sx={{
            color:'#5a5f7d' , 
            fontSize:'13px' , 
            lineHeight:'1.5715',
            } }>
            {item.icon}
            {item.text}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
}

export default ExportButton;
