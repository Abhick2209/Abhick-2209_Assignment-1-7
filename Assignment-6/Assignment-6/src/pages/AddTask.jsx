import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [form, setForm] = useState({
    header: "",
    description: "",
    priority: "Medium",
    category: "Academic",
    dueDate: "2026-08-28",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.header.trim() || !form.description.trim()) {
      return;
    }

    addTask(form);
    navigate("/tasks");
  };

  return (
    <div className="page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">NEW WORK ITEM</span>
          <h2>Create a task</h2>
          <p>
            Add the details below to create a new task in your
            workspace.
          </p>
        </div>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-section-heading">
            <span>01</span>
            <div>
              <h3>Task information</h3>
              <p>Describe what needs to be completed.</p>
            </div>
          </div>

          <div className="form-field">
            <label>Task Header</label>

            <input
              name="header"
              value={form.header}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </div>

          <div className="form-field">
            <label>Task Description</label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the task..."
              rows="6"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-heading">
            <span>02</span>
            <div>
              <h3>Task settings</h3>
              <p>Set priority, category and deadline.</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Priority</label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="form-field">
              <label>Category</label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option>Academic</option>
                <option>Personal</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label>Due Date</label>

            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate("/tasks")}
            className="secondary-button"
          >
            Cancel
          </button>

          <button type="submit" className="primary-button">
            Create task →
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;