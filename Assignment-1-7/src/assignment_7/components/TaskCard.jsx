import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import StatusBadge from "./StatusBadge";

function TaskCard({ task }) {
  const { completeTask, deleteTask } = useTasks();

  return (
    <article className="task-card">
      <div className="task-card-main">
        <div className="task-card-heading">
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>

          <span className="task-category">
            {task.category}
          </span>
        </div>

        <Link to={`/tasks/${task.id}`}>
          <h3>{task.header}</h3>
        </Link>

        <p>{task.description}</p>

        <div className="task-meta">
          <span>
            Raised{" "}
            {new Date(task.raisedAt).toLocaleDateString("en-IN")}
          </span>

          <span>
            Due{" "}
            {new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </span>
        </div>
      </div>

      <div className="task-card-side">
        <StatusBadge status={task.status} />

        <div className="task-actions">
          <Link to={`/tasks/${task.id}`} className="view-action">
            View
          </Link>

          {task.status !== "Closed" && (
            <button
              onClick={() => completeTask(task.id)}
              className="complete-action"
            >
              Complete
            </button>
          )}

          <button
            onClick={() => deleteTask(task.id)}
            className="delete-action"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;