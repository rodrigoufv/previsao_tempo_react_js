import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";
import App from "../App";

import "../styles/WeatherAndForecast.css";

function WeatherAndForecast({ weatherInfo, location}) {
  var date = dateBuilder(new Date());

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

  function handleButton0Click() {App.indexInfo = 0;}
  function handleButton1Click() {App.indexInfo = 1;}
  function handleButton2Click() {App.indexInfo = 2;}
  function handleButton3Click() {App.indexInfo = 3;}
  function handleButton4Click() {App.indexInfo = 4;}

  return (
    
    <div class="float_container">
      <div class="inner_float_container">

      <div className="WeatherAndForecast">
        <Weather weatherInfo={weatherInfo} location={location} date={date[App.indexInfo]} />
      </div>
      
      <div className="WeatherAndForecast__container">
        <div>
        <Forecast weatherInfo={weatherInfo.daily[0]} date={date[0]}/>
              <button className="Select__button_day" onClick={handleButton0Click}>
              Selecionar
            </button>
        </div>     
        <div>
        <Forecast weatherInfo={weatherInfo.daily[1]} date={date[1]}/>
              <button className="Select__button_day" onClick={handleButton1Click}>
              Selecionar
            </button>
        </div>  
        <div>
        <Forecast weatherInfo={weatherInfo.daily[2]} date={date[2]}/>
              <button className="Select__button_day" onClick={handleButton2Click}>
              Selecionar
            </button>
        </div>  
        <div>
        <Forecast weatherInfo={weatherInfo.daily[3]} date={date[3]}/>
              <button className="Select__button_day" onClick={handleButton3Click}>
              Selecionar
            </button>
        </div>  
        <div>
        <Forecast weatherInfo={weatherInfo.daily[4]} date={date[4]}/>
              <button className="Select__button_day" onClick={handleButton4Click}>
              Selecionar
            </button>
        </div>           

        </div>
      </div>

    </div>
  );
}

export default WeatherAndForecast;
