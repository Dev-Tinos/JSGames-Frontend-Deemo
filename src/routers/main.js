import React, { useState, useEffect } from "react";
import MainPage from "../components/Templetes/mainPage";
import MainSkeleton from "../skeleton/mainSkeletion";

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const gameData = process.env.REACT_APP_GAME_CONTROLLER;
                const response = await fetch(`${gameData}?page=${page}&size=8&sort=LOG_COUNT`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(prevData => [...prevData, ...result]);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [page]);

    useEffect(() => {
        function handleScroll() {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;

            if (windowBottom >= docHeight - 10 && !loadingMore) {
                setLoadingMore(true);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadingMore]);

    useEffect(() => {
        if (loadingMore && !isLoading) {
            setPage(prevPage => prevPage + 1);
            setLoadingMore(false);
        }
    }, [loadingMore, isLoading]);

    if (isLoading) {
        return <MainSkeleton />;
    }

    return (
        <MainPage gameData={data} />
    );
}

export default Main;
