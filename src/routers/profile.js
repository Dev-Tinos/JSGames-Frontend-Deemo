import MyPage from "../components/Templetes/myPage"
import { useEffect, useState } from "react";

function Profile() {
    const [userData, setuserData] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const myProfile = process.env.REACT_APP_USERID;
        const fetchData = async () => {
            const response = await fetch(
                `${myProfile}`
            );
            const result = await response.json();
            setuserData(result)
            setIsLoading(false);
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {userData && (
                <div>
                    <p>User ID: {userData.userId}</p>
                    <p>Nickname: {userData.nickname}</p>
                    <p>Email: {userData.email}</p>
                    <p>Password: {userData.password}</p>
                    <p>Major: {userData.major}</p>
                </div>
            )}
            <MyPage />

        </div>
    )
}
export default Profile;