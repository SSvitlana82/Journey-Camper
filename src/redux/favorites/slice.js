import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      const index = state.items.findIndex((el) => el._id === payload._id);
      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(payload);
      }
    },
  },
});

const persistConfig = {
  key: "root",
  storage: storage,
};
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default persistReducer(persistConfig, favoriteSlice.reducer);
