import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";
import Medal_list from "../Atoms/medal_list";

function RankingBox() {
    return (
        <div style={{
            display: "flex", alignItems: "center"
        }}>
            <RankingNum />
            <Nickname />
            <Medal_list />
        </div>
    )
}

export default RankingBox;