import balImg from "./assets/images/balance.png";
import expensesImg from "./assets/images/expenses.png";
import historyImg from "./assets/images/history.png";
import profile from "./assets/images/syd 1.jpg";
import styles from "./Home.module.css";
import groceryIcon from "./assets/images/grocery.png";
import foodsIcon from "./assets/images/foods.png";
import clothesIcon from "./assets/images/clothes.png";
import educationIcon from "./assets/images/education.png";
import billsIcon from "./assets/images/electricity bill.png";
import shoppingIcon from "./assets/images/shopping.png";
import othersIcon from "./assets/images/others.png";
import addIcon from "./assets/images/plus.png";
import depositIcon from "./assets/images/deposit.png";
import closeIcon from "./assets/images/close-btn.png";
import backIcon from "./assets/images/back-btn.png";
import React, { useState, useRef, use } from "react";

export default function Home() {
  const addActivityModal = useRef();
  const typeModal = useRef();

  const openActivityModal = () => {
    addActivityModal.current.style.display = "block";
  };

  const closeActivityModal = () => {
    addActivityModal.current.style.display = "none";
  };

  const openTypeModal = () => {
    typeModal.current.style.display = "block";
    addActivityModal.current.style.display = "none";
  };

  const closeTypeModal = () => {
    typeModal.current.style.display = "none";
    addActivityModal.current.style.display = "block";
  };

  return (
    <>
      <div className={styles.home}>
        {/* Profile Section */}
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
          {/* Top - Website name */}
          <div className={styles.topSection}>
            <h1>Expenses Tracker</h1>
            <h3>Track Your Expenses!</h3>
          </div>

          <div className={styles.mainWrapper}>
            {/* Current Balance and Expenses */}
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
              {/* Recent Acitivities */}
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
            {/* Add Activity Button */}
            <div className={styles.addIconContainer}>
              <img src={addIcon} onClick={openActivityModal} />
            </div>

            {/* --------- MODAlS --------- */}
            {/* Add Activity Modal */}
            <div className={styles.addActivityModal} ref={addActivityModal}>
              {/* Contents of Add Activity Modal */}
              <div className={styles.addActivityContent}>
                <div className={styles.activityTop}>
                  <h1>Add Acitivity</h1>
                  <img
                    src={closeIcon}
                    className={styles.closeBtn}
                    onClick={closeActivityModal}
                  />
                </div>

                {/* Choices for Activity Types */}
                <div className={styles.choices}>
                  <div className={styles.addExpenses} onClick={openTypeModal}>
                    <img src={expensesImg} />
                    <h1>Expenses</h1>
                  </div>
                  <div className={styles.deposit}>
                    <img src={depositIcon} />
                    <h1>Deposit</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Type of Expenses Moda */}
            <div className={styles.selectTypeModal} ref={typeModal}>
              {/* Contents of Select Type Modal  */}
              <div className={styles.selectTypeContent}>
                <div className={styles.selectTypeTop}>
                  <h1>Select Type</h1>
                  <img
                    src={backIcon}
                    className={styles.backBtn}
                    onClick={closeTypeModal}
                  />
                </div>

                {/* Choice for Expenses Type */}
                <div className={styles.selectTypeChoices}>
                  <div className={styles.grocery}>
                    <img src={groceryIcon} />
                    <h3>Grocery</h3>
                  </div>
                  <div className={styles.foods}>
                    <img src={foodsIcon} />
                    <h3>Foods</h3>
                  </div>
                  <div className={styles.clothes}>
                    <img src={clothesIcon} />
                    <h3>Clothes</h3>
                  </div>
                  <div className={styles.education}>
                    <img src={educationIcon} />
                    <h3>Education</h3>
                  </div>
                  <div className={styles.bills}>
                    <img src={billsIcon} />
                    <h3>Bills</h3>
                  </div>
                  <div className={styles.shopping}>
                    <img src={shoppingIcon} />
                    <h3>Shopping</h3>
                  </div>
                  <div className={styles.others}>
                    <img src={othersIcon} />
                    <h3>Others</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
