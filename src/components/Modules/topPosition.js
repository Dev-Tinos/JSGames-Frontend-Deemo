import styless from "./topPosition.module.css"

function TopPosition({first, second, third}) {
    return (
        <div className={styless.topContainer}>
        <div className={styless.topThird}>
            <p>User ID: {third.userId}</p>
            <p>3등 점수: {third.gameScore}</p>
        </div>
        <div className={styless.topFirst}>
            <p>User ID: {first.userId}</p>
            <p>1등 점수: {first.gameScore}</p>
        </div>
        <div className={styless.topSecond}>
            <p>User ID: {second.userId}</p>
            <p>2등 점수: {second.gameScore}</p>
        </div>
    </div>
    )
}

export default TopPosition;