import styless from "./commentBox.module.css"
import CommentBtn from "../Atoms/commentBtn"
import CommentInput from "../Atoms/commentInput"
import { useState } from "react";

function CommentBox({ gameId, refreshComments, userId }) {
    const [commentData, setCommentData] = useState("");
    const [isSendingComment, setIsSendingComment] = useState(false); // 댓글 전송 중 여부
    const handleChange = (e) => {
        setCommentData(e.target.value);
    };

    const sendComment = async () => {
        try {
            if (isSendingComment) {
                return
            }
            setIsSendingComment(true); // 댓글 전송 시작

            await fetch(process.env.REACT_APP_SENDCOMMENT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    reviewContent: commentData,
                    gameId: gameId,
                    userId: userId,
                })
            });
            alert("완료!!")

            console.log(gameId)
            console.log(commentData)
            setCommentData("");
            refreshComments();
        } catch (error) {
            console.error("Error sending comment:", error);
        } finally {
            setTimeout(() => {
                setIsSendingComment(false); // 일정 시간 후에 댓글 전송 종료
            }, 1000); // 1초 후에 비활성화 상태 해제
        }

    }
    return (
        <div className={styless.imputBox}>
            <CommentInput
                onChange={handleChange}
                value={commentData}
                disabled={!userId}

            />
            <CommentBtn
                onClick={sendComment}
                disabled={!userId || isSendingComment}
            />
        </div>
    )

}

export default CommentBox