import { Box , Card , CardContent , Typography , IconButton , Divider} from "@mui/material";
import React , { useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { chartData , xLabels , menuData } from "./SimpleLineChartData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

interface MenuItemData {
    icon: React.ReactNode;
    text: string;
  }
  
  // تایپ‌دهی برای props در StyledMenu
  const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginLeft: "-4rem",
      marginTop: "5px",
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: -5,
        right: 10,
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderBottom: "8px solid white",
      },
    },
  }));  
  
const SimpleLineChart : React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
            {chartData.map((chartitem,index) =>(
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
                  <Box 
                  sx={{ 
                    paddingBottom: "12px",
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    }}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#272b41",
                      }}
                    >
                      {chartitem.charttitle}
                    </Typography>
                    <IconButton 
                    onClick={handleMenuOpen}
                    disableRipple
                    >
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
                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {/* Render the icon component properly */}
                            {React.isValidElement(item.icon) ? item.icon : null}
                            <span>{item.text}</span>
                            </Box>
                        </MenuItem>
                        ))}
                    </StyledMenu>

                  </Box>
                </CardContent>
                <Divider 
                sx={{ 
                    //marginBottom: "30px", 
                    marginTop: "-22px" , 
                    width:"100%",
                    }} 
                    />

                  {/* چارت */}
                  <Box >
                  <LineChart
                    width={500}
                    height={250}
                    sx={{
                        margin:".5rem"
                    }}
                    series={[
                        {
                          data: chartitem.linedata.map((value) => parseInt(value.replace("k", "000"))),
                         
                        },
                      ]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    />
                  </Box>
              </Card>
            ))}
        </Box>
    );
};
export default SimpleLineChart;