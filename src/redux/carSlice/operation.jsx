import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AXIOS_BASE_URL =
  'https://647c5f78c0bae2880ad0a0df.mockapi.io/api/v1/';
axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`cars`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// ?page=${page}&limit=${limit}
