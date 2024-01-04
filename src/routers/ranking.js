import { useState, useEffect } from "react";
import RankingPage from "../components/Templetes/rankingPage"
import RankingSkeltion from "../skeleton/rankingSkeltion";

function Ranking() {
    const [gameRanking, setgameRanking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userRanking, setUserRanking] = useState([]);
    const [majorRanking, setMajorRanking] = useState([]);

    useEffect(() => {
        const gameData = process.env.REACT_APP_GAME_RANKING;
        const TopData = process.env.REACT_APP_TOP100;
        const majorRank = process.env.REACT_APP_MAJOR_RANK;
        const page = 0;
        const size = 10;
        const fetchData = async () => {
            const response1 = await fetch(
                `${gameData}?page=${page}&size=${size}`
            );
            const response2 = await fetch(
                `${TopData}?page=${page}&size=${size}`
            ); 
            const response3 = await fetch(
                `${majorRank}`
            ); 
            const result1 = await response1.json();
            const result2 = await response2.json();
            const result3 = await response3.json();
            setgameRanking(result1);
            setUserRanking(result2);
            setMajorRanking(result3);

            setIsLoading(false);
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <div><RankingSkeltion /> </div>;
    }
    return (
        <RankingPage
            gameRanking={gameRanking}
            userRanking={userRanking.rankList}
            majorRanking={majorRanking.rankList}

        />
    )
}

export default Ranking;