import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterCountries, filterByRegion } from "../Redux/countrySlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(filterCountries(e.target.value));
  };

  const handleRegionChange = (e) => {
    dispatch(filterByRegion(e.target.value));
  };

  return (
    <div className="search_bar">
      <div className="search_bar_left">
        <FaSearch />
        <input
          type="text"
          placeholder="search for a country"
          onChange={handleSearch}
        />
      </div>
      <div>
        <select onChange={handleRegionChange}>
          <option value="" hidden>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
