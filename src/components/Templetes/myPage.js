import Navitage from "../Modules/navigate";
import styless from "./myPage.module.css";
import MyProfile from "../Modules/myprofile";
import GameRankingBox from "../Modules/gameRankingBox"
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
                            <div className={styless.list_box}>
                                <span className={styless.ranking_text}>정보</span>
                                <span className={styless.game_name}>게임 이름</span>
                                <span className={styless.game_category}>게임 유형</span>
                            </div>
                            <p>{myList.map((game, index) => (
                                <GameRankingBox
                                    num={index + 1}
                                    gameName={game.gameName}
                                    view={game.scoreType}
                                />
                            ))}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingPage;
