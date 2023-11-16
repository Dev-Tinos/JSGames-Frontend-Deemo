import styless from "./commentBox.module.css"
import CommentBtn from "../Atoms/commentBtn"
import CommentInput from "../Atoms/commentInput"
import { useState } from "react";

function CommentBox({ gameId, refreshComments }) {
    const [commentData, setCommentData] = useState("");

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
            console.log(gameId)
            console.log(commentData)
            setCommentData("");
            refreshComments();
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