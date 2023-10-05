import Navitage from "../Modules/navigate";
import RankingBox from "../Modules/rankingBox";
import CategoryBox from "../Modules/categoryBox";
import styless from "./rankingPage.module.css"

function RankingPage() {

    return (
        <div>

            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.contain_position}>
                    <span>
                        <CategoryBox />
                    </span>
                    <div className={styless.ranking_box}>
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                        <RankingBox />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RankingPage;