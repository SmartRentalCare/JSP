import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "김채영",
      carNum: "1234",
      carInfo: "white",
      date: "20230103",
    },
    {
      id: 2,
      username: "김연정",
      carNum: "1234",
      carInfo: "white",
      date: "20230103",
    },
    {
      id: 2,
      username: "김연정",
      carNum: "1234",
      carInfo: "white",
      date: "20230103",
    },
    {
      id: 2,
      username: "김연정",
      carNum: "1234",
      carInfo: "white",
      date: "20230103",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db_data = await axios("http://localhost:3001/posts");
        setPosts(db_data.data);
        console.log(db_data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="card_list">
        <div className="card">
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="item item_1">
                <div className="info">
                  <p>{post.username}</p>
                  <p>{post.carNum}</p>
                  <p>{post.carInfo}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
