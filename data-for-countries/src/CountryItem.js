import React from "react";
import CountryContent from './CountryContent'

const CountryItem = ({ newQuery, countries, setQueryUsingButton }) => {

    // flitering countries based on newQuery (which should be the country name )
    let QueriedList = countries.filter(country =>
        country.name.toUpperCase().includes(newQuery.toUpperCase())
    );

    // length of the query array 
    let QueriedlistLength = QueriedList.length;

    // console.log('QueriedList', QueriedList, 'QueriedlistLength', QueriedlistLength);

    // if there are more than 10 countries return Too many matches, specify another filter
    if (QueriedList >= 10) {
        return <div>Too many matches, specify another Query</div>;
    }

    // if there are no matches for the country return an empty div
    if (newQuery.length === 0 || QueriedlistLength === 0) return <div />;
   
    // conditionally rendering 
    if (QueriedlistLength > 1) {
        // if QueriedlistLength is greater tha 1 show all of the countries that match
        return QueriedList.map(country => (
          <div key={country.name}>
            {country.name}
           {/* set the name of the country to the value of the input */}
            <button value={country.name} onClick={setQueryUsingButton}>
              show
            </button>
          </div>
        ));
      } else {
    return (
        <div>
            <div>
                {/* show the countries content */}
                <CountryContent country={QueriedList[0]} />
            </div>
        </div>
    );
      }
};

export default CountryItem