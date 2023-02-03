import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

const store=configureStore(
  {
    reducer: {
      productsStore: productsSlice.reducer,
      cartStore: cartSlice.reducer,
    },
  }
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;