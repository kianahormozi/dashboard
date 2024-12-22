import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { ratioData } from "./RatioData"; 

// نوع داده‌ها برای Ratio
interface ratioData {
  data: {
    ratioValue: number; // مقدار Ratio مثل Quick Ratio یا Current Ratio
    target: string; // هدف مثل "1 or higher" یا "3 or higher"
    progressColor: string; // رنگ پیشرفت
    boxTitle: string; // عنوان باکس
  }[];
}

const Ratio: React.FC = () => {
  return (
    <Box 
    sx={{ 
        paddingTop:"20px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "16px", 
        width: "100%",
        }}>
      {ratioData.map((item, index) => {
        // استخراج هدف از رشته "x or higher"
        const targetValue = parseFloat(item.target.split(" ")[0]);
        const progress = Math.min((item.ratioValue / targetValue) * 100, 100); // درصد پیشرفت باید محدود به 100% باشد.

        // رنگ نوار پیشرفت: اگر Ratio >= هدف، سبز می‌شود؛ در غیر این صورت نارنجی
        let progressBarColor = item.progressColor;
        if (item.ratioValue < targetValue) {
          progressBarColor = "#ff9800"; // نارنجی برای مقادیر کمتر از هدف
        }

        return (
          <Box
            key={index}
            sx={{
              padding: "28px 24px 38px",
              borderRadius: 2,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.boxTitle} Ratio
            </Typography>

            {/* مقدار بزرگ Ratio */}
            <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 1 }}>
              {item.ratioValue}
            </Typography>
            <Box
            sx={{
                display:"flex",
                gap:1,
                alignItems:"baseline"

            }}>
                {/* نوار پیشرفت و درصد*/}
                <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    flexGrow: 1, // نوار پیشرفت فضای موجود را پر می‌کند
                    marginTop: 2,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: progressBarColor,
                    },
                  }}
                />
                <Typography variant="body2" color="textSecondary">
                    {progress.toFixed(0)}% {/* درصد پیشرفت */}
                </Typography>
            </Box>
              <Typography variant="body2"
              sx={{ 
                textAlign: "left",
                fontSize:"13px",
                paddingTop:"8px",
                 }}>
               <span
               style={{
                color:"rgb(39, 43, 65)",
                fontWeight:"600",
               }}
               >
                {item.target}
                </span> 
               <span
               style={{
                color:"rgb(146, 153, 184)",
                padding:"0 5px",
               }}
               >
                {item.boxTitle} ratio target
                </span> 
              </Typography>

          </Box>
        );
      })}
    </Box>
  );
};

export default Ratio;
