import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"
import Subheading from "../Atoms/subheading";
import TopPosition from "../Modules/topPosition";
import CommentBox from "../Modules/commentBox";
import GameTitle from "../Atoms/gameTitle";

function DetailPage({ gameResult, gameId, gameComment, gameName, description, gmaeSrc }) {
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
                        <TopPosition
                            first={gameResult[0]}   // 첫 번째 결과 전달
                            second={gameResult[1]}  // 두 번째 결과 전달
                            third={gameResult[2]}   // 세 번째 결과 전달
                        />
                    </div>
                    <Subheading contents={"댓글"} />
                    <CommentBox
                        gameId={gameId}
                    />
                    <div className={styless.commentBox}>
                        {gameComment.map((result, index) => (
                            <Comment
                                content={result.commentContent}
                                time={result.dateTime}
                                userId={result.userId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;