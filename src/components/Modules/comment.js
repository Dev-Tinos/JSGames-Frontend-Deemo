import styless from "./comment.module.css"
import moment from "moment";
import 'moment/locale/ko'; // 한글 언어 설정을 추가합니다.

function Comment({ content, userId, time }) {
    const timestamp = time;
    moment.locale('ko');
    const timeAgo = moment(timestamp).fromNow();

    console.log(timeAgo);
    return (
        <div className={styless.comment_box}>
            <div className={styless.comment_header}>
                <div className="material-symbols-outlined" style={{ fontSize: '23px', color: '#6CB7F8', marginRight: "10px" }}>
                    account_circle
                </div>
                <div className={styless.comment_nickname}>{userId}</div>
                <div>{timeAgo}</div>
                <div className={styless.delete_button}>삭제</div>
            </div>
            <div className={styless.comment_contents}>{content}</div>
        </div>
    )
}

export default Comment;


