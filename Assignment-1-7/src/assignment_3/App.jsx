import { useMemo, useState } from "react";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const initialEmployees = [
    {
      id: 1,
      name: "Arjun Singh",
      employeeId: "FRM-001",
      department: "Farm Operations",
      gender: "Male",
      phone: "+91 98765 43210",
      localAddress: "New Town, Kolkata",
      permanentAddress: "Siliguri, West Bengal"
    },
    {
      id: 2,
      name: "Priya Das",
      employeeId: "FRM-002",
      department: "Administration",
      gender: "Female",
      phone: "+91 91234 56789",
      localAddress: "Salt Lake, Kolkata",
      permanentAddress: "Durgapur, West Bengal"
    },
    {
      id: 3,
      name: "Rahul Roy",
      employeeId: "FRM-003",
      department: "Agriculture",
      gender: "Male",
      phone: "+91 99887 66554",
      localAddress: "Barasat, Kolkata",
      permanentAddress: "Malda, West Bengal"
    },
    {
      id: 4,
      name: "Sneha Sharma",
      employeeId: "FRM-004",
      department: "Human Resources",
      gender: "Female",
      phone: "+91 98712 34567",
      localAddress: "Rajarhat, Kolkata",
      permanentAddress: "Howrah, West Bengal"
    },
    {
      id: 5,
      name: "Vikash Kumar",
      employeeId: "FRM-005",
      department: "Farm Operations",
      gender: "Male",
      phone: "+91 90909 12345",
      localAddress: "Dum Dum, Kolkata",
      permanentAddress: "Patna, Bihar"
    }
  ];

  const emptyForm = {
    name: "",
    employeeId: "",
    department: "Farm Operations",
    gender: "Male",
    phone: "",
    localAddress: "",
    permanentAddress: ""
  };

  const [employees, setEmployees] = useState(initialEmployees);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const departments = [
    "Farm Operations",
    "Agriculture",
    "Administration",
    "Human Resources",
    "Maintenance"
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.employeeId.trim() ||
      !formData.phone.trim()
    ) {
      return;
    }

    if (editingId) {
      setEmployees((current) =>
        current.map((employee) =>
          employee.id === editingId
            ? { ...formData, id: editingId }
            : employee
        )
      );

      setEditingId(null);
    } else {
      const newEmployee = {
        ...formData,
        id: Date.now()
      };

      setEmployees((current) => [newEmployee, ...current]);
    }

    setFormData(emptyForm);
    setShowForm(false);
  };

  const handleEdit = (employee) => {
    setFormData({
      name: employee.name,
      employeeId: employee.employeeId,
      department: employee.department,
      gender: employee.gender,
      phone: employee.phone,
      localAddress: employee.localAddress,
      permanentAddress: employee.permanentAddress
    });

    setEditingId(employee.id);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = (id) => {
    setEmployees((current) =>
      current.filter((employee) => employee.id !== id)
    );
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.employeeId.toLowerCase().includes(search) ||
        employee.phone.toLowerCase().includes(search);

      const matchesDepartment =
        department === "All" || employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, department]);

  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size;

  return (
    <div className="app">
      <Header
        employeeCount={employees.length}
        departmentCount={departmentCount}
      />

      <main>
        <section className="dashboard-hero">
          <div className="hero-background hero-background-one"></div>
          <div className="hero-background hero-background-two"></div>

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="system-badge">
                <span></span>
                FARM MANAGEMENT SYSTEM
              </div>

              <h1>
                Employee
                <br />
                <span>Directory.</span>
              </h1>

              <p>
                Manage employee records, organize departments and keep
                workforce information accessible from one professional
                workspace.
              </p>

              <button
                className="add-main-button"
                onClick={() => {
                  setFormData(emptyForm);
                  setEditingId(null);
                  setShowForm(true);
                }}
              >
                <span>+</span>
                Add New Employee
              </button>
            </div>

            <div className="hero-dashboard-card">
              <div className="dashboard-card-top">
                <span>WORKFORCE OVERVIEW</span>
                <span className="live-status">
                  <i></i>
                  LIVE
                </span>
              </div>

              <div className="dashboard-number">
                <span>Total Workforce</span>
                <strong>{employees.length}</strong>
              </div>

              <div className="mini-bars">
                <span style={{ height: "45%" }}></span>
                <span style={{ height: "70%" }}></span>
                <span style={{ height: "58%" }}></span>
                <span style={{ height: "85%" }}></span>
                <span style={{ height: "68%" }}></span>
                <span style={{ height: "92%" }}></span>
                <span style={{ height: "76%" }}></span>
              </div>

              <div className="dashboard-card-bottom">
                <span>Workforce Status</span>
                <strong>Active</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="directory-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">01</div>
              <div>
                <span>Total Employees</span>
                <strong>{employees.length}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">02</div>
              <div>
                <span>Departments</span>
                <strong>{departmentCount}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">03</div>
              <div>
                <span>Showing Records</span>
                <strong>{filteredEmployees.length}</strong>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">04</div>
              <div>
                <span>System Status</span>
                <strong className="active-text">Active</strong>
              </div>
            </div>
          </div>

          {showForm && (
            <EmployeeForm
              formData={formData}
              editingId={editingId}
              departments={departments}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          )}

          <div className="directory-header">
            <div>
              <span className="section-tag">EMPLOYEE DATABASE</span>
              <h2>Workforce Directory</h2>
              <p>
                Search, filter and manage employee information.
              </p>
            </div>

            <button
              className="secondary-add-button"
              onClick={() => {
                setFormData(emptyForm);
                setEditingId(null);
                setShowForm(true);
              }}
            >
              + Add Employee
            </button>
          </div>

          <div className="filter-panel">
            <div className="search-wrapper">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search by name, employee ID or phone..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")}>×</button>
              )}
            </div>

            <div className="department-filter">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option value="All">All Departments</option>

                {departments.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <EmployeeList
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;