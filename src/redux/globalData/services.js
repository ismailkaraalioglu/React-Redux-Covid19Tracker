import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGlobalCovidData = createAsyncThunk(
  "covid/getGlobalData",
  async () => {
    const res = await axios.get("https://covid19.mathdro.id/api");
    return res.data;
  }
);

export const getGlobalCountries = createAsyncThunk(
  "covid/getGlobalCountry",
  async () => {
    const res = await axios.get("https://covid19.mathdro.id/api/countries");
    return res.data;
  }
);
