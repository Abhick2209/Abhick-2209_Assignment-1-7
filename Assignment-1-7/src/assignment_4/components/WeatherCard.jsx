function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="main-weather-card">
      <div className="card-top">
        <span>WEATHER NOW</span>

        <div className="weather-condition">
          <span className="condition-dot"></span>
          {weather.weather[0].main}
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          {Math.round(weather.main.temp)}
          <sup>°C</sup>
        </div>

        <div className="weather-visual">
          <img src={iconUrl} alt={weather.weather[0].description} />
        </div>
      </div>

      <div className="weather-description">
        <h3>{weather.weather[0].description}</h3>

        <p>
          Feels like{" "}
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </p>
      </div>

      <div className="temperature-range">
        <div>
          <span>MIN</span>
          <strong>{Math.round(weather.main.temp_min)}°</strong>
        </div>

        <div className="range-line">
          <span></span>
        </div>

        <div>
          <span>MAX</span>
          <strong>{Math.round(weather.main.temp_max)}°</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;