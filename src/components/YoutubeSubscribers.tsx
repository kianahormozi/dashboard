import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Divider, Typography, Tabs, Tab } from "@mui/material";


const weeklyData = [
  { day: "Monday", gained: 500, lost: 100 },
  { day: "Tuesday", gained: 700, lost: 200 },
  { day: "Wednesday", gained: 800, lost: 150 },
  { day: "Thursday", gained: 600, lost: 180 },
  { day: "Friday", gained: 900, lost: 250 },
  { day: "Saturday", gained: 1000, lost: 300 },
  { day: "Sunday", gained: 1100, lost: 350 },
];

const monthlyData = [
  { range: "1-5", gained: 1500, lost: 400 },
  { range: "6-10", gained: 2000, lost: 500 },
  { range: "11-15", gained: 2500, lost: 600 },
  { range: "16-20", gained: 3000, lost: 800 },
  { range: "21-25", gained: 3500, lost: 900 },
  { range: "26-31", gained: 4000, lost: 1000 },
];

const yearlyData = [
  { month: "Jan", gained: 12000, lost: 4000 },
  { month: "Feb", gained: 8000, lost: 2000 },
  { month: "Mar", gained: 15000, lost: 5000 },
  { month: "Apr", gained: 20000, lost: 7000 },
  { month: "May", gained: 18000, lost: 6000 },
  { month: "Jun", gained: 24000, lost: 8000 },
  { month: "Jul", gained: 20000, lost: 7000 },
  { month: "Aug", gained: 22000, lost: 7500 },
  { month: "Sep", gained: 17000, lost: 6500 },
  { month: "Oct", gained: 19000, lost: 7000 },
  { month: "Nov", gained: 16000, lost: 6000 },
  { month: "Dec", gained: 25000, lost: 9000 },
];

export default function YouTubeSubscribers() {
  const [timeRange, setTimeRange] = useState("Year");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCurrentDataset = () => {
    switch (timeRange) {
      case "Week":
        return weeklyData;
      case "Month":
        return monthlyData;
      case "Year":
        return yearlyData;
      default:
        return yearlyData;
    }
  };

  const dataset = getCurrentDataset();

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "2rem",
      }}
    >
      {/* هدر */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "12px",
        }}
      >
        <Typography
          sx={{ 
            fontWeight: "600", 
            fontSize: "16px", 
            color: "#272b41" ,
          }}
        >
          Social Media Overview
        </Typography>
        <Tabs
          value={timeRange}
          onChange={(event, newValue) => setTimeRange(newValue)}
        >
          <Tab label="Week" value="Week" />
          <Tab label="Month" value="Month" />
          <Tab label="Year" value="Year" />
        </Tabs>
      </Box>

      <Divider sx={{ marginBottom: "30px", marginTop: "-13px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "14px", color: "#757575", marginBottom: "5px" }}
          >
            YouTube Subscribers
          </Typography>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "bold", color: "#272b41" }}
          >
            985,872
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#4caf50", fontWeight: "bold" }}
          >
            ↑ 75%
          </Typography>
        </Box>
        {/* Legend */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "blue",
                borderRadius: "3px",
              }}
            />
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              Gained
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                borderRadius: "3px",
              }}
            />
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              Lost
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* چارت */}
      <Box sx={{ width: "100%", height: "680px" , paddingTop:"50px" }}>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataset}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={
                    timeRange === "Week"
                      ? "day"
                      : timeRange === "Month"
                      ? "range"
                      : "month"
                  }
                />
                <YAxis />
                <Tooltip
                  cursor={{ fill: "transparent" }} // حذف کاور تیره هنگام هاور
                  contentStyle={{
                    backgroundColor: "white", // تنظیم پس‌زمینه Tooltip
                    border: "1px solid #ccc", // تنظیم حاشیه Tooltip
                  }}
                />
                <Bar
                  dataKey="gained"
                  barSize={15}
                  onMouseEnter={(_, index) => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {dataset.map((_, index) => (
                    <Cell
                      key={`cell-gained-${index}`}
                      fill={hoveredIndex === index ? "red" : "lightblue"}
                      style={{
                        backgroundColor: "transparent", // حذف کاور
                        boxShadow: "none", // حذف هرگونه سایه
                      }}
                    />
                  ))}
                </Bar>
                <Bar
                  dataKey="lost"
                  barSize={15}
                  onMouseEnter={(_, index) => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {dataset.map((_, index) => (
                    <Cell
                      key={`cell-lost-${index}`}
                      fill={hoveredIndex === index ? "blue" : "lightpink"}
                      style={{
                        backgroundColor: "transparent", // حذف کاور
                        boxShadow: "none", // حذف هرگونه سایه
                      }}
                    />
                  ))}
                </Bar>
              </BarChart>
          </ResponsiveContainer>

      </Box>
    </Box>
  );
}
