import { configureStore } from "@reduxjs/toolkit";
import countryCovidData from "./countryData/countryCovidData";
import globalCovidData from "./globalData/globalCovidData";
import siteSlice from "./site/siteSlice";

export const store = configureStore({
  reducer: {
    site: siteSlice,
    globalData: globalCovidData,
    countryData: countryCovidData,
  },
});
