import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campers/slice";
import favoriteReducer from "./favorites/slice";
export default configureStore({
  reducer: {
    campers: camperReducer,
    favorite: favoriteReducer,
  },
});
