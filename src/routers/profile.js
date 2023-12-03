import MyPage from "../components/Templetes/myPage"
import { useEffect, useState } from "react";
import ProfileSkeltion from "../skeleton/profileSkeltion";

function Profile() {
    const [userData, setuserData] = useState('');
    const [myList, setMyList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const myProfile = process.env.REACT_APP_USERID;
        const myList = process.env.REACT_APP_MYGAMELIST;
        const userId = localStorage.getItem('userId');
        const page = 0;
        const size = 5;
        const fetchData = async () => {
            const response1 = await fetch(
                `${myProfile}/${userId}`
            );
            const response2 = await fetch(
                `${myList}/${userId}?page=${page}&size=${size}`
            );
            const result1 = await response1.json();
            const result2 = await response2.json();
            setuserData(result1)
            setMyList(result2)
            setIsLoading(false);
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <div><ProfileSkeltion /> </div>;
    }
    return (
        <div>
            <MyPage
                information={userData}
                myList={myList}
            />
        </div>
    )
}
export default Profile;