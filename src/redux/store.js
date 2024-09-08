import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import camperReducer from "./campers/slice";
import favoriteReducer from "./favorites/slice";
export const store = configureStore({
  reducer: {
    campers: camperReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
