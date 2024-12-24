import React, { useState, useMemo } from "react";
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
import { Box, Divider, Typography, Tabs, Tab, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

// Import داده‌ها از فایل جداگانه
import { weeklyDataCash, monthlyDataCash, yearlyDataCash, menuData } from './CashFlowData';

// تایپ‌دهی برای داده‌ها
interface CashFlowData {
  day?: string;
  range?: string;
  month?: string;
  CashIn: number;
  CashOut: number;
  Balance: number;  // تغییر به عدد
  CashInItem: number;  // تغییر به عدد
  CashOutItem: number;  // تغییر به عدد
}
interface MenuItemData {
  icon: React.ReactNode;
  text: string;
}

// تایپ‌دهی برای props در StyledMenu
const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginLeft: '-1rem',
    marginTop: '0',
    minWidth: 130,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: 'rgb(55, 65, 81)',
        marginRight: theme.spacing(1.5),
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: -5,
      right: 10,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: '8px solid white',
    },
  },
}));

const CashFlow: React.FC = () => {
  const [timeRange, setTimeRange] = useState("Year");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // استفاده از useMemo برای جلوگیری از محاسبه مجدد dataset
  const getCurrentDataset = useMemo(() => {
    switch (timeRange) {
      case "Week":
        return weeklyDataCash;
      case "Month":
        return monthlyDataCash;
      case "Year":
        return yearlyDataCash;
      default:
        return yearlyDataCash;
    }
  }, [timeRange]);

  // تعریف headerStats برای استفاده در UI
  const headerStats = useMemo(() => {
    const data = getCurrentDataset[0]; 
    return {
      Balance: data.Balance || 0,
      CashInItem: data.CashInItem || 0,
      CashOutItem: data.CashOutItem || 0,
    };
  }, [getCurrentDataset]);


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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: "15px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#272b41",
            }}
          >
            Cash Flow
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#757575",
            }}
          >
            Nov 23, 2019 - Nov 29, 2019
          </Typography>
        </Box>
        <Box 
        sx={{ 
          display: "flex",
           }}>
          <Tabs
            value={timeRange}
            onChange={(event, newValue) => setTimeRange(newValue)}
            sx={{
              ".MuiTabs-indicator": {
                height: "1px", // ضخامت خط
                backgroundColor: "#5f63f2", // رنگ خط 
              },
            }}
          >
            <Tab
              label="Week"
              value="Week"
              disableRipple
              sx={{
                fontSize: "12px", 
                textTransform: "capitalize",
                minWidth: "auto", // کاهش فضای اضافی
                padding: "0 8px", // تنظیم فضای داخلی تب
              }}
            />
            <Tab
              label="Month"
              value="Month"
              disableRipple
              sx={{
                fontSize: "10px",
                textTransform: "capitalize",
                minWidth: "auto",
                padding: "0 8px",
              }}
            />
            <Tab
              label="Year"
              value="Year"
              disableRipple
              sx={{
                fontSize: "10px",
                textTransform: "capitalize",
                minWidth: "auto",
                padding: "0 8px",
              }}
            />
          </Tabs>
          <IconButton
          disableRipple 
          onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          <StyledMenu
            id="export-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            disableScrollLock
          >
            {menuData.map((item, index) => (
              <MenuItem
                key={index}
                onClick={handleMenuClose}
                disableRipple
                sx={{
                  color: "#5a5f7d",
                  fontSize: "13px",
                  lineHeight: "1.5715",
                }}
              >
                <Box 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                   }}>
                  {React.isValidElement(item.icon) ? item.icon : null}
                  <span>{item.text}</span>
                </Box>
              </MenuItem>
            ))}
          </StyledMenu>

        </Box>
      </Box>

      <Divider 
      sx={{ 
        marginBottom: "30px", 
        marginTop: "-13px",
         }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "30px",
          marginBottom: "28px",
        }}
      >
        <Box>
          <Typography 
          sx={{ 
            fontSize: "14px", 
            color: "#757575", 
            marginBottom: "5px",
             }}>
            Current Balance
          </Typography>
          <Typography 
          sx={{ 
            fontSize: "24px", 
            fontWeight: "bold", 
            color: "#5f63f2",
             }}>
          ${headerStats.Balance.toLocaleString()}
          </Typography>
        </Box>
        <Box>
          <Typography 
          sx={{ 
            fontSize: "14px", 
            color: "#757575", 
            marginBottom: "5px",
             }}>
            Cash In
          </Typography>
          <Typography 
          sx={{ 
            fontSize: "24px", 
            fontWeight: "bold", 
            color: "#272b41",
             }}>
            ${headerStats.CashInItem.toLocaleString()}
          </Typography>
        </Box>
        <Box>
          <Typography 
          sx={{ 
            fontSize: "14px", 
            color: "#757575", 
            marginBottom: "5px",
             }}>
            Cash Out
          </Typography>
          <Typography 
          sx={{ 
            fontSize: "24px", 
            fontWeight: "bold", 
            color: "#272b41",
             }}>
            ${headerStats.CashOutItem.toLocaleString()}
          </Typography>
        </Box>
      </Box>

      {/* چارت */}
      <Box 
      sx={{ 
        width: "100%", 
        height: "308px",
         }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={getCurrentDataset}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
            dataKey={timeRange === "Week" ? "day" : timeRange === "Month" ? "range" : "month"} />
            <YAxis />
            <Tooltip 
            cursor={{ fill: "transparent", }} 
            contentStyle={{ 
              backgroundColor: "white", 
              border: "1px solid #ccc",
               }} />
            <Bar 
            dataKey="CashIn" 
            barSize={15} 
            onMouseEnter={(_, index) => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {getCurrentDataset.map((entry, index) => (
                <Cell 
                key={`cell-${index}`} 
                fill={hoveredIndex === index ? "#20c997" : "lightgreen"} />
              ))}
            </Bar>
            <Bar 
            dataKey="CashOut" 
            barSize={15} 
            onMouseEnter={(_, index) => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {getCurrentDataset.map((entry, index) => (
                <Cell 
                key={`cell-out-${index}`} 
                fill={hoveredIndex === index ? "#f44336" : "#ff8a65"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
      
      {/* راهنمای رنگ های نمودار*/}
      <Box 
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "15px",
         }}>
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
                backgroundColor: "#20c997",
                borderRadius: "3px",
              }}
            />
            <Typography 
            sx={{ 
              fontSize: "12px", 
              color: "#757575",
               }}>
              Cash In
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
                backgroundColor: "#f44336",
                borderRadius: "3px",
              }}
            />
            <Typography 
            sx={{ 
              fontSize: "12px", 
              color: "#757575",
               }}>
              Cash Out
            </Typography>
          </Box>
        </Box>
      </Box>
  );
};

export default CashFlow;
