import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../style.css";
import axios from "axios";
//import { Link } from "react-router-dom";
const JWT_EXPIRRY_TIME = 300000;

export default function LoginPage() {
  const [userID, setUserID] = useState("");
  const [userPW, setUSerPW] = useState("");

  const handleuserID = (event) => {
    setUserID(event.target.value);
  };

  const handleuserPW = (event) => {
    setUSerPW(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/sign/in", {
        userID: userID,
        userPW: userPW,
      })
      .then(onLoginSuccess)
      .catch((error) => {
        console.log(error);
      });
  };

  const onSilentRefresh = () => {
    axios
      .post("http://localhost:3001/auth/revise_check")
      .then(onLoginSuccess)
      .catch((error) => {
        // ... 로그인 실패 처리
      });
  };

  const onLoginSuccess = (response) => {
    const { accessToken } = response.data;
    localStorage.setItem("token", accessToken);
    window.location.href = "/main";
    // accessToken 설정
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRRY_TIME);
  };

  return (
    <div className="LoginPage">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h1 className="SubTitle">
          Rent Care
          <span>렌트케어</span>
        </h1>
        <div className="Input">
          <div className="InputId">
            <FaUser className="icon" />
            <input
              type="text"
              id="userID"
              value={userID}
              onChange={handleuserID}
            />
          </div>
          <div className="InputId">
            <FaLock className="icon" />
            <input
              type="password"
              id="userPW"
              value={userPW}
              onChange={handleuserPW}
            />
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
