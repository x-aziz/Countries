import React from "react";

const DetailCountry = ({ country, setSelectedCountry, handleBorderClick }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div>
      <button onClick={() => setSelectedCountry(null)}>
        <img src="" alt="" />
        Back
      </button>
      <div>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <div>
            <p>Native Name: {nativeName}</p>
            <p>Population: {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Capital: {capital}</p>
          </div>
          <div>
            <p>Top Level Domain: {topLevelDomain.join(", ")}</p>
            <p>Currencies: {currencies.map((cur) => cur.name).join(", ")}</p>
            <p>Languages: {languages.map((lang) => lang.name).join(", ")}</p>
          </div>
        </div>
        <div>
          <p>Border Countries: </p>
          {borders && borders.length > 0 ? (
            borders.map((border, index) => (
              <button key={index} onClick={() => handleBorderClick(border)}>
                {border}
              </button>
            ))
          ) : (
            <p>No border countries</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
