import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"
import Subheading from "../Atoms/subheading";
import TopPosition from "../Modules/topPosition";
import CommentBox from "../Modules/commentBox";
import GameTitle from "../Atoms/gameTitle";

function DetailPage({ gameResult, gameComment, gameName, description,gmaeSrc }) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <Navitage />
                <div className={styless.game_position}>
                    <GameTitle
                        gameName={gameName}
                    />
                    <PlayGame 
                        gmaeSrc={gmaeSrc}
                    />
                    <GameDescription
                        description={description}
                    />

                    <Subheading contents={"Top 3"} />

                    <div className={styless.topBox}>
                        {gameResult.map((result, index) => (
                            <div key={index}>
                                <p>Result ID: {result.resultId}</p>
                                <p>Game ID: {result.gameId}</p>
                                <p>User ID: {result.userId}</p>
                                <p>Game Score: {result.gameScore}</p>
                            </div>
                        ))}
                        <TopPosition />
                    </div>
                    <Subheading contents={"댓글"} />
                    <CommentBox />
                    <div className={styless.commentBox}>
                        {gameComment.map((result, index) => (
                            <div key={index}>
                                <p>Comment ID: {result.commentId}</p>
                                <p>Game ID: {result.gameId}</p>
                                <p>User ID: {result.userId}</p>
                                <p>Comment Content: {result.commentContent}</p>
                                <p>Comment Time: {result.dateTime}</p>
                            </div>
                        ))}
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