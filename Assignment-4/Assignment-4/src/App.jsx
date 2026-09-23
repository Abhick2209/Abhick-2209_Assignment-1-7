import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("Kolkata");
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found. Please check the city name.");
      }

      const data = await response.json();

      setWeather(data);
      setCity(data.name);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Kolkata");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    fetchWeather(searchCity);
    setSearchCity("");
  };

  const formatTime = (timestamp) => {
    if (!timestamp || !weather) return "--:--";

    return new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              LIVE WEATHER
            </div>

            <h1>
              Weather at a
              <span> glance.</span>
            </h1>

            <p>
              Real-time weather information with temperature, humidity,
              wind conditions and daily sun timings.
            </p>

            <SearchBar
              searchCity={searchCity}
              setSearchCity={setSearchCity}
              handleSearch={handleSearch}
            />
          </div>

          <div className="hero-decoration">
            <div className="sun-orb"></div>
            <div className="cloud cloud-one"></div>
            <div className="cloud cloud-two"></div>
            <div className="cloud cloud-three"></div>
          </div>
        </section>

        {loading && (
          <div className="loading-container">
            <div className="loader"></div>
            <h3>Fetching weather data</h3>
            <p>Connecting to weather services...</p>
          </div>
        )}

        {!loading && error && (
          <div className="error-container">
            <div className="error-icon">!</div>
            <div>
              <h3>Unable to load weather</h3>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && weather && (
          <section className="weather-dashboard">
            <div className="location-heading">
              <div>
                <span className="section-label">CURRENT CONDITIONS</span>
                <h2>{city}</h2>
              </div>

              <div className="date-display">
                <span>Today</span>
                <strong>
                  {new Date().toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </strong>
              </div>
            </div>

            <div className="dashboard-grid">
              <WeatherCard weather={weather} />

              <WeatherStats
                weather={weather}
                formatTime={formatTime}
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;