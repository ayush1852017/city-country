import React from "react";
import { Link } from "react-router-dom";
import { DetailsTable } from "../Components/DetailsTable";
export const Home = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <Link
        to="add-city"
        style={{
          backgroundColor: "tomato",
          width: "150px",
          padding: "1rem",
          height: "100px",
          color: "white",
          margin: "0 1rem 2rem 1rem",
          borderRadius: "5px",
        }}
      >
        <button>Add City</button>
      </Link>
      <Link
        to="add-country"
        style={{
          backgroundColor: "tomato",
          width: "150px",
          padding: "1rem",
          height: "100px",
          color: "white",
          margin: "0 1rem 2rem 1rem",
          borderRadius: "5px",
        }}
      >
        <button>Add Country</button>
      </Link>
      <DetailsTable />
    </div>
  );
};
