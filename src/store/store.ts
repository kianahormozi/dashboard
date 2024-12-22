import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice"; // وارد کردن cartReducer
import navigationReducer from './navigationSlice'; // وارد کردن navigationReducer
import productReducer from './productSlice'; // وارد کردن productReducer در صورت نیاز

const store = configureStore({
  reducer: {
    products: productReducer,  // اطمینان از این که productReducer به درستی وارد شده
    cart: cartReducer,
    navigation: navigationReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
