import logo from "./assets/images/expenses-tracker-logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./ExpenseTracker.module.css";

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
      <div className="page-wrapper">
        <div className={styles.mainContainer}>
          <div className={styles.leftSide}>
            <h1 className={styles.leftText}>
              Track Every <br /> Peso, Master <br /> Your Budget.
            </h1>
            <h3 className={styles.leftTextSub}>
              Login and Take Control of <br /> Your Finances.
            </h3>
          </div>

          <div className={styles.rightSide}>
            <img src={logo} alt="logo" className={styles.logo} />
            <h3 className={styles.rightSideGreet}>Hello! Welcome Back</h3>
            <div className="inputs">
              <p className={styles.inputsLabel}>Email</p>
              <input
                type="text"
                className={styles.email}
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className={styles.inputsLabel}>Password</p>
              <input
                type="text"
                className={styles.password}
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className={styles.loginBtn} onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
