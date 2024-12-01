import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" 
      startIcon={<AddIcon sx={{color:"#ffff" , marginRight:"1px" , width:"15px" , height:"15px"}} />} 
      disableRipple
      sx={{
          backgroundColor: 'rgb(95, 99, 242)', // رنگ اصلی دکمه
          color: '#ffff ',
          borderRadius: '8px',
          borderColor:"transparent",
          textTransform: 'none', // جلوگیری از حروف بزرگ
          fontSize: '14px',
          padding: '6px 12px', // فاصله داخلی
          height: '40px', // ارتفاع مشخص
          lineHeight: '1.5', // ارتفاع خط مناسب
          display: 'flex', // برای تنظیم آیکون و متن
          alignItems: 'center', // هم‌تراز کردن محتوا
          justifyContent: 'center', // وسط‌چین کردن
          '&:hover': {
            backgroundColor:'rgb(67, 71, 217)'
          },
        }}>
        Add New
      </Button>

    </Stack>
  );
}
