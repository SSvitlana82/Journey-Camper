import { createSlice } from "@reduxjs/toolkit";
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
      state.items.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter((item) => item !== payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
