import React from 'react'
import humidityImage from '../images/Humidity.png'
import windImage from '../images/wind.png'

const Output = ({ weatherData }) => {
  return (
    <div className="container">
      <div className="image">
        {weatherData &&
          weatherData.weather &&
          weatherData.weather.length > 0 && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt={weatherData.description}
              className="weather-image"
            />
          )}
      </div>
      <div className="degree-celsius">
        {weatherData && weatherData.main && (
          <h2>{Math.round(weatherData.main.temp)}°C</h2>
        )}
      </div>
      <div className="country-name">
        {weatherData && weatherData.sys && (
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
        )}
      </div>
      <div className="humidity-wind-speed">
        <div className="humidity">
          <img
            src={humidityImage}
            alt="Humidity"
            className="humidity-image h-w-image"
          />
          <div className="humidity-percentage">
            <div>
              {weatherData && weatherData.main && weatherData.main.humidity}%
            </div>
            <div>Humidity</div>
          </div>
        </div>
        <div className="wind">
          <img
            src={windImage}
            alt="Wind Speed"
            className="wind-image h-w-image"
          />
          <div className="wind-percentage">
            <div>
              {weatherData && weatherData.wind && weatherData.wind.speed} m/s
            </div>
            <p>WindSpeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Output
