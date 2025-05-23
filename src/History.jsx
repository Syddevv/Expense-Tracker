// filepath: c:\Codes - Projects\Expense Tracker\Expense Tracker\src\History.jsx
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import profile from "./assets/images/syd 1.jpg";
import { Link } from "react-router-dom";
import "./History.css";

export default function History() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("allActivities");
    setActivities(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div className={styles.home}>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.profileName}>
          <img src={profile} className={styles.profileImg} />
          <h2 className={styles.name}>Sydney</h2>
        </div>
        <div className={styles.navigations}>
          <Link to="/home" className={styles.homeNav}>
            Home
          </Link>
          <Link to="/history" className={styles.historyNav}>
            History
          </Link>
          <a href="#" className={styles.logoutNav}>
            Logout
          </a>
        </div>
      </div>

      <div className={styles.mainSecContainer}>
        {/* Top - Website name */}
        <div className={styles.topSection}>
          <h1>Expenses Tracker</h1>
          <h3>Track Your Expenses!</h3>
        </div>

        <div className={styles.mainWrapper}>
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "0px",
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "2rem",
            }}
          >
            History
          </h2>

          <div className="historyTableWrapper">
            <table className="historyTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {activities.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      style={{
                        textAlign: "center",
                        padding: "30px",
                        fontSize: "1.2rem",
                      }}
                    >
                      No history yet.
                    </td>
                  </tr>
                )}

                {activities.map((activity, idx) => (
                  <tr key={idx}>
                    <td>{activity.date}</td>
                    <td>{activity.type}</td>
                    <td>{activity.updateType}</td>
                    <td
                      style={{
                        fontWeight: 700,
                        color:
                          activity.updateType === "Expenses"
                            ? "#e74c3c"
                            : "#27ae60",
                      }}
                    >
                      {activity.updateType === "Expenses" ? "- PHP" : "+ PHP"}{" "}
                      {activity.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
