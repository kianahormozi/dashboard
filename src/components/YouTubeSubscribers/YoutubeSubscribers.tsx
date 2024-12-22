import React, { useState , useMemo} from "react";
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
import {yearlyData , monthlyData , weeklyData } from './YouTubeSubscribersData';

interface YouTubeSubscribersData {
  day?: string;
  range?: string;
  month?: string;
  lost:number;
  gained:number,
}

const YouTubeSubscribers : React.FC =() => {
  const [timeRange, setTimeRange] = useState("Year");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCurrentDataset = useMemo(() => {
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
  }, [timeRange]);

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

      <Divider 
      sx={{ 
        marginBottom: "30px",
         marginTop: "-13px",
          }}/>

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
            sx={{ 
              fontSize: "14px", 
              color: "#757575", 
              marginBottom: "5px",
             }}
          >
            YouTube Subscribers
          </Typography>
          <Typography
            sx={{ 
              fontSize: "24px", 
              fontWeight: "bold", 
              color: "#272b41",
             }}
          >
            985,872
          </Typography>
          <Typography
            sx={{ 
              fontSize: "12px", 
              color: "#4caf50", 
              fontWeight: "bold" ,
            }}
          >
            ↑ 75%
          </Typography>
        </Box>

        {/* راهنمای رنگ های نمودار*/}

        <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "15px",
           }}>
          <Box 
          sx={{ display: "flex", 
          alignItems: "center", 
          gap: "5px" ,
          }}>
            <Box
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "blue",
                borderRadius: "3px",
              }}
            />
            <Typography 
            sx={{ 
              fontSize: "12px", 
              color: "#757575",
               }}>
              Gained
            </Typography>
          </Box>
          <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "5px",
             }}>
            <Box
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                borderRadius: "3px",
              }}
            />
            <Typography 
            sx={{ 
              fontSize: "12px", 
              color: "#757575",
               }}>
              Lost
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* چارت */}
      <Box sx={{ width: "100%", height: "680px" , paddingTop:"50px" }}> 
      <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getCurrentDataset}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={timeRange === "Week" ? "day" : timeRange === "Month" ? "range" : "month"} />
            <YAxis />
            <Tooltip cursor={{ fill: "transparent" }} contentStyle={{ backgroundColor: "white", border: "1px solid #ccc" }} />
            <Bar
              dataKey="gained"
              barSize={15}
              onMouseEnter={(_, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {getCurrentDataset.map((entry, index) => (
                <Cell key={`cell-gained-${index}`} fill={hoveredIndex === index ? "#5f63f2" : "lightblue"} />
              ))}
            </Bar>
            <Bar
              dataKey="lost"
              barSize={15}
              onMouseEnter={(_, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {getCurrentDataset.map((entry, index) => (
                <Cell key={`cell-lost-${index}`} fill={hoveredIndex === index ? "#f44336" : "lightpink"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
export default YouTubeSubscribers;