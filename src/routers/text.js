import { useEffect, useState } from "react";


function Test() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://54.210.228.54:8080/`
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