import React from "react";
import {  Product} from "../ProductStore/ProductStoreData";
import { Box , Typography , Slider ,  } from "@mui/material";

interface FiltersProps {
    products: Product[];
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
  }
const PriceRange:React.FC<FiltersProps> = ({
    priceRange,
    setPriceRange,
  }) => {
    // مدیریت تغییر قیمت
    const handlePriceChange = (event: Event, newValue: number | number[]) => {
      setPriceRange(newValue as [number, number]);
    };
    return(
        <Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            padding: "10px 0px",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange} 
          valueLabelDisplay="auto"
          min={0}
          max={2000}
          sx={{
            padding: "0 0 15px",
            margin: "0px 15px 15px",
            width: "auto",
            display: "block",
          }}
        />
        <Typography>
          ${priceRange[0]} - ${priceRange[1]}
        </Typography>
      </Box>
    )
}
export default PriceRange;