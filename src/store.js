import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/pastesSlice";

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
