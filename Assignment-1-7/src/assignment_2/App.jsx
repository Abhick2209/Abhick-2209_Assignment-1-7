import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [sortOrder, setSortOrder] = useState("high");

  const students = [
    {
      id: 1,
      name: "Aarav Sharma",
      rollNumber: "CS2026001",
      department: "Computer Science",
      semester: "6th Semester",
      cgpa: 9.42,
      photo: "https://i.pravatar.cc/300?img=12"
    },
    {
      id: 2,
      name: "Ananya Roy",
      rollNumber: "CA2026002",
      department: "Bachelor of Computer Application",
      semester: "6th Semester",
      cgpa: 9.76,
      photo: "https://i.pravatar.cc/300?img=47"
    },
    {
      id: 3,
      name: "Rohan Das",
      rollNumber: "ECE2026003",
      department: "Electronics",
      semester: "4th Semester",
      cgpa: 8.91,
      photo: "https://i.pravatar.cc/300?img=11"
    },
    {
      id: 4,
      name: "Meera Kapoor",
      rollNumber: "BBA2026004",
      department: "Bachelor of Bussiness Administration",
      semester: "6th Semester",
      cgpa: 9.58,
      photo: "https://i.pravatar.cc/300?img=44"
    },
    {
      id: 5,
      name: "Arjun Mehta",
      rollNumber: "ME2026005",
      department: "Mechanical",
      semester: "4th Semester",
      cgpa: 8.67,
      photo: "https://i.pravatar.cc/300?img=68"
    },
    {
      id: 6,
      name: "Ishita Sen",
      rollNumber: "IT2026006",
      department: "Information Technology",
      semester: "6th Semester",
      cgpa: 9.31,
      photo: "https://i.pravatar.cc/300?img=49"
    }
  ];

  const sortedStudents = [...students].sort((a, b) =>
    sortOrder === "high" ? b.cgpa - a.cgpa : a.cgpa - b.cgpa
  );

  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              STUDENT INFORMATION SYSTEM
            </div>

            <h1>
              Student
              <br />
              <span>Directory.</span>
            </h1>

            <p>
              A modern academic portal for viewing student profiles,
              academic performance and essential information in one place.
            </p>

            <div className="hero-metrics">
              <div>
                <strong>{students.length}</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Departments</span>
              </div>

              <div>
                <strong>9.76</strong>
                <span>Top CGPA</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-top">
              <span>ACADEMIC OVERVIEW</span>
              <div className="live-dot">
                <i></i>
                Live
              </div>
            </div>

            <div className="panel-score">
              <span>CLASS PERFORMANCE</span>
              <strong>Excellent</strong>
            </div>

            <div className="performance-bar">
              <span></span>
            </div>

            <div className="panel-footer">
              <span>Current Session</span>
              <strong>2026</strong>
            </div>
          </div>
        </section>

        <section className="students-section">
          <div className="section-heading">
            <div>
              <span className="section-label">DIRECTORY</span>
              <h2>Student Profiles</h2>
              <p>Academic information of registered students.</p>
            </div>

            <div className="sort-box">
              <label htmlFor="sort">Sort by CGPA</label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option value="high">Highest first</option>
                <option value="low">Lowest first</option>
              </select>
            </div>
          </div>

          <StudentList students={sortedStudents} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;