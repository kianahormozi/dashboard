import * as React from 'react';
import { CouponData } from './CouponMenuData';
import { Button, MenuItem, Menu, Box, ButtonBase } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

// تعریف استایل منو
const StyledMenu = styled((props: any) => ( // هرنوع داده را میپذیرد
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // منو از پایین دکمه و سمت راستش باز بشه
    transformOrigin={{ vertical: 'top', horizontal: 'right' }} // منو از جهت بالا باز میشه 
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginLeft: '0rem',
    marginTop: '4px',
    color: 'rgb(55, 65, 81)',
    position: 'absolute',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 14, // اندازه ایکون
      },
    },
  },
}));

const StyledOutlineInput = styled(OutlinedInput)(({ theme }) => ({
        color: '#272b41',
        backgroundColor:'#fff',
        fontSize:"14px",
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #e3e6ef',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
         borderColor: '#8c94ff', 
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         // borderColor: 'transparent', 
        },
        '& .MuiInputBase-input': {
          padding: '10px 12px',
          transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          width: '100%',
        },
  }));

const StyledCouponButton = styled(ButtonBase)(({theme}) => ({
  color:'rgb(32, 201, 151)',
  fontSize:'14px',
  textAlign:"center",
  border:'1px solid rgb(32, 201, 151)',
  backgroundColor:'transparent',
  borderRadius:"4px",
  padding:'0px 20.5px',
}))

const CouponMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // موقعیت دکمه برای نمایش منو
  const [menuWidth, setMenuWidth] = React.useState<number>(0); // ذخیره عرض دکمه
  const [selectedCoupon, setSelectedCoupon] = React.useState<string>('Select Coupon'); // ذخیره مقدار کوپن
  const [showBox, setShowBox] = React.useState<boolean>(false);

  const open = Boolean(anchorEl);

  // باز کردن منو و ذخیره عرض دکمه
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuWidth(event.currentTarget.offsetWidth);
  };

  // بستن منو
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (couponName: string) => {
    setSelectedCoupon(couponName);
    setShowBox(true);
    handleClose();
  };

  return (
    <div>
      {/* coupon button */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          color: 'rgb(32, 201, 151)',
          display: 'flex',
          textTransform: 'capitalize',
          padding: '6px 0',
          justifyContent: 'space-between',
          width: '100%',
          '&:hover': { backgroundColor: 'transparent' },
        }}
      >
        <Box 
        sx={{ 
          display: 'flex',
           }}>
          <span>
            <LocalOfferIcon
              sx={{
                fontSize: '16px',
                marginRight: '5px',
                marginTop: '4px',
              }}
            />
          </span>
          {selectedCoupon}
        </Box>
        <Box>
          <KeyboardArrowDownIcon />
        </Box>
      </Button>
      {/* coupon menu */}
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            width: menuWidth, // عرض منو برابر دکمه
          },
        }}
      >
        {CouponData.map((couponItem, index) => (
          <MenuItem
            key={index}
            disableRipple
            onClick={() => handleMenuItemClick(couponItem.CouponName)}
            sx={{ 
              fontSize: '14px',
             }}
          >
            <span
            style={{
              color:"rgb(32, 201, 151)",
              paddingRight:"10px",
            }}>
              <LocalOfferIcon />
            </span>
            {couponItem.CouponName}
          </MenuItem>
        ))}
      </StyledMenu>
      {/* فرم */}
      {showBox && (
  <Box 
    component="form" 
    noValidate 
    autoComplete="off"
    sx={{ 
      display: "flex", 
      flexDirection:"column",
      gap: "10px", 
      marginTop: "1rem" ,
    }}
  >
    {/* نوشته Promo Code */}
    <Box 
      sx={{
        fontWeight: "bold", 
        color: "#272b41",
        fontSize: "14px"
      }}
    >
      Promo Code:
    </Box>

    {/* فرم */}
          <FormControl 
            sx={{ 
              width: '100%', 
              display:"flex",
              flexDirection:"row",
              gap:"20px",
            }}>
            <StyledOutlineInput placeholder="Please enter text"/>
            <StyledCouponButton >
              Submit
            </StyledCouponButton> 
          </FormControl>
  </Box>
)}
    </div>
  );
};

export default CouponMenu;
