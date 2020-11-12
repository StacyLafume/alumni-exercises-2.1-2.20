import React from "react";

const Query = ({ newQuery, handleQueryChange }) => {
 
  return (
    <div>
      <h2>Find countries</h2>
      {/*  onChange the input calls handleQueryChange that sets newQuery */}
      <input
        value={newQuery}
        onChange={handleQueryChange}
        placeholder="Enter a country name"
      />
    </div>
  );
};

export default Query;