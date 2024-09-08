import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const campersGet = createAsyncThunk(
  "campers/fetchCamper",
  async (globalParams, thunkAPI) => {
    const BASE_URL = "https://camper-server.onrender.com";
    const END_POINT = "/campers";
    const url = BASE_URL + END_POINT;

    const params = {
      page: globalParams?.page,
      perPage: 4,
    };
    const urlParams = new URLSearchParams(params);
    if (globalParams?.location) {
      urlParams.append("location", globalParams.location);
    }
    if (globalParams?.selectedCategoriesForm.length) {
      urlParams.append("form", globalParams.selectedCategoriesForm.join(","));
    }
    if (globalParams?.selectedCategoriesDetails.length) {
      urlParams.append(
        "details",
        globalParams.selectedCategoriesDetails.join(",")
      );
    }
    try {
      const response = await axios.get(`${url}?${urlParams}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
