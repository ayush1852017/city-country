import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddCity } from "./AddCity";
import { AddCountry } from "./AddCountry";
import { Home } from "./Home";
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-city" element={<AddCity />} />
      <Route path="/add-country" element={<AddCountry />} />
    </Routes>
  );
};
