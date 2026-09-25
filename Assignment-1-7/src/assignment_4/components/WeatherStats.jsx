function WeatherStats({ weather, formatTime }) {
  const stats = [
    {
      icon: "💧",
      label: "Humidity",
      value: `${weather.main.humidity}%`,
      detail: "Moisture level",
    },
    {
      icon: "♨",
      label: "Wind Speed",
      value: `${weather.wind.speed} m/s`,
      detail: "Current wind",
    },
    {
      icon: "◐",
      label: "Sunrise",
      value: formatTime(weather.sys.sunrise),
      detail: "Morning",
    },
    {
      icon: "◑",
      label: "Sunset",
      value: formatTime(weather.sys.sunset),
      detail: "Evening",
    },
  ];

  return (
    <div className="stats-section">
      <div className="stats-header">
        <span className="section-label">WEATHER DETAILS</span>
        <span className="stats-count">04 METRICS</span>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon">{stat.icon}</div>

            <div className="stat-info">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.detail}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="visibility-card">
        <div className="visibility-left">
          <div className="visibility-icon">◎</div>

          <div>
            <span>VISIBILITY</span>
            <strong>
              {(weather.visibility / 1000).toFixed(1)} km
            </strong>
          </div>
        </div>

        <div className="visibility-status">
          <span></span>
          Good visibility
        </div>
      </div>
    </div>
  );
}

export default WeatherStats;