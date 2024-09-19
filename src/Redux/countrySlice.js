import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    filteredCountries: [],
    search: "",
    region: "",
  },
  reducers: {
    setCountry: (state, action) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    },
    filterCountries: (state, action) => {
      state.search = action.payload.toLowerCase();
      state.filteredCountries = state.countries.filter((country) => {
        const matchesSearch = country.name.toLowerCase().includes(state.search);
        const matchesRegion = state.region
          ? country.region === state.region
          : true;
        return matchesSearch && matchesRegion;
      });
    },
    filterByRegion: (state, action) => {
      state.region = action.payload;
      state.filteredCountries = state.countries.filter((country) => {
        const matchesSearch = country.name.toLowerCase().includes(state.search);
        const matchesRegion = state.region
          ? country.region === state.region
          : true;
        return matchesSearch && matchesRegion;
      });
    },
  },
});

export const { setCountry, filterCountries, filterByRegion } =
  countrySlice.actions;
export default countrySlice.reducer;
