import RankingNum from "../Atoms/rankingNum";
import Nickname from "../Atoms/nickname";
import ProfileImg from "../Atoms/profileImg";

import styless from "./rankingBox.module.css"

function RankingBox({ num,nickname}) {
    return (
        <div style={{
            display: "flex", alignItems: "center",
            position: "relative",
            marginBottom: "16px"
        }}>
            <span className={styless.numPosition}>
                <RankingNum
                    num={num}
                />
            </span>
            <span className={styless.imgPosition}>
                <ProfileImg />
            </span>
            <span className={styless.nicknamePosition}>
                <Nickname 
                    nickname={nickname}
                />
            </span>

        </div>
    )
}

export default RankingBox;