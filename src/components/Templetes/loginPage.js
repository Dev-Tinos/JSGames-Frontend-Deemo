import React, { useState } from 'react';
import styless from "./loginPage.module.css"


function LoginPage({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(response => response.json())
            .catch(error => {
                console.error("Error:", error);
            });
    }
    const handleInputClick = (e) => {
        e.stopPropagation();
    }
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }
    if (!isOpen) return null;
    return (
        <div className={styless.modal_overlay} onClick={onClose}>
            <form className={styless.login_form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    className={styless.login_input}
                    value={email}
                    onChange={inputEmail}
                    onClick={handleInputClick}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styless.login_input}
                    value={password}
                    onChange={inputPassword}
                    onClick={handleInputClick}
                />
                <button type="submit" className={styless.login_button} onClick={handleInputClick}
                >
                    로그인
                </button>
                
            </form>
        </div>

    );

}

export default LoginPage;