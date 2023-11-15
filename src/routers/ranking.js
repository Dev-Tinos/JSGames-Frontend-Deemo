import { useState, useEffect } from "react";
import RankingPage from "../components/Templetes/rankingPage"

function Ranking() {
    const [gameRanking, setgameRanking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userRanking, setUserRanking] = useState([]);

    useEffect(() => {
        const gameData = process.env.REACT_APP_GAME_RANKING;
        const TopData = process.env.REACT_APP_TOP100;
        const page = 0;
        const size = 3;
        const fetchData = async () => {
            const response1 = await fetch(
                `${gameData}?page=${page}&size=${size}`
            );
            const response2 = await fetch(
                `${TopData}?page=${page}&size=${size}`
            ); 
            const result1 = await response1.json();
            const result2 = await response2.json();
            setgameRanking(result1);
            setUserRanking(result2);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <RankingPage
            gameRanking={gameRanking}
            userRanking={userRanking}

        />
    )
}

export default Ranking;