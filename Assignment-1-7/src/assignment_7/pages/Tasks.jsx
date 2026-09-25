import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks } = useTasks();

  const [priority, setPriority] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      priority === "All" || task.priority === priority;

    const categoryMatch =
      category === "All" || task.category === category;

    const statusMatch =
      status === "All" || task.status === status;

    return priorityMatch && categoryMatch && statusMatch;
  });

  return (
    <div className="page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">TASK MANAGEMENT</span>
          <h2>All tasks</h2>
          <p>View, filter and manage your complete task list.</p>
        </div>
      </div>

      <div className="filter-bar">
        <div>
          <label>Priority</label>

          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label>Category</label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>All</option>
            <option>Academic</option>
            <option>Personal</option>
          </select>
        </div>

        <div>
          <label>Status</label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>All</option>
            <option>Raised</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>
        </div>
      </div>

      <div className="full-task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="no-results">
            <span>⌕</span>
            <h3>No tasks found</h3>
            <p>Try changing your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;