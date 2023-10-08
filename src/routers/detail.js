import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "../components/Templetes/detailPage"

function Detail() {
    const { gameId } = useParams(); // URL의 gameId 파라미터를 가져옵니다.
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const gameData = process.env.REACT_APP_GAME_DETAIL;

        const fetchData = async () => {
            const response = await fetch(
                `${gameData}/${gameId}`
            );
            const result = await response.json();
            setData(result)
            setIsLoading(false);
        }
        fetchData();
    }, [gameId]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <DetailPage
                gameName={data.gameName}
                description={data.description}
            />
        </div>
    )

}

export default Detail;