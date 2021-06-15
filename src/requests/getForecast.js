/* eslint-disable no-console */

import axios from "axios";

const getForecast = (searchText, setErrorMessage, setSelectedDate, setForecasts, setLocation) => {
  setErrorMessage("");

  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      console.log(response.data);
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Town or City does not exist.");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Server Error");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
