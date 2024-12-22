import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import {data} from './FacebookOverviewData';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);


const FacebookOverview: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("week");
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "2rem",
      }}
    >
      {/* Header Section */}
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
            color: "#272b41",
          }}
        >
          Facebook Overview
        </Typography>

        {/* Filter Buttons */}
        <Box>
          <Button
            onClick={() => setTimeframe("week")}
            sx={{
              backgroundColor: timeframe === "week" ? "#5f63f2" : "transparent",
              color: timeframe === "week" ? "#fff" : "#272b41",
              fontSize: "12px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: timeframe === "week" ? "#5f63f2" : "rgb(244, 245, 247)",
      
              },
            }}
          >
            Week
          </Button>
          <Button
            onClick={() => setTimeframe("month")}
            sx={{
              backgroundColor: timeframe === "month" ? "#5f63f2" : "transparent",
              color: timeframe === "month" ? "#fff" : "#272b41",
              fontSize: "12px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: timeframe === "month" ? "#5f63f2" : "rgb(244, 245, 247)",
       
              },
            }}
          >
            Month
          </Button>
          <Button
            onClick={() => setTimeframe("year")}
            sx={{
              backgroundColor: timeframe === "year" ? "#5f63f2" : "transparent",
              color: timeframe === "year" ? "#fff" : "#272b41",
              fontSize: "12px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: timeframe === "year" ? "#5f63f2" : "rgb(244, 245, 247)",
         
              },
            }}
          >
            Year
          </Button>
        </Box>
      </Box>
      <Divider 
      sx={{ 
        marginBottom: "30px",
         }} 
         />

      {/* Cards Section */}
      <Box>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ boxShadow: "none" }}>
                <CardContent>
                  {/* Value */}
                  <Typography
                    variant="h5"
                    fontWeight="700"
                    sx={{
                      fontSize: "24px",
                      paddingBottom: "10px",
                      paddingTop: "15px",
                    }}
                  >
                    {item.values[timeframe]}
                  </Typography>
                  {/* Card Title */}
                  <Typography
                    variant="subtitle2"
                    color="rgb(134, 142, 174)"
                    gutterBottom
                    sx={{
                      paddingBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {/* Change Info */}
                  <Box display="flex" alignItems="center" mt={1}>
                    {item.change.startsWith("+") ? (
                      <ArrowUpwardIcon
                        sx={{
                          color: item.color,
                          fontSize: 18,
                        }}
                      />
                    ) : (
                      <ArrowDownwardIcon
                        sx={{
                           color: item.color, 
                           fontSize: 18,
                           }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      color={item.color}
                      sx={{ 
                        marginLeft: 0.5,
                       }}
                    >
                      {item.change}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ 
                        marginLeft: 1,
                       }}
                    >
                      {item.prev}
                    </Typography>
                  </Box>
                  {/* Chart */}
                  <Box sx={{ height: 70, marginTop: 2 }}>
                    <Line
                      data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                          {
                            data: item.datasets[timeframe],
                            borderColor: item.graphColor,
                            backgroundColor: `${item.graphColor}20`,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 0,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: { display: false },
                        },
                        scales: {
                          x: { display: false },
                          y: { display: false },
                        },
                        elements: {
                          line: { borderWidth: 2 },
                        },
                        maintainAspectRatio: false,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FacebookOverview;
