import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
//import { FaSearch } from "react-icons/fa";
import LogoutButton from "../components/Logoutbutton";
import axios from "axios";
import List from "../components/List";

//import { useSelector } from "react-redux";
export default function MainPage() {
  const [user, setUser] = useState("");
  const [carInfo, setCarInfo] = useState("");

  {
    /*useEffect(() => {
    axios
      .get("http://localhost:3001/list/carInfo")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/list/carInfo", { user, carInfo })
      .then((response) => {
        console.log(response.data);
        setUser("");
        setCarInfo("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //const userID = useSelector((state) => state.userID);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main_section">
          <div className="bord">
            <h1>차량등록</h1>
            <form onSubmit={handleSubmit}>
              <div className="id">
                <span>회원</span>
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <span>차량</span>
                <input
                  type="text"
                  value={carInfo}
                  onChange={(e) => setCarInfo(e.target.value)}
                />
              </div>
              <div className="bord_button">
                <button type="submit">등록</button>
              </div>
            </form>
            {/*<ul>
              {posts.map((post) => (
                <li key={post.user}>
                  <h2>{post.user}</h2>
                  <p>{post.carInfo}</p>
                </li>
              ))}
            </ul>*/}
          </div>
          <div className="list">
            <List />
          </div>
          {/*<div className="search_box">
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
        */}
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
      <Footer />
    </div>
  );
}
