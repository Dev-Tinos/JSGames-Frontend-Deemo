import { useState } from "react";
import styless from './signupPage.module.css'; // 수정된 부분
import Navitage from "../Modules/navigate";

function SignupPage() {
    const [formData, setFormData] = useState({
        code: "",
        email: "",
        password: "",
        nickname: "",
        major: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleCodeSend = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_CERTIFICATION, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: formData.email,
            })
        })
            .then(response => response.json())
            .catch(error => {
                console.error("Error:", error);
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.REACT_APP_SIGNUP, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(alert("회원가입이 완료되었습니다!"))
            .catch(error => {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <form onSubmit={handleSubmit} className={styless.signup_form}>
                    <div className={styless.form_group}>
                        <label className={styless.label}>이메일:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styless.input}
                        />
                        <button
                            onClick={handleCodeSend}
                            className={styless.submit_btn}
                            disabled={!formData.email}
                        >
                            코드 전송
                        </button>
                    </div>
                    <div className={styless.form_group}>
                        <label className={styless.label}>인증코드:</label>
                        <input
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                            required
                            className={styless.input}
                        />
                    </div>
                    <div className={styless.form_group}>
                        <label className={styless.label}>비밀번호:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={styless.input}
                        />
                    </div>
                    <div className={styless.form_group}>
                        <label className={styless.label}>닉네임:</label>
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleChange}
                            required
                            className={styless.input}
                        />
                    </div>
                    <div className={styless.form_group}>
                        <label className={styless.label}>전공:</label>
                        <input
                            type="text"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            required
                            className={styless.input}
                        />
                    </div>
                    <button type="submit" className={styless.submit_btn}>회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
