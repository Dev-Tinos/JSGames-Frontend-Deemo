import styless from "./gameRankingBox.module.css"

function GameRankingBox({num, gameName, view}){
    return(
        <div className={styless.gameRankingBox}>
            <p className={styless.game_num}>{num}</p>
            <p className={styless.game_name}>{gameName}</p>
            <p className={styless.game_view}>{view}</p>
        </div>
    )
}

export default GameRankingBox