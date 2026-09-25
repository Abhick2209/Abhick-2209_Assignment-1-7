function Education() {
  const education = [
    {
      year: "2023 — Present",
      degree: "Bachelor's Degree",
      field: "Bachelor Of Computer Application",
      description:
        "Developing strong foundations in programming, web development, databases and software engineering."
    },
    {
      year: "2021 — 2023",
      degree: "Higher Secondary",
      field: "Arts / Computer Appliaction",
      description:
        "Built an academic foundation in mathematics, computer science and problem solving."
    }
  ];

  return (
    <section className="section education-section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <p>MY JOURNEY</p>
            <h2>Education</h2>
          </div>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div>

              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>{item.degree}</span>
                <h3>{item.field}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;