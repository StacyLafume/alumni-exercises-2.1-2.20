import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Query from './Query';
import CountryItem from './CountryItem'

function App() {
  // hooks to set countries an new query
  const [countries , setCountries ] = useState([])
  const [newQuery, setNewQuery] = useState('') 

 // use effect and axios are working together to create a fetch call
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  // tracks the text inside of the input
  const handleQueryChange = (event) => {
    setNewQuery(event.target.value)
  }

  // set the name of the country to the value of the input
  const setQueryUsingButton = e => {
    setNewQuery(e.target.value);
  };

  return (
    <div >
      {/* the input component */}
          <Query 
          newQuery={newQuery}
          handleQueryChange={handleQueryChange}
          />
          {/* shows the country and its informtion */}
          <CountryItem
            newQuery={newQuery}
            countries={countries}
            setQueryUsingButton={setQueryUsingButton}
          />
    </div>
  );
}

export default App;
