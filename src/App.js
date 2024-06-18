import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Codeforces from "./components/Codeforces";
import LeetCode from "./components/LeetCode";
import HackerRank from "./components/HackerRank";
import CodeChef from "./components/CodeChef";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codeforces" element={<Codeforces />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/hackerrank" element={<HackerRank />} />
          <Route path="/codechef" element={<CodeChef />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
