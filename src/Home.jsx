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
import allowanceIcon from "./assets/images/allowance.png";
import salaryIcon from "./assets/images/salary.png";
import loanIcon from "./assets/images/loan.png";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const addActivityModal = useRef();
  const expensesModal = useRef();
  const depositModal = useRef();
  const detailsModal = useRef();

  const openActivityModal = () => {
    addActivityModal.current.style.display = "block";
  };

  const closeActivityModal = () => {
    addActivityModal.current.style.display = "none";
  };

  const openExpensesModal = () => {
    expensesModal.current.style.display = "block";
    addActivityModal.current.style.display = "none";
  };

  const closeExpensesModal = () => {
    expensesModal.current.style.display = "none";
    addActivityModal.current.style.display = "block";
  };

  const openDepositModal = () => {
    depositModal.current.style.display = "block";
    addActivityModal.current.style.display = "none";
  };

  const closeDepositModal = () => {
    depositModal.current.style.display = "none";
    addActivityModal.current.style.display = "block";
  };

  const openDetailsModal = () => {
    expensesModal.current.style.display = "none";
    depositModal.current.style.display = "none";
    detailsModal.current.style.display = "block";
  };

  const closeDetailsModal = () => {
    detailsModal.current.style.display = "none";
    addActivityModal.current.style.display = "block";
  };

  const [activityType, setActivityType] = useState("");
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem("balance");
    return stored ? parseFloat(stored) : 1000;
  });
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? parseFloat(stored) : 0;
  });
  const [updateType, setUpdateType] = useState("");
  const [date, setDate] = useState("");
  const [recentActivities, setRecentActivities] = useState(() => {
    const stored = localStorage.getItem("recentActivities");
    return stored ? JSON.parse(stored) : [];
  });

  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [showExpensesModal, setShowExpensesModal] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const activityIcons = {
    Grocery: groceryIcon,
    Foods: foodsIcon,
    Clothes: clothesIcon,
    Education: educationIcon,
    Bills: billsIcon,
    Shopping: shoppingIcon,
    Allowance: allowanceIcon,
    Salary: salaryIcon,
    Loan: loanIcon,
    Others: othersIcon,
  };

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("expenses", expenses);
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("recentActivities", JSON.stringify(recentActivities));
  }, [recentActivities]);

  const amountRef = useRef();
  const dateRef = useRef();

  function setActivity(activity) {
    setActivityType(activity);
  }

  function getUpdateType(type) {
    setUpdateType(type);
  }

  const handleConfirm = () => {
    const value = parseFloat(amountRef.current.value);
    const selectedDate = dateRef.current.value;

    if (isNaN(value) || value <= 0) {
      console.log("Invalid amount");
      return;
    }

    let formattedDate = "";
    if (selectedDate) {
      const dateObj = new Date(selectedDate);
      formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    if (updateType === "Expenses") {
      if (balance >= value) {
        setBalance(balance - value);
        setExpenses((prev) => prev + value);
        setDate(formattedDate);
      } else {
        console.log("Not enough balance");
      }
    } else {
      if (amountRef.current.value > 0) {
        setBalance(value + balance);
        setDate(formattedDate);
      }
    }

    amountRef.current.value = "";
    dateRef.current.value = "";
    setActivityType("");
    setUpdateType("");

    setRecentActivities((prev) => {
      const newActivity = {
        type: activityType,
        date: formattedDate,
        amount: value,
        icon: getImageSrc(activityType),
        updateType: updateType,
      };

      const updated = [newActivity, ...prev];
      return updated.slice(0, 3);
    });
  };

  const getImageSrc = (type) => activityIcons[type] || DefaultIcon;

  const today = new Date();
  const formattedToday = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
                    PHP {balance}
                  </h1>
                  <h4 className={styles.date}>{formattedToday}</h4>{" "}
                  {/* Add this line */}
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
                  <h1 id="expensesValue">PHP {expenses}</h1>
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

              {recentActivities.length > 0 && (
                <div className={styles.recentActivities}>
                  {recentActivities.map((activity, index) => (
                    <div key={index} className={styles.activity}>
                      <div className={styles.activityIcon}>
                        <img src={activity.icon} alt={activity.type} />
                      </div>
                      <div className={styles.nameDate}>
                        <h2>{activity.type}</h2>
                        <h3>{activity.date}</h3>
                      </div>
                      <div
                        className={styles.amount}
                        style={{
                          color:
                            activity.updateType === "Expenses"
                              ? "red"
                              : "green",
                          fontWeight: "bold",
                        }}
                      >
                        {activity.updateType === "Expenses" ? "- PHP" : "+ PHP"}{" "}
                        {activity.amount}
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                  <h1>Add Activity</h1>
                  <img
                    src={closeIcon}
                    className={styles.closeBtn}
                    onClick={closeActivityModal}
                  />
                </div>

                {/* Choices for Activity Types */}
                <div className={styles.choices}>
                  <div
                    className={styles.addExpenses}
                    onClick={() => {
                      openExpensesModal();
                      setUpdateType("Expenses");
                    }}
                  >
                    <img src={expensesImg} />
                    <h1>Expenses</h1>
                  </div>

                  <div
                    className={styles.deposit}
                    onClick={() => {
                      openDepositModal();
                      setUpdateType("Deposit");
                    }}
                  >
                    <img src={depositIcon} />
                    <h1>Deposit</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Type of Expenses Modal */}
            <div className={styles.expensesTypeModal} ref={expensesModal}>
              {/* Contents of Select Type Modal  */}
              <div className={styles.expensesTypeContent}>
                <div className={styles.expensesTypeTop}>
                  <h1>Select Type</h1>
                  <img
                    src={backIcon}
                    className={styles.backBtn}
                    onClick={closeExpensesModal}
                  />
                </div>

                {/* Choice for Expenses Type */}
                <div className={styles.expensesTypeChoices}>
                  <div
                    className={styles.grocery}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Grocery");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={groceryIcon} />
                    <h3>Grocery</h3>
                  </div>
                  <div
                    className={styles.foods}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Foods");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={foodsIcon} />
                    <h3>Foods</h3>
                  </div>
                  <div
                    className={styles.clothes}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Clothes");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={clothesIcon} />
                    <h3>Clothes</h3>
                  </div>
                  <div
                    className={styles.education}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Education");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={educationIcon} />
                    <h3>Education</h3>
                  </div>
                  <div
                    className={styles.bills}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Bills");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={billsIcon} />
                    <h3>Bills</h3>
                  </div>
                  <div
                    className={styles.shopping}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Shopping");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={shoppingIcon} />
                    <h3>Shopping</h3>
                  </div>
                  <div
                    className={styles.others}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Others");
                      getUpdateType("Expenses");
                    }}
                  >
                    <img src={othersIcon} />
                    <h3>Others</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Type of Deposit Modal */}
            <div className={styles.depositTypeModal} ref={depositModal}>
              <div className={styles.depositTypeContent}>
                <div className={styles.depositTypeTop}>
                  <h1>Select Type</h1>
                  <img
                    src={backIcon}
                    className={styles.backBtn}
                    onClick={closeDepositModal}
                  />
                </div>

                {/* Choice for Deposit Type */}
                <div className={styles.depositTypeChoices}>
                  <div
                    className={styles.allowance}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Allowance");
                      getUpdateType("Deposit");
                    }}
                  >
                    <img src={allowanceIcon} />
                    <h3>Allowance</h3>
                  </div>
                  <div
                    className={styles.salary}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Salary");
                      getUpdateType("Deposit");
                    }}
                  >
                    <img src={salaryIcon} />
                    <h3>Salary</h3>
                  </div>
                  <div
                    className={styles.loan}
                    onClick={() => {
                      openDetailsModal();
                      getUpdateType("Deposit");
                      setActivity("Loan");
                    }}
                  >
                    <img src={loanIcon} />
                    <h3>Loan</h3>
                  </div>
                  <div
                    className={styles.others}
                    onClick={() => {
                      openDetailsModal();
                      setActivity("Others");
                      getUpdateType("Deposit");
                    }}
                  >
                    <img src={othersIcon} />
                    <h3>Others</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailsModal} ref={detailsModal}>
              <div className={styles.detailsContent}>
                <div className={styles.detailsTop}>
                  <div className={styles.topText}>
                    <h1>Details</h1>
                    <h5>({activityType})</h5>
                  </div>

                  <img
                    src={backIcon}
                    className={styles.backBtn}
                    onClick={closeDetailsModal}
                  />
                </div>

                <div className={styles.inputs}>
                  <h3>Amount</h3>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    ref={amountRef}
                    className={styles.amountInput}
                  />

                  <h3>Date</h3>
                  <input
                    type="date"
                    className={styles.dateInput}
                    ref={dateRef}
                  />
                </div>
                <button
                  className={styles.confirmBtn}
                  onClick={() => {
                    {
                      handleConfirm();
                      closeDetailsModal();
                      closeActivityModal();
                    }
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
