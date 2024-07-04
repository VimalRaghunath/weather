import React, { useState } from 'react';
import WeatherDisplay from './Weather/WeatherDisplay';
import WeatherHistory from './Weather/WeatherHistory';
import WeatherForm from './Weather/WeatherForm';

const App = () => {
  const [city, setCity] = useState('Delhi');
  const [from, setFrom] = useState('2023-06-01');
  const [to, setTo] = useState('2023-06-30');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <WeatherForm setCity={setCity} setFrom={setFrom} setTo={setTo} />
      <WeatherDisplay city={city} />
      <WeatherHistory city={city} from={from} to={to} />
    </div>
  );
};

export default App;
