import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operation';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carReducer = carSlice.reducer;
