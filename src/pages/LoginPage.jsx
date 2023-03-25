import React, { useState } from 'react';

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
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userID">userID:</label>
        <input type="text" id="userID" value={userID} onChange={handleuserID} />
      </div>
      <div>
        <label htmlFor="userPW">userPW:</label>
        <input type="password" id="userPW" value={userPW} onChange={handleuserPW} />
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}
