import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import LogoutButton from "./Logoutbutton";
import axios from "axios";
import Click from "./Click";

export default function AlarmPage() {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);
  const pageSize = 9;
  const indexOfLastItem = currentPage * totalPages;
  const indexOfFirstItem = indexOfLastItem - totalPages;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/alarm/detection?page=${currentPage}&limit=${pageSize}`
        );
        setPosts(response.data);
        setTotalPages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    const fetchTotalPostsCount = async () => {
      try {
        const response = await axios.get("http://localhost:3001/list/count");
        const totalPostsCount = response.data;
        const totalPages = Math.ceil(totalPostsCount / pageSize);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalPostsCount();
  }, [pageSize]);
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="car_section">
            <h2 className="subtitle">알림</h2>
            <div>
              {currentItems &&
                currentItems.map((post) => (
                  <div key={post.id} className="car_list">
                    <div className="car_element">
                      <p>{post.user}</p> {/*고객이름*/}
                      <p>{post.carNum}</p> {/*차량번호*/}
                      <p>{post.detection}</p> {/*알림발생날짜*/}
                      <p>{post.kind}</p> {/*알림종류*/}
                      <p>{post.density}</p> {/*농도*/}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous Page
              </button>
              <button
                onClick={handleNextPage}
                disabled={indexOfLastItem >= posts.length}
              >
                Next Page
              </button>
            </div>
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
