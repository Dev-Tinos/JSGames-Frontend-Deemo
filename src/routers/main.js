import React, { useState, useEffect } from "react";
import MainPage from "../components/Templetes/mainPage";
import MainSkeleton from "../skeleton/mainSkeletion";

function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gameData = process.env.REACT_APP_GAME_CONTROLLER;
                const size = 8;
                const response = await fetch(`${gameData}?page=${page}&size=${size}`);
                const result = await response.json();
                setData((prevData) => [...prevData, ...result]);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [page]);

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
            setPage((prevPage) => prevPage + 1);
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
