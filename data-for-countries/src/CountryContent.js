import React from "react";
import Weather from './Weather'

const CountryContent = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {/* mapping though languages because the can be more than one  */}
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={`${country.name}\'s flag`}
        style={{ width: "100px" }}
      />
       <Weather capital={country.capital} />
    </div>
  );
};

export default CountryContent;