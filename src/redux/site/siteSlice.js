import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
  name: "site",
  initialState: {
    dark: JSON.parse(window.localStorage.getItem("theme")) || false,
    language: JSON.parse(window.localStorage.getItem("language")) || false,
  },
  reducers: {
    handleDarkMode: (state) => {
      state.dark = !state.dark;
    },
    handleLangMode: (state) => {
      state.language = !state.language;
    },
  },
});

export const { handleDarkMode, handleLangMode } = siteSlice.actions;

export default siteSlice.reducer;
