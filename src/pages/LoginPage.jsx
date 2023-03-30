import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import "../style.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [userID, setUserID] = useState('');
  const [userPW, setUSerPW] = useState('');

  const handleuserID = (event) => {
    setUserID(event.target.value);
  }

  const handleuserPW = (event) => {
    setUSerPW(event.target.value);
  }
  const handleSubmit = async () => {
    axios
        .post('http://localhost:3001/auth/sign/in', {
          userID:userID,
          userPW:userPW,
        })
        .then (response => {
          console.log("success");
          const{accessToken} = response.data;
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          localStorage.setItem = ("accessToken", accessToken);
          console.log(accessToken);
          return true;
          
        })
        .catch(error => {
          console.log(error);
          return false;
        })

  }

  
  /*const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, userPW }),
    })

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      alert("로그인 성공");
      const protectedResourceResponse = await fetch('auth/receive_check',{
        headers: { Authorization: `Bearer ${data.access_token}` },
      })
  
      if (protectedResourceResponse.ok) {
        const protectedResourceData = await protectedResourceResponse.json();
        console.log(protectedResourceData);
      }
    }
    else {
      console.log("로그인 실패")
      alert("로그인 실패");
    }

  }*/

  return (
      <div className="LoginPage">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <h1 className="SubTitle">LentalCare
          <span>렌터케어</span></h1>
          <div className="Input">
            <div className="InputId">
              <FaUser className='icon'/>
              <input type="text" id="userID" value={userID} onChange={handleuserID} />
            </div>
            <div className="InputId">
              <FaLock className='icon' />
              <input type="password" id="userPW" value={userPW} onChange={handleuserPW} />
            </div>
          
          </div>
          <div className='button'>
            <Link to ={"/main"}><button type="submit"onClick={handleSubmit}>Login</button></Link>
          </div>
          
        </form>
      </div>
    
    
  )
}
