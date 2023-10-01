import Navitage from "../Modules/navigate"
import styless from "./mainPage.module.css"
import Searchbox from "../Modules/searchbox"
import Banner from "../Atoms/banner"
import GameBox from "../Atoms/gameBox"

function MainPage() {
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
                    <GameBox className="gameBox_item" />
                    <GameBox className="gameBox_item" />
                    <GameBox className="gameBox_item" />
                    <GameBox className="gameBox_item" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;