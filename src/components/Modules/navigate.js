import { useNavigate } from "react-router-dom"
import styless from "./navigate.module.css"
import LogoImg from "../Atoms/logoImg";
import React, { useState } from 'react';
import LoginPage from "../Templetes/loginPage";

function Navitage() {
    const nav = useNavigate();
    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <div className={styless.nav_container}>

            <div>
                <LogoImg />
            </div>
            <div className={styless.list_container}>
                <p>List</p>
                <ul>
                    <li onClick={() => nav('/')}>
                        Main
                    </li>
                    <li onClick={() => nav('/ranking')}>
                        Ranking
                    </li>
                    <li onClick={() => nav('/myPage')}>
                        마이페이지
                    </li>
                    <li onClick={() => setLoginOpen(true)}>
                        로그인
                    </li>
                </ul>
            </div>
            <LoginPage isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        </div>
    )
}
export default Navitage