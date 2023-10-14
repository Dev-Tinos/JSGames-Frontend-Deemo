import { useState } from "react";
import styles from './signupPage.module.css'; // 수정된 부분
import Navitage from "../Modules/navigate";

function SignupPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nickname: "",
        major: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_SIGNUP_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("회원가입이 완료되었습니다!");
                } else {
                    alert("회원가입 실패. 다시 시도해주세요.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />

                <form onSubmit={handleSubmit} className={styles['signup-form']}>
                    <div className={styles['form-group']}>
                        <label className={styles.label}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label className={styles.label}>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label className={styles.label}>Nickname:</label>
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label className={styles.label}>Major:</label>
                        <input
                            type="text"
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                    <button type="submit" className={`${styles['submit-btn']} ${styles['custom-btn']}`}>회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
