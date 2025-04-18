import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      onLogin();
      navigate("/posts");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="input-field"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
