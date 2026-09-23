import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function createFakeToken(username) {
  const header = btoa(
    JSON.stringify({
      alg: "HS256",
      typ: "JWT",
    })
  );

  const payload = btoa(
    JSON.stringify({
      sub: username,
      role: "student",
      iat: Date.now(),
    })
  );

  const signature = btoa(
    `${username}-trackr-secret`
  );

  return `${header}.${payload}.${signature}`;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("trackrUser");
    const savedToken = localStorage.getItem("trackrToken");

    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }

    setLoading(false);
  }, []);

  const login = (username, password, remember) => {
    if (!username.trim()) {
      return {
        success: false,
        message: "Username is required.",
      };
    }

    if (!password.trim()) {
      return {
        success: false,
        message: "Password is required.",
      };
    }

    const newToken = createFakeToken(username);

    setUser(username);
    setToken(newToken);

    if (remember) {
      localStorage.setItem("trackrUser", username);
      localStorage.setItem("trackrToken", newToken);
    } else {
      sessionStorage.setItem("trackrUser", username);
      sessionStorage.setItem("trackrToken", newToken);
    }

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("trackrUser");
    localStorage.removeItem("trackrToken");

    sessionStorage.removeItem("trackrUser");
    sessionStorage.removeItem("trackrToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: Boolean(user && token),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}