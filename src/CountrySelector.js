import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { cntr } from "./Info";

const CountrySelector = ({ handleCountryChange }) => {
  const [countryPick, setCountryPick] = useState([]);

  useEffect(() => {
    const showCountries = async () => {
      setCountryPick(await cntr());
    };

    showCountries();
  }, [setCountryPick]);

  console.log(countryPick);

  return (
    <FormControl className="select-country">
      <NativeSelect
        defaultValue=""
        onChange={(event) => {
          handleCountryChange(event.target.value);
        }}
      >
        <option value="allCountry">Select Country</option>
        {countryPick.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelector;
