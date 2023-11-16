import styless from "./myRanking.module.css"

function MyRanking({ myRanking }) {
    return (
        <div>
            <div className={styless.informationBox}>
                <div className={styless.header}>
                    <span className={styless.gameName}>
                        게임 이름
                    </span>
                    <span className={styless.gameScore}>
                        점수
                    </span>
                </div>
                <p>{myRanking.map((game, index) => (
                    <div className={styless.dataContainer}>
                        <span className={styless.nameText}>
                            {game.gameId}

                        </span>
                        <span className={styless.scoreText}>
                            {game.gameScore}
                        </span>
                    </div>
                ))}</p>
            </div>
        </div>

    )
}

export default MyRanking

