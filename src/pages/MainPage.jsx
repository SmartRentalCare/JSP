import React from "react";
import Header from "../layout/header"
import Main from "../layout/main"
import Footer from "../layout/footer"
import LogoutButton from '../components/Logoutbutton';
export default function MainPage() {

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <LogoutButton/>
    </div>
  )
}