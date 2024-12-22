import React , { useState } from "react";
import { Box , Typography , FormControlLabel , Checkbox , } from "@mui/material";
import { Product , products} from "../ProductStore/ProductStoreData";

interface FiltersProps {
    products: Product[];
    selectedBrands: string[];
    setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  }
  
const Brands: React.FC<FiltersProps> = ({
    products,
    selectedBrands,
    setSelectedBrands,
  }) => {

      // محاسبه برندها و تعداد محصولات هر برند
    const brands = products.reduce((acc: Record<string, number>, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + 1;
        return acc;
      }, {});

        // مدیریت انتخاب برند
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
    
    return(
        <Box
        sx={{
            paddingTop:"25px",
            display:"flex",
            flexDirection:"column",
        }}>
            <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
                fontWeight: "600",
                fontSize:"15px",
                }}
                >
            Brands
            </Typography>
            {Object.entries(brands).map(([brand, count]) => (
            <FormControlLabel
                key={brand}
                control={
                <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    sx={{
                        color:"#d9d9d9",
                      }}
                />
                }
                label={<Box 
                    sx={{ 
                        display: "flex", 
                        alignItems: "center",
                         }}>
                    <Typography
                    sx={{
                        fontSize: "14px",
                        color: "rgb(90, 95, 125)",
                    }}
                    >
                    {brand}
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        color: "rgb(146, 153, 184)",
                        marginLeft: "6px",
                    }}
                    >
                    {count}
                    </Typography>
                </Box>}
            />
            ))}
        </Box>
    )
}
export default Brands;