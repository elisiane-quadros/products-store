import productsSlice from "./productsSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { ProductArrayModel } from "../models/ProductModels";
import ProductsService from "../services/productsService";

export const productsActions = productsSlice.actions;

export const getProducts = ():ThunkAction<void, RootState, unknown, AnyAction> => {
  return async(dispatch) => {
      const response: ProductArrayModel = await ProductsService.getAllProducts();
      dispatch(productsActions.setProducts(response.products))
  }
};
