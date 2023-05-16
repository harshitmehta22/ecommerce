import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../components/Productlist";

const initialState = {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      console.log(find, "fincd");
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
