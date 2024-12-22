import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/ProductStore/ProductStoreData";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [], // مقدار اولیه آرایه محصولات
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
