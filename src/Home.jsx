import balImg from "./assets/images/balance.png";
import expensesImg from "./assets/images/expenses.png";
import historyImg from "./assets/images/history.png";
import profile from "./assets/images/syd 1.jpg";
import styles from "./Home.module.css";
import groceryIcon from "./assets/images/grocery.png";
import foodsIcon from "./assets/images/foods.png";
import clothesIcon from "./assets/images/clothes.png";
import education from "./assets/images/education.png";
import billsIcon from "./assets/images/electricity bill.png";
import othersIcon from "./assets/images/others.png";
import addIcon from "./assets/images/plus.png";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.profileSection}>
          <div className={styles.profileName}>
            <img src={profile} className={styles.profileImg} />
            <h2 className={styles.name}>Sydney</h2>
          </div>

          <div className={styles.navigations}>
            <a href="#" className={styles.homeNav}>
              Home
            </a>
            <a href="#" className={styles.historyNav}>
              History
            </a>
            <a href="#" className={styles.logoutNav}>
              Logout
            </a>
          </div>
        </div>

        <div className={styles.mainSecContainer}>
          <div className={styles.topSection}>
            <h1>Expenses Tracker</h1>
            <h3>Track Your Expenses!</h3>
          </div>

          <div className={styles.mainWrapper}>
            <div className={styles.balExpensesWrapper}>
              <div className={styles.balContainer}>
                <div className={styles.balance}>
                  <h2 className={styles.text}>Current Balance</h2>
                  <h1 className={styles.balanceAmount} id="balance">
                    PHP 8, 500
                  </h1>
                  <h3 className={styles.date}>April 30, 2025</h3>
                </div>

                <div>
                  <img
                    src={balImg}
                    alt="balance-logo"
                    className={styles.balImage}
                  />
                </div>
              </div>

              <div className={styles.totalExpenses}>
                <div className={styles.expensesImgWrapper}>
                  <img
                    src={expensesImg}
                    alt="expenses-logo"
                    className={styles.expensesImg}
                  />
                </div>

                <div className={styles.expenses}>
                  <h2>Total Expenses</h2>
                  <h1 id="expensesValue">PHP 2, 500</h1>
                </div>
              </div>
            </div>

            <div className={styles.recentActWrapper}>
              <div className={styles.recentTop}>
                <h2>Recent Activity</h2>
                <img
                  src={historyImg}
                  alt="history-img"
                  className={styles.historyImg}
                />
              </div>

              <div className={styles.recentActivities}>
                <div className={styles.activity} id="activity1">
                  <div className={styles.activityIcon}>
                    <img src={groceryIcon} />
                  </div>
                  <div className={styles.nameDate}>
                    <h2>Grocery</h2>
                    <h3>April 25, 2025</h3>
                  </div>
                  <div className={styles.amount}>- PHP 250</div>
                </div>

                <div className={styles.activity} id="activity2">
                  <div className={styles.activityIcon}>
                    <img src={groceryIcon} />
                  </div>
                  <div className={styles.nameDate}>
                    <h2>Grocery</h2>
                    <h3>April 25, 2025</h3>
                  </div>
                  <div className={styles.amount}>- PHP 250</div>
                </div>

                <div className={styles.activity} id="activity3">
                  <div className={styles.activityIcon}>
                    <img src={groceryIcon} />
                  </div>
                  <div className={styles.nameDate}>
                    <h2>Grocery</h2>
                    <h3>April 25, 2025</h3>
                  </div>
                  <div className={styles.amount}>- PHP 250</div>
                </div>
              </div>
            </div>

            <div className={styles.addIconContainer}>
              <img src={addIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
