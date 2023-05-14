import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import LogoutButton from "./Logoutbutton";
import axios from "axios";

export default function MainPage() {
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="car_section">
            <h2 className="subtitle">알림</h2>
            <div className="car_list">
              <div className="car_element">
                <p>2035</p>
                <p>김채영</p>
                <p>20220105</p>
                <p>smoke</p>
                <p>5%</p>
              </div>
              <div className="car_element">
                <p>2035</p>
                <p>김채영</p>
                <p>20220105</p>
                <p>smoke</p>
                <p>5%</p>
              </div>
              <div className="car_element">
                <p>2035</p>
                <p>김채영</p>
                <p>20220105</p>
                <p>smoke</p>
                <p>5%</p>
              </div>
              <div className="car_element">
                <p>2035</p>
                <p>김채영</p>
                <p>20220105</p>
                <p>smoke</p>
                <p>5%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main_article">
          <div className="users">
            <div className="users_name">
              <p className="name">react-redux님, 안녕하세요!</p>
            </div>
            <div className="logout">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
