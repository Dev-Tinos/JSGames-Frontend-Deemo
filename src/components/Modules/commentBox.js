import styless from "./commentBox.module.css"
import CommentBtn from "../Atoms/commentBtn"
import CommentInput from "../Atoms/commentInput"

function CommentBox(){

    return(
        <div className={styless.imputBox}>
            <CommentInput />
            <CommentBtn />
        </div>
    )

}

export default CommentBox