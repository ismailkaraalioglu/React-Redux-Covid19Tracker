import { createSlice } from "@reduxjs/toolkit";
import { getCountryCovidData } from "./services";

export const countryCovidData = createSlice({
  name: "countryData",
  initialState: {
    countryDataCovidStatus: "idle",
    countryData: "",
    countryError: null,
  },
  reducers: {},
  extraReducers: {
    [getCountryCovidData.pending]: (state, action) => {
      state.countryDataCovidStatus = "loading";
    },
    [getCountryCovidData.fulfilled]: (state, action) => {
      state.countryDataCovidStatus = "succeeded";
      state.countryData = action.payload;
    },
    [getCountryCovidData.rejected]: (state, action) => {
      state.countryDataCovidStatus = "failed";
      state.countryError = action.error.message;
    },
  },
});

export default countryCovidData.reducer;
