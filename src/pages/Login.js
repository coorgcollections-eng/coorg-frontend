import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/user/login", { email, password });

      const token = res.data.accessToken;

      if (!token) {
        alert("Token not found in response!");
        return;
      }

      localStorage.setItem("token", token);

      alert("Login Successful");
      navigate("/checkout");
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}