import logo from "./assets/images/expenses-tracker-logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function ExpenseTracker() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    {
      email: "sydneysantos176@gmail.com",
      password: "SydOms0812",
    },
  ];

  function login() {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="left-side">
          <h1>
            Track Every <br /> Peso, Master <br /> Your Budget.
          </h1>
          <h3>
            Login and Take Control of <br /> Your Finances.
          </h3>
        </div>

        <div className="right-side">
          <img src={logo} alt="logo" className="logo" />
          <h3>Hello! Welcome Back</h3>
          <div className="inputs">
            <p>Email</p>
            <input
              type="text"
              className="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p>Password</p>
            <input
              type="text"
              className="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
