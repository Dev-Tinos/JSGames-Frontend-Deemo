import styless from "./topPosition.module.css"
import ProfileImg from "../Atoms/profileImg";

function TopPosition({ first, second, third }) {
    return (
        <div className={styless.topContainer}>
            <div className={styless.rankgincontainer}>
                <ProfileImg />
                <div className={styless.topThird}>
                    <p>{third.gameScore} 점</p>
                </div>
            </div>
            <div className={styless.rankgincontainer}>
                <ProfileImg />
                <div className={styless.topFirst}>
                    <p>{first.gameScore} 점</p>
                </div>
            </div>
            <div className={styless.rankgincontainer}>
                <ProfileImg />
                <div className={styless.topSecond}>
                    <p>{second.gameScore} 점</p>
                </div>
            </div>
        </div>
    )
}

export default TopPosition;