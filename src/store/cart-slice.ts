import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../components/ProductStore/ProductStoreData'; // تغییر آدرس‌دهی به ProductStoreData و وارد کردن داده‌ها

export interface CartItem {
  Product: Product;  // استفاده از Product به جای string 
  Price: number;
  Quantity: number;
  Total: number;
  size: string;
  color: string; 
  imagecart: string;
  id: number;  // فرض بر این است که هر محصول یک id منحصر به فرد دارد
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // اگر محصول قبلاً وجود داشته باشد، فقط تعداد را افزایش می‌دهیم
        existingItem.Quantity += action.payload.Quantity;
        existingItem.Total = existingItem.Price * existingItem.Quantity;
      } else {
        // اضافه کردن محصول جدید با مقدار اولیه
        state.items.push({
          ...action.payload,
          Total: action.payload.Price * action.payload.Quantity,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload); // حذف محصول از سبد خرید با استفاده از id
    },
    updateQuantity(state, action: PayloadAction<{ productId: number; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.productId);
      if (item) {
        item.Quantity = action.payload.quantity; // بروزرسانی تعداد محصول
        item.Total = item.Price * item.Quantity; // بروزرسانی قیمت کل
      }
    },
    
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
