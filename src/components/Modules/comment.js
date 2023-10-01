import Subheading from "../Atoms/subheading"
import CommentBox from "../Atoms/commentBox"
function Comment(){
    return(
        <div>
            <Subheading contents={"댓글"}/>
            <CommentBox />
        </div>
    )
}

export default Comment