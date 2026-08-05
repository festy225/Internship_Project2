import React, { useState } from 'react'

const Bar = ({ fetchWeather }) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedCity = city.trim()

    if (trimmedCity) {
      fetchWeather(trimmedCity)
      setCity('')
    }
  }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter city name...'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='flex-1 border border-gray-200 p-2 rounded-l-lg outline-none border-r-0'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 cursor-pointer border-l-0'
      >
        Search
      </button>
    </form>
  )
}

export default Bar
