import styless from "./comment.module.css"

function Comment({ content, userId }) {
    return (
        <div className={styless.comment_box}>
            <div className={styless.comment_header}>
                <div className="material-symbols-outlined" style={{ fontSize: '23px', color: '#6CB7F8', marginRight: "10px" }}>
                    account_circle
                </div>
                <div className={styless.comment_nickname}>{userId}</div>
                <div className={styless.delete_button}>삭제</div>
            </div>
            <div className={styless.comment_contents}>{content}</div>
        </div>
    )
}

export default Comment;


