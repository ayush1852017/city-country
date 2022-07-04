import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity, getCountry } from "../Redux/City-Country/action";
import Select from "react-select";
import "./AddCity.css";
export const AddCity = () => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [country, setCountry] = useState("");
  const countryData = useSelector((state) => state.reducerStore.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCity({ name: name, population: population, country: country }));
  };
  console.log(countryData);
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          placeholder="city name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={population}
          placeholder=" population"
          onChange={(e) => setPopulation(e.target.value)}
        />
        {/* {JSON.stringify(country)} */}
        <Select
          className="select"
          name="country"
          options={countryData}
          value={country.name}
          onChange={setCountry}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
        />
        <input type="submit" value="Add City" />
      </form>
    </div>
  );
};
