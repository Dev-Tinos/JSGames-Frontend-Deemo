import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";

function RankingBox() {
    return (
        <div style={{
            display: "flex", alignItems: "center"
        }}>
            <RankingNum />
            <Nickname />
        </div>
    )
}

export default RankingBox;