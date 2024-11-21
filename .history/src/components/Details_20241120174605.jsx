import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) {
    return <div>No country data available.</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{country.name.common}</h1>
      <h2>Capital:</h2>
      <p>{country.capital[0]}</p>
      <h2>Located in:</h2>
      <p>{country.subregion}</p>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "300px", height: "auto", margin: "20px 0" }}
      />
    </div>
  );
};

export default Details;
