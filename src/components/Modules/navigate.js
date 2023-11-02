import { useNavigate } from "react-router-dom"
import styless from "./navigate.module.css"
import LogoImg from "../Atoms/logoImg";
import React, { useState } from 'react';
import LoginPage from "../Templetes/loginPage";

function Navitage() {
    const nav = useNavigate();
    const [isLoginOpen, setLoginOpen] = useState(false);
    const userId = localStorage.getItem('userId')
    return (
        <div className={styless.nav_container}>

            <div className={styless.logoPostion}>
                <LogoImg />
            </div>
            <div className={styless.list_container}>
                <p>List</p>
                <ul>
                    <li onClick={() => nav('/')}>
                        홈
                    </li>
                    <li onClick={() => nav('/ranking')}>
                        랭킹
                    </li>
                    <li onClick={() => nav('/signup')}>
                        회원가입
                    </li>
                    {userId ? (
                        <li onClick={() => nav('/myPage')}>
                            마이페이지
                        </li>
                    ) : (
                        <li onClick={() => setLoginOpen(true)}>
                            로그인
                        </li>
                    )}

                </ul>
            </div>
            <LoginPage isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        </div>
    )
}
export default Navitage