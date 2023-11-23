import Navitage from "../Modules/navigate";
import PlayGame from "../Atoms/playGame";
import GameDescription from "../Modules/gameDescription"
import Comment from "../Modules/comment";
import styless from "./detailPage.module.css"
import Subheading from "../Atoms/subheading";
import TopPosition from "../Modules/topPosition";
import CommentBox from "../Modules/commentBox";
import GameTitle from "../Atoms/gameTitle";

function DetailPage({ gameResult, gameId, gameComment, gameName, description, gmaeSrc, refreshComments, userId, myScore }) {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className={styless.nav_container}>
                    <Navitage />
                </div>
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
                            gameResult={gameResult}
                            userId={userId}
                            myScore={myScore}
                        />
                    </div>
                    <Subheading contents={"댓글"} />
                    <CommentBox
                        gameId={gameId}
                        refreshComments={refreshComments}
                        userId={userId}
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