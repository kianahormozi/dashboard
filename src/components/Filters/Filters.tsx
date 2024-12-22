import React from "react";
import {
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Product } from "../ProductStore/ProductStoreData";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Ratings from "../Ratings/Ratings";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import PriceRange from "../PriceRange/PriceRange";

interface FiltersProps {
  products: Product[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRatings: number[];
  setSelectedRatings: React.Dispatch<React.SetStateAction<number[]>>;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Filters: React.FC<FiltersProps> = ({
  products,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  selectedCategory,
  setSelectedCategory,
}) => {

  // مدیریت تغییر قیمت
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffff",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <TuneOutlinedIcon 
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Filters
          </Typography>
        </Box>
        <Divider
          sx={{
            margin: "10px 0",
          }}
        />

        {/* Price Range */}
       <PriceRange
       products={products}
       priceRange={priceRange}
       setPriceRange={setPriceRange}
        />
        {/* Categories */}
        <Categories
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />
        {/* Brands */}
        <Brands
          products={products}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        {/* Ratings */}
        <Ratings />
      </Box>
    </Box>
  );
};

export default Filters;
