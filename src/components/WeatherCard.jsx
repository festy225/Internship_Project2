import React from 'react'

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-center">{weather?.name}, {weather?.sys?.country}</h2>
      
      <div className="flex justify-center items-center mt-4">
       <img
  src={`https://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@2x.png`}
  alt={weather?.weather?.[0].description}
  className='w-17 h-17'
/>
        <p className='text-4xl font-bold'>{Math.round(weather?.main?.temp)}°C</p>
      </div>
      <p className='text-center text-gray-300 capitalize'>{weather?.weather?.[0].description}</p>
      <div  className="grid grid-cols-2 gap-4 mt-4">
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Humidity</p>
            <p className='text-2xl font-bold'>{weather?.main?.humidity}%</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Wind</p>
            <p className='text-2xl font-bold'>{weather?.main?.wind_speed} m/s</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Pressure</p>
            <p className='text-2xl font-bold'>{weather?.main?.pressure} hPa</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Feels like</p>
            <p className='text-2xl font-bold'>{Math.round(weather?.main?.feels_like)}°C</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Visibility</p>
            <p className='text-2xl font-bold'>{Math.round(weather?.main?.visibility)} m</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 font-semibold'>Timezone</p>
            <p className='text-2xl font-bold'>{weather?.timezone}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard