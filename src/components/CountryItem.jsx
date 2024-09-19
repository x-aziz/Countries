import React from "react";

const CountryItem = ({ country, onClick }) => {
  const { flag, name, population, capital, region } = country;
  return (
    <div className="country_item" onClick={onClick}>
      <div className="flag">
        <img src={flag} alt={`${name} flag`} />
        <div className="despo">
          <h4>{name}</h4>
          <p>Population: {population.toLocaleString()}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
