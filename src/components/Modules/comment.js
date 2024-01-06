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
                    <div style={{display: "flex"}}>
                        <div className={styless.comment_nickname}>{userId}</div>
                        <div className={styless.comment_star}>
                        <span className="material-symbols-outlined">star</span>
                        <span>{star}</span>
                    </div>
                    </div>
                    <div className={styless.comment_contents}>{content}</div>
                </div>
                <div className={styless.time_postion}>{timeAgo}</div>
                <div className={styless.star_postion}>

                </div>

                <div className={styless.delete_button}>삭제</div>
            </div>

        </div>
    )
}

export default Comment;


