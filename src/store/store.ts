import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice"; // وارد کردن cartReducer
import navigationReducer from './navigationSlice'; // وارد کردن navigationReducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navigation: navigationReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 