import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Tak</Link>
      <div className="navbar-links">{/*
        <button className="nav-login">로그인</button>
        <button className="nav-join">회원가입</button>
      */}</div>
    </nav>
  );
};

export default NavBar;
