import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const campersGet = createAsyncThunk(
  "campers/fetchCamper",
  async (data, thunkAPI) => {
    const BASE_URL = "https://camper-server.onrender.com";
    const END_POINT = "/campers";
    const url = BASE_URL + END_POINT;

    const params = {
      page: 1,
      perPage: 4,
    };
    const urlParams = new URLSearchParams(params);
    if (data?.location) {
      urlParams.append("location", data.location);
    }
    if (data?.selectedCategoriesForm.length) {
      urlParams.append("form", data.selectedCategoriesForm.join(","));
    }
    if (data?.selectedCategoriesDetails.length) {
      urlParams.append("details", data.selectedCategoriesDetails.join(","));
    }
    try {
      const response = await axios.get(`${url}?${urlParams}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
