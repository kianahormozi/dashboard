import React from "react";
import { products , Product } from "../ProductStore/ProductStoreData";
import { Box ,Typography , FormControlLabel , ButtonBase , } from "@mui/material";

interface FiltersProps {
    products: Product[];
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
  }
const Categories:React.FC<FiltersProps> = ({
    products,
    selectedCategory,
    setSelectedCategory,
  }) => {
    // محاسبه دسته‌بندی‌ها و تعداد محصولات هر دسته
    const categories = products.reduce((acc: Record<string, number>, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
  
    return (
        <Box
        sx={{
          paddingTop: "25px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Categories
        </Typography>
        {Object.entries(categories).map(([category, count]) => (
          <FormControlLabel
            key={category}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              ml: 0,
            }}
            control={
              <ButtonBase
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
                sx={{
                  padding: "8px",
                  borderRadius: "4px",
                }}
              />
            }
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(90, 95, 125)",
                  }}
                >
                  {category}
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
              </Box>
            }
          />
        ))}
      </Box>
    )
}
export default Categories;