import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { columns } from './ShoppingCartData';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Avatar, Box, Button, Typography } from '@mui/material';
import CouponCode from '../CouponCode/CouponCode';
import OrderSummary from '../OrderSummary/OrderSummary';
import {  removeFromCart , updateQuantity} from '../../store/cart-slice';
import { RootState } from '../../store/store';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  padding: '18px 24px', 
  border: 'none',
  '&.MuiTableCell-head': {
    backgroundColor: '#f8f9fb',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: '500',
    padding: '16px 24px', 
    border: 'none',
  },
}));

const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': {
    border: 'none',
  },
});

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [subtotal] = useState(0); // قیمت کل محصولات
  const [shippingCharge] = useState(50);
  const [discount, setDiscount] = useState(0);

  const handleIncrease = (productId: number, currentQuantity: number) => {
    dispatch(updateQuantity({ productId, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (productId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ productId, quantity: currentQuantity - 1 }));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const handleApplyCoupon = (coupon: string) => {
    if (coupon === 'COUPON10') {
      setDiscount((prevDiscount) => prevDiscount + 10);
    } else if (coupon === 'COUPON20') {
      setDiscount((prevDiscount) => prevDiscount + 20);
    } else {
      setDiscount(0);
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

// اصلاح محاسبه totalPrice
  const totalPrice = cartItems.reduce((total, item) => total + item.Total, 0);

  return (
    <TableContainer sx={{ backgroundColor: '#fff', borderRadius: '10px', padding: '18px 24px', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650, border: 'none' }} size="small">
        <TableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id} sx={{ textAlign: "center" }} align={column.align || 'left'}>
                {column.label}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {cartItems.map((item, index) => (
  <StyledTableRow key={index}>
    <StyledTableCell>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Avatar 
        src={item.imagecart} 
        alt={item.Product.name} 
        sx={{ 
          width: 80, 
          height: 80, 
          borderRadius: "4px",
           }} />
        <Box>
          <Typography 
          sx={{ 
            fontSize: "15px", 
            fontWeight: "600", 
            paddingBottom: "5px",
             }}>
          {item.Product.name}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "rgb(90, 95, 125)" }}>
            Size: {item.size} - Color: {item.color}
          </Typography>
        </Box>
      </Box>
    </StyledTableCell>
    <StyledTableCell 
    sx={{ 
      textAlign: "center",
       }}>
        ${item.Price.toFixed(2)}
    </StyledTableCell>
    <StyledTableCell 
    sx={{ 
      textAlign: "center",
     }}>
      <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
         }}>
        <Button
          sx={{ 
            minWidth: "30px", 
            backgroundColor: "rgb(244, 245, 247)", 
            fontSize: "18px",
           }}
           onClick={() => handleDecrease(item.id, item.Quantity)}
        >
          -
        </Button>
        <Button
        sx={{
          color:"#000",
          '&:hover':{
            backgroundColor:"transparent",
          }
        }}>
          {item.Quantity}
        </Button>
        <Button
          sx={{ 
            minWidth: "30px", 
            backgroundColor: "rgb(244, 245, 247)", 
            fontSize: "18px",
           }}
           onClick={() => handleIncrease(item.id, item.Quantity)}
        >
          +
        </Button>
      </Box>
    </StyledTableCell>
    <StyledTableCell 
    sx={{ 
      textAlign: "center",
       }}>
        ${item.Total.toFixed(2)}
    </StyledTableCell>
    <StyledTableCell 
      sx={{ 
      textAlign: "center",
       }}>
      <Button onClick={() => handleRemoveItem(item.id)} 
      sx={{ 
        color: "rgb(112, 112, 112)",
         }}>
        <DeleteForeverOutlinedIcon />
      </Button>
    </StyledTableCell>
  </StyledTableRow>
))}

        </TableBody>
      </Table>
      <CouponCode onApplyCoupon={handleApplyCoupon} />
      <OrderSummary 
        total={subtotal}
        shippingCharge={shippingCharge}
        discount={discount}
        finalPrice={totalPrice}
      />
    </TableContainer>
  );
};

export default ShoppingCart;
