function EmployeeForm({
  formData,
  editingId,
  departments,
  onChange,
  onSubmit,
  onCancel
}) {
  return (
    <section className="form-section">
      <div className="form-heading">
        <div>
          <span>{editingId ? "UPDATE RECORD" : "NEW RECORD"}</span>
          <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>
        </div>

        <button className="close-button" onClick={onCancel}>
          ×
        </button>
      </div>

      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter employee name"
            />
          </div>

          <div className="input-group">
            <label>Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={onChange}
              placeholder="Example: FRM-006"
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={onChange}
            >
              {departments.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={onChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              placeholder="+91 00000 00000"
            />
          </div>

          <div className="input-group">
            <label>Local Address</label>
            <input
              type="text"
              name="localAddress"
              value={formData.localAddress}
              onChange={onChange}
              placeholder="Current address"
            />
          </div>

          <div className="input-group full-width">
            <label>Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={onChange}
              placeholder="Permanent address"
            />
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button type="submit" className="save-button">
            {editingId ? "Update Employee" : "Save Employee"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;