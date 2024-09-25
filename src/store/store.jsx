import { configureStore } from "@reduxjs/toolkit";
import posReducer from "./posSlice";

export default configureStore({
  reducer: {
    pos: posReducer,
  },
});
