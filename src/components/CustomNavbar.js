import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p className="navbar-title">ContestCalendar</p>
      </div>
      <div className="navbar-content">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/codeforces">
          Codeforces
        </Link>
        <Link className="navbar-item" to="/leetcode">
          LeetCode
        </Link>
        <Link className="navbar-item" to="/hackerrank">
          HackerRank
        </Link>
        <Link className="navbar-item" to="/codechef">
          CodeChef
        </Link>
      </div>
    </nav>
  );
};

export default CustomNavbar;
