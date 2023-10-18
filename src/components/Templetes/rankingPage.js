import Navitage from "../Modules/navigate";
import RankingBox from "../Modules/rankingBox";
import styless from "./rankingPage.module.css"
import CategorySelection from "../Modules/categorySelection";

function RankingPage({userRanking, gameRanking}) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.contain_position}>
                    <div className={styless.ranking_box}>
                        <CategorySelection
                            category1="사용자 랭킹"
                            category2="게임 랭킹"
                            data1={
                                <RankingBox />
                            }
                            data2={gameRanking}
                            width="880"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RankingPage;