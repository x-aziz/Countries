import React from "react";
import CountryItem from "./CountryItem";
import { useSelector } from "react-redux";

function Cards({ setSelectedCountry }) {
  const countries = useSelector((state) => state.country.filteredCountries);
  return (
    <section className="countries_cards">
      {countries.map((item, index) => (
        <CountryItem
          key={index}
          country={item}
          onClick={() => setSelectedCountry(item)}
        />
      ))}
    </section>
  );
}

export default Cards;
