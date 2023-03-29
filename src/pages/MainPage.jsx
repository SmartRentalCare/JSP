import { useHistory } from 'react-router-dom';
import React from "react";

export default function MainPage() {
  const handleLogout = () => {
    axios.get('auth/logout').then(response => {
      console.log(response.data)
    })
    localStorage.removeItem('userID');
    localStorage.removeItem('userPW');

    const history = useHistory();
    history.push('/');

  }

  return (
    <div>
      <h2>메인 페이지</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  )
}