import Weather from "./components/Weather";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import { useState } from "react";

const API_key = "178118d3042372dc321f858d0cb00eeb";

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();

    await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${API_key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  };

  return (
    <div className="App">
      <Form loadWeather={getWeather} query1={query} setQuery1={setQuery} />
      <Weather details={weather} />
    </div>
  );
}

export default App;
