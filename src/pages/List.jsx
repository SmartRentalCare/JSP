import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
export default function List() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;
  const totalPages = posts.length;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/main?page=${currentPage}&limit=${pageSize}`
        );
        setPosts(response.data);
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
      <div className="card_list">
        <div className="card">
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="item item_1">
                <div className="info">
                  <p>{post.user}</p>
                  {/*고객이름*/}
                  <p>{post.carNum}</p>
                  {/*차량번호*/}
                  <p>{post.rentDay}</p>
                  {/*차량 빌린 날짜*/}
                </div>
              </div>
            ))}
        </div>

        <div>
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
            disabled={totalPages < 12}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
