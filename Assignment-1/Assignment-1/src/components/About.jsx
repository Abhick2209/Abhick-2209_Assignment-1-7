function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="large-text">
              I'm a passionate student and aspiring developer who enjoys
              transforming ideas into meaningful digital experiences.
            </p>

            <p>
              I am currently building my knowledge in web development,
              especially React and modern frontend technologies. I enjoy
              learning how websites work and creating interfaces that are
              simple, responsive and visually engaging.
            </p>

            <p>
              My goal is to continuously improve my technical skills while
              developing projects that solve real-world problems.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <span>01</span>
              <h3>Curious Mind</h3>
              <p>Always exploring new technologies and ideas.</p>
            </div>

            <div className="detail-card">
              <span>02</span>
              <h3>Clean Code</h3>
              <p>Focused on readable and organized development.</p>
            </div>

            <div className="detail-card">
              <span>03</span>
              <h3>Creative Design</h3>
              <p>Combining functionality with attractive interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;