import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css";
import MyProfile from "../Modules/myprofile";
// import MyRanking from "../Modules/myRanking";

function RankingPage({ information, myList }) {


    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className={styless.nav_container}>
                    <Navitage />
                </div>
                <div className={styless.profileBox}>
                    <div>
                        <MyProfile userData={information} />
                    </div>
                    <h2 className={styless.game_record_title}>Play List</h2>
                    <div className={styless.game_record}>
                        <div>
                            <span>게임 이름</span>
                            {console.log(myList)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingPage;
