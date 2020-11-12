import React from "react";

const PhoneBook = ({ persons, showFilter, removeEntry }) => {
  // capitalize whats in the filter inputs  
  let filterUpperCase = showFilter.toUpperCase();
  
  // filter though persons based on filter inputs value
  let newPersonArray = persons.filter(person => {
    let personInUpperCase = person.name.toUpperCase();
    return personInUpperCase.includes(filterUpperCase);
  });

  // loop through newPersonArray and creat an li for each element
  return newPersonArray.map(person => (
    <li key={person.name}>
      {person.name} : {person.number}
      <button onClick={() => removeEntry(person)}>Delete</button>
    </li>
  ));
};

export default PhoneBook;