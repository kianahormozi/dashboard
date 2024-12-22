import React from 'react';
import { Box, Typography } from '@mui/material';
import OrderReceipt from '../OrderReceipt/OrderReceipt';

interface OrderSummaryProps {
  total: number;
  shippingCharge: number;
  discount: number;
  finalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  total,
  shippingCharge,
  discount,
  finalPrice,
}) => {
  return (
    <Box
      sx={{
        padding: '20px 15px',
        margin: '25px 0',
        width: '100%',
        borderRadius: '20px',
        position: 'relative',
        backgroundColor: 'rgb(248, 249, 251)',
      }}
    >
      <Box
        sx={{
          maxWidth: '650px',
          margin: '0px auto',
        }}
      >
        {/* title */}
        <Box>
          <Typography
            sx={{
              color: 'rgb(39, 43, 65)',
              marginBottom: '25px',
              fontSize: '18px',
            }}
          >
            Order Summary
          </Typography>
        </Box>

        <OrderReceipt />
      </Box>
    </Box>
  );
};

export default OrderSummary;
