import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PasswordStrength from "../components/PasswordStrength";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const result = login(
      username,
      password,
      remember
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    const destination =
      location.state?.from || "/dashboard";

    navigate(destination, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="login-layout">
        <section className="login-showcase">
          <div className="showcase-brand">
            <div className="brand-symbol">T</div>
            <span>TRACKR</span>
          </div>

          <div className="showcase-content">
            <span className="eyebrow">
              PERSONAL WORKSPACE
            </span>

            <h1>
              Everything
              <br />
              <strong>under control.</strong>
            </h1>

            <p>
              A focused workspace for managing assignments,
              priorities and everything that needs to get done.
            </p>

            <div className="showcase-points">
              <div>
                <span>01</span>
                <strong>Organize</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Prioritize</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Complete</strong>
              </div>
            </div>
          </div>

          <div className="showcase-footer">
            <span>TRACKR TASK MANAGEMENT</span>
            <span>SECURE WORKSPACE</span>
          </div>
        </section>

        <section className="login-panel">
          <div className="login-card">
            <div className="login-card-heading">
              <span className="eyebrow">
                SECURE ACCESS
              </span>

              <h2>Welcome back.</h2>

              <p>
                Sign in to continue to your workspace.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {error && (
                <div className="login-error">
                  <span>!</span>
                  {error}
                </div>
              )}

              <div className="auth-field">
                <label>Username</label>

                <div className="auth-input">
                  <span>◉</span>

                  <input
                    type="text"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="auth-field">
                <label>Password</label>

                <div className="auth-input">
                  <span>◆</span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="password-toggle"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <PasswordStrength password={password} />
              </div>

              <label className="remember-row">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) =>
                    setRemember(event.target.checked)
                  }
                />

                <span className="custom-checkbox"></span>

                <span>Remember me</span>
              </label>

              <button
                type="submit"
                className="login-button"
              >
                <span>Enter workspace</span>
                <strong>→</strong>
              </button>
            </form>

            <div className="login-security">
              <span className="security-dot"></span>
              Simulated JWT authentication
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;