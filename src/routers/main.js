import React, { useState, useEffect } from "react";
import MainPage from "../components/Templetes/mainPage";
import MainSkeleton from "../skeleton/mainSkeletion";

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [size, setSize] = useState(4);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameData = process.env.REACT_APP_GAME_CONTROLLER;
                const response = await fetch(`${gameData}?page=0&size=${size}`);
                const result = await response.json();
                setData(result); // 누적되지 않도록 변경
                setIsLoading(false);
                setLoadingMore(false);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (!loadingMore) {
            fetchData();
            setLoadingMore(true);
        }    
    }, [size]);

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

        if (windowBottom >= docHeight - 10) {
            setSize((prevSize) => prevSize + 4);
        }
        
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
