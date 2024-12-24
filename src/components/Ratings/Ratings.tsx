import React, { useState } from "react";
import { Box, Checkbox, Typography, Rating } from "@mui/material";
import { products } from "../ProductStore/ProductStoreData";

const Ratings:React.FC = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  // محاسبه تعداد پست‌ها بر اساس ستاره
  const ratingsCount = products.reduce((acc: Record<number, number>, product) => {
    const roundedRating = Math.floor(product.rating); // گرد کردن ستاره به پایین
    acc[roundedRating] = (acc[roundedRating] || 0) + 1;
    return acc;
  }, {});
  // مدیریت تغییر ستاره‌های انتخاب‌شده
  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };
  return (
    <Box sx={{ padding: "20px 0" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "600",
          fontSize: "15px",
          color: "rgb(39, 43, 65)",
          paddingBottom:"10px",
        }}
      >
        Ratings
      </Typography>

      {[5, 4, 3, 2, 1].map((star) => {
        const count = ratingsCount[star] || 0; // تعداد پست‌های مربوط به هر تعداد ستاره

        return (
          <Box
            key={star}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            {/* چک‌باکس */}
            <Checkbox
              checked={selectedRatings.includes(star)}
              onChange={() => handleRatingChange(star)}
              sx={{
                padding: "0",
                marginRight: "8px",
                color:"#d9d9d9",
              }}
            />

            {/* ستاره‌ها */}
            <Box 
            sx={{ 
                display: "flex", 
                alignItems: "center",
                 }}>
              <Rating
                value={star}
                readOnly
                sx={{
                  fontSize: "15px", // اندازه ستاره‌ها
                  color: "#ff9900", 
                }}
              />
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                and up
              </Typography>
            </Box>

            {/* تعداد پست‌ها */}
            <Typography
              sx={{
                marginLeft: "auto",
                fontSize: "14px",
                fontWeight: "500",
                color: "rgb(102, 102, 102)",
              }}
            >
              {count}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Ratings;