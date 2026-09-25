import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-symbol">T</div>

        <div>
          <strong>TRACKR</strong>
          <span>Task Management</span>
        </div>
      </div>

      <div className="sidebar-section">
        <span className="sidebar-label">
          WORKSPACE
        </span>

        <nav>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span>⌂</span>
            Dashboard
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span>□</span>
            All Tasks
          </NavLink>

          <NavLink
            to="/add-task"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span>＋</span>
            Add Task
          </NavLink>

          <NavLink
            to="/completed"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span>✓</span>
            Completed
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="profile-card">
          <div className="profile-avatar">
            {user?.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>{user}</strong>
            <span>Authenticated user</span>
          </div>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <span>↪</span>
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;