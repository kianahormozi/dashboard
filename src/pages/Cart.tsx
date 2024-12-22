import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box } from "@mui/material";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

interface DashboardContext {
  setHeaderText: (text: string) => void;
}

function Cart() {
  const { setHeaderText } = useOutletContext<DashboardContext>();

  React.useEffect(() => {
    // تنظیم متن هدر
    setHeaderText("سبد خرید");
  }, [setHeaderText]);

  return (
    <Box>
        <ShoppingCart /> 
    </Box>
  );
}

export default Cart;