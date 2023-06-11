import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import LogoutButton from "./Logoutbutton";
import List from "./List";
import MovePage from "./MovePage";
import Click from "./Click";
import GoSearch from "./GoSearch";

//import { useSelector } from "react-redux";
export default function MainPage() {
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="search_box">
            <h1 className="subtitle">고객리스트</h1>
          </div>
          <div className="list">
            <List />
          </div>
        </div>

        <div className="main_article">
          <div className="users">
            <div className="users_name">
              <p className="name">회원님, 안녕하세요!</p>
            </div>
            <div className="users_element">
              <div className="logout">
                <LogoutButton />
              </div>
              <div className="move">
                <MovePage />
              </div>
              <div className="move">
                <Click />
              </div>
              <div className="move">
                <GoSearch />
              </div>
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
