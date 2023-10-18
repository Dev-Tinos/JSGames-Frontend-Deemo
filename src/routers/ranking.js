import { useState, useEffect } from "react";
import RankingPage from "../components/Templetes/rankingPage"

function Ranking() {
    const [gameRanking, setgameRanking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const gameData = process.env.REACT_APP_GAME_RANKING;
        const page = 0;
        const size = 3;
        const fetchData = async () => {
            const response = await fetch(
                `${gameData}?page=${page}&size=${size}`
            );
            const result = await response.json();
            setgameRanking(result)
            console.log(result)
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
        />
    )
}

export default Ranking;