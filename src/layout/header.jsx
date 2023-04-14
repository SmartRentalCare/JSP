//import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import LogoutButton from "../components/Logoutbutton";
import "../style.css";

export default function header() {
  return (
    <div className="header">
      <header>
        <h1 className="main_logo">Rent Care</h1>

        <nav className="nav">
          <a href="/main">
            <FaHome className="header-icon" />
          </a>
          <a href="/drink">음주</a>
          <a href="/smoke">흡연</a>
          <a href="/collision">충돌</a>
        </nav>
      </header>
    </div>
  );
}
