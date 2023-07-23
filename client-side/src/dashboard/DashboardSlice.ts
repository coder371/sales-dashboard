import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
};

export const dashboardReducer = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
  fetchDashboard: (state) => {
      state.isLoading = true;
    },
    setDashboardData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.isLoading = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {fetchDashboard, setDashboardData} = dashboardReducer.actions;

export default dashboardReducer.reducer;
