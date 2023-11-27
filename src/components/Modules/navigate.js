import { useNavigate } from "react-router-dom"
import styless from "./navigate.module.css"
import LogoImg from "../Atoms/logoImg";
import React, { useState, useEffect } from 'react';
import loginImg from '../../img/icons8-login.png';
import logoutImg from '../../img/icons8-logout.png';



function Navitage() {
    const nav = useNavigate();
    const [logOut, setLogOut] = useState(false)
    const userId = localStorage.getItem('userId')
    const clickLogOut = () => {
        localStorage.removeItem('userId');
        setLogOut(true)
        nav('/')
    }
    useEffect(() => {
        if (logOut) {
            setLogOut(false);
        }
    }, [logOut]);

    return (
        <div className={styless.nav_container}>
            <div className={styless.logoPostion}>
                <LogoImg />
            </div>
            <div className={styless.list_container}>
                <ul>
                    <li onClick={() => nav('/')}>
                        홈
                    </li>
                    <li onClick={() => nav('/ranking')}>
                        랭킹
                    </li>
                    {userId ? (
                        <li onClick={() => nav('/myPage')}>
                            마이페이지
                        </li>
                    ) : (
                        <li onClick={() => nav('/signup')}>
                            회원가입
                        </li>
                    )}
                </ul>
                <div className={styless.loginPosition}>
                    {userId ? (
                        <span onClick={clickLogOut} className={styless.logOutHover}>
                            <img src={logoutImg} alt="로그아웃 아이콘"></img>
                        </span>
                    ) : (
                        <span onClick={() => nav('/login')} className={styless.logInHover}>
                            <img src={loginImg} alt="로그인 아이콘"></img>
                        </span>
                    )}
                </div>
            </div>

        </div>
    )
}
export default Navitage