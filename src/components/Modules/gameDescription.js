import ExplanationBox from "../Atoms/explanationBox"
import Subheading from "../Atoms/subheading"

function GameDescription({description}){
    return (
        <div>
            <Subheading contents={"설명"}/>
            <ExplanationBox description={description}/>
        </div>
    )
}

export default GameDescription