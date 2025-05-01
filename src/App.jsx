import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseTracker from "./ExpenseTracker";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpenseTracker />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
