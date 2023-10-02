import Navitage from "../Modules/navigate";
import RankingBox from "../Modules/rankingBox";
import CategoryBox from "../Modules/categoryBox";

function RankingPage() {

    return (
        <div>

            <div style={{ display: "flex" }}>
                <Navitage />
                <div>
                    <CategoryBox />
                    <RankingBox />
                </div>
            </div>
        </div>
    )
}
export default RankingPage;