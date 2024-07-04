const Weather = require("../Model/WeatherSchema");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=${process.env.API_key}`
  );

  return response.data;
};

const WeatherController = {
  getWeather: async ({ city }) => {
    try {
      const response = await fetchWeatherData(city);
      const weatherData = {
        city,
        temperature: response.main.temp,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
      };
      const weather = new Weather(weatherData);
      await weather.save();
      return weatherData;
    } catch (error) {
      throw new Error("Error fetching weather data");
    }
  },

  getHistory: async ({ city, from, to }) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    try {
      const history = await Weather.find({
        city,
        date: { $gte: fromDate, $lte: toDate },
      });
      return history;
    } catch (error) {
      throw new Error("Error fetching historical data");
    }
  },
};


module.exports = WeatherController;