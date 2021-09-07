import React from "react";

const Weather = ({ details }) => {
  const minmaxTemp = (min, max) => {
    return (
      <h3>
        <span className="px-4">L: {Math.floor(min)}&deg;C</span>
        <span className="px-4">H: {Math.floor(max)}&deg;C</span>
      </h3>
    );
  };

  return (
    <div className="container text-light">
      <div className="cards pt-4">
        {typeof details.main != "undefined" ? (
          <div>
            <h1>
              {details.name}, {details.sys.country}
            </h1>
            <h5 className="py-4">
              <i
                className={`wi ${
                  details.weather[0].main === "Clear"
                    ? "wi-wu-clear"
                    : details.weather[0].main === "Thunderstorm"
                    ? "wi-thunderstorm"
                    : details.weather[0].main === "Drizzle"
                    ? "wi-sprinkle"
                    : details.weather[0].main === "Rain"
                    ? "wi-rain"
                    : details.weather[0].main === "Snow"
                    ? "wi-snow"
                    : details.weather[0].main === "Atmosphere"
                    ? "wi-fog"
                    : details.weather[0].main === "Clouds"
                    ? "wi-cloudy"
                    : details.weather[0].description === "clear sky"
                    ? "wi-wu-clear"
                    : details.weather[0].description === "few clouds"
                    ? "wi-day-cloudy"
                    : details.weather[0].description === "scattered clouds"
                    ? "wi-cloud"
                    : details.weather[0].description === "broken clouds"
                    ? "wi-cloudy"
                    : details.weather[0].description === "shower rain"
                    ? "wi-showers"
                    : details.weather[0].description === "rain"
                    ? "wi-rain"
                    : details.weather[0].description === "thunderstorm"
                    ? "wi-thunderstorm"
                    : details.weather[0].description === "snow"
                    ? "wi-snow"
                    : details.weather[0].description === "mist"
                    ? "wi-fog"
                    : ""
                } bigger`}
              ></i>
            </h5>
            <h1 className="py-3 bigger2">
              {Math.floor(details.main.temp)}&deg;C
            </h1>
            {minmaxTemp(details.main.temp_min, details.main.temp_max)}
            <h3 className="py-4">{details.weather[0].description}</h3>
          </div>
        ) : details.cod === "404" ? (
          <div className="alert alert-danger mx-5" role="alert">
            Please Enter a Valid Location
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Weather;
