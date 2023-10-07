import { useEffect, useState } from "react";

function Test() {
    const [data, setData] = useState("");

    useEffect(() => {
        const test = process.env.REACT_APP_health_controller;
        const fetchData = async () => {
            const response = await fetch(
                `${test}`
            );
            const result = await response.text();
            setData(result);
        }
        fetchData();
    }, []);
    return (
        <div>
            {data}
        </div>
    )
}

export default Test