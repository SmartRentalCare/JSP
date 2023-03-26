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

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, userPW }),
    })

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      alert("로그인 성공");
      const protectedResourceResponse = await fetch('/login', {
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
    <div>
      <h2 className='Title'>이미지</h2>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h3 className="SubTitle">스마트렌터케어</h3>
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
          <button type="submit">로그인</button>
        </div>
        
    </form>
    </div>
    
  )
}
