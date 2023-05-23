import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/main")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      </div>
    </div>
  );
}
