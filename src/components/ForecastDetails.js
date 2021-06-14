import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{moment(date).format("ddd Do MMM")}</div>
      <div className="forecast-details__temperature">
        {`Max temp: ${temperature.max}`}
        &deg;C
      </div>
      <div className="forecast-details__temperature">
        {`Min temp: ${temperature.min}`}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{`Humidity: ${humidity}%`}</div>
      <div className="forecast-details__windspeed">{`wind.speed: ${wind.speed}mph`}</div>
      <div className="forecast-details__winddirection">{`Wind direction: ${wind.direction.toUpperCase()}`}</div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
