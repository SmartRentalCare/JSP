import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Users from "../image/김채영.jpg";
//import LogoutButton from "../components/Logoutbutton";
import { FaSearch } from "react-icons/fa";
export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main_section">
          <div className="search_box">
            <div className="main_subtitle"></div>
            <h1 className="subtitle">차량검색</h1>
            <input
              type="text"
              placeholder="차량번호(4자리)+고객이름+렌트일수"
            />
            <button>
              <FaSearch className="search-icon" />
            </button>
            <p className="notion">* 정해진 형식에따라 차량을 검색해주세요 *</p>
          </div>
        </div>
        <div className="main_article">
          <div className="users">
            <div className="users_info">
              <div className="users_img">
                <img src={Users}></img>
              </div>
              <div className="info">
                <p className="users_number">사원번호 </p>
              </div>
              <div className="logout">
                <button>logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
