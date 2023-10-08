import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";
import StatusMsg from "../Atoms/statusMsg";
import ProfileImg from "../Atoms/profileImg";

import styless from "./rankingBox.module.css"

function RankingBox() {
    return (
        <div style={{
            display: "flex", alignItems: "center",
            position: "relative",
            marginBottom: "16px"
        }}>
            <RankingNum />
            <span className={styless.imgPosition}>
                <ProfileImg />
            </span>
            <span className={styless.nicknamePosition}>
                <Nickname />
            </span>
            <span className={styless.statusPosition}>
                <StatusMsg />
            </span>
        </div>
    )
}

export default RankingBox;