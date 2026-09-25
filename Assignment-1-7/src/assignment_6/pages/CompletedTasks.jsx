import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function CompletedTasks() {
  const { completedTasks } = useTasks();

  return (
    <div className="page">
      <div className="page-intro">
        <div>
          <span className="eyebrow">ARCHIVE</span>
          <h2>Completed tasks</h2>
          <p>
            Everything you've successfully finished is collected
            here.
          </p>
        </div>
      </div>

      <div className="full-task-list">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="no-results">
            <span>✓</span>
            <h3>No completed tasks</h3>
            <p>Complete a task and it will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;