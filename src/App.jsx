import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import DetailCountry from "./components/DetailCountry";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "./Redux/countrySlice";
import axios from "axios";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.country.countries);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v2/all");
        dispatch(setCountry(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

  const handleBorderClick = (borderCode) => {
    const borderCountry = allCountries.find(
      (country) => country.alpha3Code === borderCode
    );
    setSelectedCountry(borderCountry);
  };

  return (
    <>
      <Navbar />
      {selectedCountry ? (
        <DetailCountry
          country={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          handleBorderClick={handleBorderClick}
        />
      ) : (
        <>
          <SearchBar />
          <Cards setSelectedCountry={setSelectedCountry} />
        </>
      )}
    </>
  );
}

export default App;
