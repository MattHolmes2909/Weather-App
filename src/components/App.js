import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./forecastsummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import "../styles/App.css";
import SearchForm from "./SearchForm";
import blueSky from "../images/Blue-Skies.jpeg";
import cloudy from "../images/cloudy.jpeg";
import rainy from "../images/Rainy.jpeg";
import sunny from "../images/Sun.jpeg";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(searchText, setErrorMessage, setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);

  let background;

  if (selectedForecast) {
    switch (selectedForecast.description) {
      case "Clouds":
        background = cloudy;
        break;
      case "Rain":
        background = rainy;
        break;
      case "Clear":
        background = sunny;
        break;
      default:
        background = blueSky;
    }
  } else {
    background = blueSky;
  }

  const handleCitySearch = () => {
    getForecast(searchText, setErrorMessage, setSelectedDate, setForecasts, setLocation);
  };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="weather-app" style={{ background: `url(${background})` }}>
      <LocationDetails city={location.city} country={location.country} errorMessage={errorMessage} />
      <SearchForm searchText={searchText} setSearchText={setSearchText} onSubmit={handleCitySearch} />
      {!errorMessage && <> {selectedForecast && <ForecastDetails forecast={selectedForecast} />}</>}
      <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
    </div>
  );
};
export default App;
