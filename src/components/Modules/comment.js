import styless from "./comment.module.css"

function Comment({ content }) {
    return (
        <div className={styless.comment_box}>
            <div className={styless.comment_header}>
                <div className="material-symbols-outlined" style={{ fontSize: '23px', color: '#6CB7F8', marginRight: "10px" }}>
                    account_circle
                </div>
                <div className={styless.comment_nickname}>닉네임</div>
                <div className={styless.delete_button}>삭제</div>
            </div>
            <div className={styless.comment_contents}>내용 땃쥐</div>
        </div>
    )
}

export default Comment;


