import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "../components/Templetes/detailPage"

function Detail() {
    const { gameId } = useParams(); // URL의 gameId 파라미터를 가져옵니다.
    const [gameData, setGameData] = useState('');
    const [gameResult, setGameResult] = useState([]);
    const [gameComment, setgameComment] = useState([]);


    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const gameData_json = process.env.REACT_APP_GAME_DETAIL;
        const gameResult_json = process.env.REACT_APP_GAMEID_RESULT;
        const gameComment_json = process.env.REACT_APP_GAMEID_COMMENT;
        const page = 0;
        const size = 3;
        const fetchData = async () => {
            const response1 = await fetch(
                `${gameData_json}/${gameId}`
            );
            const response2 = await fetch(
                `${gameResult_json}/${gameId}?page=${page}&size=${size}`
            );
            const response3 = await fetch(
                `${gameComment_json}/${gameId}?page=${page}&size=${size}`
            );
            const result1 = await response1.json();
            const result2 = await response2.json();
            const result3 = await response3.json();

            setGameData(result1)
            setGameResult(result2)
            setgameComment(result3)

            setIsLoading(false);
        }
        fetchData();
    }, [gameId]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {gameResult.map((result, index) => (
                <div key={index}>
                    <p>Result ID: {result.resultId}</p>
                    <p>Game ID: {result.gameId}</p>
                    <p>User ID: {result.userId}</p>
                    <p>Game Score: {result.gameScore}</p>
                </div>
            ))}
            {gameComment.map((result, index) => (
                <div key={index}>
                    <p>Comment ID: {result.commentId}</p>
                    <p>Game ID: {result.gameId}</p>
                    <p>User ID: {result.userId}</p>
                    <p>Comment Content: {result.commentContent}</p>
                    <p>Comment Time: {result.dateTime}</p>
                </div>
            ))}
            <DetailPage
                gameName={gameData.gameName}
                description={gameData.description}
            />
        </div>
    )

}

export default Detail;