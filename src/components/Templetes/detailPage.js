import GoBack from "../Atoms/goBack";
import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"

function DetailPage() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.game_position}>
                    <PlayGame />
                    <GameDescription />
                    <Comment /> 
                </div>
            </div>
        </div>
    )
}

export default DetailPage;