import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {

    // hooks to set weather and icon
    const [weather, setWeather] = useState("");
    const [icon, setIcon] = useState("");

    // API KEY
    const API_KEY = process.env.REACT_APP_API_KEY

    // hook use effect  and  axios working to make a fetch call
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`,
            )
            .then(response => {
                // setting weather to current weather
                setWeather(response.data.current);
                //setting icon to an image
                 setIcon(response.data.current.weather_icons);
                console.log('responses',response);
            });
    }, []);


    return (
        <div>
            <h2>Weather in {capital}</h2>
            <strong>temperature: </strong>
            {weather.temperature} Celsius
    <br />
            <img src={icon} alt="current weather" />
            <br />
            <strong>wind: </strong> {weather.wind_speed} kph
        </div>
    )
}

export default Weather;
