function StudentCard({ student, rank }) {
  return (
    <article className="student-card">
      <div className="card-header">
        <span className="rank">#{String(rank).padStart(2, "0")}</span>

        <span className="academic-status">
          <i></i>
          Active
        </span>
      </div>

      <div className="student-profile">
        <div className="image-wrapper">
          <img src={student.photo} alt={student.name} />
        </div>

        <div>
          <span className="student-id">{student.rollNumber}</span>
          <h3>{student.name}</h3>
          <p>{student.department}</p>
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="student-details">
        <div>
          <span>Department</span>
          <strong>{student.department}</strong>
        </div>

        <div>
          <span>Semester</span>
          <strong>{student.semester}</strong>
        </div>
      </div>

      <div className="cgpa-section">
        <div>
          <span>Current CGPA</span>
          <small>Academic Score</small>
        </div>

        <strong>{student.cgpa.toFixed(2)}</strong>
      </div>
    </article>
  );
}

export default StudentCard;