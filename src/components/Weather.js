import React from "react";

import "../styles/Weather.css";

export default function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">
      <div className="Weather__info">
        <img
          className="Weather__icon"
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon +
            ".png"
          }
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
          <li> Humidade: __ {weatherInfo.current.humidity}% </li>
          <li>
            {" "}
            Vento: _____ {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
          </li>
          <li>
            {" "}
            Pressão:____ {Math.round(weatherInfo.current.pressure)} hpa{" "}
          </li>
          <li>
            {" "}
            Visibilidade: _ {Math.round(weatherInfo.current.visibility )} m{" "}
          </li>
        </ul>
      </div>
      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info__clouds">{date}</h3>
        <h3 className="other-info__clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
