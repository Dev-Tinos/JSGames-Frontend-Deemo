import React, { useState, useEffect } from "react";
import MainPage from "../components/Templetes/mainPage";
import MainSkeleton from "../skeleton/mainSkeletion";

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);

    const fetchData = async () => {
        try {
            const gameData = process.env.REACT_APP_GAME_CONTROLLER;
            const response = await fetch(`${gameData}?page=${page}&size=8&sort=LOG_COUNT`);
            const result = await response.json();
            setData(prevData => [...prevData, ...result]);
            setIsLoading(false);
            setLoadingMore(false); // 데이터 로딩이 완료되었음을 표시
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(); // 컴포넌트 마운트 시 초기 데이터 로드
    }, []);

    const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight - 10 && !loadingMore) {
            setLoadingMore(true);
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loadingMore]);

    useEffect(() => {
        if (loadingMore && !isLoading) {
            fetchData();
        }
    }, [page, loadingMore]);

    if (isLoading) {
        return <MainSkeleton />;
    }

    return (
        <MainPage gameData={data} />
    );
}

export default Main;
