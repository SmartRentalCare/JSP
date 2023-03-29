import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import "../style.css"

export default function LoginPage() {
  const [userID, setUserID] = useState('');
  const [userPW, setUSerPW] = useState('');

  const handleuserID = (event) => {
    setUserID(event.target.value);
  }

  const handleuserPW = (event) => {
    setUSerPW(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('auth/sign/in', {
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

  }

  return (
    <body>
      <div className="LoginPage">
        <form className="LoginForm" onSubmit={handleSubmit}>
          <h1 className="SubTitle">SmartLentalCare
          <span>스마트렌터케어</span></h1>
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
            <button type="submit">Login</button>
          </div>
          
        </form>
      </div>
    </body>
    
    
  )
}
