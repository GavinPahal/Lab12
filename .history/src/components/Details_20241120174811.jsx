import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const { country } = state;

  return (
    <div>
      <h2>Country Details</h2>
      <p><strong>Name:</strong> {country.name.common}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} style={{ width: "150px" }} />
    </div>
  );
};

export default Details;
