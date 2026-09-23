import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import StatusBadge from "../components/StatusBadge";

function TaskDetails() {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const {
    tasks,
    completeTask,
    deleteTask,
  } = useTasks();

  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <div className="not-found">
        <span>404</span>
        <h2>Task not found</h2>
        <p>The task you're looking for does not exist.</p>
        <Link to="/tasks" className="primary-button">
          Back to tasks
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/tasks");
  };

  return (
    <div className="page">
      <div className="details-back">
        <Link to="/tasks">← Back to tasks</Link>
      </div>

      <div className="task-details">
        <div className="details-header">
          <div>
            <div className="task-detail-tags">
              <span
                className={`priority ${task.priority.toLowerCase()}`}
              >
                {task.priority}
              </span>

              <span className="task-category">
                {task.category}
              </span>

              <StatusBadge status={task.status} />
            </div>

            <h2>{task.header}</h2>

            <span className="task-id">{task.id}</span>
          </div>

          <div className="details-actions">
            {task.status !== "Closed" && (
              <button
                onClick={() => completeTask(task.id)}
                className="primary-button"
              >
                Mark complete
              </button>
            )}

            <button
              onClick={handleDelete}
              className="danger-button"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="details-content">
          <div className="description-block">
            <span className="eyebrow">DESCRIPTION</span>
            <p>{task.description}</p>
          </div>

          <div className="details-information">
            <div>
              <span>Raised date</span>
              <strong>
                {new Date(task.raisedAt).toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>Due date</span>
              <strong>
                {new Date(
                  `${task.dueDate}T00:00:00`
                ).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{task.category}</strong>
            </div>

            <div>
              <span>Priority</span>
              <strong>{task.priority}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;