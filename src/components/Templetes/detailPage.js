import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"
import Subheading from "../Atoms/subheading";
import TopPosition from "../Modules/topPosition";
import CommentBox from "../Modules/commentBox";
import GameTitle from "../Atoms/gameTitle";

function DetailPage({gameName, description}) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.game_position}>
                    <GameTitle 
                    gameName={gameName}
                    />
                    <PlayGame />
                    <GameDescription 
                        description={description}
                    />

                    <Subheading contents={"Top 3"} />

                    <div className={styless.topBox}>
                        <TopPosition />
                    </div>
                    <Subheading contents={"댓글"} />
                    <CommentBox />
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

                </div>
            </div>
        </div>
    )
}

export default DetailPage;