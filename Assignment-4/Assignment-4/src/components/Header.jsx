function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">
          <span>☼</span>
        </div>

        <div className="brand-text">
          <strong>Atmos</strong>
          <span>Weather Dashboard</span>
        </div>
      </div>

      <div className="header-status">
        <span className="live-indicator"></span>
        <span>Live Data</span>
      </div>
    </header>
  );
}

export default Header;