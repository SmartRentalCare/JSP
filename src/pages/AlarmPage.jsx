import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import LogoutButton from "./Logoutbutton";
import axios from "axios";
import Click from "./Click";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/alarm")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="car_section">
            <h2 className="subtitle">알림</h2>
            {posts &&
              posts.map((post) => (
                <div key={post.id} className="car_list">
                  <div className="car_element">
                    <p>{post.user}</p> {/*고객이름*/}
                    <p>{post.carInfo}</p> {/*차량번호*/}
                    <p>{post.date}</p> {/*알림발생날짜*/}
                    <p>{post.kind}</p> {/*알림종류*/}
                    <p>{post.density}</p> {/*농도*/}
                  </div>
                </div>
              ))}
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
                <Click />
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
