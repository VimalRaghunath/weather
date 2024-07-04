import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../AxiosInstance/AxiosInstance";

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await AxiosInstance.post("/graphql", {
        query: `query {
            getWeather(city: "${city}") {
              city
              temperature
              description
              icon
              date
            }
          }`,
      });
      setWeather(response.data.data.getWeather);
    };
    fetchWeather();
  }, [city]);

  if (!weather) return <div>Loading...</div>;
  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">{weather.city}</h1>
      <p>{weather.temperature} °C</p>
      <p>{weather.description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default WeatherDisplay;
