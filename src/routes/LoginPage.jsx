import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./loginpage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("councillor"); // Default to councillor
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Please enter a password.");
      return;
    }
    login(username, role);
    if (role === "councillor") {
      navigate("/council-availability");
    } else if (role === "staff") {
      navigate("/staff-timesheet");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login:</h2>
        <div className="form-row">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="councillor">Councillor</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
