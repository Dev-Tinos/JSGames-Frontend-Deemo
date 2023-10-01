import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";
import MedalList from "../Atoms/medal_list";

function RankingBox() {
    return (
        <div style={{
            display: "flex", alignItems: "center"
        }}>
            <RankingNum />
            <Nickname />
            <MedalList />
        </div>
    )
}

export default RankingBox;