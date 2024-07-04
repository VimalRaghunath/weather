import React, { useState, useEffect } from 'react';
import { AxiosInstance } from '../AxiosInstance/AxiosInstance';

const WeatherHistory = () => {
  const [history, setHistory] = useState([]);
  const [city, setCity] = useState('Delhi');
  const [from, setFrom] = useState('2023-06-01');
  const [to, setTo] = useState('2023-06-30');

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await AxiosInstance.post("/graphql", {
        query: `
          query {
            getHistory(city: "${city}", from: "${from}", to: "${to}") {
              city
              temperature
              description
              icon
              date
            }
          }
        `,
      });
      setHistory(response.data.data.getHistory);
    };

    fetchHistory();
  }, [city, from, to]);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Weather History</h2>
      {history.map((record, index) => (
        <div key={index} className="mt-2">
          <p>{record.date}</p>
          <p>{record.city}</p>
          <p>{record.temperature} °C</p>
          <p>{record.description}</p>
          <img src={`http://openweathermap.org/img/wn/${record.icon}.png`} alt="Weather icon" />
        </div>
      ))}
    </div>
  );
};

export default WeatherHistory;
