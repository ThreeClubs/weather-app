import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [currentCity, setCurrentCity] = useState("Auckland");
  const [userInput, setUserInput] = useState();

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=b639cc2ccb4b4623b1f221035221210&q=${currentCity}&aqi=no`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
      });
  }, [currentCity]);

  const handleCityInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    setCurrentCity(userInput);
  };

  return (
    <div className="App">
      <h1>
        The temp in {currentCity} today is{" "}
        {weatherData && weatherData.current.temp_c} ℃ |{" "}
        {weatherData && weatherData.current.temp_c * 1.8 + 32} ℉
      </h1>
      <h2>Type in your city below:</h2>
      <input type="text" onChange={handleCityInput}></input>
      <button onClick={handleSubmit}>Fetch Temperature!</button>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=800&h=300"></img>
    </div>
  );
}

export default App;
