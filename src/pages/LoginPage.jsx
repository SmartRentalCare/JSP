import  { useState } from "react";
import axios from 'axios';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [isUser, setIsUser] = useState(false);

    const [pwd, setPwd] = useState('');
    const [isPwd, setIsPwd] = useState(false);

    const JWT_EXPIRY_TIME = 24 * 3600 * 1000;
    
    const handleUser = (e) => {
        setUser(e.target.value);
        const regex = /[^0-9]/g;
        if (!regex.test(e.target.value)) {
            setIsUser(false);
        } else {
            setIsUser(true);
        }
    }
    const handlePwd = (e) => {
        setPwd(e.target.value);
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!regex.test(e.target.value)) {
            setIsPwd(false);
        } else {
            setIsPwd(true);
        }
    }
    const onClickLogin = () => {
        axios
            .post('http://localhost:8080/member/login', {
                user: '111111', //회원번호이름
                pwd: '222222', //비밀번호이름
            })
            .then(response => {
                console.log("성공");
                console.log(response.data);
                
            })
            .catch(error => {
                console.log(error);
                alert("아이디 또는 패스워드를 확인해주세요");
            })

    }
    const onSilentRefresh = () => {
        axios.post('http://localhost:8080/member/login/silent-refresh')
            .then(onLoginSucess)
            .catch(error => {
                console.log("실패");
            })
    }

    const onLoginSucess = response => {
        const {accessToken}=response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setTimeout(onSilentRefresh, JWT_EXPIRY_TIME = 24 * 3600 - 60000);
    }



    return (
        <div className="LoginPage">
            <p>스마트렌터케어</p>
            <div className="loginFrom">
                <div className="inputUser">
                    <input type="text" onChange={handleUser} required={true} maxLength="6" value={user} placeholder="회원번호"/>
                </div>
                <div className="inputMessage">
                    {!isUser && (user.length < 6 && user.length > 0) && (
                        <div>숫자(6자리)</div>
                    )}
                </div>
                <div className="inputPwd">
                    <input type="password" onChange={handlePwd} required={true} value={pwd} placeholder="비밀번호"/>
                </div>
                <div className="inputMessage">
                    {!isPwd && pwd.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자리이상 입력</div>
                    )}
                </div>
                <div className="button">
                    <button type="button"  onClick={onClickLogin}>로그인</button>
                </div>
            </div>
            
           
           
        </div>
    )
} 