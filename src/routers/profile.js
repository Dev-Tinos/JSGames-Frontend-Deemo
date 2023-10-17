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
            <MyPage
                information={userData}
            />
        </div>
    )
}
export default Profile;