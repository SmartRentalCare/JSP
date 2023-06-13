//import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
//import LogoutButton from "../components/Logoutbutton";
import "../style.css";

export default function header() {
  return (
    <div className="header">
      <header>
        <h1 className="main_logo">
          <a href="/main">Rent Care</a>
          <h2 className="logo_sub">
            <a href="/main">렌트케어</a>
          </h2>
        </h1>

        <nav className="nav">
          <div className="nav_element">
            <a href="/modal">차량검색</a>
            <a href="/client">고객등록</a>
            <a href="/alarm">누적현황</a>
            <a href="/count">누적횟수초과</a>
          </div>
        </nav>
      </header>
    </div>
  );
}
