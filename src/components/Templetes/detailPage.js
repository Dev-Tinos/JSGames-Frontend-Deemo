import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"
import Subheading from "../Atoms/subheading";
import TopPosition from "../Modules/topPosition";

function DetailPage() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.game_position}>
                    <PlayGame />
                    <GameDescription />

                    <Subheading contents={"댓글"} />
                    <div className={styless.commentBox}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                    <Subheading contents={"Top 3"} />

                    <div className={styless.topBox}>
                        <TopPosition />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;