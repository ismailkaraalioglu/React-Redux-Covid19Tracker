import { createSlice } from "@reduxjs/toolkit";
import { getGlobalCovidData, getGlobalCountries } from "./services";

export const globalCovidData = createSlice({
  name: "globalData",
  initialState: {
    globalDataCovid: "",
    globalDataCovidStatus: "idle",
    globalDataError: null,
    country: "",
  },
  reducers: {},
  extraReducers: {
    [getGlobalCovidData.pending]: (state) => {
      state.globalDataCovidStatus = "loading";
    },
    [getGlobalCovidData.fulfilled]: (state, action) => {
      state.globalCovidDataStatus = "succeeded";
      state.globalDataCovid = action.payload;
    },
    [getGlobalCovidData.rejected]: (state, action) => {
      state.globalDataCovidStatus = "failed";
      state.globalDataError = action.error.message;
    },
    [getGlobalCountries.fulfilled]: (state, action) => {
      state.country = action.payload;
    },
  },
});

export default globalCovidData.reducer;
