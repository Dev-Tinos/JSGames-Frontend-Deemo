import styless from "./gameRankingBox.module.css"

function GameRankingBox({num, gameName, view}){
    return(
        <div className={styless.gameRankingBox}>
            <span className={styless.game_num}>{num}</span>
            <span className={styless.game_name}>{gameName}</span>
            <span className={styless.game_view}>{view}</span>
        </div>
    )
}

export default GameRankingBox