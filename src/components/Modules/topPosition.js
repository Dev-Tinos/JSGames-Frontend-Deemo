import styless from "./topPosition.module.css"

function TopPosition({first, second, third}) {
    return (
        <div className={styless.topContainer}>
        <div className={styless.topThird}>
            <p>User ID: {third.userId}</p>
            <p>Game Score: {third.gameScore}</p>
        </div>
        <div className={styless.topFirst}>
            <p>User ID: {first.userId}</p>
            <p>Game Score: {first.gameScore}</p>
        </div>
        <div className={styless.topSecond}>
            <p>User ID: {second.userId}</p>
            <p>Game Score: {second.gameScore}</p>
        </div>
    </div>
    )
}

export default TopPosition;