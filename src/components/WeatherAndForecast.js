import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";

import "../styles/WeatherAndForecast.css";

function WeatherAndForecast({ weatherInfo, location }) {
  const date = dateBuilder(new Date());

  var indice = 0;

  function GerenciaDiaDetalhado(dia){
    indice = dia;
  }

  function dateBuilder(d) {
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado"
    ];

    const date = [];

    for (let count = 0; count < 5; count++) {
      if (d.getDay() + count < 7) date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7) date[count] = 0;
      else if (d.getDay() + count === 8) date[count] = 1;
      else if (d.getDay() + count === 9) date[count] = 2;
      else if (d.getDay() + count === 10) date[count] = 3;
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]]
    ];
  }

  return (
    <div class="float_container">
      <div class="inner_float_container">

      <div className="WeatherAndForecast">
        <Weather weatherInfo={weatherInfo} location={location} date={date[indice]} />
      </div>
      
      <div className="WeatherAndForecast__container">
        <Forecast weatherInfo={weatherInfo.daily[0]} date={date[0]} onclick="GerenciaDiaDetalhado(0)"/>
        <Forecast weatherInfo={weatherInfo.daily[1]} date={date[1]} onclick="GerenciaDiaDetalhado(1)"/>
        <Forecast weatherInfo={weatherInfo.daily[2]} date={date[2]} onclick="GerenciaDiaDetalhado(2)"/>
        <Forecast weatherInfo={weatherInfo.daily[3]} date={date[3]} onclick="GerenciaDiaDetalhado(3)"/>
        <Forecast weatherInfo={weatherInfo.daily[4]} date={date[4]} onclick="GerenciaDiaDetalhado(4)"/>
        </div>
      </div>

    </div>
  );
}

export default WeatherAndForecast;
