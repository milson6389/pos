import { configureStore } from "@reduxjs/toolkit";
import posReducer from "./posSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    pos: posReducer,
    cart: cartReducer,
  },
});
