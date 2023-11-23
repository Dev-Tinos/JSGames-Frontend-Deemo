import styless from "./scoreContainer.module.css"

function ScoreContainer({num, name, scroe}) {
    return(
        <div className={styless.scoreContainer}>
            <div className={styless.rankingPostion}>
                <p>{num}</p>
            </div>
            <div className={styless.nicknamePostion}>
                <p>{name}</p>
            </div>
            <div className={styless.profilePostion}>
                
            </div>
            <div className={styless.scorePostion}>
                <p>{scroe}</p>
            </div>
        </div>
    )
}

export default ScoreContainer