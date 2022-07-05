import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddCity } from "./AddCity";
import { AddCountry } from "./AddCountry";
import { CityDetails } from "./CityDetails";
import { Home } from "./Home";
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:id" element={<CityDetails />} />
      <Route path="/add-city" element={<AddCity />} />
      <Route path="/add-country" element={<AddCountry />} />
    </Routes>
  );
};
