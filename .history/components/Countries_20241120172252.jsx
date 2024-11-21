import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSelect = (event) => {
    const selected = countries.find(
      (country) => country.cca2 === event.target.value
    );
    setSelectedCountry(event.target.value);
    if (selected) {
      navigate(`/countries/${selected.cca2}`, { state: { country: selected } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <select value={selectedCountry} onChange={handleSelect}>
        <option value="">Select a Country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;
