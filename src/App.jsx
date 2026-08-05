import React, { useState } from 'react'
import Bar from './components/Bar'
import axios from 'axios'
import WeatherCard from "./components/WeatherCard"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');

    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeatherData(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
      setWeatherData(null);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-pink-100'>
      <div className='bg-purple-400 text-white rounded-lg p-8 shadow-lg max-w-md w-full'>
        <h1 className='text-center text-3xl font-bold mb-7'>Weather App</h1>
        <Bar fetchWeather={fetchWeather} />
        {loading && <p className='text-center text-gray-300'>Loading...</p>}
        {error && <p className='text-center text-red-500'>{error}</p>}
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  )
}

export default App
