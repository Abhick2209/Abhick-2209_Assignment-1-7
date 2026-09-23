function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="brand">
          <span className="brand-mark">SI</span>
          <div>
            <strong>Student<span>IQ</span></strong>
            <small>Academic Portal</small>
          </div>
        </a>

        <nav>
          <a href="#students">Students</a>
          <a href="#about">About Portal</a>
        </nav>

        <div className="header-status">
          <span></span>
          System Online
        </div>
      </div>
    </header>
  );
}

export default Header;