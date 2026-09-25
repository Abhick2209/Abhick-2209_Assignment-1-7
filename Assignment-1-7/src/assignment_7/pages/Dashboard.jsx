import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const {
    tasks,
    pendingTasks,
    completedTasks,
    highPriority,
  } = useTasks();

  const completionRate = tasks.length
    ? Math.round((completedTasks.length / tasks.length) * 100)
    : 0;

  return (
    <div className="page">
      <div className="welcome-row">
        <div>
          <span className="eyebrow">GOOD TO SEE YOU</span>
          <h2>Stay on top of your work.</h2>
          <p>
            Manage your priorities and keep every task moving
            forward.
          </p>
        </div>

        <Link to="/add-task" className="primary-button">
          <span>＋</span>
          New task
        </Link>
      </div>

      <div className="stats-grid">
        <StatCard
          label="TOTAL TASKS"
          value={tasks.length}
          detail="Across your workspace"
          icon="◫"
          accent="green"
        />

        <StatCard
          label="PENDING"
          value={pendingTasks.length}
          detail="Tasks requiring action"
          icon="◷"
          accent="orange"
        />

        <StatCard
          label="HIGH PRIORITY"
          value={highPriority.length}
          detail="Needs your attention"
          icon="!"
          accent="red"
        />

        <StatCard
          label="COMPLETION"
          value={`${completionRate}%`}
          detail="Overall progress"
          icon="✓"
          accent="blue"
        />
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">RECENT ACTIVITY</span>
              <h3>Latest tasks</h3>
            </div>

            <Link to="/tasks">View all →</Link>
          </div>

          <div className="task-list">
            {tasks.slice(0, 3).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>

        <section className="progress-panel">
          <span className="eyebrow">WORKSPACE PROGRESS</span>

          <div className="progress-circle">
            <div>
              <strong>{completionRate}%</strong>
              <span>completed</span>
            </div>
          </div>

          <h3>Keep the momentum.</h3>

          <p>
            {completedTasks.length} of {tasks.length} tasks have
            been completed.
          </p>

          <div className="progress-bar">
            <span style={{ width: `${completionRate}%` }}></span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;