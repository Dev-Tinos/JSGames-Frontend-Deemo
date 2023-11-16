import MyPage from "../components/Templetes/myPage"
import { useEffect, useState } from "react";

function Profile() {
    const [userData, setuserData] = useState('');
    const [myRanking, setMyRanking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const myProfile = process.env.REACT_APP_USERID;
        const myRanking = process.env.REACT_APP_MYRANKING;
        const userId = localStorage.getItem('userId');
        const page = 0;
        const size = 5;
        const fetchData = async () => {
            const response1 = await fetch(
                `${myProfile}/${userId}`
            );
            const response2 = await fetch(
                `${myRanking}/${userId}?page=${page}&size=${size}`
            );
            const result1 = await response1.json();
            const result2 = await response2.json();
            setuserData(result1)
            setMyRanking(result2)
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
                myRanking={myRanking}
            />
        </div>
    )
}
export default Profile;