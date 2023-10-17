import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css"

function RankingPage({ information }) {

    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.profileBox}>
                    <div>
                        <p>User ID: {information.userId}</p>
                        <p>Nickname: {information.nickname}</p>
                        <p>Email: {information.email}</p>
                        <p>Password: {information.password}</p>
                        <p>Major: {information.major}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RankingPage;



