function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Git & GitHub", level: "70%" },
    { name: "Responsive Design", level: "85%" }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">03</span>
          <div>
            <p>WHAT I WORK WITH</p>
            <h2>Skills</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="skill-track">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud">
          <span>JavaScript</span>
          <span>React</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Responsive UI</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;