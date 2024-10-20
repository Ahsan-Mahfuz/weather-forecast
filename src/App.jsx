import './App.css'
import { useState } from 'react'
import InputSearch from './components/InputSearch'
import Output from './components/Output'

function App() {
  const [input, setInput] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false) // New loading state

  const functionInput = (e) => {
    setInput(e.target.value)
  }

  const functionOnclick = () => {
    if (input.trim() !== '') {
      fetchWeatherData(input)
    }
  }

  const fetchWeatherData = (city) => {
    setLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=0de79fc2aa0be86cfda794f048fe9820`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found')
        }
        return response.json()
      })
      .then((data) => {
        setWeatherData(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setWeatherData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <main>
      <InputSearch inputFunc={functionInput} onclick={functionOnclick} />
      {loading && <p className="app-loading">Loading...</p>}
      {error && <p className="app-error">Error: {error}</p>}
      {weatherData && <Output weatherData={weatherData} />}
    </main>
  )
}

export default App
