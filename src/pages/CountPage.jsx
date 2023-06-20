import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function CountPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;
  const totalPages = posts.length;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/alarm/detection_Count?page=${currentPage}&limit=${pageSize}`
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="car_section">
            <h2 className="subtitle">누적횟수초과</h2>

            <div>
              <table>
                <thead>
                  <tr className="car_names">
                    <th>이름</th>
                    <th>차량번호</th>
                    <th>초과횟수</th>
                  </tr>
                </thead>
                <tbody>
                  {posts &&
                    posts.map((post) => (
                      <tr key={post.id} className="car_list">
                        <td>{post.user}</td> {/*고객이름*/}
                        <td>{post.carNum}</td> {/*차량번호*/}
                        <td>{post.cnt}</td> {/*누적횟수*/}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="list_button">
              <button
                className="PreviousPage"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                <FaAngleLeft />
              </button>
              <button
                className="NextPage"
                onClick={handleNextPage}
                disabled={totalPages < 6}
              >
                <FaAngleRight />
              </button>
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
