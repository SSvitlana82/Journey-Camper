import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const campersGet = createAsyncThunk(
  "campers/fetchCamper",
  async (_, thunkAPI) => {
    const BASE_URL = "https://6635fbf2415f4e1a5e25e8d4.mockapi.io/";
    const END_POINT = "adverts";
    const url = BASE_URL + END_POINT;

    const params = {};

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
