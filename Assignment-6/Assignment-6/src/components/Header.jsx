import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/tasks": "All Tasks",
    "/add-task": "Create Task",
    "/completed": "Completed Tasks",
  };

  const title = titles[location.pathname] || "Task Details";

  return (
    <header className="top-header">
      <div>
        <span className="breadcrumb">TRACKR / WORKSPACE</span>
        <h1>{title}</h1>
      </div>

      <div className="header-date">
        <span>Today</span>
        <strong>
          {new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </strong>
      </div>
    </header>
  );
}

export default Header;