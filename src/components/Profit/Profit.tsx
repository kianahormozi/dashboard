import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
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
import { boxData } from './ProfitData';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export interface BoxData {
  title: string;
  price: string;
  change: string;
  prev: string;
  color: string;
  graphColor: string;
  datasets: number[];
}

const Profit: React.FC = () => {
  return (
    <Box
      sx={{
        paddingTop:"20px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",  
        gap: "16px",
        width: "100%",
      }}
    >
      {boxData.map((item, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          <CardContent>
            {/* هدر */}
            <Box sx={{ paddingBottom: "12px" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#272b41",
                }}
              >
                {item.title}
              </Typography>
            </Box>

            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                fontSize: "35px",
                paddingBottom: "10px",
              }}
            >
              {item.price}
            </Typography>

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
                sx={{ marginLeft: 0.5 }}
              >
                {item.change}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginLeft: 1 }}
              >
                {item.prev}
              </Typography>
            </Box>

            {/* چارت */}
            <Box sx={{ height: "100px", width: "100%", marginTop: 2 }}>
              <Line
                data={{
                  labels: item.datasets.map((_, i) => `Label ${i + 1}`),
                  datasets: [
                    {
                      data: item.datasets,
                      borderColor: item.graphColor,
                      backgroundColor: `${item.graphColor}20`,
                      tension: 0.4,
                      fill: true,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
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
      ))}
    </Box>
  );
};

export default Profit;
