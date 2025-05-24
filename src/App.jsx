import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseTracker from "./ExpenseTracker";
import Home from "./Home";
import History from "./History";

function App() {
  return (
    <BrowserRouter basename="/Expense-Tracker">
      <Router>
        <Routes>
          <Route path="/" element={<ExpenseTracker />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
