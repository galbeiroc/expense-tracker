import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import Login from "./pages/Auth/Login";
import SingUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  )
}

export default App;

const Root = () => {
  // Check if token exist in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Navigate to="/dashborad" /> : <Navigate to="/login" />
}