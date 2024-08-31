import { createSlice } from "@reduxjs/toolkit";
import { campersGet } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const camperSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(campersGet.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data.data;
      })
      .addCase(campersGet.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(campersGet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default camperSlice.reducer;
