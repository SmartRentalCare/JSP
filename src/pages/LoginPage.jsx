import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../style.css";
import axios from "axios";
//import { Link } from "react-router-dom";

export default function LoginPage() {
  const [userID, setUserID] = useState("");
  const [userPW, setUSerPW] = useState("");

  const handleuserID = (event) => {
    setUserID(event.target.value);
  };

  const handleuserPW = (event) => {
    setUSerPW(event.target.value);
  };

  const instance = axios.create({
    baseURL: "https://localhost:3001/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleSubmit = async (userID, userPW) => {
    const body = {
      userID,
      userPW,
    };

    try {
      const response = await instance.post("/auth/sign/in", body);
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return response;
    } catch (error) {
      console.log("error");
    }
  };
  /*const handleSubmit = (userID, userPW) => {
    const data = {
      userID,
      userPW,
    };
    axios
      .post("http://localhost:3001/auth/sign/in", data)
      .then((response) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          response.headers.Authorization = `Bearer ${accessToken}`;
        }
        return response;
        //JWT 토큰을 로컬 스토리지에 저장
      })
      .catch((error) => {
        console.log("로그인실패");
      });
  };*/

  return (
    <div className="LoginPage">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h1 className="SubTitle">
          LentalCare
          <span>렌터케어</span>
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
