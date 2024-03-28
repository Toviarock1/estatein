"use client";
import { useState, useEffect } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  GetCountries,
  GetState,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function App({
  country,
  state,
  city,
}: {
  country: React.Dispatch<React.SetStateAction<string>>;
  state: React.Dispatch<React.SetStateAction<string>>;
  city: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <>
      <label>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
            country(e.name);
            console.log(e);
          }}
          inputClassName="bg-white text-color4"
          containerClassName="text-color4"
          placeHolder="Select Country"
        />
      </label>
      <label>
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
            state(e.name);
            console.log(e);
          }}
          inputClassName="bg-white text-color4"
          containerClassName="text-color4"
          placeHolder="Select State"
        />
      </label>
      <label>
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
            city(e.name);
            console.log(e);
          }}
          inputClassName="bg-white text-color4"
          containerClassName="text-color4"
          placeHolder="Select City"
        />
      </label>
    </>
  );
}

export default App;
