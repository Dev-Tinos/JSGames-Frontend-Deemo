import styless from "./topPosition.module.css"
import ScoreContainer from "./scoreContainer";


function TopPosition({ gameResult, userId, myScore }) {

    return (
        <div className={styless.topContainer}>
            {userId ? <ScoreContainer
                num={"내 점수"}
                style={{
                    boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.05), 0 0 10px 3px rgba(255, 166, 102, 0.5)'
                }}
            // name={myScore.gameId}
            // scroe={myScore.gameScore}
            />
                : <ScoreContainer
                    num={"NULL"}
                    name={"NULL"}
                    scroe={"NULL"}
                />}

            {gameResult.map((result, index) => (
                <ScoreContainer
                    num={index + 1}
                    name={result.user.nickname}
                    scroe={result.gameScore}
                />
            ))}
        </div>
    )
}

export default TopPosition;