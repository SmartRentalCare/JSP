import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/main?page=${currentPage}&limit=${pageSize}`
        );
        setPosts(response.data);
        setTotalPages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [currentPage, pageSize]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
          <div>
            {currentPage > 1 && <button onClick={handlePrevPage}>이전</button>}
            {currentPage < totalPages && (
              <button onClick={handleNextPage}>다음</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
