import { ProductModel, ProductArrayModel } from "../models/ProductModels";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialProductState: ProductArrayModel = {
  count: null,
  products: [{
    id: 0,
    name: '',
    brand: '',
    description: '',
    photo: '',
    price: '',
    createdAt: '',
    updatedAt: '',
  }],
};

const productsSlice=createSlice({
  name:'products',
  initialState: initialProductState,
  reducers:{
    setProducts(state, action: PayloadAction<ProductModel[]>){
      state.products = action.payload;
    },
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice;