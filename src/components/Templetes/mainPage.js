import Navitage from "../Modules/navigate"
import styless from "./mainPage.module.css"
import Searchbox from "../Modules/searchbox"
import Banner from "../Atoms/banner"
import GameBox from "../Atoms/gameBox"

function MainPage({ gameData }) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className={styless.searchBox_position}>
                    <Searchbox />
                </div>
                <Navitage />
                <div className={styless.banner_position}>
                    <Banner />
                    <div className={styless.game_container}>
                        {gameData.map(gameData => (
                            <GameBox
                                gameId={gameData.gameId}
                                gameName={gameData.gameName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;