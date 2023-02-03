import { CartModel } from "../models/cartModels";
import { createSlice } from "@reduxjs/toolkit";

const initialCartState: CartModel = {
  cart: [],
};

const cartSlice=createSlice({
  name:'cart',
  initialState: initialCartState,
  reducers:{
    setCart(state, action){
      state.cart = action.payload;
    },
  }
});

export const { setCart } = cartSlice.actions;

export default cartSlice;