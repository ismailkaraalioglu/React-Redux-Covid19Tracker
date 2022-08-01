import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountryCovidData = createAsyncThunk(
  "covid/getCountriesData",
  async (country) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return res.data;
  }
);
