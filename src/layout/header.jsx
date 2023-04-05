//import React, { useState } from "react";
import LogoutButton from "../components/Logoutbutton";
import "../style.css";

export default function header() {
  return (
    <div className="header">
      <header>
        <h1 className="main_logo">LentalCare</h1>
        <div className="logout_button">
          <LogoutButton />
        </div>
        <nav className="nav">
          <a href="{() => false}">홈</a>
          <a href="{() => false}">음주</a>
          <a href="{() => false}">흡연</a>
          <a href="{() => false}">충돌</a>
        </nav>
      </header>
    </div>
  );
}
