import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const camperSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setUserName(state, { payload }) {
      state.username = payload;
    },
    setRegistered(state, { payload }) {
      state.registered = payload;
    },
  },
});

export const {} = name.actions;
export default userSlice.reducer;
