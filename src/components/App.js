import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./forecastsummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};
export default App;