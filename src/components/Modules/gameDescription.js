import ExplanationBox from "../Atoms/explanationBox"
import Subheading from "../Atoms/subheading"

function GameDescription(){
    return (
        <div>
            <Subheading contents={"설명"}/>
            <ExplanationBox />
        </div>
    )
}

export default GameDescription