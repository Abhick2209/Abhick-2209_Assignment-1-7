import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    localStorage.setItem("taskManagerAuth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-decoration">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-brand">T</div>

        <span className="eyebrow">TASK MANAGEMENT SYSTEM</span>

        <h1>Welcome back.</h1>

        <p>
          Enter your name to access your personal task workspace.
        </p>

        <label>Your name</label>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit" className="primary-button">
          Enter workspace →
        </button>
      </form>
    </div>
  );
}

export default Login;