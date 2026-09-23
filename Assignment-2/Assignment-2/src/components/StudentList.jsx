import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="student-grid" id="students">
      {students.map((student, index) => (
        <StudentCard
          key={student.id}
          student={student}
          rank={index + 1}
        />
      ))}
    </div>
  );
}

export default StudentList;