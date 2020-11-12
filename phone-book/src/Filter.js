import React from "react";

const Filter = ({ showFilter, setshowFilter }) => {
  const filterPersons = e => {
    setshowFilter(e.target.value);
  };

  return (
    <div>
      filter shown with <input value={showFilter} onChange={filterPersons} />
    </div>
  );
};

export default Filter;