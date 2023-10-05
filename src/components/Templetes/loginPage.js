import React, { useState } from 'react';
import styless from "./loginPage.module.css"


function LoginPage({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styless.login_input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className={styless.login_button}>
                    로그인
                </button>
            </form>
        </div>

    );

}

export default LoginPage;