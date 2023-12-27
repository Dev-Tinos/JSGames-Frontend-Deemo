import React, { useState, useEffect } from "react";
import MainPage from "../components/Templetes/mainPage";
import MainSkeleton from "../skeleton/mainSkeletion";

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [size, setSize] = useState(12);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameData = process.env.REACT_APP_GAME_CONTROLLER;
                const response = await fetch(`${gameData}?page=0&size=${size}`);
                const result = await response.json();
                setData(result)
                setIsLoading(false);
                setLoadingMore(false);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        const handleScroll = () => {
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

            // 스크롤이 아래로 내려갔을 때 한 번만 호출
            if (windowBottom >= docHeight - 10 && !loadingMore) {
                setLoadingMore(true);
                setSize((prevSize) => prevSize + 4);
            }
        };

        window.addEventListener("scroll", handleScroll);

        if (loadingMore) {
            fetchData();
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [size, loadingMore]);

    if (isLoading) {
        return <div><MainSkeleton /></div>;
    }

    return (
        <div>
            <MainPage gameData={data} />
        </div>
    );
}

export default Main;
