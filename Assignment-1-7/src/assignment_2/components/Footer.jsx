function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">
        <div>
          <a href="#" className="footer-brand">
            <span>SI</span>
            StudentIQ
          </a>
          <p>
            A simple and modern student information management portal.
          </p>
        </div>

        <div className="footer-info">
          <span>ACADEMIC PORTAL</span>
          <strong>2026</strong>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 StudentIQ</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;