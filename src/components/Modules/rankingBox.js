import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";
import MedalList from "../Atoms/medal_list";

function RankingBox() {
    return (
        <div style={{
            display: "flex", alignItems: "center",
            width: "1006px",
            height: "686px",
            backgroundColor: "#FAFAFA",
            borderRadius: "15px",
        }}>
            <RankingNum />
            <Nickname />
            <MedalList />
        </div>
    )
}

export default RankingBox;