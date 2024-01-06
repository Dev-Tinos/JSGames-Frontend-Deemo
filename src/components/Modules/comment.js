import styless from "./comment.module.css"
import moment from "moment";
import 'moment/locale/ko';
import ProfileImg from "../Atoms/profileImg";

function Comment({ content, userId, time, star }) {
    const timestamp = time;
    moment.locale('ko');
    const timeAgo = moment(timestamp).fromNow();
    return (
        <div className={styless.comment_box}>
            <div className={styless.comment_header}>
                <div>
                    <ProfileImg />
                </div>
                <div>
                    <div className={styless.comment_nickname}>{userId}</div>
                    <div className={styless.time_postion}>{timeAgo}</div>
                    <div className={styless.delete_button}>삭제</div>
                </div>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    star
                </span>
                <span>
                    {star}
                </span>
            </div>
            <div className={styless.comment_contents}>{content}</div>
        </div>
    )
}

export default Comment;


