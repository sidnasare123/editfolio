import { useState } from "react";

export default function Auth({ setIsLogin }) {
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (type, e) => {
    const data = { ...auth };
    if (type === "name") data.username = e.target.value;
    else data.password = e.target.value;
    setAuth(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsLogin(true);
  };

  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleOnChange("name", e)}
        value={auth.username}
        required
        placeholder="Enter username"
        name="username"
        autoComplete="username"
        type="text"
        minLength={3}
        disabled={loading}
      />
      <input
        onChange={(e) => handleOnChange("password", e)}
        value={auth.password}
        required
        name="password"
        autoComplete="password"
        type="password"
        minLength={3}
        placeholder="Enter password"
        disabled={loading}
      />
      <button className="login-btn" type="submit" disabled={loading}>
        Login
      </button>
    </form>
  );
}
