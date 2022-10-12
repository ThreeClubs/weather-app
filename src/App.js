import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentTemp, setCurrentTemp] = useState();
  const [currentCity, setCurrentCity] =useState();

  fetch(
    "http://api.weatherapi.com/v1/current.json?key=b639cc2ccb4b4623b1f221035221210&q=&aqi=no"
  )
    .then((res) => res.json())
    .then((res) => {
      setCurrentTemp(res.current.temp_c);
    });

    function fetchCity() {

    }

  return (
    <div className="App">
      <h1>
        The temp in {currentCity} today is {currentTemp} degrees celsius and{" "}
        {currentTemp * 1.8 + 32} degrees farenheit...
      </h1>
      <h2>Type in your city below:</h2>
      <input type="text" onClick={fetchCity}></input>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=800&h=300"></img>
    </div>
  );
}

export default App;
