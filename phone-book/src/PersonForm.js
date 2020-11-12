import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  addNewName,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    
    <form onSubmit={addNewName}>
      <div>
      {/* calls the function tracking values in the name input */}
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
       {/* calls the function tracking values in the numer input */}
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
       {/* calls the create request to add name and number */}
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
