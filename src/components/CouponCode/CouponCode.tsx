import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

// تعریف نوع prop که یک تابع است و کد تخفیف را به والد می‌فرستد
interface CouponCodeProps {
  onApplyCoupon: (coupon: string) => void; // تابعی که کد تخفیف را می‌گیرد
}

const CouponCode: React.FC<CouponCodeProps> = ({ onApplyCoupon }) => {
  // وضعیت برای ذخیره کد تخفیف
  const [coupon, setCoupon] = useState<string>("");

  // تابع برای مدیریت تغییر در فیلد ورودی
  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(event.target.value);
  };

  // تابع برای ارسال کد تخفیف
  const handleApplyCoupon = () => {
    onApplyCoupon(coupon); // ارسال کد تخفیف به والد
  };

  return (
    <Box
      component="form"
      sx={{
        padding: "17px 0 10px",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
      }}
    >
      <TextField
        id="outlined-basic"
        placeholder="Coupon Code"
        variant="outlined"
        value={coupon} // مقدار کد تخفیف فعلی
        onChange={handleCouponChange} // تغییرات ورودی
        sx={{
          textTransform: "capitalize",
          borderRadius: "5px",
          maxWidth: "150px",
          height: "44",
          backgroundColor: "rgb(248, 249, 251)",
          borderColor: "rgb(241, 242, 246)",
          textOverflow: "ellipsis",
          '& .MuiOutlinedInput-root': {
            border: 'none', // حذف بردر پیش‌فرض
            '& fieldset': {
              border: 'none', // حذف بردر معمول
            },
            '& input': {
              textAlign: "center",
            },
            '&:hover fieldset': { 
              border: 'none', // حذف بردر هنگام hover
            },
            '&.Mui-focused fieldset': {
              border: 'none', // حذف بردر هنگام فوکوس
            },
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "rgb(95, 99, 242)",
          borderRadius: "5px",
          color: "#ffff",
          padding: "0 15px",
          boxShadow: "none",
          fontSize: "14px",
          textTransform: "capitalize",
          "&:hover": {
            boxShadow: "none",
          },
        }}
        onClick={handleApplyCoupon} // زمانی که دکمه فشرده می‌شود
        disableRipple
      >
        Apply Coupon
      </Button>
    </Box>
  );
};

export default CouponCode;
