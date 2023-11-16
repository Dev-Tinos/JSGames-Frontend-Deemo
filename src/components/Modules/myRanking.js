import styless from "./myRanking.module.css"

function MyRanking(){
    return(
        <div>
            <div className={styless.informationBox}>
                <div className={styless.header}>
                    <span>
                        게임 이름
                    </span>
                    <span>
                        점수
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MyRanking

