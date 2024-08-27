import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const campersGet = createAsyncThunk(
  "campers/fetchCamper",
  async (data, thunkAPI) => {
    const BASE_URL = "https://6635fbf2415f4e1a5e25e8d4.mockapi.io/";
    const END_POINT = "adverts";
    const url = BASE_URL + END_POINT;

    const params = {
      page: 1,
      limit: 4,
    };
    const urlParams = new URLSearchParams(params);
    if (data?.location) {
      urlParams.append("location", data.location);
    }
    for (const item of data?.selectedCategories || []) {
      urlParams.append("form", item);
    }
    try {
      const response = await axios.get(`${url}?${urlParams}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
