import styless from "./scoreContainer.module.css"

function ScoreContainer({ num, name, scroe, style }) {
    return (
        <div className={styless.scoreContainer}
            style={style}>
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