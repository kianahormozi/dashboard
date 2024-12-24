import React, { useState } from "react";
import { Box, Typography, Divider, Tabs, Tab, Grid } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {SocialMedia , Timeframe , calculatePercentage , metrics } from './OverviewsData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Overviews: React.FC = () => {
  const [timeRange, setTimeRange] = useState<Timeframe>("Week");

  const renderChart = (networkName: SocialMedia, metric: keyof typeof metrics[SocialMedia]["Week"]) => {
    const chartData = {
      labels: ["Week", "Month", "Year"],
      datasets: [
        {
          label: `${metric.charAt(0).toUpperCase() + metric.slice(1)}`,
          data: [
            metrics[networkName].Week[metric],
            metrics[networkName].Month[metric],
            metrics[networkName].Year[metric],
          ],
          borderColor: "#20c997",
          backgroundColor: "rgba(32, 201, 151, 0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      elements: { point: { radius: 0 } },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      scales: {
        y: { display: false },
        x: { grid: { display: false }, ticks: { display: false } },
      },
    };

    return (
      <Box 
      sx={{ 
        marginBottom: "10px",
         }}>
        <Box 
        sx={{ 
          height: "100px", 
          marginTop: "10px",
           }}>
          <Line 
          data={chartData} 
          options={chartOptions}
           />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {Object.keys(metrics).map((network) => (
          <Grid item xs={12} md={4} key={network}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "left",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "8px",
                }}
              >
                {/* عنوان بخش */}
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#272b41",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {network} Overview
                </Typography>

                {/* تب‌های زمانی */}
                <Box>
                  <Tabs
                    value={timeRange}
                    onChange={(event, newValue) => setTimeRange(newValue)}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{
                      "& .MuiTab-root": {
                        minWidth: "auto",
                        fontSize: "14px",
                        textTransform: "none",
                        padding: "0 12px",
                      },
                      "& .MuiTabs-indicator": {
                        height: "2px",
                        backgroundColor: "#4f46e5", 
                      },
                    }}
                  >
                    <Tab label="Week" value="Week" />
                    <Tab label="Month" value="Month" />
                    <Tab label="Year" value="Year" />
                  </Tabs>
                </Box>
              </Box>
              <Divider 
              sx={{
                 marginBottom: "20px",
                 marginTop:"-9px",
                  }} />
              {["posts", "likes", "newFollowers"].map((metric) => {
                const currentValue = metrics[network as SocialMedia][timeRange][metric as keyof typeof metrics[SocialMedia]["Week"]];
                const previousValue =
                  timeRange === "Week"
                    ? metrics[network as SocialMedia]["Month"][metric as keyof typeof metrics[SocialMedia]["Week"]]
                    : timeRange === "Month"
                    ? metrics[network as SocialMedia]["Year"][metric as keyof typeof metrics[SocialMedia]["Week"]]
                    : metrics[network as SocialMedia]["Month"][metric as keyof typeof metrics[SocialMedia]["Week"]];

                const percentageChange = calculatePercentage(currentValue, previousValue);
                return (
                  <Box key={metric} sx={{ marginBottom: "15px" }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#868eae",
                      }}
                    >
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </Typography>
                    <Box 
                    sx={{
                      display:"flex",
                      alignItems:"center",
                      gap:"15px",
                    }}>
                    <Typography
                      sx={{
                        fontSize: "28px", 
                        fontWeight: "600",
                        color: "#272b41",
                      }}
                    >
                      {currentValue}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: percentageChange >= 0 ? "#20c997" : "red",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {percentageChange.toFixed(2)}%
                      {percentageChange >= 0 ? (
                        <ArrowUpwardIcon sx={{ color: "#20c997", fontSize: "14px", marginLeft: "5px" }} />
                      ) : (
                        <ArrowDownwardIcon sx={{ color: "red", fontSize: "14px", marginLeft: "5px" }} />
                      )}
                    </Typography>
                    </Box>
                    {renderChart(network as SocialMedia, metric as keyof typeof metrics[SocialMedia]["Week"])}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overviews;
