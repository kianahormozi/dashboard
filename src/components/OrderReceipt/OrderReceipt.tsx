import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import CouponMenu from '../CouponMenu/CouponMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const SummaryContainer = styled(Box)(() => ({
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '24px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  margin: '0 auto',
}));

const StyledButton = styled(Button)(() => ({
  minHeight: '36px',
  padding: '12px',
  backgroundColor: 'rgb(255, 105, 165)',
  borderRadius: '5px',
  color: '#fff',
  textTransform: 'capitalize',
  fontWeight: '600',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: 'rgb(227, 74, 135)',
    boxShadow: 'none',
  },
}));

const OrderReceipt: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux store
  const [subtotal, setSubtotal] = useState(0);
  const shippingCharge = 30; // Static shipping charge
  const discount = 20; // Static discount

  // Calculate subtotal dynamically based on cart items
  useEffect(() => {
    const calculatedSubtotal = cartItems.reduce((total, item) => total + item.Price * item.Quantity, 0);
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  // Calculate total
  const totalPrice = subtotal + shippingCharge - discount;

  return (
    <SummaryContainer>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography>Subtotal :</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography>Discount :</Typography>
        <Typography>-${discount}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography>Shipping Charge :</Typography>
        <Typography>${shippingCharge}</Typography>
      </Box>
      <CouponMenu />
      <Box display="flex" justifyContent="space-between" mt={3} mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Total :
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="rgb(95, 99, 242)">
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>

      <StyledButton disableRipple fullWidth>
        Proceed To Checkout
      </StyledButton>
    </SummaryContainer>
  );
};

export default OrderReceipt;
