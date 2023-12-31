import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPage from "../components/Templetes/detailPage"
import DetailSkeleton from "../skeleton/detailSkeltion";

function Detail() {
    const { gameId } = useParams(); // URL의 gameId 파라미터를 가져옵니다.
    const [gameData, setGameData] = useState('');
    const [gameResult, setGameResult] = useState([]);
    const [gameComment, setgameComment] = useState([]);
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
    const [myReview, setMyReview] = useState()




    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        const gameData_json = process.env.REACT_APP_GAME_DETAIL;
        const gameResult_json = process.env.REACT_APP_GAMEID_RESULT;
        const gameComment_json = process.env.REACT_APP_GAMEID_COMMENT;
        const myReview_json = process.env.REACT_APP_MYREVIEW;


        const size = 3;
        const fetchData = async () => {
            const response1 = await fetch(
                `${gameData_json}/${gameId}`
            );
            const response2 = await fetch(
                `${gameResult_json}/${gameId}?page=0&size=${size}`
            );
            const response3 = await fetch(
                `${gameComment_json}/${gameId}?page=0&size=${size}`
            );
            if(myReview_json){
                const response4 =await fetch(
                    `${myReview_json}/${gameId}/user/${userId}`
                );
                if(!response4.ok){
                    setMyReview(null);
                }
                else{
                    const result4 = await response4.json();
                    setMyReview(result4);
                }
            }
            
            const result1 = await response1.json();
            const result2 = await response2.json();
            const result3 = await response3.json();

            setGameData(result1);
            setGameResult(result2);
            setgameComment(result3);
            setIsLoading(false);
        }
        fetchData();

    }, [gameId, userId]);
    useEffect(() => {
        if (loadingMore) {
            const gameComment_json = process.env.REACT_APP_GAMEID_COMMENT;
            const fetchData = async () => {
                const response3 = await fetch(
                    `${gameComment_json}/${gameId}?page=${page}&size=4&sort=RECENT`
                );
                const result3 = await response3.json();
                setgameComment(prevData => [...prevData, ...result3]);
                setLoadingMore(false);
            }
            fetchData();
        }

    }, [page, gameId, loadingMore]);

    const refreshComments = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_GAMEID_COMMENT}/${gameId}?page=0&size=10`);
            const result = await response.json();
            setgameComment(result);
        } catch (error) {
            console.error("Error refreshing comments:", error);
        }
        
    };

    const handleCommentScroll = () => {
        const windowHeight =
            "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight - 10) {
            setPage((prevSize) => prevSize + 1);
            setLoadingMore(true)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleCommentScroll);
        return () => {
            window.removeEventListener("scroll", handleCommentScroll);
        };
    }, []);

    if (isLoading) {
        return <div><DetailSkeleton /></div>;
    }

    return (
        <div>
            <DetailPage
                gameResult={gameResult}
                gameComment={gameComment}
                gameName={gameData.gameName}
                description={gameData.description}
                gmaeSrc={gameData.gameUrl}
                refreshComments={refreshComments}
                gameId={gameId}
                userId={userId}
                myReview={myReview}
            />
        </div>
    )

}

export default Detail;