import { createSlice } from "@reduxjs/toolkit";
import { campersGet } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  totalPages: 1,
};

export const camperSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(campersGet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.data.page === 1) {
          state.items = [];
        }
        state.totalPages = action.payload.data.totalPages;

        state.items.push(
          ...action.payload.data.data.map((itemCamper) => {
            itemCamper.details.adults = itemCamper.adults;
            itemCamper.details.transmission = itemCamper.transmission;
            itemCamper.details.engine = itemCamper.engine;
            delete itemCamper.details._id;
            return itemCamper;
          })
        );
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
