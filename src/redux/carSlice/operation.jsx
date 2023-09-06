import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AXIOS_BASE_URL = 'https://goose-track-gr25.onrender.com/api';
axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews?page=${page}&limit=${limit}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);