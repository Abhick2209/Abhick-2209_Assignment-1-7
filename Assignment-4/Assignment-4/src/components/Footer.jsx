function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">☼</div>

        <div>
          <strong>Atmos</strong>
          <span>Weather Dashboard</span>
        </div>
      </div>

      <div className="footer-center">
        Real-time weather information powered by OpenWeatherMap
      </div>

      <div className="footer-right">
        <span>API CONNECTED</span>
        <div className="api-status"></div>
      </div>
    </footer>
  );
}

export default Footer;