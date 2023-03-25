import axios from "axios";
import React, { Component } from "react";

/*class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
    };
    this.accessTokenRequest = this.accessTokenRequest.bind(this);
    this.refreshTokenRequest = this.refreshTokenRequest.bind(this);
  }

  accessTokenRequest() {    // accessToken을 바탕으로 유저 정보 요청
    axios.get("https://localhost:3000/accesstokenrequest", {
      headers: { Authorization: `Bearer ${this.props.accessToken}`}, withCredentials:true }
    ).then(info=>{
      this.setState(info.data.data.userInfo)
    })
  }

  refreshTokenRequest() { // refreshToken을 바탕으로 유저 정보 및 새로운 accessToken 요청
    axios.get("https://localhost:3000/refreshtokenrequest", {
      withCredentials: true,
    })
    .then(info=>{
      const userInfo = info.data.data.userInfo
      const newToken = info.data.data.accessToken
      this.setState(userInfo)
      this.props.issueAccessToken(newToken)
      }
    )
  }

  render() {
    const { userID } = this.state;
    return (
      <div className='mypageContainer'>
        <div className='title'>Mypage</div>
        <hr />
        <br />
        <br />
        <div>
          안녕하세요. <span className='name'>{userId ? userId : "Guest"}</span>님! jwt 로그인이
          완료되었습니다.
        </div>
        <br />
        <br />
        <div className='item'>
          <span className='item'>나의 이메일: </span> {email}
        </div>
        <div className='item'>
          <span className='item'>나의 아이디 생성일: </span> {createdAt}
        </div>
        <br />
        <br />
        <div className='btnContainer'>
          <button className='tokenBtn red' onClick={this.accessTokenRequest}>
            access token request
          </button>
          <button className='tokenBtn navy' onClick={this.refreshTokenRequest}>
            refresh token request
          </button>
        </div>
      </div>
    );
  }
}

export default Mypage;*/