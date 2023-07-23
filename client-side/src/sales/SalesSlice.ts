import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
};

export const salesDataSlice = createSlice({
  name: 'salesData',
  initialState,
  reducers: {
  fetchSalesData: (state) => {
      state.isLoading = true;
    },
    setSalesData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.isLoading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {setSalesData, fetchSalesData} = salesDataSlice.actions;

export default salesDataSlice.reducer;
