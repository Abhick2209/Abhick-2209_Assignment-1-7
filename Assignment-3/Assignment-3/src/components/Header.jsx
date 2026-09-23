function Header({ employeeCount, departmentCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="brand">
          <div className="brand-logo">FM</div>

          <div>
            <strong>Farm<span>Core</span></strong>
            <small>Employee Management</small>
          </div>
        </a>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#directory">Employees</a>
          <a href="#footer">About</a>
        </nav>

        <div className="header-meta">
          <div>
            <span>EMPLOYEES</span>
            <strong>{employeeCount}</strong>
          </div>

          <div>
            <span>DEPARTMENTS</span>
            <strong>{departmentCount}</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;