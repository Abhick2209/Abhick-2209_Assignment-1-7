import './App.css'

function App() {
  const assignments = [
  {
    number: '01',
    title: 'Assignment 1',
    description: 'Explore the fundamentals and core concepts of web development.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '02',
    title: 'Assignment 2',
    description: 'A structured implementation demonstrating essential frontend techniques.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '03',
    title: 'Assignment 3',
    description: 'Interactive interface design with modern web development concepts.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '04',
    title: 'Assignment 4',
    description: 'A practical project featuring dynamic content and API integration.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '05',
    title: 'Assignment 5',
    description: 'Advanced frontend implementation with responsive user interfaces.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '06',
    title: 'Assignment 6',
    description: 'A complete application interface with organized components and functionality.',
    link: `${import.meta.env.BASE_URL}index.html`
  },
  {
    number: '07',
    title: 'Assignment 7',
    description: 'A refined application project bringing together advanced React concepts.',
    link: `${import.meta.env.BASE_URL}index.html`
  }
]

  return (
    <div className="app">

      <nav className="navbar">
        <a href={import.meta.env.BASE_URL} className="logo">
          <span className="logo-icon">Abhick-2209 </span>
          <span>My Assignments</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <br />
          <a href="#assignments">Assignments</a>
          <br />
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">

            <span className="hero-badge">
              WEB DEVELOPMENT PORTFOLIO
            </span>

            <h1>
              My Complete
              <span> Assignment Collection</span>
            </h1>

            <p>
              A collection of seven practical assignments built with modern
              frontend technologies, responsive layouts and interactive
              interfaces.
            </p>

            <div className="hero-actions">
              <a href="#assignments" className="btn btn-primary btn-lg">
                Explore Assignments
                <span>→</span>
              </a>

              <span className="assignment-count">
                <strong>07</strong> Projects
              </span>
            </div>

          </div>

          <div className="hero-decoration">

            <div className="floating-card card-one">
              <span>01</span>
              <strong>Creative UI</strong>
            </div>

            <div className="floating-card card-two">
              <span>07</span>
              <strong>Projects</strong>
            </div>

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="hero-orb"></div>

          </div>
        </section>

        <section className="assignments-section" id="assignments">

          <div className="section-heading">
            <div>
              <span className="section-label">
                PROJECT COLLECTION
              </span>

              <h2>Explore My Assignments</h2>
            </div>

            <p>
              Select any assignment below to open the project and explore
              the implementation.
            </p>
          </div>

          <div className="assignment-grid">

            {assignments.map((assignment) => (
              <a
                href={assignment.link}
                target="_blank"
                rel="noopener noreferrer"
                className="assignment-card"
                key={assignment.number}
              >

                <div className="assignment-top">
                  <span className="assignment-number">
                    {assignment.number}
                  </span>

                  <span className="arrow-icon">
                    ↗
                  </span>
                </div>

                <div className="assignment-content">

                  <span className="assignment-label">
                    PROJECT
                  </span>

                  <h3>{assignment.title}</h3>

                  <p>{assignment.description}</p>

                </div>

                <div className="assignment-footer">
                  <span>Open Project</span>
                  <span className="footer-arrow">→</span>
                </div>

              </a>
            ))}

          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>My Assignment Portfolio</strong>
          <span>Built with React & modern web technologies</span>
        </div>

        <span>© 2026 All Projects</span>
      </footer>

    </div>
  )
}

export default App