import * as React from 'react';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Stack from '@mui/material/Stack';

export default function ClendarButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" 
      startIcon={<CalendarMonthOutlinedIcon 
        sx={{
          color:"rgb(95, 99, 242)" , 
          marginRight:"1px" , 
          width:"15px" , 
          height:"15px",
        }} 
        />
      } 
      disableRipple
      sx={{
          backgroundColor: '#FFFF', // رنگ اصلی دکمه
          color: '#5a5f7d ',
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
            color:"#5f63f2",
          },
        }}>
        Calendar
      </Button>

    </Stack>
  );
}
