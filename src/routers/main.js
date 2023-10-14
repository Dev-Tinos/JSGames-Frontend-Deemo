import MainPage from "../components/Templetes/mainPage";
import { useEffect, useState } from "react";


function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const gameData = process.env.REACT_APP_GAME_CONTROLLER;
        const page = 0;
        const size = 3;
        const fetchData = async () => {
            const response = await fetch(
                `${gameData}?page=${page}&size=${size}`
            );
            const result = await response.json();
            setData(result)
            setIsLoading(false);
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>   
            <MainPage
                gameData={data}
            />
        </div>
    )
}

export default Main;