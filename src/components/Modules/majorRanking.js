import styless from "./majorRanking.module.css"

function MajorRanking({num, major, rankWeight}){
    return(
        <div className={styless.majorRankingBox}>
            <p className={styless.major_num}>{num}</p>
            <p className={styless.major_name}>{major}</p>
            <p className={styless.major_weight}>{rankWeight}</p>
        </div>
    )
}

export default MajorRanking