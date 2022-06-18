import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "3a7e0e2fcbb5eb6894a6117f1816f3ab",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
