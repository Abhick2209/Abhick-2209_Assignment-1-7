function EmployeeCard({ employee, onEdit, onDelete }) {
  const initials = employee.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="employee-card">
      <div className="employee-card-top">
        <span className="employee-number">{employee.employeeId}</span>

        <span className="employee-active">
          <i></i>
          Active
        </span>
      </div>

      <div className="employee-profile">
        <div className="employee-avatar">{initials}</div>

        <div className="employee-name">
          <h3>{employee.name}</h3>
          <span>{employee.department}</span>
        </div>
      </div>

      <div className="employee-info">
        <div>
          <span>Gender</span>
          <strong>{employee.gender}</strong>
        </div>

        <div>
          <span>Phone</span>
          <strong>{employee.phone}</strong>
        </div>
      </div>

      <div className="address-block">
        <div>
          <span>Local Address</span>
          <p>{employee.localAddress}</p>
        </div>

        <div>
          <span>Permanent Address</span>
          <p>{employee.permanentAddress}</p>
        </div>
      </div>

      <div className="employee-actions">
        <button
          className="edit-button"
          onClick={() => onEdit(employee)}
        >
          Edit Details
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default EmployeeCard;