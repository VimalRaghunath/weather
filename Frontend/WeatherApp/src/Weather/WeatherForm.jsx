import React, { useState } from 'react';

const WeatherForm = ({ setCity, setFrom, setTo }) => {
  const [cityInput, setCityInput] = useState("");
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setFrom(fromInput);
    setTo(toInput);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div>
        <label>City:</label>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label>From Date:</label>
        <input
          type="date"
          value={fromInput}
          onChange={(e) => setFromInput(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label>To Date:</label>
        <input
          type="date"
          value={toInput}
          onChange={(e) => setToInput(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
