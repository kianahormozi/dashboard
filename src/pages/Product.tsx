import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";
import ProductStore from "../components/ProductStore/ProductStore";


interface DashboardContext {
  setHeaderText: (text: string) => void;
}

function Product() {
  const { setHeaderText } = useOutletContext<DashboardContext>();

  React.useEffect(() => {
    // تنظیم متن هدر
    setHeaderText("محصولات");
  }, [setHeaderText]);

  return (
    <Box>
      <ProductStore />
    </Box>
  );
}

export default Product;
