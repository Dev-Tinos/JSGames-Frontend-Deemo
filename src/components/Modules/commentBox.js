import styless from "./commentBox.module.css"
import CommentBtn from "../Atoms/commentBtn"
import CommentInput from "../Atoms/commentInput"
import { useState } from "react";

function CommentBox({gameId}) {
    const [commentData, setCommentData] = useState();

    const handleChange = (e) => {
        setCommentData(e.target.value);
    };

    const sendComment = async () => {
        try {
            await fetch(process.env.REACT_APP_SENDCOMMENT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    commentContent: commentData,
                    gameId: gameId,
                    userId: 1,
                })
            });
            // 성공적으로 요청을 보낸 후에 필요한 작업을 수행할 수 있습니다.
        } catch (error) {
            console.error("Error sending comment:", error);
        }
    }
    return (
        <div className={styless.imputBox}>
            <CommentInput
                onChange={handleChange}
                value={commentData}
            />
            <CommentBtn
                onClick={sendComment}
            />
        </div>
    )

}

export default CommentBox