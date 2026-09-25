function Header() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="status">
            <span>AB-2209</span>
            Available for opportunities
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Your <span>Abhick Banerjee</span>
          </h1>

          <h2>React Developer & Creative Problem Solver</h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly web experiences
            using clean code, thoughtful design and modern technologies.
          </p>

          <div className="hero-actions">
            <a href="#about" className="primary-button">
              Explore My Work
              <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>03+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>05+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Dedication</span>
            </div>
          </div>
        </div>

        <div className="hero-card-wrapper">
          <div className="hero-card">
            <div className="card-top">
              <div className="profile-orbit">
                <div className="profile-circle">YN</div>
              </div>
            </div>

            <div className="card-info">
              <span>DEVELOPER</span>
              <h3>Building ideas into reality.</h3>
              <p>React · JavaScript · CSS · UI Design</p>
            </div>

            <div className="card-line"></div>

            <div className="card-bottom">
              <span>Based in India</span>
              <span>● Online</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <div>↓</div>
      </a>
    </section>
  );
}

export default Header;